var Rm = Object.defineProperty;
var E1 = (n) => {
  throw TypeError(n);
};
var Om = (n, e, t) => e in n ? Rm(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Oe = (n, e, t) => Om(n, typeof e != "symbol" ? e + "" : e, t), qm = (n, e, t) => e.has(n) || E1("Cannot " + t);
var S1 = (n, e, t) => e.has(n) ? E1("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var yi = (n, e, t) => (qm(n, e, "access private method"), t);
const {
  SvelteComponent: Pm,
  assign: Hm,
  children: Um,
  claim_element: Vm,
  create_slot: Gm,
  detach: x1,
  element: jm,
  get_all_dirty_from_scope: Wm,
  get_slot_changes: Xm,
  get_spread_update: Ym,
  init: Zm,
  insert_hydration: Km,
  safe_not_equal: Jm,
  set_dynamic_element_data: T1,
  set_style: St,
  toggle_class: p0,
  transition_in: yd,
  transition_out: kd,
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
      i && i.l(u), u.forEach(x1), this.h();
    },
    h() {
      T1(
        /*tag*/
        n[18]
      )(e, s), p0(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), p0(
        e,
        "padded",
        /*padding*/
        n[9]
      ), p0(
        e,
        "flex",
        /*flex*/
        n[0]
      ), p0(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), p0(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), p0(e, "hide-container", !/*explicit_call*/
      n[11] && !/*container*/
      n[12]), St(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[1]
        )
      ), St(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[2]
        )
      ), St(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[3]
        )
      ), St(e, "width", typeof /*width*/
      n[4] == "number" ? `calc(min(${/*width*/
      n[4]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[4]
        )
      )), St(
        e,
        "border-style",
        /*variant*/
        n[7]
      ), St(
        e,
        "overflow",
        /*allow_overflow*/
        n[14] ? (
          /*overflow_behavior*/
          n[15]
        ) : "hidden"
      ), St(
        e,
        "flex-grow",
        /*scale*/
        n[16]
      ), St(e, "min-width", `calc(min(${/*min_width*/
      n[17]}px, 100%))`), St(e, "border-width", "var(--block-border-width)");
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
      ), T1(
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
      ])), p0(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), p0(
        e,
        "padded",
        /*padding*/
        o[9]
      ), p0(
        e,
        "flex",
        /*flex*/
        o[0]
      ), p0(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), p0(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), p0(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), u & /*height*/
      2 && St(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), u & /*min_height*/
      4 && St(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), u & /*max_height*/
      8 && St(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), u & /*width*/
      16 && St(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), u & /*variant*/
      128 && St(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && St(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && St(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), u & /*min_width*/
      131072 && St(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      r || (yd(i, o), r = !0);
    },
    o(o) {
      kd(i, o), r = !1;
    },
    d(o) {
      o && x1(e), i && i.d(o);
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
      e || (yd(t, r), e = !0);
    },
    o(r) {
      kd(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function t2(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: c = [] } = e, { variant: d = "solid" } = e, { border_mode: h = "base" } = e, { padding: p = !0 } = e, { type: _ = "normal" } = e, { test_id: b = void 0 } = e, { explicit_call: D = !1 } = e, { container: y = !0 } = e, { visible: k = !0 } = e, { allow_overflow: w = !0 } = e, { overflow_behavior: E = "auto" } = e, { scale: S = null } = e, { min_width: T = 0 } = e, { flex: C = !1 } = e;
  k || (C = !1);
  let F = _ === "fieldset" ? "fieldset" : "div";
  const B = (I) => {
    if (I !== void 0) {
      if (typeof I == "number")
        return I + "px";
      if (typeof I == "string")
        return I;
    }
  };
  return n.$$set = (I) => {
    "height" in I && t(1, i = I.height), "min_height" in I && t(2, l = I.min_height), "max_height" in I && t(3, s = I.max_height), "width" in I && t(4, o = I.width), "elem_id" in I && t(5, u = I.elem_id), "elem_classes" in I && t(6, c = I.elem_classes), "variant" in I && t(7, d = I.variant), "border_mode" in I && t(8, h = I.border_mode), "padding" in I && t(9, p = I.padding), "type" in I && t(20, _ = I.type), "test_id" in I && t(10, b = I.test_id), "explicit_call" in I && t(11, D = I.explicit_call), "container" in I && t(12, y = I.container), "visible" in I && t(13, k = I.visible), "allow_overflow" in I && t(14, w = I.allow_overflow), "overflow_behavior" in I && t(15, E = I.overflow_behavior), "scale" in I && t(16, S = I.scale), "min_width" in I && t(17, T = I.min_width), "flex" in I && t(0, C = I.flex), "$$scope" in I && t(21, a = I.$$scope);
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
    E,
    S,
    T,
    F,
    B,
    _,
    a,
    r
  ];
}
class Dd extends Pm {
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
], C1 = {
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
      primary: C1[e][t],
      secondary: C1[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: n2,
  append_hydration: a2,
  attr: B0,
  children: F1,
  claim_svg_element: M1,
  detach: ws,
  init: i2,
  insert_hydration: l2,
  noop: ys,
  safe_not_equal: s2,
  svg_element: z1
} = window.__gradio__svelte__internal;
function o2(n) {
  let e, t;
  return {
    c() {
      e = z1("svg"), t = z1("circle"), this.h();
    },
    l(r) {
      e = M1(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var a = F1(e);
      t = M1(a, "circle", { cx: !0, cy: !0, r: !0 }), F1(t).forEach(ws), a.forEach(ws), this.h();
    },
    h() {
      B0(t, "cx", "12"), B0(t, "cy", "12"), B0(t, "r", "10"), B0(e, "xmlns", "http://www.w3.org/2000/svg"), B0(e, "width", "100%"), B0(e, "height", "100%"), B0(e, "viewBox", "0 0 24 24"), B0(e, "stroke-width", "1.5"), B0(e, "stroke-linecap", "round"), B0(e, "stroke-linejoin", "round"), B0(e, "class", "feather feather-circle");
    },
    m(r, a) {
      l2(r, e, a), a2(e, t);
    },
    p: ys,
    i: ys,
    o: ys,
    d(r) {
      r && ws(e);
    }
  };
}
class Xl extends n2 {
  constructor(e) {
    super(), i2(this, e, null, o2, s2, {});
  }
}
const {
  SvelteComponent: u2,
  append_hydration: ks,
  attr: I0,
  children: ki,
  claim_svg_element: Di,
  detach: da,
  init: c2,
  insert_hydration: f2,
  noop: Ds,
  safe_not_equal: h2,
  set_style: Z0,
  svg_element: Ai
} = window.__gradio__svelte__internal;
function d2(n) {
  let e, t, r, a;
  return {
    c() {
      e = Ai("svg"), t = Ai("g"), r = Ai("path"), a = Ai("path"), this.h();
    },
    l(i) {
      e = Di(i, "svg", {
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
      var l = ki(e);
      t = Di(l, "g", { transform: !0 });
      var s = ki(t);
      r = Di(s, "path", { d: !0, style: !0 }), ki(r).forEach(da), s.forEach(da), a = Di(l, "path", { d: !0, style: !0 }), ki(a).forEach(da), l.forEach(da), this.h();
    },
    h() {
      I0(r, "d", "M18,6L6.087,17.913"), Z0(r, "fill", "none"), Z0(r, "fill-rule", "nonzero"), Z0(r, "stroke-width", "2px"), I0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), I0(a, "d", "M4.364,4.364L19.636,19.636"), Z0(a, "fill", "none"), Z0(a, "fill-rule", "nonzero"), Z0(a, "stroke-width", "2px"), I0(e, "width", "100%"), I0(e, "height", "100%"), I0(e, "viewBox", "0 0 24 24"), I0(e, "version", "1.1"), I0(e, "xmlns", "http://www.w3.org/2000/svg"), I0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I0(e, "xml:space", "preserve"), I0(e, "stroke", "currentColor"), Z0(e, "fill-rule", "evenodd"), Z0(e, "clip-rule", "evenodd"), Z0(e, "stroke-linecap", "round"), Z0(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      f2(i, e, l), ks(e, t), ks(t, r), ks(e, a);
    },
    p: Ds,
    i: Ds,
    o: Ds,
    d(i) {
      i && da(e);
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
  attr: Pn,
  children: B1,
  claim_svg_element: I1,
  detach: As,
  init: _2,
  insert_hydration: v2,
  noop: Es,
  safe_not_equal: b2,
  svg_element: L1
} = window.__gradio__svelte__internal;
function w2(n) {
  let e, t;
  return {
    c() {
      e = L1("svg"), t = L1("path"), this.h();
    },
    l(r) {
      e = I1(r, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = B1(e);
      t = I1(a, "path", { d: !0 }), B1(t).forEach(As), a.forEach(As), this.h();
    },
    h() {
      Pn(t, "d", "M5 8l4 4 4-4z"), Pn(e, "class", "dropdown-arrow svelte-145leq6"), Pn(e, "xmlns", "http://www.w3.org/2000/svg"), Pn(e, "width", "100%"), Pn(e, "height", "100%"), Pn(e, "viewBox", "0 0 18 18");
    },
    m(r, a) {
      v2(r, e, a), g2(e, t);
    },
    p: Es,
    i: Es,
    o: Es,
    d(r) {
      r && As(e);
    }
  };
}
class Yl extends p2 {
  constructor(e) {
    super(), _2(this, e, null, w2, b2, {});
  }
}
const {
  SvelteComponent: y2,
  append_hydration: k2,
  attr: Ei,
  children: N1,
  claim_svg_element: R1,
  detach: Ss,
  init: D2,
  insert_hydration: A2,
  noop: xs,
  safe_not_equal: E2,
  svg_element: O1
} = window.__gradio__svelte__internal;
function S2(n) {
  let e, t;
  return {
    c() {
      e = O1("svg"), t = O1("path"), this.h();
    },
    l(r) {
      e = R1(r, "svg", { xmlns: !0, viewBox: !0 });
      var a = N1(e);
      t = R1(a, "path", { fill: !0, d: !0 }), N1(t).forEach(Ss), a.forEach(Ss), this.h();
    },
    h() {
      Ei(t, "fill", "currentColor"), Ei(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ei(e, "xmlns", "http://www.w3.org/2000/svg"), Ei(e, "viewBox", "0 0 24 24");
    },
    m(r, a) {
      A2(r, e, a), k2(e, t);
    },
    p: xs,
    i: xs,
    o: xs,
    d(r) {
      r && Ss(e);
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
  append_hydration: Si,
  attr: st,
  children: ma,
  claim_svg_element: pa,
  detach: Hn,
  init: C2,
  insert_hydration: F2,
  noop: Ts,
  safe_not_equal: M2,
  svg_element: ga
} = window.__gradio__svelte__internal;
function z2(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = ga("svg"), t = ga("path"), r = ga("path"), a = ga("line"), i = ga("line"), this.h();
    },
    l(l) {
      e = pa(l, "svg", {
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
      var s = ma(e);
      t = pa(s, "path", { d: !0 }), ma(t).forEach(Hn), r = pa(s, "path", { d: !0 }), ma(r).forEach(Hn), a = pa(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), ma(a).forEach(Hn), i = pa(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), ma(i).forEach(Hn), s.forEach(Hn), this.h();
    },
    h() {
      st(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), st(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), st(a, "x1", "12"), st(a, "y1", "19"), st(a, "x2", "12"), st(a, "y2", "23"), st(i, "x1", "8"), st(i, "y1", "23"), st(i, "x2", "16"), st(i, "y2", "23"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "2"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round"), st(e, "class", "feather feather-mic");
    },
    m(l, s) {
      F2(l, e, s), Si(e, t), Si(e, r), Si(e, a), Si(e, i);
    },
    p: Ts,
    i: Ts,
    o: Ts,
    d(l) {
      l && Hn(e);
    }
  };
}
class Cn extends T2 {
  constructor(e) {
    super(), C2(this, e, null, z2, M2, {});
  }
}
const {
  SvelteComponent: B2,
  append_hydration: Cs,
  attr: xt,
  children: xi,
  claim_svg_element: Ti,
  detach: _a,
  init: I2,
  insert_hydration: L2,
  noop: Fs,
  safe_not_equal: N2,
  svg_element: Ci
} = window.__gradio__svelte__internal;
function R2(n) {
  let e, t, r, a;
  return {
    c() {
      e = Ci("svg"), t = Ci("path"), r = Ci("circle"), a = Ci("circle"), this.h();
    },
    l(i) {
      e = Ti(i, "svg", {
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
      var l = xi(e);
      t = Ti(l, "path", { d: !0 }), xi(t).forEach(_a), r = Ti(l, "circle", { cx: !0, cy: !0, r: !0 }), xi(r).forEach(_a), a = Ti(l, "circle", { cx: !0, cy: !0, r: !0 }), xi(a).forEach(_a), l.forEach(_a), this.h();
    },
    h() {
      xt(t, "d", "M9 18V5l12-2v13"), xt(r, "cx", "6"), xt(r, "cy", "18"), xt(r, "r", "3"), xt(a, "cx", "18"), xt(a, "cy", "16"), xt(a, "r", "3"), xt(e, "xmlns", "http://www.w3.org/2000/svg"), xt(e, "width", "100%"), xt(e, "height", "100%"), xt(e, "viewBox", "0 0 24 24"), xt(e, "fill", "none"), xt(e, "stroke", "currentColor"), xt(e, "stroke-width", "1.5"), xt(e, "stroke-linecap", "round"), xt(e, "stroke-linejoin", "round"), xt(e, "class", "feather feather-music");
    },
    m(i, l) {
      L2(i, e, l), Cs(e, t), Cs(e, r), Cs(e, a);
    },
    p: Fs,
    i: Fs,
    o: Fs,
    d(i) {
      i && _a(e);
    }
  };
}
class Au extends B2 {
  constructor(e) {
    super(), I2(this, e, null, R2, N2, {});
  }
}
const {
  SvelteComponent: O2,
  append_hydration: q2,
  attr: vt,
  children: q1,
  claim_svg_element: P1,
  detach: Ms,
  init: P2,
  insert_hydration: H2,
  noop: H1,
  safe_not_equal: U2,
  svg_element: U1
} = window.__gradio__svelte__internal;
function V2(n) {
  let e, t, r;
  return {
    c() {
      e = U1("svg"), t = U1("rect"), this.h();
    },
    l(a) {
      e = P1(a, "svg", {
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
      var i = q1(e);
      t = P1(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), q1(t).forEach(Ms), i.forEach(Ms), this.h();
    },
    h() {
      vt(t, "x", "3"), vt(t, "y", "3"), vt(t, "width", "18"), vt(t, "height", "18"), vt(t, "rx", "2"), vt(t, "ry", "2"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(
        e,
        "fill",
        /*fill*/
        n[0]
      ), vt(e, "stroke", "currentColor"), vt(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round"), vt(e, "class", "feather feather-square");
    },
    m(a, i) {
      H2(a, e, i), q2(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && vt(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && vt(e, "stroke-width", r);
    },
    i: H1,
    o: H1,
    d(a) {
      a && Ms(e);
    }
  };
}
function G2(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
let Ad = class extends O2 {
  constructor(e) {
    super(), P2(this, e, G2, V2, U2, { fill: 0, stroke_width: 1 });
  }
};
const {
  SvelteComponent: j2,
  append_hydration: zs,
  attr: Nt,
  children: Fi,
  claim_svg_element: Mi,
  detach: va,
  init: W2,
  insert_hydration: X2,
  noop: Bs,
  safe_not_equal: Y2,
  svg_element: zi
} = window.__gradio__svelte__internal;
function Z2(n) {
  let e, t, r, a;
  return {
    c() {
      e = zi("svg"), t = zi("path"), r = zi("polyline"), a = zi("line"), this.h();
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
      t = Mi(l, "path", { d: !0 }), Fi(t).forEach(va), r = Mi(l, "polyline", { points: !0 }), Fi(r).forEach(va), a = Mi(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Fi(a).forEach(va), l.forEach(va), this.h();
    },
    h() {
      Nt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Nt(r, "points", "17 8 12 3 7 8"), Nt(a, "x1", "12"), Nt(a, "y1", "3"), Nt(a, "x2", "12"), Nt(a, "y2", "15"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "width", "90%"), Nt(e, "height", "90%"), Nt(e, "viewBox", "0 0 24 24"), Nt(e, "fill", "none"), Nt(e, "stroke", "currentColor"), Nt(e, "stroke-width", "2"), Nt(e, "stroke-linecap", "round"), Nt(e, "stroke-linejoin", "round"), Nt(e, "class", "feather feather-upload");
    },
    m(i, l) {
      X2(i, e, l), zs(e, t), zs(e, r), zs(e, a);
    },
    p: Bs,
    i: Bs,
    o: Bs,
    d(i) {
      i && va(e);
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
  append_hydration: V1,
  attr: Tt,
  children: Is,
  claim_svg_element: Ls,
  detach: Bi,
  init: Q2,
  insert_hydration: $2,
  noop: Ns,
  safe_not_equal: e5,
  svg_element: Rs
} = window.__gradio__svelte__internal;
function t5(n) {
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
      t = Ls(i, "polygon", { points: !0 }), Is(t).forEach(Bi), r = Ls(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Is(r).forEach(Bi), i.forEach(Bi), this.h();
    },
    h() {
      Tt(t, "points", "23 7 16 12 23 17 23 7"), Tt(r, "x", "1"), Tt(r, "y", "5"), Tt(r, "width", "15"), Tt(r, "height", "14"), Tt(r, "rx", "2"), Tt(r, "ry", "2"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24"), Tt(e, "fill", "none"), Tt(e, "stroke", "currentColor"), Tt(e, "stroke-width", "1.5"), Tt(e, "stroke-linecap", "round"), Tt(e, "stroke-linejoin", "round"), Tt(e, "class", "feather feather-video");
    },
    m(a, i) {
      $2(a, e, i), V1(e, t), V1(e, r);
    },
    p: Ns,
    i: Ns,
    o: Ns,
    d(a) {
      a && Bi(e);
    }
  };
}
class Eu extends J2 {
  constructor(e) {
    super(), Q2(this, e, null, t5, e5, {});
  }
}
const {
  SvelteComponent: r5,
  append_hydration: ba,
  attr: bt,
  children: wa,
  claim_svg_element: ya,
  claim_text: n5,
  detach: Un,
  init: a5,
  insert_hydration: i5,
  noop: Os,
  safe_not_equal: l5,
  svg_element: ka,
  text: s5
} = window.__gradio__svelte__internal;
function o5(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = ka("svg"), t = ka("title"), r = s5("High volume"), a = ka("path"), i = ka("path"), l = ka("path"), this.h();
    },
    l(s) {
      e = ya(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        stroke: !0,
        xmlns: !0,
        color: !0
      });
      var o = wa(e);
      t = ya(o, "title", {});
      var u = wa(t);
      r = n5(u, "High volume"), u.forEach(Un), a = ya(o, "path", { d: !0, "stroke-width": !0 }), wa(a).forEach(Un), i = ya(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), wa(i).forEach(Un), l = ya(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), wa(l).forEach(Un), o.forEach(Un), this.h();
    },
    h() {
      bt(a, "d", "M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"), bt(a, "stroke-width", "1.5"), bt(i, "d", "M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5"), bt(i, "stroke-width", "1.5"), bt(i, "stroke-linecap", "round"), bt(i, "stroke-linejoin", "round"), bt(l, "d", "M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5"), bt(l, "stroke-width", "1.5"), bt(l, "stroke-linecap", "round"), bt(l, "stroke-linejoin", "round"), bt(e, "width", "100%"), bt(e, "height", "100%"), bt(e, "viewBox", "0 0 24 24"), bt(e, "stroke-width", "1.5"), bt(e, "fill", "none"), bt(e, "stroke", "currentColor"), bt(e, "xmlns", "http://www.w3.org/2000/svg"), bt(e, "color", "currentColor");
    },
    m(s, o) {
      i5(s, e, o), ba(e, t), ba(t, r), ba(e, a), ba(e, i), ba(e, l);
    },
    p: Os,
    i: Os,
    o: Os,
    d(s) {
      s && Un(e);
    }
  };
}
class El extends r5 {
  constructor(e) {
    super(), a5(this, e, null, o5, l5, {});
  }
}
const {
  SvelteComponent: u5,
  append_hydration: Ur,
  attr: ht,
  children: Vr,
  claim_svg_element: Gr,
  claim_text: c5,
  detach: br,
  init: f5,
  insert_hydration: h5,
  noop: qs,
  safe_not_equal: d5,
  svg_element: jr,
  text: m5
} = window.__gradio__svelte__internal;
function p5(n) {
  let e, t, r, a, i, l, s, o, u;
  return {
    c() {
      e = jr("svg"), t = jr("title"), r = m5("Muted volume"), a = jr("g"), i = jr("path"), l = jr("path"), s = jr("defs"), o = jr("clipPath"), u = jr("rect"), this.h();
    },
    l(c) {
      e = Gr(c, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        xmlns: !0,
        stroke: !0,
        color: !0
      });
      var d = Vr(e);
      t = Gr(d, "title", {});
      var h = Vr(t);
      r = c5(h, "Muted volume"), h.forEach(br), a = Gr(d, "g", { "clip-path": !0 });
      var p = Vr(a);
      i = Gr(p, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Vr(i).forEach(br), l = Gr(p, "path", { d: !0, "stroke-width": !0 }), Vr(l).forEach(br), p.forEach(br), s = Gr(d, "defs", {});
      var _ = Vr(s);
      o = Gr(_, "clipPath", { id: !0 });
      var b = Vr(o);
      u = Gr(b, "rect", { width: !0, height: !0, fill: !0 }), Vr(u).forEach(br), b.forEach(br), _.forEach(br), d.forEach(br), this.h();
    },
    h() {
      ht(i, "d", "M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14"), ht(i, "stroke-width", "1.5"), ht(i, "stroke-linecap", "round"), ht(i, "stroke-linejoin", "round"), ht(l, "d", "M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z"), ht(l, "stroke-width", "1.5"), ht(a, "clip-path", "url(#clip0_3173_16686)"), ht(u, "width", "24"), ht(u, "height", "24"), ht(u, "fill", "white"), ht(o, "id", "clip0_3173_16686"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "stroke-width", "1.5"), ht(e, "fill", "none"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "stroke", "currentColor"), ht(e, "color", "currentColor");
    },
    m(c, d) {
      h5(c, e, d), Ur(e, t), Ur(t, r), Ur(e, a), Ur(a, i), Ur(a, l), Ur(e, s), Ur(s, o), Ur(o, u);
    },
    p: qs,
    i: qs,
    o: qs,
    d(c) {
      c && br(e);
    }
  };
}
class Sl extends u5 {
  constructor(e) {
    super(), f5(this, e, null, p5, d5, {});
  }
}
const {
  SvelteComponent: g5,
  append_hydration: G1,
  attr: Wr,
  children: Ps,
  claim_svg_element: Hs,
  detach: Ii,
  init: _5,
  insert_hydration: v5,
  noop: Us,
  safe_not_equal: b5,
  svg_element: Vs
} = window.__gradio__svelte__internal;
function w5(n) {
  let e, t, r;
  return {
    c() {
      e = Vs("svg"), t = Vs("path"), r = Vs("path"), this.h();
    },
    l(a) {
      e = Hs(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var i = Ps(e);
      t = Hs(i, "path", { fill: !0, d: !0 }), Ps(t).forEach(Ii), r = Hs(i, "path", { fill: !0, d: !0 }), Ps(r).forEach(Ii), i.forEach(Ii), this.h();
    },
    h() {
      Wr(t, "fill", "currentColor"), Wr(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Wr(r, "fill", "currentColor"), Wr(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Wr(e, "xmlns", "http://www.w3.org/2000/svg"), Wr(e, "width", "100%"), Wr(e, "height", "100%"), Wr(e, "viewBox", "0 0 24 24");
    },
    m(a, i) {
      v5(a, e, i), G1(e, t), G1(e, r);
    },
    p: Us,
    i: Us,
    o: Us,
    d(a) {
      a && Ii(e);
    }
  };
}
let j1 = class extends g5 {
  constructor(e) {
    super(), _5(this, e, null, w5, b5, {});
  }
};
const {
  SvelteComponent: y5,
  append_hydration: W1,
  attr: wt,
  children: Gs,
  claim_svg_element: js,
  detach: Li,
  init: k5,
  insert_hydration: D5,
  noop: Ws,
  safe_not_equal: A5,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function E5(n) {
  let e, t, r;
  return {
    c() {
      e = Xs("svg"), t = Xs("circle"), r = Xs("animateTransform"), this.h();
    },
    l(a) {
      e = js(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0
      });
      var i = Gs(e);
      t = js(i, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0
      });
      var l = Gs(t);
      r = js(l, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        repeatCount: !0
      }), Gs(r).forEach(Li), l.forEach(Li), i.forEach(Li), this.h();
    },
    h() {
      wt(r, "attributeName", "transform"), wt(r, "type", "rotate"), wt(r, "from", "0 25 25"), wt(r, "to", "360 25 25"), wt(r, "repeatCount", "indefinite"), wt(t, "cx", "25"), wt(t, "cy", "25"), wt(t, "r", "20"), wt(t, "fill", "none"), wt(t, "stroke-width", "3.0"), wt(t, "stroke-linecap", "round"), wt(t, "stroke-dasharray", "94.2477796076938 94.2477796076938"), wt(t, "stroke-dashoffset", "0"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 50 50"), wt(e, "class", "svelte-pb9pol");
    },
    m(a, i) {
      D5(a, e, i), W1(e, t), W1(t, r);
    },
    p: Ws,
    i: Ws,
    o: Ws,
    d(a) {
      a && Li(e);
    }
  };
}
class Su extends y5 {
  constructor(e) {
    super(), k5(this, e, null, E5, A5, {});
  }
}
class u0 {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new u0(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class S0 {
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
    return new S0(t, u0.range(this, e));
  }
}
class G {
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
    return d.name = "ParseError", d.__proto__ = G.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
G.prototype.__proto__ = Error.prototype;
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
var Ed = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, B5 = function(e) {
  var t = Ed(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, I5 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, L5 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, re = {
  contains: S5,
  deflt: x5,
  escape: z5,
  hyphenate: C5,
  getBaseElem: Ed,
  isCharacterBox: B5,
  protocolFromUrl: L5
}, gl = {
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
class xu {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in gl)
      if (gl.hasOwnProperty(t)) {
        var r = gl[t];
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
        throw new G("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
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
      var t = re.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class Xr {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return $0[R5[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return $0[O5[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return $0[q5[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return $0[P5[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return $0[H5[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return $0[U5[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Tu = 0, xl = 1, ra = 2, Tr = 3, Xa = 4, k0 = 5, sa = 6, Vt = 7, $0 = [new Xr(Tu, 0, !1), new Xr(xl, 0, !0), new Xr(ra, 1, !1), new Xr(Tr, 1, !0), new Xr(Xa, 2, !1), new Xr(k0, 2, !0), new Xr(sa, 3, !1), new Xr(Vt, 3, !0)], R5 = [Xa, k0, Xa, k0, sa, Vt, sa, Vt], O5 = [k0, k0, k0, k0, Vt, Vt, Vt, Vt], q5 = [ra, Tr, Xa, k0, sa, Vt, sa, Vt], P5 = [Tr, Tr, k0, k0, Vt, Vt, Vt, Vt], H5 = [xl, xl, Tr, Tr, k0, k0, Vt, Vt], U5 = [Tu, xl, ra, Tr, ra, Tr, ra, Tr], ae = {
  DISPLAY: $0[Tu],
  TEXT: $0[ra],
  SCRIPT: $0[Xa],
  SCRIPTSCRIPT: $0[sa]
}, Xo = [{
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
  for (var e = 0; e < Xo.length; e++)
    for (var t = Xo[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var _l = [];
Xo.forEach((n) => n.blocks.forEach((e) => _l.push(...e)));
function Sd(n) {
  for (var e = 0; e < _l.length; e += 2)
    if (n >= _l[e] && n <= _l[e + 1])
      return !0;
  return !1;
}
var Vn = 80, G5 = function(e, t) {
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
      a = G5(t, Vn);
      break;
    case "sqrtSize1":
      a = j5(t, Vn);
      break;
    case "sqrtSize2":
      a = W5(t, Vn);
      break;
    case "sqrtSize3":
      a = X5(t, Vn);
      break;
    case "sqrtSize4":
      a = Y5(t, Vn);
      break;
    case "sqrtTall":
      a = K5(t, Vn, r);
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
}, X1 = {
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
class ti {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return re.contains(this.classes, e);
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
var rr = {
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
}, Ni = {
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
}, Y1 = {
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
  rr[n] = e;
}
function Cu(n, e, t) {
  if (!rr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = rr[e][r];
  if (!a && n[0] in Y1 && (r = Y1[n[0]].charCodeAt(0), a = rr[e][r]), !a && t === "text" && Sd(r) && (a = rr[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Ys = {};
function t3(n) {
  var e;
  if (n >= 5 ? e = 0 : n >= 3 ? e = 1 : e = 2, !Ys[e]) {
    var t = Ys[e] = {
      cssEmPerMu: Ni.quad[e] / 18
    };
    for (var r in Ni)
      Ni.hasOwnProperty(r) && (t[r] = Ni[r][e]);
  }
  return Ys[e];
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
], Z1 = [
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
], K1 = function(e, t) {
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
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Dr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Z1[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
      size: K1(this.textSize, e)
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
      sizeMultiplier: Z1[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = K1(Dr.BASESIZE, e);
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
var Yo = {
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
}, xd = function(e) {
  return typeof e != "string" && (e = e.unit), e in Yo || e in n3 || e === "ex";
}, Ye = function(e, t) {
  var r;
  if (e.unit in Yo)
    r = Yo[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, X = function(e) {
  return +e.toFixed(4) + "em";
}, on = function(e) {
  return e.filter((t) => t).join(" ");
}, Td = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Cd = function(e) {
  var t = document.createElement(e);
  t.className = on(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Fd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + re.escape(on(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += re.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + re.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + re.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class ri {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Td.call(this, e, r, a), this.children = t || [];
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
    return re.contains(this.classes, e);
  }
  toNode() {
    return Cd.call(this, "span");
  }
  toMarkup() {
    return Fd.call(this, "span");
  }
}
class Fu {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Td.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  toNode() {
    return Cd.call(this, "a");
  }
  toMarkup() {
    return Fd.call(this, "a");
  }
}
class a3 {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + re.escape(this.src) + '"' + (' alt="' + re.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += re.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + re.escape(t) + '"'), e += "'/>", e;
  }
}
var i3 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class x0 {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var u = V5(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = i3[this.text]);
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = X(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = on(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += re.escape(on(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += re.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + re.escape(r) + '"');
    var i = re.escape(this.text);
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + re.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class un {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", X1[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + re.escape(this.alternate) + '"/>' : '<path d="' + re.escape(X1[this.pathName]) + '"/>';
  }
}
class Zo {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + re.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function J1(n) {
  if (n instanceof x0)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function l3(n) {
  if (n instanceof ri)
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
}, Ne = {
  math: {},
  text: {}
};
function f(n, e, t, r, a, i) {
  Ne[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (Ne[n][r] = Ne[n][a]);
}
var m = "math", H = "text", g = "main", A = "ams", Ge = "accent-token", J = "bin", Kt = "close", oa = "inner", ne = "mathord", ct = "op-token", d0 = "open", Zl = "punct", x = "rel", Pr = "spacing", M = "textord";
f(m, g, x, "≡", "\\equiv", !0);
f(m, g, x, "≺", "\\prec", !0);
f(m, g, x, "≻", "\\succ", !0);
f(m, g, x, "∼", "\\sim", !0);
f(m, g, x, "⊥", "\\perp");
f(m, g, x, "⪯", "\\preceq", !0);
f(m, g, x, "⪰", "\\succeq", !0);
f(m, g, x, "≃", "\\simeq", !0);
f(m, g, x, "∣", "\\mid", !0);
f(m, g, x, "≪", "\\ll", !0);
f(m, g, x, "≫", "\\gg", !0);
f(m, g, x, "≍", "\\asymp", !0);
f(m, g, x, "∥", "\\parallel");
f(m, g, x, "⋈", "\\bowtie", !0);
f(m, g, x, "⌣", "\\smile", !0);
f(m, g, x, "⊑", "\\sqsubseteq", !0);
f(m, g, x, "⊒", "\\sqsupseteq", !0);
f(m, g, x, "≐", "\\doteq", !0);
f(m, g, x, "⌢", "\\frown", !0);
f(m, g, x, "∋", "\\ni", !0);
f(m, g, x, "∝", "\\propto", !0);
f(m, g, x, "⊢", "\\vdash", !0);
f(m, g, x, "⊣", "\\dashv", !0);
f(m, g, x, "∋", "\\owns");
f(m, g, Zl, ".", "\\ldotp");
f(m, g, Zl, "⋅", "\\cdotp");
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
f(m, g, Kt, "⎱", "\\rmoustache", !0);
f(m, g, d0, "⎰", "\\lmoustache", !0);
f(m, g, Kt, "⟯", "\\rgroup", !0);
f(m, g, d0, "⟮", "\\lgroup", !0);
f(m, g, J, "∓", "\\mp", !0);
f(m, g, J, "⊖", "\\ominus", !0);
f(m, g, J, "⊎", "\\uplus", !0);
f(m, g, J, "⊓", "\\sqcap", !0);
f(m, g, J, "∗", "\\ast");
f(m, g, J, "⊔", "\\sqcup", !0);
f(m, g, J, "◯", "\\bigcirc", !0);
f(m, g, J, "∙", "\\bullet", !0);
f(m, g, J, "‡", "\\ddagger");
f(m, g, J, "≀", "\\wr", !0);
f(m, g, J, "⨿", "\\amalg");
f(m, g, J, "&", "\\And");
f(m, g, x, "⟵", "\\longleftarrow", !0);
f(m, g, x, "⇐", "\\Leftarrow", !0);
f(m, g, x, "⟸", "\\Longleftarrow", !0);
f(m, g, x, "⟶", "\\longrightarrow", !0);
f(m, g, x, "⇒", "\\Rightarrow", !0);
f(m, g, x, "⟹", "\\Longrightarrow", !0);
f(m, g, x, "↔", "\\leftrightarrow", !0);
f(m, g, x, "⟷", "\\longleftrightarrow", !0);
f(m, g, x, "⇔", "\\Leftrightarrow", !0);
f(m, g, x, "⟺", "\\Longleftrightarrow", !0);
f(m, g, x, "↦", "\\mapsto", !0);
f(m, g, x, "⟼", "\\longmapsto", !0);
f(m, g, x, "↗", "\\nearrow", !0);
f(m, g, x, "↩", "\\hookleftarrow", !0);
f(m, g, x, "↪", "\\hookrightarrow", !0);
f(m, g, x, "↘", "\\searrow", !0);
f(m, g, x, "↼", "\\leftharpoonup", !0);
f(m, g, x, "⇀", "\\rightharpoonup", !0);
f(m, g, x, "↙", "\\swarrow", !0);
f(m, g, x, "↽", "\\leftharpoondown", !0);
f(m, g, x, "⇁", "\\rightharpoondown", !0);
f(m, g, x, "↖", "\\nwarrow", !0);
f(m, g, x, "⇌", "\\rightleftharpoons", !0);
f(m, A, x, "≮", "\\nless", !0);
f(m, A, x, "", "\\@nleqslant");
f(m, A, x, "", "\\@nleqq");
f(m, A, x, "⪇", "\\lneq", !0);
f(m, A, x, "≨", "\\lneqq", !0);
f(m, A, x, "", "\\@lvertneqq");
f(m, A, x, "⋦", "\\lnsim", !0);
f(m, A, x, "⪉", "\\lnapprox", !0);
f(m, A, x, "⊀", "\\nprec", !0);
f(m, A, x, "⋠", "\\npreceq", !0);
f(m, A, x, "⋨", "\\precnsim", !0);
f(m, A, x, "⪹", "\\precnapprox", !0);
f(m, A, x, "≁", "\\nsim", !0);
f(m, A, x, "", "\\@nshortmid");
f(m, A, x, "∤", "\\nmid", !0);
f(m, A, x, "⊬", "\\nvdash", !0);
f(m, A, x, "⊭", "\\nvDash", !0);
f(m, A, x, "⋪", "\\ntriangleleft");
f(m, A, x, "⋬", "\\ntrianglelefteq", !0);
f(m, A, x, "⊊", "\\subsetneq", !0);
f(m, A, x, "", "\\@varsubsetneq");
f(m, A, x, "⫋", "\\subsetneqq", !0);
f(m, A, x, "", "\\@varsubsetneqq");
f(m, A, x, "≯", "\\ngtr", !0);
f(m, A, x, "", "\\@ngeqslant");
f(m, A, x, "", "\\@ngeqq");
f(m, A, x, "⪈", "\\gneq", !0);
f(m, A, x, "≩", "\\gneqq", !0);
f(m, A, x, "", "\\@gvertneqq");
f(m, A, x, "⋧", "\\gnsim", !0);
f(m, A, x, "⪊", "\\gnapprox", !0);
f(m, A, x, "⊁", "\\nsucc", !0);
f(m, A, x, "⋡", "\\nsucceq", !0);
f(m, A, x, "⋩", "\\succnsim", !0);
f(m, A, x, "⪺", "\\succnapprox", !0);
f(m, A, x, "≆", "\\ncong", !0);
f(m, A, x, "", "\\@nshortparallel");
f(m, A, x, "∦", "\\nparallel", !0);
f(m, A, x, "⊯", "\\nVDash", !0);
f(m, A, x, "⋫", "\\ntriangleright");
f(m, A, x, "⋭", "\\ntrianglerighteq", !0);
f(m, A, x, "", "\\@nsupseteqq");
f(m, A, x, "⊋", "\\supsetneq", !0);
f(m, A, x, "", "\\@varsupsetneq");
f(m, A, x, "⫌", "\\supsetneqq", !0);
f(m, A, x, "", "\\@varsupsetneqq");
f(m, A, x, "⊮", "\\nVdash", !0);
f(m, A, x, "⪵", "\\precneqq", !0);
f(m, A, x, "⪶", "\\succneqq", !0);
f(m, A, x, "", "\\@nsubseteqq");
f(m, A, J, "⊴", "\\unlhd");
f(m, A, J, "⊵", "\\unrhd");
f(m, A, x, "↚", "\\nleftarrow", !0);
f(m, A, x, "↛", "\\nrightarrow", !0);
f(m, A, x, "⇍", "\\nLeftarrow", !0);
f(m, A, x, "⇏", "\\nRightarrow", !0);
f(m, A, x, "↮", "\\nleftrightarrow", !0);
f(m, A, x, "⇎", "\\nLeftrightarrow", !0);
f(m, A, x, "△", "\\vartriangle");
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
f(m, A, d0, "┌", "\\@ulcorner", !0);
f(m, A, Kt, "┐", "\\@urcorner", !0);
f(m, A, d0, "└", "\\@llcorner", !0);
f(m, A, Kt, "┘", "\\@lrcorner", !0);
f(m, A, x, "≦", "\\leqq", !0);
f(m, A, x, "⩽", "\\leqslant", !0);
f(m, A, x, "⪕", "\\eqslantless", !0);
f(m, A, x, "≲", "\\lesssim", !0);
f(m, A, x, "⪅", "\\lessapprox", !0);
f(m, A, x, "≊", "\\approxeq", !0);
f(m, A, J, "⋖", "\\lessdot");
f(m, A, x, "⋘", "\\lll", !0);
f(m, A, x, "≶", "\\lessgtr", !0);
f(m, A, x, "⋚", "\\lesseqgtr", !0);
f(m, A, x, "⪋", "\\lesseqqgtr", !0);
f(m, A, x, "≑", "\\doteqdot");
f(m, A, x, "≓", "\\risingdotseq", !0);
f(m, A, x, "≒", "\\fallingdotseq", !0);
f(m, A, x, "∽", "\\backsim", !0);
f(m, A, x, "⋍", "\\backsimeq", !0);
f(m, A, x, "⫅", "\\subseteqq", !0);
f(m, A, x, "⋐", "\\Subset", !0);
f(m, A, x, "⊏", "\\sqsubset", !0);
f(m, A, x, "≼", "\\preccurlyeq", !0);
f(m, A, x, "⋞", "\\curlyeqprec", !0);
f(m, A, x, "≾", "\\precsim", !0);
f(m, A, x, "⪷", "\\precapprox", !0);
f(m, A, x, "⊲", "\\vartriangleleft");
f(m, A, x, "⊴", "\\trianglelefteq");
f(m, A, x, "⊨", "\\vDash", !0);
f(m, A, x, "⊪", "\\Vvdash", !0);
f(m, A, x, "⌣", "\\smallsmile");
f(m, A, x, "⌢", "\\smallfrown");
f(m, A, x, "≏", "\\bumpeq", !0);
f(m, A, x, "≎", "\\Bumpeq", !0);
f(m, A, x, "≧", "\\geqq", !0);
f(m, A, x, "⩾", "\\geqslant", !0);
f(m, A, x, "⪖", "\\eqslantgtr", !0);
f(m, A, x, "≳", "\\gtrsim", !0);
f(m, A, x, "⪆", "\\gtrapprox", !0);
f(m, A, J, "⋗", "\\gtrdot");
f(m, A, x, "⋙", "\\ggg", !0);
f(m, A, x, "≷", "\\gtrless", !0);
f(m, A, x, "⋛", "\\gtreqless", !0);
f(m, A, x, "⪌", "\\gtreqqless", !0);
f(m, A, x, "≖", "\\eqcirc", !0);
f(m, A, x, "≗", "\\circeq", !0);
f(m, A, x, "≜", "\\triangleq", !0);
f(m, A, x, "∼", "\\thicksim");
f(m, A, x, "≈", "\\thickapprox");
f(m, A, x, "⫆", "\\supseteqq", !0);
f(m, A, x, "⋑", "\\Supset", !0);
f(m, A, x, "⊐", "\\sqsupset", !0);
f(m, A, x, "≽", "\\succcurlyeq", !0);
f(m, A, x, "⋟", "\\curlyeqsucc", !0);
f(m, A, x, "≿", "\\succsim", !0);
f(m, A, x, "⪸", "\\succapprox", !0);
f(m, A, x, "⊳", "\\vartriangleright");
f(m, A, x, "⊵", "\\trianglerighteq");
f(m, A, x, "⊩", "\\Vdash", !0);
f(m, A, x, "∣", "\\shortmid");
f(m, A, x, "∥", "\\shortparallel");
f(m, A, x, "≬", "\\between", !0);
f(m, A, x, "⋔", "\\pitchfork", !0);
f(m, A, x, "∝", "\\varpropto");
f(m, A, x, "◀", "\\blacktriangleleft");
f(m, A, x, "∴", "\\therefore", !0);
f(m, A, x, "∍", "\\backepsilon");
f(m, A, x, "▶", "\\blacktriangleright");
f(m, A, x, "∵", "\\because", !0);
f(m, A, x, "⋘", "\\llless");
f(m, A, x, "⋙", "\\gggtr");
f(m, A, J, "⊲", "\\lhd");
f(m, A, J, "⊳", "\\rhd");
f(m, A, x, "≂", "\\eqsim", !0);
f(m, g, x, "⋈", "\\Join");
f(m, A, x, "≑", "\\Doteq", !0);
f(m, A, J, "∔", "\\dotplus", !0);
f(m, A, J, "∖", "\\smallsetminus");
f(m, A, J, "⋒", "\\Cap", !0);
f(m, A, J, "⋓", "\\Cup", !0);
f(m, A, J, "⩞", "\\doublebarwedge", !0);
f(m, A, J, "⊟", "\\boxminus", !0);
f(m, A, J, "⊞", "\\boxplus", !0);
f(m, A, J, "⋇", "\\divideontimes", !0);
f(m, A, J, "⋉", "\\ltimes", !0);
f(m, A, J, "⋊", "\\rtimes", !0);
f(m, A, J, "⋋", "\\leftthreetimes", !0);
f(m, A, J, "⋌", "\\rightthreetimes", !0);
f(m, A, J, "⋏", "\\curlywedge", !0);
f(m, A, J, "⋎", "\\curlyvee", !0);
f(m, A, J, "⊝", "\\circleddash", !0);
f(m, A, J, "⊛", "\\circledast", !0);
f(m, A, J, "⋅", "\\centerdot");
f(m, A, J, "⊺", "\\intercal", !0);
f(m, A, J, "⋒", "\\doublecap");
f(m, A, J, "⋓", "\\doublecup");
f(m, A, J, "⊠", "\\boxtimes", !0);
f(m, A, x, "⇢", "\\dashrightarrow", !0);
f(m, A, x, "⇠", "\\dashleftarrow", !0);
f(m, A, x, "⇇", "\\leftleftarrows", !0);
f(m, A, x, "⇆", "\\leftrightarrows", !0);
f(m, A, x, "⇚", "\\Lleftarrow", !0);
f(m, A, x, "↞", "\\twoheadleftarrow", !0);
f(m, A, x, "↢", "\\leftarrowtail", !0);
f(m, A, x, "↫", "\\looparrowleft", !0);
f(m, A, x, "⇋", "\\leftrightharpoons", !0);
f(m, A, x, "↶", "\\curvearrowleft", !0);
f(m, A, x, "↺", "\\circlearrowleft", !0);
f(m, A, x, "↰", "\\Lsh", !0);
f(m, A, x, "⇈", "\\upuparrows", !0);
f(m, A, x, "↿", "\\upharpoonleft", !0);
f(m, A, x, "⇃", "\\downharpoonleft", !0);
f(m, g, x, "⊶", "\\origof", !0);
f(m, g, x, "⊷", "\\imageof", !0);
f(m, A, x, "⊸", "\\multimap", !0);
f(m, A, x, "↭", "\\leftrightsquigarrow", !0);
f(m, A, x, "⇉", "\\rightrightarrows", !0);
f(m, A, x, "⇄", "\\rightleftarrows", !0);
f(m, A, x, "↠", "\\twoheadrightarrow", !0);
f(m, A, x, "↣", "\\rightarrowtail", !0);
f(m, A, x, "↬", "\\looparrowright", !0);
f(m, A, x, "↷", "\\curvearrowright", !0);
f(m, A, x, "↻", "\\circlearrowright", !0);
f(m, A, x, "↱", "\\Rsh", !0);
f(m, A, x, "⇊", "\\downdownarrows", !0);
f(m, A, x, "↾", "\\upharpoonright", !0);
f(m, A, x, "⇂", "\\downharpoonright", !0);
f(m, A, x, "⇝", "\\rightsquigarrow", !0);
f(m, A, x, "⇝", "\\leadsto");
f(m, A, x, "⇛", "\\Rrightarrow", !0);
f(m, A, x, "↾", "\\restriction");
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
f(m, g, ne, "α", "\\alpha", !0);
f(m, g, ne, "β", "\\beta", !0);
f(m, g, ne, "γ", "\\gamma", !0);
f(m, g, ne, "δ", "\\delta", !0);
f(m, g, ne, "ϵ", "\\epsilon", !0);
f(m, g, ne, "ζ", "\\zeta", !0);
f(m, g, ne, "η", "\\eta", !0);
f(m, g, ne, "θ", "\\theta", !0);
f(m, g, ne, "ι", "\\iota", !0);
f(m, g, ne, "κ", "\\kappa", !0);
f(m, g, ne, "λ", "\\lambda", !0);
f(m, g, ne, "μ", "\\mu", !0);
f(m, g, ne, "ν", "\\nu", !0);
f(m, g, ne, "ξ", "\\xi", !0);
f(m, g, ne, "ο", "\\omicron", !0);
f(m, g, ne, "π", "\\pi", !0);
f(m, g, ne, "ρ", "\\rho", !0);
f(m, g, ne, "σ", "\\sigma", !0);
f(m, g, ne, "τ", "\\tau", !0);
f(m, g, ne, "υ", "\\upsilon", !0);
f(m, g, ne, "ϕ", "\\phi", !0);
f(m, g, ne, "χ", "\\chi", !0);
f(m, g, ne, "ψ", "\\psi", !0);
f(m, g, ne, "ω", "\\omega", !0);
f(m, g, ne, "ε", "\\varepsilon", !0);
f(m, g, ne, "ϑ", "\\vartheta", !0);
f(m, g, ne, "ϖ", "\\varpi", !0);
f(m, g, ne, "ϱ", "\\varrho", !0);
f(m, g, ne, "ς", "\\varsigma", !0);
f(m, g, ne, "φ", "\\varphi", !0);
f(m, g, J, "∗", "*", !0);
f(m, g, J, "+", "+");
f(m, g, J, "−", "-", !0);
f(m, g, J, "⋅", "\\cdot", !0);
f(m, g, J, "∘", "\\circ", !0);
f(m, g, J, "÷", "\\div", !0);
f(m, g, J, "±", "\\pm", !0);
f(m, g, J, "×", "\\times", !0);
f(m, g, J, "∩", "\\cap", !0);
f(m, g, J, "∪", "\\cup", !0);
f(m, g, J, "∖", "\\setminus", !0);
f(m, g, J, "∧", "\\land");
f(m, g, J, "∨", "\\lor");
f(m, g, J, "∧", "\\wedge", !0);
f(m, g, J, "∨", "\\vee", !0);
f(m, g, M, "√", "\\surd");
f(m, g, d0, "⟨", "\\langle", !0);
f(m, g, d0, "∣", "\\lvert");
f(m, g, d0, "∥", "\\lVert");
f(m, g, Kt, "?", "?");
f(m, g, Kt, "!", "!");
f(m, g, Kt, "⟩", "\\rangle", !0);
f(m, g, Kt, "∣", "\\rvert");
f(m, g, Kt, "∥", "\\rVert");
f(m, g, x, "=", "=");
f(m, g, x, ":", ":");
f(m, g, x, "≈", "\\approx", !0);
f(m, g, x, "≅", "\\cong", !0);
f(m, g, x, "≥", "\\ge");
f(m, g, x, "≥", "\\geq", !0);
f(m, g, x, "←", "\\gets");
f(m, g, x, ">", "\\gt", !0);
f(m, g, x, "∈", "\\in", !0);
f(m, g, x, "", "\\@not");
f(m, g, x, "⊂", "\\subset", !0);
f(m, g, x, "⊃", "\\supset", !0);
f(m, g, x, "⊆", "\\subseteq", !0);
f(m, g, x, "⊇", "\\supseteq", !0);
f(m, A, x, "⊈", "\\nsubseteq", !0);
f(m, A, x, "⊉", "\\nsupseteq", !0);
f(m, g, x, "⊨", "\\models");
f(m, g, x, "←", "\\leftarrow", !0);
f(m, g, x, "≤", "\\le");
f(m, g, x, "≤", "\\leq", !0);
f(m, g, x, "<", "\\lt", !0);
f(m, g, x, "→", "\\rightarrow", !0);
f(m, g, x, "→", "\\to");
f(m, A, x, "≱", "\\ngeq", !0);
f(m, A, x, "≰", "\\nleq", !0);
f(m, g, Pr, " ", "\\ ");
f(m, g, Pr, " ", "\\space");
f(m, g, Pr, " ", "\\nobreakspace");
f(H, g, Pr, " ", "\\ ");
f(H, g, Pr, " ", " ");
f(H, g, Pr, " ", "\\space");
f(H, g, Pr, " ", "\\nobreakspace");
f(m, g, Pr, null, "\\nobreak");
f(m, g, Pr, null, "\\allowbreak");
f(m, g, Zl, ",", ",");
f(m, g, Zl, ";", ";");
f(m, A, J, "⊼", "\\barwedge", !0);
f(m, A, J, "⊻", "\\veebar", !0);
f(m, g, J, "⊙", "\\odot", !0);
f(m, g, J, "⊕", "\\oplus", !0);
f(m, g, J, "⊗", "\\otimes", !0);
f(m, g, M, "∂", "\\partial", !0);
f(m, g, J, "⊘", "\\oslash", !0);
f(m, A, J, "⊚", "\\circledcirc", !0);
f(m, A, J, "⊡", "\\boxdot", !0);
f(m, g, J, "△", "\\bigtriangleup");
f(m, g, J, "▽", "\\bigtriangledown");
f(m, g, J, "†", "\\dagger");
f(m, g, J, "⋄", "\\diamond");
f(m, g, J, "⋆", "\\star");
f(m, g, J, "◃", "\\triangleleft");
f(m, g, J, "▹", "\\triangleright");
f(m, g, d0, "{", "\\{");
f(H, g, M, "{", "\\{");
f(H, g, M, "{", "\\textbraceleft");
f(m, g, Kt, "}", "\\}");
f(H, g, M, "}", "\\}");
f(H, g, M, "}", "\\textbraceright");
f(m, g, d0, "{", "\\lbrace");
f(m, g, Kt, "}", "\\rbrace");
f(m, g, d0, "[", "\\lbrack", !0);
f(H, g, M, "[", "\\lbrack", !0);
f(m, g, Kt, "]", "\\rbrack", !0);
f(H, g, M, "]", "\\rbrack", !0);
f(m, g, d0, "(", "\\lparen", !0);
f(m, g, Kt, ")", "\\rparen", !0);
f(H, g, M, "<", "\\textless", !0);
f(H, g, M, ">", "\\textgreater", !0);
f(m, g, d0, "⌊", "\\lfloor", !0);
f(m, g, Kt, "⌋", "\\rfloor", !0);
f(m, g, d0, "⌈", "\\lceil", !0);
f(m, g, Kt, "⌉", "\\rceil", !0);
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
f(m, g, x, "↑", "\\uparrow", !0);
f(m, g, x, "⇑", "\\Uparrow", !0);
f(m, g, x, "↓", "\\downarrow", !0);
f(m, g, x, "⇓", "\\Downarrow", !0);
f(m, g, x, "↕", "\\updownarrow", !0);
f(m, g, x, "⇕", "\\Updownarrow", !0);
f(m, g, ct, "∐", "\\coprod");
f(m, g, ct, "⋁", "\\bigvee");
f(m, g, ct, "⋀", "\\bigwedge");
f(m, g, ct, "⨄", "\\biguplus");
f(m, g, ct, "⋂", "\\bigcap");
f(m, g, ct, "⋃", "\\bigcup");
f(m, g, ct, "∫", "\\int");
f(m, g, ct, "∫", "\\intop");
f(m, g, ct, "∬", "\\iint");
f(m, g, ct, "∭", "\\iiint");
f(m, g, ct, "∏", "\\prod");
f(m, g, ct, "∑", "\\sum");
f(m, g, ct, "⨂", "\\bigotimes");
f(m, g, ct, "⨁", "\\bigoplus");
f(m, g, ct, "⨀", "\\bigodot");
f(m, g, ct, "∮", "\\oint");
f(m, g, ct, "∯", "\\oiint");
f(m, g, ct, "∰", "\\oiiint");
f(m, g, ct, "⨆", "\\bigsqcup");
f(m, g, ct, "∫", "\\smallint");
f(H, g, oa, "…", "\\textellipsis");
f(m, g, oa, "…", "\\mathellipsis");
f(H, g, oa, "…", "\\ldots", !0);
f(m, g, oa, "…", "\\ldots", !0);
f(m, g, oa, "⋯", "\\@cdots", !0);
f(m, g, oa, "⋱", "\\ddots", !0);
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
f(m, g, ne, "", "\\@imath");
f(m, g, ne, "", "\\@jmath");
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
var Md = {
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
var Q1 = '0123456789/@."';
for (var Zs = 0; Zs < Q1.length; Zs++) {
  var $1 = Q1.charAt(Zs);
  f(m, g, M, $1, $1);
}
var ec = '0123456789!@*()-=+";:?/.,';
for (var Ks = 0; Ks < ec.length; Ks++) {
  var tc = ec.charAt(Ks);
  f(H, g, M, tc, tc);
}
var Tl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Js = 0; Js < Tl.length; Js++) {
  var Ri = Tl.charAt(Js);
  f(m, g, ne, Ri, Ri), f(H, g, M, Ri, Ri);
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
f(m, g, ne, "h", "ℎ");
f(H, g, ne, "h", "ℎ");
var oe = "";
for (var Ht = 0; Ht < Tl.length; Ht++) {
  var $e = Tl.charAt(Ht);
  oe = String.fromCharCode(55349, 56320 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56372 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56424 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56580 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56684 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56736 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56788 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56840 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56944 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), Ht < 26 && (oe = String.fromCharCode(55349, 56632 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe), oe = String.fromCharCode(55349, 56476 + Ht), f(m, g, ne, $e, oe), f(H, g, M, $e, oe));
}
oe = "𝕜";
f(m, g, ne, "k", oe);
f(H, g, M, "k", oe);
for (var vn = 0; vn < 10; vn++) {
  var Yr = vn.toString();
  oe = String.fromCharCode(55349, 57294 + vn), f(m, g, ne, Yr, oe), f(H, g, M, Yr, oe), oe = String.fromCharCode(55349, 57314 + vn), f(m, g, ne, Yr, oe), f(H, g, M, Yr, oe), oe = String.fromCharCode(55349, 57324 + vn), f(m, g, ne, Yr, oe), f(H, g, M, Yr, oe), oe = String.fromCharCode(55349, 57334 + vn), f(m, g, ne, Yr, oe), f(H, g, M, Yr, oe);
}
var Ko = "ÐÞþ";
for (var Qs = 0; Qs < Ko.length; Qs++) {
  var Oi = Ko.charAt(Qs);
  f(m, g, ne, Oi, Oi), f(H, g, M, Oi, Oi);
}
var qi = [
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
], rc = [
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
    return [qi[s][2], qi[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [rc[o][2], rc[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [qi[0][2], qi[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, Kl = function(e, t, r) {
  return Ne[r][e] && Ne[r][e].replace && (e = Ne[r][e].replace), {
    value: e,
    metrics: Cu(e, t, r)
  };
}, q0 = function(e, t, r, a, i) {
  var l = Kl(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var u = s.italic;
    (r === "text" || a && a.font === "mathit") && (u = 0), o = new x0(e, s.height, s.depth, u, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new x0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var c = a.getColor();
    c && (o.style.color = c);
  }
  return o;
}, c3 = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && Kl(e, "Main-Bold", t).metrics ? q0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Ne[t][e].font === "main" ? q0(e, "Main-Regular", t, r, a) : q0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, f3 = function(e, t, r, a, i) {
  return i !== "textord" && Kl(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, h3 = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = u3(i, a)), u.length > 0)
    return q0(i, u, a, t, l.concat(c));
  if (o) {
    var d, h;
    if (o === "boldsymbol") {
      var p = f3(i, a, t, l, r);
      d = p.fontName, h = [p.fontClass];
    } else s ? (d = Id[o].fontName, h = [o]) : (d = Pi(o, t.fontWeight, t.fontShape), h = [o, t.fontWeight, t.fontShape]);
    if (Kl(i, d, a).metrics)
      return q0(i, d, a, t, l.concat(h));
    if (Md.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var _ = [], b = 0; b < i.length; b++)
        _.push(q0(i[b], d, a, t, l.concat(h)));
      return Bd(_);
    }
  }
  if (r === "mathord")
    return q0(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var D = Ne[a][i] && Ne[a][i].font;
    if (D === "ams") {
      var y = Pi("amsrm", t.fontWeight, t.fontShape);
      return q0(i, y, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (D === "main" || !D) {
      var k = Pi("textrm", t.fontWeight, t.fontShape);
      return q0(i, k, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var w = Pi(D, t.fontWeight, t.fontShape);
      return q0(i, w, a, t, l.concat(w, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, d3 = (n, e) => {
  if (on(n.classes) !== on(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
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
    t instanceof x0 && r instanceof x0 && d3(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, Mu = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, e0 = function(e, t, r, a) {
  var i = new ri(e, t, r, a);
  return Mu(i), i;
}, zd = (n, e, t, r) => new ri(n, e, t, r), p3 = function(e, t, r) {
  var a = e0([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = X(a.height), a.maxFontSize = 1, a;
}, g3 = function(e, t, r, a) {
  var i = new Fu(e, t, r, a);
  return Mu(i), i;
}, Bd = function(e) {
  var t = new ti(e);
  return Mu(t), t;
}, _3 = function(e, t) {
  return e instanceof ti ? e0([], [e], t) : e;
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
  var u = e0(["pstrut"], []);
  u.style.height = X(i);
  for (var c = [], d = a, h = a, p = a, _ = 0; _ < r.length; _++) {
    var b = r[_];
    if (b.type === "kern")
      p += b.size;
    else {
      var D = b.elem, y = b.wrapperClasses || [], k = b.wrapperStyle || {}, w = e0(y, [u, D], void 0, k);
      w.style.top = X(-i - p - D.depth), b.marginLeft && (w.style.marginLeft = b.marginLeft), b.marginRight && (w.style.marginRight = b.marginRight), c.push(w), p += D.height + D.depth;
    }
    d = Math.min(d, p), h = Math.max(h, p);
  }
  var E = e0(["vlist"], c);
  E.style.height = X(h);
  var S;
  if (d < 0) {
    var T = e0([], []), C = e0(["vlist"], [T]);
    C.style.height = X(-d);
    var F = e0(["vlist-s"], [new x0("​")]);
    S = [e0(["vlist-r"], [E, F]), e0(["vlist-r"], [C])];
  } else
    S = [e0(["vlist-r"], [E])];
  var B = e0(["vlist-t"], S);
  return S.length === 2 && B.classes.push("vlist-t2"), B.height = h, B.depth = -d, B;
}, w3 = (n, e) => {
  var t = e0(["mspace"], [], e), r = Ye(n, e);
  return t.style.marginRight = X(r), t;
}, Pi = function(e, t, r) {
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
}, Id = {
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
}, Ld = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, y3 = function(e, t) {
  var [r, a, i] = Ld[e], l = new un(r), s = new Br([l], {
    width: X(a),
    height: X(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + X(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = zd(["overlay"], [s], t);
  return o.height = i, o.style.height = X(i), o.style.width = X(a), o;
}, R = {
  fontMap: Id,
  makeSymbol: q0,
  mathsym: c3,
  makeSpan: e0,
  makeSvgSpan: zd,
  makeLineSpan: p3,
  makeAnchor: g3,
  makeFragment: Bd,
  wrapFragment: _3,
  makeVList: b3,
  makeOrd: h3,
  makeGlue: w3,
  staticSvg: y3,
  svgData: Ld,
  tryCombineChars: m3
}, Xe = {
  number: 3,
  unit: "mu"
}, bn = {
  number: 4,
  unit: "mu"
}, wr = {
  number: 5,
  unit: "mu"
}, k3 = {
  mord: {
    mop: Xe,
    mbin: bn,
    mrel: wr,
    minner: Xe
  },
  mop: {
    mord: Xe,
    mop: Xe,
    mrel: wr,
    minner: Xe
  },
  mbin: {
    mord: bn,
    mop: bn,
    mopen: bn,
    minner: bn
  },
  mrel: {
    mord: wr,
    mop: wr,
    mopen: wr,
    minner: wr
  },
  mopen: {},
  mclose: {
    mop: Xe,
    mbin: bn,
    mrel: wr,
    minner: Xe
  },
  mpunct: {
    mord: Xe,
    mop: Xe,
    mrel: wr,
    mopen: Xe,
    mclose: Xe,
    mpunct: Xe,
    minner: Xe
  },
  minner: {
    mord: Xe,
    mop: Xe,
    mbin: bn,
    mrel: wr,
    mopen: Xe,
    mpunct: Xe,
    minner: Xe
  }
}, D3 = {
  mord: {
    mop: Xe
  },
  mop: {
    mord: Xe,
    mop: Xe
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Xe
  },
  mpunct: {},
  minner: {
    mop: Xe
  }
}, Nd = {}, Cl = {}, Fl = {};
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
    Nd[t[o]] = s;
  e && (i && (Cl[e] = i), l && (Fl[e] = l));
}
function Bn(n) {
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
var Ml = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, tt = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Ir = R.makeSpan, A3 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], E3 = ["rightmost", "mrel", "mclose", "mpunct"], S3 = {
  display: ae.DISPLAY,
  text: ae.TEXT,
  script: ae.SCRIPT,
  scriptscript: ae.SCRIPTSCRIPT
}, x3 = {
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
    var s = Se(e[l], t);
    if (s instanceof ti) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (R.tryCombineChars(i), !r)
    return i;
  var u = t;
  if (e.length === 1) {
    var c = e[0];
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(S3[c.style]));
  }
  var d = Ir([a[0] || "leftmost"], [], t), h = Ir([a[1] || "rightmost"], [], t), p = r === "root";
  return nc(i, (_, b) => {
    var D = b.classes[0], y = _.classes[0];
    D === "mbin" && re.contains(E3, y) ? b.classes[0] = "mord" : y === "mbin" && re.contains(A3, D) && (_.classes[0] = "mord");
  }, {
    node: d
  }, h, p), nc(i, (_, b) => {
    var D = Jo(b), y = Jo(_), k = D && y ? _.hasClass("mtight") ? D3[D][y] : k3[D][y] : null;
    if (k)
      return R.makeGlue(k, u);
  }, {
    node: d
  }, h, p), i;
}, nc = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Rd(s);
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
}, Rd = function(e) {
  return e instanceof ti || e instanceof Fu || e instanceof ri && e.hasClass("enclosing") ? e : null;
}, T3 = function n(e, t) {
  var r = Rd(e);
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
}, Jo = function(e, t) {
  return e ? (t && (e = T3(e, t)), x3[e.classes[0]] || null) : null;
}, Ya = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Ir(t.concat(r));
}, Se = function(e, t, r) {
  if (!e)
    return Ir();
  if (Cl[e.type]) {
    var a = Cl[e.type](e, t);
    if (r && t.size !== r.size) {
      a = Ir(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Hi(n, e) {
  var t = Ir(["base"], n, e), r = Ir(["strut"]);
  return r.style.height = X(t.height + t.depth), t.depth && (r.style.verticalAlign = X(-t.depth)), t.children.unshift(r), t;
}
function Qo(n, e) {
  var t = null;
  n.length === 1 && n[0].type === "tag" && (t = n[0].tag, n = n[0].body);
  var r = gt(n, e, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], l = [], s = 0; s < r.length; s++)
    if (l.push(r[s]), r[s].hasClass("mbin") || r[s].hasClass("mrel") || r[s].hasClass("allowbreak")) {
      for (var o = !1; s < r.length - 1 && r[s + 1].hasClass("mspace") && !r[s + 1].hasClass("newline"); )
        s++, l.push(r[s]), r[s].hasClass("nobreak") && (o = !0);
      o || (i.push(Hi(l, e)), l = []);
    } else r[s].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Hi(l, e)), l = []), i.push(r[s]));
  l.length > 0 && i.push(Hi(l, e));
  var u;
  t ? (u = Hi(gt(t, e, !0)), u.classes = ["tag"], i.push(u)) : a && i.push(a);
  var c = Ir(["katex-html"], i);
  if (c.setAttribute("aria-hidden", "true"), u) {
    var d = u.children[0];
    d.style.height = X(c.height + c.depth), c.depth && (d.style.verticalAlign = X(-c.depth));
  }
  return c;
}
function Od(n) {
  return new ti(n);
}
class y0 {
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
    this.classes.length > 0 && (e.className = on(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += re.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + re.escape(on(this.classes)) + '"'), e += ">";
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
class Oa {
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
    return re.escape(this.toText());
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
    return e.setAttribute("width", X(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + X(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var U = {
  MathNode: y0,
  TextNode: Oa,
  SpaceNode: C3,
  newDocumentFragment: Od
}, T0 = function(e, t, r) {
  return Ne[t][e] && Ne[t][e].replace && e.charCodeAt(0) !== 55349 && !(Md.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Ne[t][e].replace), new U.TextNode(e);
}, zu = function(e) {
  return e.length === 1 ? e[0] : new U.MathNode("mrow", e);
}, Bu = function(e, t) {
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
  if (re.contains(["\\imath", "\\jmath"], i))
    return null;
  Ne[a][i] && Ne[a][i].replace && (i = Ne[a][i].replace);
  var l = R.fontMap[r].fontName;
  return Cu(i, l, a) ? R.fontMap[r].variant : null;
}, a0 = function(e, t, r) {
  if (e.length === 1) {
    var a = Ie(e[0], t);
    return r && a instanceof y0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = Ie(e[s], t);
    if (o instanceof y0 && l instanceof y0) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var u = o.children[0];
        if (u instanceof Oa && u.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var c = l.children[0];
        if (c instanceof Oa && c.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var d = o.children[0];
          d instanceof Oa && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, cn = function(e, t, r) {
  return zu(a0(e, t, r));
}, Ie = function(e, t) {
  if (!e)
    return new U.MathNode("mrow");
  if (Fl[e.type]) {
    var r = Fl[e.type](e, t);
    return r;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function ac(n, e, t, r, a) {
  var i = a0(n, t), l;
  i.length === 1 && i[0] instanceof y0 && re.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new U.MathNode("mrow", i);
  var s = new U.MathNode("annotation", [new U.TextNode(e)]);
  s.setAttribute("encoding", "application/x-tex");
  var o = new U.MathNode("semantics", [l, s]), u = new U.MathNode("math", [o]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && u.setAttribute("display", "block");
  var c = a ? "katex" : "katex-mathml";
  return R.makeSpan([c], [u]);
}
var qd = function(e) {
  return new Dr({
    style: e.displayMode ? ae.DISPLAY : ae.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Pd = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = R.makeSpan(r, [e]);
  }
  return e;
}, F3 = function(e, t, r) {
  var a = qd(r), i;
  if (r.output === "mathml")
    return ac(e, t, a, r.displayMode, !0);
  if (r.output === "html") {
    var l = Qo(e, a);
    i = R.makeSpan(["katex"], [l]);
  } else {
    var s = ac(e, t, a, r.displayMode, !1), o = Qo(e, a);
    i = R.makeSpan(["katex"], [s, o]);
  }
  return Pd(i, r);
}, M3 = function(e, t, r) {
  var a = qd(r), i = Qo(e, a), l = R.makeSpan(["katex"], [i]);
  return Pd(l, r);
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
  var t = new U.MathNode("mo", [new U.TextNode(z3[e.replace(/^\\/, "")])]);
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
    if (re.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var u = e, c = L3(u.base), d, h, p;
      if (c > 5)
        o === "widehat" || o === "widecheck" ? (d = 420, s = 2364, p = 0.42, h = o + "4") : (d = 312, s = 2340, p = 0.34, h = "tilde4");
      else {
        var _ = [1, 1, 2, 2, 3, 3][c];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][_], d = [0, 239, 300, 360, 420][_], p = [0, 0.24, 0.3, 0.3, 0.36, 0.42][_], h = o + _) : (s = [0, 600, 1033, 2339, 2340][_], d = [0, 260, 286, 306, 312][_], p = [0, 0.26, 0.286, 0.3, 0.306, 0.34][_], h = "tilde" + _);
      }
      var b = new un(h), D = new Br([b], {
        width: "100%",
        height: X(p),
        viewBox: "0 0 " + s + " " + d,
        preserveAspectRatio: "none"
      });
      return {
        span: R.makeSvgSpan([], [D], t),
        minWidth: 0,
        height: p
      };
    } else {
      var y = [], k = I3[o], [w, E, S] = k, T = S / 1e3, C = w.length, F, B;
      if (C === 1) {
        var I = k[3];
        F = ["hide-tail"], B = [I];
      } else if (C === 2)
        F = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (C === 3)
        F = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + C + " children.");
      for (var L = 0; L < C; L++) {
        var P = new un(w[L]), Z = new Br([P], {
          width: "400em",
          height: X(T),
          viewBox: "0 0 " + s + " " + S,
          preserveAspectRatio: B[L] + " slice"
        }), O = R.makeSvgSpan([F[L]], [Z], t);
        if (C === 1)
          return {
            span: O,
            minWidth: E,
            height: T
          };
        O.style.height = X(T), y.push(O);
      }
      return {
        span: R.makeSpan(["stretchy"], y, t),
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
  return a.height = l, a.style.height = X(l), i > 0 && (a.style.minWidth = X(i)), a;
}, R3 = function(e, t, r, a, i) {
  var l, s = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = R.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new Zo({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new Zo({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new Br(u, {
      width: "100%",
      height: X(s)
    });
    l = R.makeSvgSpan([], [c], i);
  }
  return l.height = s, l.style.height = X(s), l;
}, Lr = {
  encloseSpan: R3,
  mathMLnode: B3,
  svgSpan: N3
};
function pe(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function Iu(n) {
  var e = Jl(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function Jl(n) {
  return n && (n.type === "atom" || o3.hasOwnProperty(n.type)) ? n : null;
}
var Lu = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = pe(n.base, "accent"), t = r.base, n.base = t, a = l3(Se(n, e)), n.base = r) : (r = pe(n, "accent"), t = r.base);
  var i = Se(t, e.havingCrampedStyle()), l = r.isShifty && re.isCharacterBox(t), s = 0;
  if (l) {
    var o = re.getBaseElem(t), u = Se(o, e.havingCrampedStyle());
    s = J1(u).skew;
  }
  var c = r.label === "\\c", d = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), h;
  if (r.isStretchy)
    h = Lr.svgSpan(r, e), h = R.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: h,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + X(2 * s) + ")",
          marginLeft: X(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var p, _;
    r.label === "\\vec" ? (p = R.staticSvg("vec", e), _ = R.svgData.vec[1]) : (p = R.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), p = J1(p), p.italic = 0, _ = p.width, c && (d += p.depth)), h = R.makeSpan(["accent-body"], [p]);
    var b = r.label === "\\textcircled";
    b && (h.classes.push("accent-full"), d = i.height);
    var D = s;
    b || (D -= _ / 2), h.style.left = X(D), r.label === "\\textcircled" && (h.style.top = ".2em"), h = R.makeVList({
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
  var y = R.makeSpan(["mord", "accent"], [h], e);
  return a ? (a.children[0] = y, a.height = Math.max(y.height, a.height), a.classes[0] = "mord", a) : y;
}, Hd = (n, e) => {
  var t = n.isStretchy ? Lr.mathMLnode(n.label) : new U.MathNode("mo", [T0(n.label, n.mode)]), r = new U.MathNode("mover", [Ie(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, O3 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
Y({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = Ml(e[0]), r = !O3.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Lu,
  mathmlBuilder: Hd
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
  htmlBuilder: Lu,
  mathmlBuilder: Hd
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
    var t = Se(n.base, e), r = Lr.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = R.makeVList({
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
    return R.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = Lr.mathMLnode(n.label), r = new U.MathNode("munder", [Ie(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var Ui = (n) => {
  var e = new U.MathNode("mpadded", n ? [n] : []);
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
    var t = e.style, r = e.havingStyle(t.sup()), a = R.wrapFragment(Se(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    n.below && (r = e.havingStyle(t.sub()), l = R.wrapFragment(Se(n.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var s = Lr.svgSpan(n, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (u -= a.depth);
    var c;
    if (l) {
      var d = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      c = R.makeVList({
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
      c = R.makeVList({
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
    return c.children[0].children[0].children[1].classes.push("svg-align"), R.makeSpan(["mrel", "x-arrow"], [c], e);
  },
  mathmlBuilder(n, e) {
    var t = Lr.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = Ui(Ie(n.body, e));
      if (n.below) {
        var i = Ui(Ie(n.below, e));
        r = new U.MathNode("munderover", [t, i, a]);
      } else
        r = new U.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = Ui(Ie(n.below, e));
      r = new U.MathNode("munder", [t, l]);
    } else
      r = Ui(), r = new U.MathNode("mover", [t, r]);
    return r;
  }
});
var q3 = R.makeSpan;
function Ud(n, e) {
  var t = gt(n.body, e, !0);
  return q3([n.mclass], t, e);
}
function Vd(n, e) {
  var t, r = a0(n.body, e);
  return n.mclass === "minner" ? t = new U.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new U.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new U.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
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
      body: tt(a),
      isCharacterBox: re.isCharacterBox(a)
    };
  },
  htmlBuilder: Ud,
  mathmlBuilder: Vd
});
var Ql = (n) => {
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
      mclass: Ql(e[0]),
      body: tt(e[1]),
      isCharacterBox: re.isCharacterBox(e[1])
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
    r !== "\\stackrel" ? l = Ql(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: tt(a)
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
      isCharacterBox: re.isCharacterBox(o)
    };
  },
  htmlBuilder: Ud,
  mathmlBuilder: Vd
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
      mclass: Ql(e[0]),
      body: tt(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = gt(n.body, e, !0), r = R.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = a0(n.body, e), r = new U.MathNode("mstyle", t);
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
}, ic = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), lc = (n) => n.type === "textord" && n.text === "@", H3 = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
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
      throw new G("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], s = ic(), o = 0; o < l.length; o++)
      if (!lc(l[o]))
        s.body.push(l[o]);
      else {
        r.push(s), o += 1;
        var u = Iu(l[o]).text, c = new Array(2);
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
              if (lc(l[p]))
                throw new G("Missing a " + u + " character to complete a CD arrow.", l[p]);
              c[d].body.push(l[p]);
            }
            if (h)
              throw new G("Missing a " + u + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', l[o]);
        var _ = U3(u, c, n), b = {
          type: "styling",
          body: [_],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(b), s = ic();
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
    var t = e.havingStyle(e.style.sup()), r = R.wrapFragment(Se(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = X(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mrow", [Ie(n.label, e)]);
    return t = new U.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new U.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
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
    var t = R.wrapFragment(Se(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new U.MathNode("mrow", [Ie(n.fragment, e)]);
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
    } = n, r = pe(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = pe(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), u;
    if (isNaN(o))
      throw new G("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new G("\\@char with invalid code point " + i);
    return o <= 65535 ? u = String.fromCharCode(o) : (o -= 65536, u = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var Gd = (n, e) => {
  var t = gt(n.body, e.withColor(n.color), !1);
  return R.makeFragment(t);
}, jd = (n, e) => {
  var t = a0(n.body, e.withColor(n.color)), r = new U.MathNode("mstyle", t);
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
    } = n, r = pe(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: tt(a)
    };
  },
  htmlBuilder: Gd,
  mathmlBuilder: jd
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
    } = n, a = pe(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Gd,
  mathmlBuilder: jd
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
      size: a && pe(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = R.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = X(Ye(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", X(Ye(n.size, e)))), t;
  }
});
var $o = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Wd = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", n);
  return e;
}, G3 = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, Xd = (n, e, t, r) => {
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
    if ($o[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = $o[r.text]), pe(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", r);
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
      throw new G("Expected a control sequence", r);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new G('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new G('Argument number "' + r.text + '" out of order');
        i++, s.push([]);
      } else {
        if (r.text === "EOF")
          throw new G("Expected a macro definition");
        s[i].push(r.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === $o[t]), {
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
    } = n, r = Wd(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = G3(e);
    return Xd(e, r, a, t === "\\\\globallet"), {
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
    } = n, r = Wd(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Xd(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var La = function(e, t, r) {
  var a = Ne.math[e] && Ne.math[e].replace, i = Cu(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Nu = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = R.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, Yd = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = X(i), e.height -= i, e.depth += i;
}, j3 = function(e, t, r, a, i, l) {
  var s = R.makeSymbol(e, "Main-Regular", i, a), o = Nu(s, t, a, l);
  return r && Yd(o, a, t), o;
}, W3 = function(e, t, r, a) {
  return R.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, Zd = function(e, t, r, a, i, l) {
  var s = W3(e, t, i, a), o = Nu(R.makeSpan(["delimsizing", "size" + t], [s], a), ae.TEXT, a, l);
  return r && Yd(o, a, ae.TEXT), o;
}, $s = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = R.makeSpan(["delimsizinginner", a], [R.makeSpan([], [R.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, eo = function(e, t, r) {
  var a = rr["Size4-Regular"][e.charCodeAt(0)] ? rr["Size4-Regular"][e.charCodeAt(0)][4] : rr["Size1-Regular"][e.charCodeAt(0)][4], i = new un("inner", Q5(e, Math.round(1e3 * t))), l = new Br([i], {
    width: X(a),
    height: X(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + X(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = R.makeSvgSpan([], [l], r);
  return s.height = t, s.style.height = X(t), s.style.width = X(a), {
    type: "elem",
    elem: s
  };
}, eu = 8e-3, Vi = {
  type: "kern",
  size: -1 * eu
}, X3 = ["|", "\\lvert", "\\rvert", "\\vert"], Y3 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Kd = function(e, t, r, a, i, l) {
  var s, o, u, c, d = "", h = 0;
  s = u = c = e, o = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? s = u = "⏐" : e === "\\Downarrow" ? s = u = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", u = "‖", c = "\\Downarrow") : re.contains(X3, e) ? (u = "∣", d = "vert", h = 333) : re.contains(Y3, e) ? (u = "∥", d = "doublevert", h = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", u = "⎢", c = "⎣", p = "Size4-Regular", d = "lbrack", h = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", u = "⎥", c = "⎦", p = "Size4-Regular", d = "rbrack", h = 667) : e === "\\lfloor" || e === "⌊" ? (u = s = "⎢", c = "⎣", p = "Size4-Regular", d = "lfloor", h = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", u = c = "⎢", p = "Size4-Regular", d = "lceil", h = 667) : e === "\\rfloor" || e === "⌋" ? (u = s = "⎥", c = "⎦", p = "Size4-Regular", d = "rfloor", h = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", u = c = "⎥", p = "Size4-Regular", d = "rceil", h = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", u = "⎜", c = "⎝", p = "Size4-Regular", d = "lparen", h = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", u = "⎟", c = "⎠", p = "Size4-Regular", d = "rparen", h = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", c = "⎭", u = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", c = "⎩", u = "⎪", p = "Size4-Regular");
  var _ = La(s, p, i), b = _.height + _.depth, D = La(u, p, i), y = D.height + D.depth, k = La(c, p, i), w = k.height + k.depth, E = 0, S = 1;
  if (o !== null) {
    var T = La(o, p, i);
    E = T.height + T.depth, S = 2;
  }
  var C = b + w + E, F = Math.max(0, Math.ceil((t - C) / (S * y))), B = C + F * S * y, I = a.fontMetrics().axisHeight;
  r && (I *= a.sizeMultiplier);
  var L = B / 2 - I, P = [];
  if (d.length > 0) {
    var Z = B - b - w, O = Math.round(B * 1e3), se = $5(d, Math.round(Z * 1e3)), K = new un(d, se), he = (h / 1e3).toFixed(3) + "em", ue = (O / 1e3).toFixed(3) + "em", Ae = new Br([K], {
      width: he,
      height: ue,
      viewBox: "0 0 " + h + " " + O
    }), ye = R.makeSvgSpan([], [Ae], a);
    ye.height = O / 1e3, ye.style.width = he, ye.style.height = ue, P.push({
      type: "elem",
      elem: ye
    });
  } else {
    if (P.push($s(c, p, i)), P.push(Vi), o === null) {
      var $ = B - b - w + 2 * eu;
      P.push(eo(u, $, a));
    } else {
      var de = (B - b - w - E) / 2 + 2 * eu;
      P.push(eo(u, de, a)), P.push(Vi), P.push($s(o, p, i)), P.push(Vi), P.push(eo(u, de, a));
    }
    P.push(Vi), P.push($s(s, p, i));
  }
  var ce = a.havingBaseStyle(ae.TEXT), Ce = R.makeVList({
    positionType: "bottom",
    positionData: L,
    children: P
  }, ce);
  return Nu(R.makeSpan(["delimsizing", "mult"], [Ce], ce), ae.TEXT, a, l);
}, to = 80, ro = 0.08, no = function(e, t, r, a, i) {
  var l = J5(e, a, r), s = new un(e, l), o = new Br([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: X(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return R.makeSvgSpan(["hide-tail"], [o], i);
}, Z3 = function(e, t) {
  var r = t.havingBaseSizing(), a = e4("\\surd", e * r.sizeMultiplier, $d, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, u = 0, c = 0, d;
  return a.type === "small" ? (c = 1e3 + 1e3 * l + to, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + ro) / i, u = (1 + l) / i, s = no("sqrtMain", o, c, l, t), s.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (c = (1e3 + to) * qa[a.size], u = (qa[a.size] + l) / i, o = (qa[a.size] + l + ro) / i, s = no("sqrtSize" + a.size, o, c, l, t), s.style.minWidth = "1.02em", d = 1 / i) : (o = e + l + ro, u = e + l, c = Math.floor(1e3 * e + l) + to, s = no("sqrtTall", o, c, l, t), s.style.minWidth = "0.742em", d = 1.056), s.height = u, s.style.height = X(o), {
    span: s,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Jd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], K3 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Qd = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], qa = [0, 1.2, 1.8, 2.4, 3], J3 = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), re.contains(Jd, e) || re.contains(Qd, e))
    return Zd(e, t, !1, r, a, i);
  if (re.contains(K3, e))
    return Kd(e, qa[t], !1, r, a, i);
  throw new G("Illegal delimiter: '" + e + "'");
}, Q3 = [{
  type: "small",
  style: ae.SCRIPTSCRIPT
}, {
  type: "small",
  style: ae.SCRIPT
}, {
  type: "small",
  style: ae.TEXT
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
  style: ae.SCRIPTSCRIPT
}, {
  type: "small",
  style: ae.SCRIPT
}, {
  type: "small",
  style: ae.TEXT
}, {
  type: "stack"
}], $d = [{
  type: "small",
  style: ae.SCRIPTSCRIPT
}, {
  type: "small",
  style: ae.SCRIPT
}, {
  type: "small",
  style: ae.TEXT
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
}, e4 = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = La(e, e6(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var u = a.havingBaseStyle(r[l].style);
      o *= u.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, t4 = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  re.contains(Qd, e) ? s = Q3 : re.contains(Jd, e) ? s = $d : s = $3;
  var o = e4(e, t, s, a);
  return o.type === "small" ? j3(e, o.style, r, a, i, l) : o.type === "large" ? Zd(e, o.size, r, a, i, l) : Kd(e, t, r, a, i, l);
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
  return t4(e, d, !0, a, i, l);
}, Cr = {
  sqrtImage: Z3,
  sizedDelim: J3,
  sizeToMaxHeight: qa,
  customSizedDelim: t4,
  leftRightDelim: t6
}, sc = {
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
function $l(n, e) {
  var t = Jl(n);
  if (t && re.contains(r6, t.text))
    return t;
  throw t ? new G("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new G("Invalid delimiter type '" + n.type + "'", n);
}
Y({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = $l(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: sc[n.funcName].size,
      mclass: sc[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? R.makeSpan([n.mclass]) : Cr.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push(T0(n.delim, n.mode));
    var t = new U.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = X(Cr.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function oc(n) {
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
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: $l(e[0], n).text,
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
    var t = $l(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = pe(r.parseFunction(), "leftright-right");
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
    oc(n);
    for (var t = gt(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), a = Math.max(t[l].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (n.left === "." ? s = Ya(e, ["mopen"]) : s = Cr.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var u = t[o], c = u.isMiddle;
        c && (t[o] = Cr.leftRightDelim(c.delim, r, a, c.options, n.mode, []));
      }
    var d;
    if (n.right === ".")
      d = Ya(e, ["mclose"]);
    else {
      var h = n.rightColor ? e.withColor(n.rightColor) : e;
      d = Cr.leftRightDelim(n.right, r, a, h, n.mode, ["mclose"]);
    }
    return t.push(d), R.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    oc(n);
    var t = a0(n.body, e);
    if (n.left !== ".") {
      var r = new U.MathNode("mo", [T0(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new U.MathNode("mo", [T0(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return zu(t);
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
    var t = $l(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = Ya(e, []);
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
    var t = n.delim === "\\vert" || n.delim === "|" ? T0("|", "text") : T0(n.delim, n.mode), r = new U.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Ru = (n, e) => {
  var t = R.wrapFragment(Se(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = re.isCharacterBox(n.body);
  if (r === "sout")
    i = R.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var o = Ye({
      number: 0.6,
      unit: "pt"
    }, e), u = Ye({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var d = t.height + t.depth + o + u;
    t.style.paddingLeft = X(d / 2 + o);
    var h = Math.floor(1e3 * d * a), p = Z5(h), _ = new Br([new un("phase", p)], {
      width: "400em",
      height: X(h / 1e3),
      viewBox: "0 0 400000 " + h,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = R.makeSvgSpan(["hide-tail"], [_], e), i.style.height = X(d), l = t.depth + o + u;
  } else {
    /cancel/.test(r) ? s || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var b = 0, D = 0, y = 0;
    /box/.test(r) ? (y = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), b = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : y), D = b) : r === "angl" ? (y = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), b = 4 * y, D = Math.max(0, 0.25 - t.depth)) : (b = s ? 0.2 : 0, D = b), i = Lr.encloseSpan(t, r, b, D, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = X(y)) : r === "angl" && y !== 0.049 && (i.style.borderTopWidth = X(y), i.style.borderRightWidth = X(y)), l = t.depth + D, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var k;
  if (n.backgroundColor)
    k = R.makeVList({
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
    k = R.makeVList({
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
  return /cancel/.test(r) && (k.height = t.height, k.depth = t.depth), /cancel/.test(r) && !s ? R.makeSpan(["mord", "cancel-lap"], [k], e) : R.makeSpan(["mord"], [k], e);
}, Ou = (n, e) => {
  var t = 0, r = new U.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ie(n.body, e)]);
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
    } = n, i = pe(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ru,
  mathmlBuilder: Ou
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
    } = n, i = pe(e[0], "color-token").color, l = pe(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Ru,
  mathmlBuilder: Ou
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
  htmlBuilder: Ru,
  mathmlBuilder: Ou
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
var r4 = {};
function dr(n) {
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
    r4[t[o]] = s;
  i && (Cl[e] = i), l && (Fl[e] = l);
}
var n4 = {};
function v(n, e) {
  n4[n] = e;
}
function uc(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var es = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new G("{" + n.envName + "} can be used only in display mode.");
};
function qu(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function dn(n, e, t) {
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
      throw new G("Invalid \\arraystretch: " + p);
  }
  n.gullet.beginGroup();
  var _ = [], b = [_], D = [], y = [], k = o != null ? [] : void 0;
  function w() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function E() {
    k && (n.gullet.macros.get("\\df@tag") ? (k.push(n.subparse([new S0("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : k.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (w(), y.push(uc(n)); ; ) {
    var S = n.parseExpression(!1, u ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), S = {
      type: "ordgroup",
      mode: n.mode,
      body: S
    }, t && (S = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [S]
    }), _.push(S);
    var T = n.fetch().text;
    if (T === "&") {
      if (d && _.length === d) {
        if (u || s)
          throw new G("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      E(), _.length === 1 && S.type === "styling" && S.body[0].body.length === 0 && (b.length > 1 || !c) && b.pop(), y.length < b.length + 1 && y.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var C = void 0;
      n.gullet.future().text !== " " && (C = n.parseSizeGroup(!0)), D.push(C ? C.value : null), E(), y.push(uc(n)), _ = [], b.push(_), w();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", n.nextToken);
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
function Pu(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var mr = function(e, t) {
  var r, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, h = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var p = t.havingStyle(ae.SCRIPT).sizeMultiplier;
    h = 0.2778 * (p / t.sizeMultiplier);
  }
  var _ = e.colSeparationType === "CD" ? Ye({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, b = 3 * d, D = e.arraystretch * _, y = 0.7 * D, k = 0.3 * D, w = 0;
  function E(Ot) {
    for (var qt = 0; qt < Ot.length; ++qt)
      qt > 0 && (w += 0.25), u.push({
        pos: w,
        isDashed: Ot[qt]
      });
  }
  for (E(l[0]), r = 0; r < e.body.length; ++r) {
    var S = e.body[r], T = y, C = k;
    s < S.length && (s = S.length);
    var F = new Array(S.length);
    for (a = 0; a < S.length; ++a) {
      var B = Se(S[a], t);
      C < B.depth && (C = B.depth), T < B.height && (T = B.height), F[a] = B;
    }
    var I = e.rowGaps[r], L = 0;
    I && (L = Ye(I, t), L > 0 && (L += k, C < L && (C = L), L = 0)), e.addJot && (C += b), F.height = T, F.depth = C, w += T, F.pos = w, w += C + L, o[r] = F, E(l[r + 1]);
  }
  var P = w / 2 + t.fontMetrics().axisHeight, Z = e.cols || [], O = [], se, K, he = [];
  if (e.tags && e.tags.some((Ot) => Ot))
    for (r = 0; r < i; ++r) {
      var ue = o[r], Ae = ue.pos - P, ye = e.tags[r], $ = void 0;
      ye === !0 ? $ = R.makeSpan(["eqn-num"], [], t) : ye === !1 ? $ = R.makeSpan([], [], t) : $ = R.makeSpan([], gt(ye, t, !0), t), $.depth = ue.depth, $.height = ue.height, he.push({
        type: "elem",
        elem: $,
        shift: Ae
      });
    }
  for (
    a = 0, K = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || K < Z.length;
    ++a, ++K
  ) {
    for (var de = Z[K] || {}, ce = !0; de.type === "separator"; ) {
      if (ce || (se = R.makeSpan(["arraycolsep"], []), se.style.width = X(t.fontMetrics().doubleRuleSep), O.push(se)), de.separator === "|" || de.separator === ":") {
        var Ce = de.separator === "|" ? "solid" : "dashed", V = R.makeSpan(["vertical-separator"], [], t);
        V.style.height = X(w), V.style.borderRightWidth = X(c), V.style.borderRightStyle = Ce, V.style.margin = "0 " + X(-c / 2);
        var j = w - P;
        j && (V.style.verticalAlign = X(-j)), O.push(V);
      } else
        throw new G("Invalid separator type: " + de.separator);
      K++, de = Z[K] || {}, ce = !1;
    }
    if (!(a >= s)) {
      var ge = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (ge = re.deflt(de.pregap, h), ge !== 0 && (se = R.makeSpan(["arraycolsep"], []), se.style.width = X(ge), O.push(se)));
      var ke = [];
      for (r = 0; r < i; ++r) {
        var Te = o[r], ze = Te[a];
        if (ze) {
          var Le = Te.pos - P;
          ze.depth = Te.depth, ze.height = Te.height, ke.push({
            type: "elem",
            elem: ze,
            shift: Le
          });
        }
      }
      ke = R.makeVList({
        positionType: "individualShift",
        children: ke
      }, t), ke = R.makeSpan(["col-align-" + (de.align || "c")], [ke]), O.push(ke), (a < s - 1 || e.hskipBeforeAndAfter) && (ge = re.deflt(de.postgap, h), ge !== 0 && (se = R.makeSpan(["arraycolsep"], []), se.style.width = X(ge), O.push(se)));
    }
  }
  if (o = R.makeSpan(["mtable"], O), u.length > 0) {
    for (var je = R.makeLineSpan("hline", t, c), ft = R.makeLineSpan("hdashline", t, c), We = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; u.length > 0; ) {
      var qe = u.pop(), Pe = qe.pos - P;
      qe.isDashed ? We.push({
        type: "elem",
        elem: ft,
        shift: Pe
      }) : We.push({
        type: "elem",
        elem: je,
        shift: Pe
      });
    }
    o = R.makeVList({
      positionType: "individualShift",
      children: We
    }, t);
  }
  if (he.length === 0)
    return R.makeSpan(["mord"], [o], t);
  var lt = R.makeVList({
    positionType: "individualShift",
    children: he
  }, t);
  return lt = R.makeSpan(["tag"], [lt], t), R.makeFragment([o, lt]);
}, n6 = {
  c: "center ",
  l: "left ",
  r: "right "
}, pr = function(e, t) {
  for (var r = [], a = new U.MathNode("mtd", [], ["mtr-glue"]), i = new U.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], u = 0; u < s.length; u++)
      o.push(new U.MathNode("mtd", [Ie(s[u], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new U.MathNode("mtr", o));
  }
  var c = new U.MathNode("mtable", r), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", X(d));
  var h = "", p = "";
  if (e.cols && e.cols.length > 0) {
    var _ = e.cols, b = "", D = !1, y = 0, k = _.length;
    _[0].type === "separator" && (h += "top ", y = 1), _[_.length - 1].type === "separator" && (h += "bottom ", k -= 1);
    for (var w = y; w < k; w++)
      _[w].type === "align" ? (p += n6[_[w].align], D && (b += "none "), D = !0) : _[w].type === "separator" && D && (b += _[w].separator === "|" ? "solid " : "dashed ", D = !1);
    c.setAttribute("columnalign", p.trim()), /[sd]/.test(b) && c.setAttribute("columnlines", b.trim());
  }
  if (e.colSeparationType === "align") {
    for (var E = e.cols || [], S = "", T = 1; T < E.length; T++)
      S += T % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", S.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var C = "", F = e.hLinesBeforeRow;
  h += F[0].length > 0 ? "left " : "", h += F[F.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < F.length - 1; B++)
    C += F[B].length === 0 ? "none " : F[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(C) && c.setAttribute("rowlines", C.trim()), h !== "" && (c = new U.MathNode("menclose", [c]), c.setAttribute("notation", h.trim())), e.arraystretch && e.arraystretch < 1 && (c = new U.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, a4 = function(e, t) {
  e.envName.indexOf("ed") === -1 && es(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = dn(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : qu(e.envName),
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
      var h = pe(t[0].body[d], "textord");
      c += h.text;
    }
    s = Number(c), o = s * 2;
  }
  var p = !o;
  l.body.forEach(function(y) {
    for (var k = 1; k < y.length; k += 2) {
      var w = pe(y[k], "styling"), E = pe(w.body[0], "ordgroup");
      E.body.unshift(u);
    }
    if (p)
      o < y.length && (o = y.length);
    else {
      var S = y.length / 2;
      if (s < S)
        throw new G("Too many math in a row: " + ("expected " + s + ", but got " + S), y[0]);
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
dr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Jl(e[0]), r = t ? [e[0]] : pe(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Iu(l), o = s.text;
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
      throw new G("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return dn(n.parser, i, Pu(n.envName));
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
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
          throw new G("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = dn(n.parser, r, Pu(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
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
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = dn(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Jl(e[0]), r = t ? [e[0]] : pe(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Iu(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new G("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new G("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = dn(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
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
    }, t = dn(n.parser, e, Pu(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: a4,
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    re.contains(["gather", "gather*"], n.envName) && es(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: qu(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return dn(n.parser, e, "display");
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: a4,
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    es(n);
    var e = {
      autoTag: qu(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return dn(n.parser, e, "display");
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
dr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return es(n), V3(n.parser);
  },
  htmlBuilder: mr,
  mathmlBuilder: pr
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
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
    throw new G(n.funcName + " valid only within array environment");
  }
});
var cc = r4;
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
      throw new G("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += pe(a.body[l], "textord").text;
    if (r === "\\begin") {
      if (!cc.hasOwnProperty(i))
        throw new G("No such environment: " + i, a);
      var s = cc[i], {
        args: o,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", s), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = s.handler(c, o, u);
      t.expect("\\end", !1);
      var h = t.nextToken, p = pe(t.parseFunction(), "environment");
      if (p.name !== i)
        throw new G("Mismatch: \\begin{" + i + "} matched by \\end{" + p.name + "}", h);
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
var i4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Se(n.body, r);
}, l4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Ie(n.body, r);
}, fc = {
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
    } = n, a = Ml(e[0]), i = r;
    return i in fc && (i = fc[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: i4,
  mathmlBuilder: l4
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
    } = n, r = e[0], a = re.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ql(r),
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
  htmlBuilder: i4,
  mathmlBuilder: l4
});
var s4 = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= ae.SCRIPT.id ? t.text() : ae.DISPLAY : n === "text" && t.size === ae.DISPLAY.size ? t = ae.TEXT : n === "script" ? t = ae.SCRIPT : n === "scriptscript" && (t = ae.SCRIPTSCRIPT), t;
}, Hu = (n, e) => {
  var t = s4(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = Se(n.numer, i, e);
  if (n.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var u = Se(n.denom, i, e), c, d, h;
  n.hasBarLine ? (n.barSize ? (d = Ye(n.barSize, e), c = R.makeLineSpan("frac-line", e, d)) : c = R.makeLineSpan("frac-line", e), d = c.height, h = c.height) : (c = null, d = 0, h = e.fontMetrics().defaultRuleThickness);
  var p, _, b;
  t.size === ae.DISPLAY.size || n.size === "display" ? (p = e.fontMetrics().num1, d > 0 ? _ = 3 * h : _ = 7 * h, b = e.fontMetrics().denom1) : (d > 0 ? (p = e.fontMetrics().num2, _ = h) : (p = e.fontMetrics().num3, _ = 3 * h), b = e.fontMetrics().denom2);
  var D;
  if (c) {
    var k = e.fontMetrics().axisHeight;
    p - l.depth - (k + 0.5 * d) < _ && (p += _ - (p - l.depth - (k + 0.5 * d))), k - 0.5 * d - (u.height - b) < _ && (b += _ - (k - 0.5 * d - (u.height - b)));
    var w = -(k - 0.5 * d);
    D = R.makeVList({
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
    y < _ && (p += 0.5 * (_ - y), b += 0.5 * (_ - y)), D = R.makeVList({
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
  var E;
  t.size === ae.DISPLAY.size ? E = e.fontMetrics().delim1 : t.size === ae.SCRIPTSCRIPT.size ? E = e.havingStyle(ae.SCRIPT).fontMetrics().delim2 : E = e.fontMetrics().delim2;
  var S, T;
  return n.leftDelim == null ? S = Ya(e, ["mopen"]) : S = Cr.customSizedDelim(n.leftDelim, E, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = R.makeSpan([]) : n.rightDelim == null ? T = Ya(e, ["mclose"]) : T = Cr.customSizedDelim(n.rightDelim, E, !0, e.havingStyle(t), n.mode, ["mclose"]), R.makeSpan(["mord"].concat(i.sizingClasses(e)), [S, R.makeSpan(["mfrac"], [D]), T], e);
}, Uu = (n, e) => {
  var t = new U.MathNode("mfrac", [Ie(n.numer, e), Ie(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = Ye(n.barSize, e);
    t.setAttribute("linethickness", X(r));
  }
  var a = s4(n.size, e.style);
  if (a.size !== e.style.size) {
    t = new U.MathNode("mstyle", [t]);
    var i = a.size === ae.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var l = [];
    if (n.leftDelim != null) {
      var s = new U.MathNode("mo", [new U.TextNode(n.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), n.rightDelim != null) {
      var o = new U.MathNode("mo", [new U.TextNode(n.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return zu(l);
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
  htmlBuilder: Hu,
  mathmlBuilder: Uu
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
var hc = ["display", "text", "script", "scriptscript"], dc = function(e) {
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
    } = n, r = e[4], a = e[5], i = Ml(e[0]), l = i.type === "atom" && i.family === "open" ? dc(i.text) : null, s = Ml(e[1]), o = s.type === "atom" && s.family === "close" ? dc(s.text) : null, u = pe(e[2], "size"), c, d = null;
    u.isBlank ? c = !0 : (d = u.value, c = d.number > 0);
    var h = "auto", p = e[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var _ = pe(p.body[0], "textord");
        h = hc[Number(_.text)];
      }
    } else
      p = pe(p, "textord"), h = hc[Number(p.text)];
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
  htmlBuilder: Hu,
  mathmlBuilder: Uu
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
      size: pe(e[0], "size").value,
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
    } = n, a = e[0], i = I5(pe(e[1], "infix").size), l = e[2], s = i.number > 0;
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
  htmlBuilder: Hu,
  mathmlBuilder: Uu
});
var o4 = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? Se(n.sup, e.havingStyle(t.sup()), e) : Se(n.sub, e.havingStyle(t.sub()), e), a = pe(n.base, "horizBrace")) : a = pe(n, "horizBrace");
  var i = Se(a.base, e.havingBaseStyle(ae.DISPLAY)), l = Lr.svgSpan(a, e), s;
  if (a.isOver ? (s = R.makeVList({
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
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = R.makeVList({
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
    var o = R.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = R.makeVList({
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
    }, e) : s = R.makeVList({
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
  return R.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, a6 = (n, e) => {
  var t = Lr.mathMLnode(n.label);
  return new U.MathNode(n.isOver ? "mover" : "munder", [Ie(n.base, e), t]);
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
  htmlBuilder: o4,
  mathmlBuilder: a6
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
    } = n, r = e[1], a = pe(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: tt(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e, !1);
    return R.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = cn(n.body, e);
    return t instanceof y0 || (t = new y0("mrow", [t])), t.setAttribute("href", n.href), t;
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
    } = n, r = pe(e[0], "url").url;
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
      body: tt(s)
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
      body: tt(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = gt(n.body, e, !1);
    return R.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new U.MathNode("mrow", a0(n.body, e));
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
    } = n, i = pe(e[0], "raw").string, l = e[1];
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
            throw new G("Error parsing key-value for \\htmlData");
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
      body: tt(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = R.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => cn(n.body, e)
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
      html: tt(e[0]),
      mathml: tt(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.html, e, !1);
    return R.makeFragment(t);
  },
  mathmlBuilder: (n, e) => cn(n.mathml, e)
});
var ao = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!xd(r))
    throw new G("Invalid unit: '" + r.unit + "' in \\includegraphics.");
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
      for (var o = pe(t[0], "raw").string, u = o.split(","), c = 0; c < u.length; c++) {
        var d = u[c].split("=");
        if (d.length === 2) {
          var h = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              s = h;
              break;
            case "width":
              a = ao(h);
              break;
            case "height":
              i = ao(h);
              break;
            case "totalheight":
              l = ao(h);
              break;
            default:
              throw new G("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = pe(e[0], "url").url;
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
    var t = Ye(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = Ye(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = Ye(n.width, e));
    var i = {
      height: X(t + r)
    };
    a > 0 && (i.width = X(a)), r > 0 && (i.verticalAlign = X(-r));
    var l = new a3(n.src, n.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (n, e) => {
    var t = new U.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = Ye(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = Ye(n.totalheight, e) - r, t.setAttribute("valign", X(-a))), t.setAttribute("height", X(r + a)), n.width.number > 0) {
      var i = Ye(n.width, e);
      t.setAttribute("width", X(i));
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
    } = n, a = pe(e[0], "size");
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
    return R.makeGlue(n.dimension, e);
  },
  mathmlBuilder(n, e) {
    var t = Ye(n.dimension, e);
    return new U.SpaceNode(t);
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
    n.alignment === "clap" ? (t = R.makeSpan([], [Se(n.body, e)]), t = R.makeSpan(["inner"], [t], e)) : t = R.makeSpan(["inner"], [Se(n.body, e)]);
    var r = R.makeSpan(["fix"], []), a = R.makeSpan([n.alignment], [t, r], e), i = R.makeSpan(["strut"]);
    return i.style.height = X(a.height + a.depth), a.depth && (i.style.verticalAlign = X(-a.depth)), a.children.unshift(i), a = R.makeSpan(["thinbox"], [a], e), R.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new U.MathNode("mpadded", [Ie(n.body, e)]);
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
    throw new G("Mismatched " + n.funcName);
  }
});
var mc = (n, e) => {
  switch (e.style.size) {
    case ae.DISPLAY.size:
      return n.display;
    case ae.TEXT.size:
      return n.text;
    case ae.SCRIPT.size:
      return n.script;
    case ae.SCRIPTSCRIPT.size:
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
      display: tt(e[0]),
      text: tt(e[1]),
      script: tt(e[2]),
      scriptscript: tt(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = mc(n, e), r = gt(t, e, !1);
    return R.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = mc(n, e);
    return cn(t, e);
  }
});
var u4 = (n, e, t, r, a, i, l) => {
  n = R.makeSpan([], [n]);
  var s = t && re.isCharacterBox(t), o, u;
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
    h = R.makeVList({
      positionType: "bottom",
      positionData: p,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: X(-i)
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
        marginLeft: X(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (o) {
    var _ = n.height - l;
    h = R.makeVList({
      positionType: "top",
      positionData: _,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: X(-i)
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
    h = R.makeVList({
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
        marginLeft: X(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var D = [h];
  if (o && i !== 0 && !s) {
    var y = R.makeSpan(["mspace"], [], r);
    y.style.marginRight = X(i), D.unshift(y);
  }
  return R.makeSpan(["mop", "op-limits"], D, r);
}, c4 = ["\\smallint"], ua = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = pe(n.base, "op"), a = !0) : i = pe(n, "op");
  var l = e.style, s = !1;
  l.size === ae.DISPLAY.size && i.symbol && !re.contains(c4, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var u = s ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), o = R.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), c.length > 0) {
      var d = o.italic, h = R.staticSvg(c + "Size" + (s ? "2" : "1"), e);
      o = R.makeVList({
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
    var p = gt(i.body, e, !0);
    p.length === 1 && p[0] instanceof x0 ? (o = p[0], o.classes[0] = "mop") : o = R.makeSpan(["mop"], p, e);
  } else {
    for (var _ = [], b = 1; b < i.name.length; b++)
      _.push(R.mathsym(i.name[b], i.mode, e));
    o = R.makeSpan(["mop"], _, e);
  }
  var D = 0, y = 0;
  return (o instanceof x0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (D = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, y = o.italic), a ? u4(o, t, r, e, l, y, D) : (D && (o.style.position = "relative", o.style.top = X(D)), o);
}, ni = (n, e) => {
  var t;
  if (n.symbol)
    t = new y0("mo", [T0(n.name, n.mode)]), re.contains(c4, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new y0("mo", a0(n.body, e));
  else {
    t = new y0("mi", [new Oa(n.name.slice(1))]);
    var r = new y0("mo", [T0("⁡", "text")]);
    n.parentIsSupSub ? t = new y0("mrow", [t, r]) : t = Od([t, r]);
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
    return a.length === 1 && (a = i6[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: ua,
  mathmlBuilder: ni
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
      body: tt(r)
    };
  },
  htmlBuilder: ua,
  mathmlBuilder: ni
});
var l6 = {
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
  htmlBuilder: ua,
  mathmlBuilder: ni
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
  htmlBuilder: ua,
  mathmlBuilder: ni
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
    return r.length === 1 && (r = l6[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: ua,
  mathmlBuilder: ni
});
var f4 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = pe(n.base, "operatorname"), a = !0) : i = pe(n, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((d) => {
      var h = d.text;
      return typeof h == "string" ? {
        type: "textord",
        mode: d.mode,
        text: h
      } : d;
    }), o = gt(s, e.withFont("mathrm"), !0), u = 0; u < o.length; u++) {
      var c = o[u];
      c instanceof x0 && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = R.makeSpan(["mop"], o, e);
  } else
    l = R.makeSpan(["mop"], [], e);
  return a ? u4(l, t, r, e, e.style, 0, 0) : l;
}, s6 = (n, e) => {
  for (var t = a0(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof U.SpaceNode)) if (i instanceof U.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof U.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
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
    t = [new U.TextNode(s)];
  }
  var o = new U.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var u = new U.MathNode("mo", [T0("⁡", "text")]);
  return n.parentIsSupSub ? new U.MathNode("mrow", [o, u]) : U.newDocumentFragment([o, u]);
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
      body: tt(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: f4,
  mathmlBuilder: s6
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Bn({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? R.makeFragment(gt(n.body, e, !1)) : R.makeSpan(["mord"], gt(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return cn(n.body, e, !0);
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
    var t = Se(n.body, e.havingCrampedStyle()), r = R.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = R.makeVList({
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
    return R.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new U.MathNode("mover", [Ie(n.body, e), t]);
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
      body: tt(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e.withPhantom(), !1);
    return R.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = a0(n.body, e);
    return new U.MathNode("mphantom", t);
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
    var t = R.makeSpan([], [Se(n.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = R.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), R.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (n, e) => {
    var t = a0(tt(n.body), e), r = new U.MathNode("mphantom", t), a = new U.MathNode("mpadded", [r]);
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
    var t = R.makeSpan(["inner"], [Se(n.body, e.withPhantom())]), r = R.makeSpan(["fix"], []);
    return R.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = a0(tt(n.body), e), r = new U.MathNode("mphantom", t), a = new U.MathNode("mpadded", [r]);
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
    } = n, r = pe(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = Se(n.body, e), r = Ye(n.dy, e);
    return R.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mpadded", [Ie(n.body, e)]), r = n.dy.number + n.dy.unit;
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
    } = n, a = t[0], i = pe(e[0], "size"), l = pe(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && pe(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(n, e) {
    var t = R.makeSpan(["mord", "rule"], [], e), r = Ye(n.width, e), a = Ye(n.height, e), i = n.shift ? Ye(n.shift, e) : 0;
    return t.style.borderRightWidth = X(r), t.style.borderTopWidth = X(a), t.style.bottom = X(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = Ye(n.width, e), r = Ye(n.height, e), a = n.shift ? Ye(n.shift, e) : 0, i = e.color && e.getColor() || "black", l = new U.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", X(t)), l.setAttribute("height", X(r));
    var s = new U.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", X(a)) : (s.setAttribute("height", X(a)), s.setAttribute("depth", X(-a))), s.setAttribute("voffset", X(a)), s;
  }
});
function h4(n, e, t) {
  for (var r = gt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return R.makeFragment(r);
}
var pc = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], o6 = (n, e) => {
  var t = e.havingSize(n.size);
  return h4(n.body, t, e);
};
Y({
  type: "sizing",
  names: pc,
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
      size: pc.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: o6,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = a0(n.body, t), a = new U.MathNode("mstyle", r);
    return a.setAttribute("mathsize", X(t.sizeMultiplier)), a;
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
    } = n, a = !1, i = !1, l = t[0] && pe(t[0], "ordgroup");
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
    var t = R.makeSpan([], [Se(n.body, e)]);
    if (!n.smashHeight && !n.smashDepth)
      return t;
    if (n.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (n.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = R.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return R.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new U.MathNode("mpadded", [Ie(n.body, e)]);
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
    var t = Se(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = R.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < ae.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: u,
      advanceWidth: c
    } = Cr.sqrtImage(s, e), d = o.height - u;
    d > t.height + t.depth + l && (l = (l + d - t.height - t.depth) / 2);
    var h = o.height - t.height - l - u;
    t.style.paddingLeft = X(c);
    var p = R.makeVList({
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
      var _ = e.havingStyle(ae.SCRIPTSCRIPT), b = Se(n.index, _, e), D = 0.6 * (p.height - p.depth), y = R.makeVList({
        positionType: "shift",
        positionData: -D,
        children: [{
          type: "elem",
          elem: b
        }]
      }, e), k = R.makeSpan(["root"], [y]);
      return R.makeSpan(["mord", "sqrt"], [k, p], e);
    } else
      return R.makeSpan(["mord", "sqrt"], [p], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new U.MathNode("mroot", [Ie(t, e), Ie(r, e)]) : new U.MathNode("msqrt", [Ie(t, e)]);
  }
});
var gc = {
  display: ae.DISPLAY,
  text: ae.TEXT,
  script: ae.SCRIPT,
  scriptscript: ae.SCRIPTSCRIPT
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
    var t = gc[n.style], r = e.havingStyle(t).withFont("");
    return h4(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = gc[n.style], r = e.havingStyle(t), a = a0(n.body, r), i = new U.MathNode("mstyle", a), l = {
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
      var a = r.limits && (t.style.size === ae.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? ua : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === ae.DISPLAY.size || r.limits);
      return i ? f4 : null;
    } else {
      if (r.type === "accent")
        return re.isCharacterBox(r.base) ? Lu : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? o4 : null;
      } else
        return null;
    }
  else return null;
};
Bn({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = u6(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, l = Se(r, e), s, o, u = e.fontMetrics(), c = 0, d = 0, h = r && re.isCharacterBox(r);
    if (a) {
      var p = e.havingStyle(e.style.sup());
      s = Se(a, p, e), h || (c = l.height - p.fontMetrics().supDrop * p.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var _ = e.havingStyle(e.style.sub());
      o = Se(i, _, e), h || (d = l.depth + _.fontMetrics().subDrop * _.sizeMultiplier / e.sizeMultiplier);
    }
    var b;
    e.style === ae.DISPLAY ? b = u.sup1 : e.style.cramped ? b = u.sup3 : b = u.sup2;
    var D = e.sizeMultiplier, y = X(0.5 / u.ptPerEm / D), k = null;
    if (o) {
      var w = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof x0 || w) && (k = X(-l.italic));
    }
    var E;
    if (s && o) {
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), d = Math.max(d, u.sub2);
      var S = u.defaultRuleThickness, T = 4 * S;
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
      E = R.makeVList({
        positionType: "individualShift",
        children: F
      }, e);
    } else if (o) {
      d = Math.max(d, u.sub1, o.height - 0.8 * u.xHeight);
      var B = [{
        type: "elem",
        elem: o,
        marginLeft: k,
        marginRight: y
      }];
      E = R.makeVList({
        positionType: "shift",
        positionData: d,
        children: B
      }, e);
    } else if (s)
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), E = R.makeVList({
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
    var I = Jo(l, "right") || "mord";
    return R.makeSpan([I], [l, R.makeSpan(["msupsub"], [E])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [Ie(n.base, e)];
    n.sub && i.push(Ie(n.sub, e)), n.sup && i.push(Ie(n.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var u = n.base;
        u && u.type === "op" && u.limits && e.style === ae.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === ae.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = n.base;
        o && o.type === "op" && o.limits && (e.style === ae.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === ae.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = n.base;
      s && s.type === "op" && s.limits && (e.style === ae.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === ae.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new U.MathNode(l, i);
  }
});
Bn({
  type: "atom",
  htmlBuilder(n, e) {
    return R.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mo", [T0(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Bu(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var d4 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Bn({
  type: "mathord",
  htmlBuilder(n, e) {
    return R.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mi", [T0(n.text, n.mode, e)]), r = Bu(n, e) || "italic";
    return r !== d4[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Bn({
  type: "textord",
  htmlBuilder(n, e) {
    return R.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = T0(n.text, n.mode, e), r = Bu(n, e) || "normal", a;
    return n.mode === "text" ? a = new U.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new U.MathNode("mn", [t]) : n.text === "\\prime" ? a = new U.MathNode("mo", [t]) : a = new U.MathNode("mi", [t]), r !== d4[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var io = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, lo = {
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
Bn({
  type: "spacing",
  htmlBuilder(n, e) {
    if (lo.hasOwnProperty(n.text)) {
      var t = lo[n.text].className || "";
      if (n.mode === "text") {
        var r = R.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return R.makeSpan(["mspace", t], [R.mathsym(n.text, n.mode, e)], e);
    } else {
      if (io.hasOwnProperty(n.text))
        return R.makeSpan(["mspace", io[n.text]], [], e);
      throw new G('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (lo.hasOwnProperty(n.text))
      t = new U.MathNode("mtext", [new U.TextNode(" ")]);
    else {
      if (io.hasOwnProperty(n.text))
        return new U.MathNode("mspace");
      throw new G('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var _c = () => {
  var n = new U.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
Bn({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mtable", [new U.MathNode("mtr", [_c(), new U.MathNode("mtd", [cn(n.body, e)]), _c(), new U.MathNode("mtd", [cn(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var vc = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, bc = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, c6 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, wc = (n, e) => {
  var t = n.font;
  if (t) {
    if (vc[t])
      return e.withTextFontFamily(vc[t]);
    if (bc[t])
      return e.withTextFontWeight(bc[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(c6[t]);
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
      body: tt(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = wc(n, e), r = gt(n.body, t, !0);
    return R.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = wc(n, e);
    return cn(n.body, t);
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
    var t = Se(n.body, e), r = R.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = R.makeVList({
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
    return R.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new U.MathNode("munder", [Ie(n.body, e), t]);
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
    var t = Se(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
    return R.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    return new U.MathNode("mpadded", [Ie(n.body, e)], ["vcenter"]);
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
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = yc(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(R.makeSymbol(l, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return R.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), R.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new U.TextNode(yc(n)), r = new U.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var yc = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), an = Nd, m4 = `[ \r
	]`, f6 = "\\\\[a-zA-Z@]+", h6 = "\\\\[^\uD800-\uDFFF]", d6 = "(" + f6 + ")" + m4 + "*", m6 = `\\\\(
|[ \r	]+
?)[ \r	]*`, tu = "[̀-ͯ]", p6 = new RegExp(tu + "+$"), g6 = "(" + m4 + "+)|" + // whitespace
(m6 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(tu + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(tu + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + d6) + // \macroName + spaces
("|" + h6 + ")");
class kc {
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
      return new S0("EOF", new u0(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new S0(e[t], new u0(this, t, t + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new S0(a, new u0(this, t, this.tokenRegex.lastIndex));
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
      throw new G("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
var v6 = n4;
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
var Dc = {
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
        throw new G("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = Dc[e.text], r == null || r >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Dc[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Vu = (n, e, t) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new G("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !e)
    throw new G("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new G("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var s = "", o = n.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = n.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new G("Invalid number of arguments: " + s);
    l = parseInt(s), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: l
  }), "";
};
v("\\newcommand", (n) => Vu(n, !1, !0));
v("\\renewcommand", (n) => Vu(n, !0, !1));
v("\\providecommand", (n) => Vu(n, !0, !0));
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
  return console.log(e, n.macros.get(t), an[t], Ne.math[t], Ne.text[t]), "";
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
var Ac = {
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
  return t in Ac ? e = Ac[t] : (t.slice(0, 4) === "\\not" || t in Ne.math && re.contains(["bin", "rel"], Ne.math[t].group)) && (e = "\\dotsb"), e;
});
var Gu = {
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
  return e in Gu ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function(n) {
  var e = n.future().text;
  return e in Gu && e !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function(n) {
  var e = n.future().text;
  return e in Gu ? "\\@cdots\\," : "\\@cdots";
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
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var p4 = X(rr["Main-Regular"][84][1] - 0.7 * rr["Main-Regular"][65][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + p4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + p4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var g4 = (n) => (e) => {
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
v("\\bra@ket", g4(!1));
v("\\bra@set", g4(!0));
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
var _4 = {
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
    this.lexer = new kc(e, this.settings);
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
    return this.pushToken(new S0("EOF", r.loc)), this.pushTokens(a), t.range(r, "");
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
          throw new G("Extra }", i);
      } else if (i.text === "EOF")
        throw new G("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", i);
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
        throw new G("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new G("Use of the macro doesn't match its definition", i);
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
      throw new G("Too many expansions: infinite loop or need to increase maxExpand setting");
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
        throw new G("Undefined control sequence: " + r);
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
            throw new G("Incomplete placeholder at end of macro body", o);
          if (o = i[--s], o.text === "#")
            i.splice(s + 1, 1);
          else if (/^[1-9]$/.test(o.text))
            i.splice(s, 2, ...l[+o.text - 1]);
          else
            throw new G("Not a valid argument number", o);
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
    return this.macros.has(e) ? this.expandTokens([new S0(e)]) : void 0;
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
      for (var s = new kc(a, this.settings), o = [], u = s.lex(); u.text !== "EOF"; )
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
    return this.macros.has(e) || an.hasOwnProperty(e) || Ne.math.hasOwnProperty(e) || Ne.text.hasOwnProperty(e) || _4.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : an.hasOwnProperty(e) && !an[e].primitive;
  }
}
var Ec = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Gi = Object.freeze({
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
}), so = {
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
}, Sc = {
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
class ts {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new b6(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new G("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new S0("}")), this.gullet.pushTokens(e);
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
      if (ts.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && an[a.text] && an[a.text].infix)
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
          throw new G("only one infix operator per group", e[a].token);
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
      throw new G("Expected group after '" + r + "'", t);
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
          throw new G("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new G("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new G("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new G("Double superscript", i);
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
      } else if (Gi[i.text]) {
        var u = Ec.test(i.text), c = [];
        for (c.push(new S0(Gi[i.text])), this.consume(); ; ) {
          var d = this.fetch().text;
          if (!Gi[d] || Ec.test(d) !== u)
            break;
          c.unshift(new S0(Gi[d])), this.consume();
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
    var r = this.fetch(), a = r.text, i = an[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new G("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new G("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new G("Can't use function '" + a + "' in math mode", r);
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
    }, s = an[e];
    if (s && s.handler)
      return s.handler(l, t, r);
    throw new G("No function handler for " + e);
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
        throw new G("Null argument, please report this as a bug");
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
          throw new G("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new G("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new G("Unknown group type as " + e, this.fetch());
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
      throw new G("Invalid " + t + ": '" + r.text + "'", r);
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
      throw new G("Invalid color: '" + t.text + "'", t);
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
      throw new G("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!xd(i))
      throw new G("Invalid unit: '" + i.unit + "'", t);
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
        loc: u0.range(r, o),
        body: s,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !_4.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new G("Undefined control sequence: " + a, r);
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
        loc: u0.range(a, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: u0.range(a, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: u0.range(a, e[r + 1]),
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
        throw new G(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    Sc.hasOwnProperty(t[0]) && !Ne[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Sc[t[0]] + t.slice(1));
    var i = p6.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (Ne[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ko.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var s = Ne[this.mode][t].group, o = u0.range(e), u;
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
      this.settings.strict && (Sd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: u0.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var d = 0; d < i[0].length; d++) {
        var h = i[0][d];
        if (!so[h])
          throw new G("Unknown accent ' " + h + "'", e);
        var p = so[h][this.mode] || so[h].text;
        if (!p)
          throw new G("Accent " + h + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: u0.range(e),
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
ts.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var ju = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new ts(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new S0("\\df@tag")])
    }];
  }
  return a;
}, v4 = function(e, t, r) {
  t.textContent = "";
  var a = Wu(e, r).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), v4 = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var w6 = function(e, t) {
  var r = Wu(e, t).toMarkup();
  return r;
}, y6 = function(e, t) {
  var r = new xu(t);
  return ju(e, r);
}, b4 = function(e, t, r) {
  if (r.throwOnError || !(e instanceof G))
    throw e;
  var a = R.makeSpan(["katex-error"], [new x0(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, Wu = function(e, t) {
  var r = new xu(t);
  try {
    var a = ju(e, r);
    return F3(a, e, r);
  } catch (i) {
    return b4(i, e, r);
  }
}, k6 = function(e, t) {
  var r = new xu(t);
  try {
    var a = ju(e, r);
    return M3(a, e, r);
  } catch (i) {
    return b4(i, e, r);
  }
}, ru = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: v4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: w6,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: gl,
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
  __renderToDomTree: Wu,
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
  __defineFunction: Y,
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
    Span: ri,
    Anchor: Fu,
    SymbolNode: x0,
    SvgNode: Br,
    PathNode: un,
    LineNode: Zo
  }
};
const ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ru
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
        t.preProcess && (s = t.preProcess(s)), ru.render(s, l, t);
      } catch (o) {
        if (!(o instanceof ru.ParseError))
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
function Xu() {
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
let In = Xu();
function w4(n) {
  In = n;
}
const y4 = /[&<>"']/, F6 = new RegExp(y4.source, "g"), k4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, M6 = new RegExp(k4.source, "g"), z6 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, xc = (n) => z6[n];
function c0(n, e) {
  if (e) {
    if (y4.test(n))
      return n.replace(F6, xc);
  } else if (k4.test(n))
    return n.replace(M6, xc);
  return n;
}
const B6 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function I6(n) {
  return n.replace(B6, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const L6 = /(^|[^\[])\^/g;
function Me(n, e) {
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
function Tc(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Pa = { exec: () => null };
function Cc(n, e) {
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
function ji(n, e, t) {
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
function Fc(n, e, t, r) {
  const a = e.href, i = e.title ? c0(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: c0(l)
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
class zl {
  // set by the lexer
  constructor(e) {
    Oe(this, "options");
    Oe(this, "rules");
    // set by the lexer
    Oe(this, "lexer");
    this.options = e || In;
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
        text: this.options.pedantic ? r : ji(r, `
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
        const a = ji(r, "#");
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
      r = ji(r.replace(/^ *>[ \t]?/gm, ""), `
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
          const y = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), k = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), w = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), E = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const S = e.split(`
`, 1)[0];
            if (h = S, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), w.test(h) || E.test(h) || y.test(h) || k.test(e))
              break;
            if (h.search(/[^ ]/) >= p || !h.trim())
              o += `
` + h.slice(p);
            else {
              if (_ || d.search(/[^ ]/) >= 4 || w.test(d) || E.test(d) || k.test(d))
                break;
              o += `
` + h;
            }
            !_ && !h.trim() && (_ = !0), s += S + `
`, e = e.substring(S.length + 1), d = h.slice(p);
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
    const r = Cc(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        l.rows.push(Cc(s, l.header.length).map((o) => ({
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
        text: c0(t[1])
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
        const l = ji(r.slice(0, -1), "\\");
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
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), Fc(t, {
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
      return Fc(r, i, r[0], this.lexer);
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
      return a && i && (r = r.substring(1, r.length - 1)), r = c0(r, !0), {
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
      return t[2] === "@" ? (r = c0(t[1]), a = "mailto:" + r) : (r = c0(t[1]), a = r), {
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
        a = c0(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = c0(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
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
      return this.lexer.state.inRawBlock ? r = t[0] : r = c0(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const O6 = /^(?: *(?:\n|$))+/, q6 = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, P6 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ai = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, H6 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, D4 = /(?:[*+-]|\d{1,9}[.)])/, A4 = Me(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, D4).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Yu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, U6 = /^[^\n]+/, Zu = /(?!\s*\])(?:\\.|[^\[\]\\])+/, V6 = Me(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Zu).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), G6 = Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, D4).getRegex(), rs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ku = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, j6 = Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Ku).replace("tag", rs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), E4 = Me(Yu).replace("hr", ai).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rs).getRegex(), W6 = Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", E4).getRegex(), Ju = {
  blockquote: W6,
  code: q6,
  def: V6,
  fences: P6,
  heading: H6,
  hr: ai,
  html: j6,
  lheading: A4,
  list: G6,
  newline: O6,
  paragraph: E4,
  table: Pa,
  text: U6
}, Mc = Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ai).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rs).getRegex(), X6 = {
  ...Ju,
  table: Mc,
  paragraph: Me(Yu).replace("hr", ai).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Mc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rs).getRegex()
}, Y6 = {
  ...Ju,
  html: Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ku).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Pa,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Me(Yu).replace("hr", ai).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", A4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, S4 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Z6 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, x4 = /^( {2,}|\\)\n(?!\s*$)/, K6 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ii = "\\p{P}\\p{S}", J6 = Me(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ii).getRegex(), Q6 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, $6 = Me(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ii).getRegex(), e7 = Me("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ii).getRegex(), t7 = Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ii).getRegex(), r7 = Me(/\\([punct])/, "gu").replace(/punct/g, ii).getRegex(), n7 = Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), a7 = Me(Ku).replace("(?:-->|$)", "-->").getRegex(), i7 = Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", a7).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Bl = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, l7 = Me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Bl).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), T4 = Me(/^!?\[(label)\]\[(ref)\]/).replace("label", Bl).replace("ref", Zu).getRegex(), C4 = Me(/^!?\[(ref)\](?:\[\])?/).replace("ref", Zu).getRegex(), s7 = Me("reflink|nolink(?!\\()", "g").replace("reflink", T4).replace("nolink", C4).getRegex(), Qu = {
  _backpedal: Pa,
  // only used for GFM url
  anyPunctuation: r7,
  autolink: n7,
  blockSkip: Q6,
  br: x4,
  code: Z6,
  del: Pa,
  emStrongLDelim: $6,
  emStrongRDelimAst: e7,
  emStrongRDelimUnd: t7,
  escape: S4,
  link: l7,
  nolink: C4,
  punctuation: J6,
  reflink: T4,
  reflinkSearch: s7,
  tag: i7,
  text: K6,
  url: Pa
}, o7 = {
  ...Qu,
  link: Me(/^!?\[(label)\]\((.*?)\)/).replace("label", Bl).getRegex(),
  reflink: Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Bl).getRegex()
}, nu = {
  ...Qu,
  escape: Me(S4).replace("])", "~|])").getRegex(),
  url: Me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, u7 = {
  ...nu,
  br: Me(x4).replace("{2,}", "*").getRegex(),
  text: Me(nu.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Wi = {
  normal: Ju,
  gfm: X6,
  pedantic: Y6
}, Da = {
  normal: Qu,
  gfm: nu,
  breaks: u7,
  pedantic: o7
};
class nr {
  constructor(e) {
    Oe(this, "tokens");
    Oe(this, "options");
    Oe(this, "state");
    Oe(this, "tokenizer");
    Oe(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || In, this.options.tokenizer = this.options.tokenizer || new zl(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Wi.normal,
      inline: Da.normal
    };
    this.options.pedantic ? (t.block = Wi.pedantic, t.inline = Da.pedantic) : this.options.gfm && (t.block = Wi.gfm, this.options.breaks ? t.inline = Da.breaks : t.inline = Da.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Wi,
      inline: Da
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new nr(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new nr(t).inlineTokens(e);
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
class Il {
  constructor(e) {
    Oe(this, "options");
    this.options = e || In;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + c0(a) + '">' + (r ? e : c0(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : c0(e, !0)) + `</code></pre>
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
    const a = Tc(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = Tc(e);
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
class $u {
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
class ar {
  constructor(e) {
    Oe(this, "options");
    Oe(this, "renderer");
    Oe(this, "textRenderer");
    this.options = e || In, this.options.renderer = this.options.renderer || new Il(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new $u();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new ar(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new ar(t).parseInline(e);
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
class Ha {
  constructor(e) {
    Oe(this, "options");
    this.options = e || In;
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
Oe(Ha, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var zn, au, M4;
class F4 {
  constructor(...e) {
    S1(this, zn);
    Oe(this, "defaults", Xu());
    Oe(this, "options", this.setOptions);
    Oe(this, "parse", yi(this, zn, au).call(this, nr.lex, ar.parse));
    Oe(this, "parseInline", yi(this, zn, au).call(this, nr.lexInline, ar.parseInline));
    Oe(this, "Parser", ar);
    Oe(this, "Renderer", Il);
    Oe(this, "TextRenderer", $u);
    Oe(this, "Lexer", nr);
    Oe(this, "Tokenizer", zl);
    Oe(this, "Hooks", Ha);
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
        const i = this.defaults.renderer || new Il(this.defaults);
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
        const i = this.defaults.tokenizer || new zl(this.defaults);
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
        const i = this.defaults.hooks || new Ha();
        for (const l in r.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.hooks[s], u = i[s];
          Ha.passThroughHooks.has(l) ? i[s] = (c) => {
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
    return nr.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return ar.parse(e, t ?? this.defaults);
  }
}
zn = new WeakSet(), au = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = yi(this, zn, M4).call(this, !!l.silent, !!l.async);
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
}, M4 = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + c0(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const Fn = new F4();
function Fe(n, e) {
  return Fn.parse(n, e);
}
Fe.options = Fe.setOptions = function(n) {
  return Fn.setOptions(n), Fe.defaults = Fn.defaults, w4(Fe.defaults), Fe;
};
Fe.getDefaults = Xu;
Fe.defaults = In;
Fe.use = function(...n) {
  return Fn.use(...n), Fe.defaults = Fn.defaults, w4(Fe.defaults), Fe;
};
Fe.walkTokens = function(n, e) {
  return Fn.walkTokens(n, e);
};
Fe.parseInline = Fn.parseInline;
Fe.Parser = ar;
Fe.parser = ar.parse;
Fe.Renderer = Il;
Fe.TextRenderer = $u;
Fe.Lexer = nr;
Fe.lexer = nr.lex;
Fe.Tokenizer = zl;
Fe.Hooks = Ha;
Fe.parse = Fe;
Fe.options;
Fe.setOptions;
Fe.use;
Fe.walkTokens;
Fe.parseInline;
ar.parse;
nr.lex;
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
      const t = zc(e.lang);
      if (n.async)
        return Promise.resolve(n.highlight(e.text, t, e.lang || "")).then(Bc(e));
      const r = n.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Bc(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const a = zc(t), i = a ? n.langPrefix + Lc(a) : n.emptyLangClass, l = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${l}>${r ? e : Lc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function zc(n) {
  return (n || "").match(/\S*/)[0];
}
function Bc(n) {
  return (e) => {
    typeof e == "string" && e !== n.text && (n.escaped = !0, n.text = e);
  };
}
const z4 = /[&<>"']/, f7 = new RegExp(z4.source, "g"), B4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, h7 = new RegExp(B4.source, "g"), d7 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ic = (n) => d7[n];
function Lc(n, e) {
  if (e) {
    if (z4.test(n))
      return n.replace(f7, Ic);
  } else if (B4.test(n))
    return n.replace(h7, Ic);
  return n;
}
const m7 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, p7 = Object.hasOwnProperty;
class ns {
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
let I4 = new ns(), L4 = [];
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
        const i = `${n}${I4.slug(a)}`, l = { level: r, text: t, id: i };
        return L4.push(l), `<h${r} id="${i}">${t}</h${r}>
`;
      }
    }
  };
}
function v7() {
  L4 = [], I4 = new ns();
}
var Nc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ny(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var N4 = { exports: {} };
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
        clone: function k(w, E) {
          E = E || {};
          var S, T;
          switch (s.util.type(w)) {
            case "Object":
              if (T = s.util.objId(w), E[T])
                return E[T];
              S = /** @type {Record<string, any>} */
              {}, E[T] = S;
              for (var C in w)
                w.hasOwnProperty(C) && (S[C] = k(w[C], E));
              return (
                /** @type {any} */
                S
              );
            case "Array":
              return T = s.util.objId(w), E[T] ? E[T] : (S = [], E[T] = S, /** @type {Array} */
              /** @type {any} */
              w.forEach(function(F, B) {
                S[B] = k(F, E);
              }), /** @type {any} */
              S);
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
          } catch (S) {
            var k = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
            if (k) {
              var w = document.getElementsByTagName("script");
              for (var E in w)
                if (w[E].src == k)
                  return w[E];
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
        isActive: function(k, w, E) {
          for (var S = "no-" + w; k; ) {
            var T = k.classList;
            if (T.contains(w))
              return !0;
            if (T.contains(S))
              return !1;
            k = k.parentElement;
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
        extend: function(k, w) {
          var E = s.util.clone(s.languages[k]);
          for (var S in w)
            E[S] = w[S];
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
        insertBefore: function(k, w, E, S) {
          S = S || /** @type {any} */
          s.languages;
          var T = S[k], C = {};
          for (var F in T)
            if (T.hasOwnProperty(F)) {
              if (F == w)
                for (var B in E)
                  E.hasOwnProperty(B) && (C[B] = E[B]);
              E.hasOwnProperty(F) || (C[F] = T[F]);
            }
          var I = S[k];
          return S[k] = C, s.languages.DFS(s.languages, function(L, P) {
            P === I && L != k && (this[L] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function k(w, E, S, T) {
          T = T || {};
          var C = s.util.objId;
          for (var F in w)
            if (w.hasOwnProperty(F)) {
              E.call(w, F, w[F], S || F);
              var B = w[F], I = s.util.type(B);
              I === "Object" && !T[C(B)] ? (T[C(B)] = !0, k(B, E, null, T)) : I === "Array" && !T[C(B)] && (T[C(B)] = !0, k(B, E, F, T));
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
      highlightAllUnder: function(k, w, E) {
        var S = {
          callback: E,
          container: k,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), s.hooks.run("before-all-elements-highlight", S);
        for (var T = 0, C; C = S.elements[T++]; )
          s.highlightElement(C, w === !0, S.callback);
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
      highlightElement: function(k, w, E) {
        var S = s.util.getLanguage(k), T = s.languages[S];
        s.util.setLanguage(k, S);
        var C = k.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && s.util.setLanguage(C, S);
        var F = k.textContent, B = {
          element: k,
          language: S,
          grammar: T,
          code: F
        };
        function I(P) {
          B.highlightedCode = P, s.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, s.hooks.run("after-highlight", B), s.hooks.run("complete", B), E && E.call(B.element);
        }
        if (s.hooks.run("before-sanity-check", B), C = B.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !B.code) {
          s.hooks.run("complete", B), E && E.call(B.element);
          return;
        }
        if (s.hooks.run("before-highlight", B), !B.grammar) {
          I(s.util.encode(B.code));
          return;
        }
        if (w && r.Worker) {
          var L = new Worker(s.filename);
          L.onmessage = function(P) {
            I(P.data);
          }, L.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          I(s.highlight(B.code, B.grammar, B.language));
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
      highlight: function(k, w, E) {
        var S = {
          code: k,
          grammar: w,
          language: E
        };
        if (s.hooks.run("before-tokenize", S), !S.grammar)
          throw new Error('The language "' + S.language + '" has no grammar.');
        return S.tokens = s.tokenize(S.code, S.grammar), s.hooks.run("after-tokenize", S), o.stringify(s.util.encode(S.tokens), S.language);
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
        var E = w.rest;
        if (E) {
          for (var S in E)
            w[S] = E[S];
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
          var E = s.hooks.all;
          E[k] = E[k] || [], E[k].push(w);
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
          var E = s.hooks.all[k];
          if (!(!E || !E.length))
            for (var S = 0, T; T = E[S++]; )
              T(w);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(k, w, E, S) {
      this.type = k, this.content = w, this.alias = E, this.length = (S || "").length | 0;
    }
    o.stringify = function k(w, E) {
      if (typeof w == "string")
        return w;
      if (Array.isArray(w)) {
        var S = "";
        return w.forEach(function(I) {
          S += k(I, E);
        }), S;
      }
      var T = {
        type: w.type,
        content: k(w.content, E),
        tag: "span",
        classes: ["token", w.type],
        attributes: {},
        language: E
      }, C = w.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(T.classes, C) : T.classes.push(C)), s.hooks.run("wrap", T);
      var F = "";
      for (var B in T.attributes)
        F += " " + B + '="' + (T.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + F + ">" + T.content + "</" + T.tag + ">";
    };
    function u(k, w, E, S) {
      k.lastIndex = w;
      var T = k.exec(E);
      if (T && S && T[1]) {
        var C = T[1].length;
        T.index += C, T[0] = T[0].slice(C);
      }
      return T;
    }
    function c(k, w, E, S, T, C) {
      for (var F in E)
        if (!(!E.hasOwnProperty(F) || !E[F])) {
          var B = E[F];
          B = Array.isArray(B) ? B : [B];
          for (var I = 0; I < B.length; ++I) {
            if (C && C.cause == F + "," + I)
              return;
            var L = B[I], P = L.inside, Z = !!L.lookbehind, O = !!L.greedy, se = L.alias;
            if (O && !L.pattern.global) {
              var K = L.pattern.toString().match(/[imsuy]*$/)[0];
              L.pattern = RegExp(L.pattern.source, K + "g");
            }
            for (var he = L.pattern || L, ue = S.next, Ae = T; ue !== w.tail && !(C && Ae >= C.reach); Ae += ue.value.length, ue = ue.next) {
              var ye = ue.value;
              if (w.length > k.length)
                return;
              if (!(ye instanceof o)) {
                var $ = 1, de;
                if (O) {
                  if (de = u(he, Ae, k, Z), !de || de.index >= k.length)
                    break;
                  var j = de.index, ce = de.index + de[0].length, Ce = Ae;
                  for (Ce += ue.value.length; j >= Ce; )
                    ue = ue.next, Ce += ue.value.length;
                  if (Ce -= ue.value.length, Ae = Ce, ue.value instanceof o)
                    continue;
                  for (var V = ue; V !== w.tail && (Ce < ce || typeof V.value == "string"); V = V.next)
                    $++, Ce += V.value.length;
                  $--, ye = k.slice(Ae, Ce), de.index -= Ae;
                } else if (de = u(he, 0, ye, Z), !de)
                  continue;
                var j = de.index, ge = de[0], ke = ye.slice(0, j), Te = ye.slice(j + ge.length), ze = Ae + ye.length;
                C && ze > C.reach && (C.reach = ze);
                var Le = ue.prev;
                ke && (Le = h(w, Le, ke), Ae += ke.length), p(w, Le, $);
                var je = new o(F, P ? s.tokenize(ge, P) : ge, se, ge);
                if (ue = h(w, Le, je), Te && h(w, ue, Te), $ > 1) {
                  var ft = {
                    cause: F + "," + I,
                    reach: ze
                  };
                  c(k, w, E, ue.prev, Ae, ft), C && ft.reach > C.reach && (C.reach = ft.reach);
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
    function h(k, w, E) {
      var S = w.next, T = { value: E, prev: w, next: S };
      return w.next = T, S.prev = T, k.length++, T;
    }
    function p(k, w, E) {
      for (var S = w.next, T = 0; T < E && S !== k.tail; T++)
        S = S.next;
      w.next = S, S.prev = w, k.length -= T;
    }
    function _(k) {
      for (var w = [], E = k.head.next; E !== k.tail; )
        w.push(E.value), E = E.next;
      return w;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(k) {
        var w = JSON.parse(k.data), E = w.language, S = w.code, T = w.immediateClose;
        r.postMessage(s.highlight(S, s.languages[E], E)), T && r.close();
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
  n.exports && (n.exports = t), typeof Nc < "u" && (Nc.Prism = t), t.languages.markup = {
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
          var E = (/\.(\w+)$/.exec(k) || [, "none"])[1];
          w = l[E] || E;
        }
        t.util.setLanguage(y, w), t.util.setLanguage(D, w);
        var S = t.plugins.autoloader;
        S && S.loadLanguages(w), h(
          k,
          function(T) {
            D.setAttribute(s, u);
            var C = p(D.getAttribute("data-range"));
            if (C) {
              var F = T.split(/\r\n?|\n/g), B = C[0], I = C[1] == null ? F.length : C[1];
              B < 0 && (B += F.length), B = Math.max(0, Math.min(B - 1, F.length)), I < 0 && (I += F.length), I = Math.max(0, Math.min(I, F.length)), T = F.slice(B, I).join(`
`), D.hasAttribute("data-start") || D.setAttribute("data-start", String(B + 1));
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
})(N4);
var oo = N4.exports;
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
new ns();
const iu = (n) => JSON.parse(JSON.stringify(n)), b7 = (n) => n.nodeType === 1, w7 = (n) => H7.has(n.tagName), y7 = (n) => "action" in n, k7 = (n) => n.tagName === "IFRAME", D7 = (n) => "formAction" in n, A7 = (n) => "protocol" in n, Xi = /* @__PURE__ */ (() => {
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
}, R4 = (n, e) => {
  let t = n.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    b7(t) && (e(t, n), t.parentNode && R4(t, e)), t = r;
  }
}, x7 = (n, e) => {
  const t = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const a = r.parentNode;
    a && e(r, a);
  }
}, T7 = (n, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? x7(n, e) : R4(n, e), O4 = [
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
  ...O4,
  ...C7
]), q4 = [
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
  ...q4,
  ...M7
]), P4 = [
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
  ...P4,
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
], G0 = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, O7 = {
  [G0.HTML]: F7,
  [G0.SVG]: z7,
  [G0.MATH]: I7
}, q7 = {
  [G0.HTML]: "html",
  [G0.SVG]: "svg",
  [G0.MATH]: "math"
}, P7 = {
  [G0.HTML]: "",
  [G0.SVG]: "svg:",
  [G0.MATH]: "math:"
}, H7 = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), H4 = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...O4,
    ...q4.map((n) => `svg:${n}`),
    ...P4.map((n) => `math:${n}`)
  ],
  allowAttributes: S7([
    Object.fromEntries(L7.map((n) => [n, ["*"]])),
    Object.fromEntries(N7.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(R7.map((n) => [n, ["math:*"]]))
  ])
};
var uo = function(n, e, t, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n !== e || !a : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, t) : a ? a.value = t : e.set(n, t), t;
}, wn = function(n, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !r : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n);
}, Qr, vl, bl;
class U4 {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    Qr.set(this, void 0), vl.set(this, void 0), bl.set(this, void 0), this.getConfiguration = () => iu(wn(this, Qr, "f")), this.sanitize = (c) => {
      const d = wn(this, vl, "f"), h = wn(this, bl, "f");
      return T7(c, (p, _) => {
        const b = p.namespaceURI || G0.HTML, D = _.namespaceURI || G0.HTML, y = O7[b], k = q7[b], w = P7[b], E = p.tagName.toLowerCase(), S = `${w}${E}`, C = `${w}*`;
        if (!y.has(E) || !d.has(S) || b !== D && E !== k)
          _.removeChild(p);
        else {
          const F = p.getAttributeNames(), B = F.length;
          if (B) {
            for (let I = 0; I < B; I++) {
              const L = F[I], P = h[L];
              (!P || !P.has(C) && !P.has(S)) && p.removeAttribute(L);
            }
            if (w7(p))
              if (A7(p)) {
                const I = p.getAttribute("href");
                I && E7(I) && Xi(p.protocol) && p.removeAttribute("href");
              } else y7(p) ? Xi(p.action) && p.removeAttribute("action") : D7(p) ? Xi(p.formAction) && p.removeAttribute("formaction") : k7(p) && (Xi(p.src) && p.removeAttribute("formaction"), p.setAttribute("sandbox", "allow-scripts"));
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
    uo(this, Qr, iu(H4), "f");
    const { allowElements: o, allowAttributes: u } = e;
    o && (wn(this, Qr, "f").allowElements = e.allowElements), u && (wn(this, Qr, "f").allowAttributes = e.allowAttributes), uo(this, vl, new Set(wn(this, Qr, "f").allowElements), "f"), uo(this, bl, Object.fromEntries(Object.entries(wn(this, Qr, "f").allowAttributes || {}).map(([c, d]) => [c, new Set(d)])), "f");
  }
}
Qr = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
U4.getDefaultConfiguration = () => iu(H4);
const U7 = (n, e) => {
  try {
    return !!n && new URL(n).origin !== new URL(e).origin;
  } catch {
    return !1;
  }
};
function Rc(n, e) {
  const t = new U4(), r = new DOMParser().parseFromString(n, "text/html");
  return V4(r.body, "A", (a) => {
    a instanceof HTMLElement && "target" in a && U7(a.getAttribute("href"), e) && (a.setAttribute("target", "_blank"), a.setAttribute("rel", "noopener noreferrer"));
  }), t.sanitize(r).body.innerHTML;
}
function V4(n, e, t) {
  n && (n.nodeName === e || typeof e == "function") && t(n);
  const r = (n == null ? void 0 : n.childNodes) || [];
  for (let a = 0; a < r.length; a++)
    V4(r[a], e, t);
}
function ea(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
function wl() {
}
const V7 = (n) => n;
function G7(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const G4 = typeof window < "u";
let Oc = G4 ? () => window.performance.now() : () => Date.now(), j4 = G4 ? (n) => requestAnimationFrame(n) : wl;
const na = /* @__PURE__ */ new Set();
function W4(n) {
  na.forEach((e) => {
    e.c(n) || (na.delete(e), e.f());
  }), na.size !== 0 && j4(W4);
}
function j7(n) {
  let e;
  return na.size === 0 && j4(W4), {
    promise: new Promise((t) => {
      na.add(e = { c: n, f: t });
    }),
    abort() {
      na.delete(e);
    }
  };
}
function e1(n, { delay: e = 0, duration: t = 400, easing: r = V7 } = {}) {
  const a = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (i) => `opacity: ${i * a}`
  };
}
const Gn = [];
function W7(n, e = wl) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (G7(n, s) && (n = s, t)) {
      const o = !Gn.length;
      for (const u of r)
        u[1](), Gn.push(u, n);
      if (o) {
        for (let u = 0; u < Gn.length; u += 2)
          Gn[u][0](Gn[u + 1]);
        Gn.length = 0;
      }
    }
  }
  function i(s) {
    a(s(n));
  }
  function l(s, o = wl) {
    const u = [s, o];
    return r.add(u), r.size === 1 && (t = e(a, i) || wl), s(n), () => {
      r.delete(u), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function qc(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function lu(n, e, t, r) {
  if (typeof t == "number" || qc(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = n.opts.stiffness * a, s = n.opts.damping * i, o = (l - s) * n.inv_mass, u = (i + o) * n.dt;
    return Math.abs(u) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, qc(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => lu(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = lu(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Pc(n, e = {}) {
  const t = W7(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, u = n, c = n, d = 1, h = 0, p = !1;
  function _(D, y = {}) {
    c = D;
    const k = o = {};
    return n == null || y.hard || b.stiffness >= 1 && b.damping >= 1 ? (p = !0, l = Oc(), u = D, t.set(n = c), Promise.resolve()) : (y.soft && (h = 1 / ((y.soft === !0 ? 0.5 : +y.soft) * 60), d = 0), s || (l = Oc(), p = !1, s = j7((w) => {
      if (p)
        return p = !1, s = null, !1;
      d = Math.min(d + h, 1);
      const E = {
        inv_mass: d,
        opts: b,
        settled: !0,
        dt: (w - l) * 60 / 1e3
      }, S = lu(E, u, n, c);
      return l = w, u = n, t.set(n = S), E.settled && (s = null), !E.settled;
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
  append_hydration: L0,
  attr: Ee,
  children: g0,
  claim_element: Y7,
  claim_svg_element: N0,
  component_subscribe: Hc,
  detach: s0,
  element: Z7,
  init: K7,
  insert_hydration: J7,
  noop: Uc,
  safe_not_equal: Q7,
  set_style: Yi,
  svg_element: R0,
  toggle_class: Vc
} = window.__gradio__svelte__internal, { onMount: $7 } = window.__gradio__svelte__internal;
function ep(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h;
  return {
    c() {
      e = Z7("div"), t = R0("svg"), r = R0("g"), a = R0("path"), i = R0("path"), l = R0("path"), s = R0("path"), o = R0("g"), u = R0("path"), c = R0("path"), d = R0("path"), h = R0("path"), this.h();
    },
    l(p) {
      e = Y7(p, "DIV", { class: !0 });
      var _ = g0(e);
      t = N0(_, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var b = g0(t);
      r = N0(b, "g", { style: !0 });
      var D = g0(r);
      a = N0(D, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), g0(a).forEach(s0), i = N0(D, "path", { d: !0, fill: !0, class: !0 }), g0(i).forEach(s0), l = N0(D, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), g0(l).forEach(s0), s = N0(D, "path", { d: !0, fill: !0, class: !0 }), g0(s).forEach(s0), D.forEach(s0), o = N0(b, "g", { style: !0 });
      var y = g0(o);
      u = N0(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), g0(u).forEach(s0), c = N0(y, "path", { d: !0, fill: !0, class: !0 }), g0(c).forEach(s0), d = N0(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), g0(d).forEach(s0), h = N0(y, "path", { d: !0, fill: !0, class: !0 }), g0(h).forEach(s0), y.forEach(s0), b.forEach(s0), _.forEach(s0), this.h();
    },
    h() {
      Ee(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Ee(a, "fill", "#FF7C00"), Ee(a, "fill-opacity", "0.4"), Ee(a, "class", "svelte-43sxxs"), Ee(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Ee(i, "fill", "#FF7C00"), Ee(i, "class", "svelte-43sxxs"), Ee(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Ee(l, "fill", "#FF7C00"), Ee(l, "fill-opacity", "0.4"), Ee(l, "class", "svelte-43sxxs"), Ee(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Ee(s, "fill", "#FF7C00"), Ee(s, "class", "svelte-43sxxs"), Yi(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), Ee(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Ee(u, "fill", "#FF7C00"), Ee(u, "fill-opacity", "0.4"), Ee(u, "class", "svelte-43sxxs"), Ee(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Ee(c, "fill", "#FF7C00"), Ee(c, "class", "svelte-43sxxs"), Ee(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Ee(d, "fill", "#FF7C00"), Ee(d, "fill-opacity", "0.4"), Ee(d, "class", "svelte-43sxxs"), Ee(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Ee(h, "fill", "#FF7C00"), Ee(h, "class", "svelte-43sxxs"), Yi(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), Ee(t, "viewBox", "-1200 -1200 3000 3000"), Ee(t, "fill", "none"), Ee(t, "xmlns", "http://www.w3.org/2000/svg"), Ee(t, "class", "svelte-43sxxs"), Ee(e, "class", "svelte-43sxxs"), Vc(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, _) {
      J7(p, e, _), L0(e, t), L0(t, r), L0(r, a), L0(r, i), L0(r, l), L0(r, s), L0(t, o), L0(o, u), L0(o, c), L0(o, d), L0(o, h);
    },
    p(p, [_]) {
      _ & /*$top*/
      2 && Yi(r, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), _ & /*$bottom*/
      4 && Yi(o, "transform", "translate(" + /*$bottom*/
      p[2][0] + "px, " + /*$bottom*/
      p[2][1] + "px)"), _ & /*margin*/
      1 && Vc(
        e,
        "margin",
        /*margin*/
        p[0]
      );
    },
    i: Uc,
    o: Uc,
    d(p) {
      p && s0(e);
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
      function E(C) {
        try {
          T(D.next(C));
        } catch (F) {
          w(F);
        }
      }
      function S(C) {
        try {
          T(D.throw(C));
        } catch (F) {
          w(F);
        }
      }
      function T(C) {
        C.done ? k(C.value) : y(C.value).then(E, S);
      }
      T((D = D.apply(p, _ || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = Pc([0, 0]);
  Hc(n, s, (p) => t(1, r = p));
  const o = Pc([0, 0]);
  Hc(n, o, (p) => t(2, a = p));
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
  append_hydration: Dn,
  attr: V0,
  binding_callbacks: Gc,
  check_outros: su,
  children: ir,
  claim_component: X4,
  claim_element: lr,
  claim_space: D0,
  claim_text: Ze,
  create_component: Y4,
  create_slot: Z4,
  destroy_component: K4,
  destroy_each: J4,
  detach: te,
  element: sr,
  empty: C0,
  ensure_array_like: Ll,
  get_all_dirty_from_scope: Q4,
  get_slot_changes: $4,
  group_outros: ou,
  init: ap,
  insert_hydration: fe,
  mount_component: em,
  noop: uu,
  safe_not_equal: ip,
  set_data: F0,
  set_style: ln,
  space: A0,
  text: Ke,
  toggle_class: v0,
  transition_in: H0,
  transition_out: or,
  update_slot_base: tm
} = window.__gradio__svelte__internal, { tick: lp } = window.__gradio__svelte__internal, { onDestroy: sp } = window.__gradio__svelte__internal, { createEventDispatcher: op } = window.__gradio__svelte__internal, up = (n) => ({}), jc = (n) => ({}), cp = (n) => ({}), Wc = (n) => ({});
function Xc(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Yc(n, e, t) {
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
  ), c = Z4(
    u,
    n,
    /*$$scope*/
    n[29],
    jc
  );
  return {
    c() {
      e = sr("div"), Y4(t.$$.fragment), r = A0(), a = sr("span"), l = Ke(i), s = A0(), c && c.c(), this.h();
    },
    l(d) {
      e = lr(d, "DIV", { class: !0 });
      var h = ir(e);
      X4(t.$$.fragment, h), h.forEach(te), r = D0(d), a = lr(d, "SPAN", { class: !0 });
      var p = ir(a);
      l = Ze(p, i), p.forEach(te), s = D0(d), c && c.l(d), this.h();
    },
    h() {
      V0(e, "class", "clear-status svelte-17v219f"), V0(a, "class", "error svelte-17v219f");
    },
    m(d, h) {
      fe(d, e, h), em(t, e, null), fe(d, r, h), fe(d, a, h), Dn(a, l), fe(d, s, h), c && c.m(d, h), o = !0;
    },
    p(d, h) {
      const p = {};
      h[0] & /*i18n*/
      2 && (p.label = /*i18n*/
      d[1]("common.clear")), t.$set(p), (!o || h[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      d[1]("common.error") + "") && F0(l, i), c && c.p && (!o || h[0] & /*$$scope*/
      536870912) && tm(
        c,
        u,
        d,
        /*$$scope*/
        d[29],
        o ? $4(
          u,
          /*$$scope*/
          d[29],
          h,
          up
        ) : Q4(
          /*$$scope*/
          d[29]
        ),
        jc
      );
    },
    i(d) {
      o || (H0(t.$$.fragment, d), H0(c, d), o = !0);
    },
    o(d) {
      or(t.$$.fragment, d), or(c, d), o = !1;
    },
    d(d) {
      d && (te(e), te(r), te(a), te(s)), K4(t), c && c.d(d);
    }
  };
}
function hp(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Zc(n)
  );
  function d(w, E) {
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
    n[5] && Qc(n)
  );
  const b = [bp, vp], D = [];
  function y(w, E) {
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
  n[5] && lf(n);
  return {
    c() {
      c && c.c(), e = A0(), t = sr("div"), p && p.c(), r = A0(), _ && _.c(), a = A0(), l && l.c(), s = A0(), k && k.c(), o = C0(), this.h();
    },
    l(w) {
      c && c.l(w), e = D0(w), t = lr(w, "DIV", { class: !0 });
      var E = ir(t);
      p && p.l(E), r = D0(E), _ && _.l(E), E.forEach(te), a = D0(w), l && l.l(w), s = D0(w), k && k.l(w), o = C0(), this.h();
    },
    h() {
      V0(t, "class", "progress-text svelte-17v219f"), v0(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), v0(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(w, E) {
      c && c.m(w, E), fe(w, e, E), fe(w, t, E), p && p.m(t, null), Dn(t, r), _ && _.m(t, null), fe(w, a, E), ~i && D[i].m(w, E), fe(w, s, E), k && k.m(w, E), fe(w, o, E), u = !0;
    },
    p(w, E) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? c ? c.p(w, E) : (c = Zc(w), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), h === (h = d(w)) && p ? p.p(w, E) : (p && p.d(1), p = h && h(w), p && (p.c(), p.m(t, r))), /*timer*/
      w[5] ? _ ? _.p(w, E) : (_ = Qc(w), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!u || E[0] & /*variant*/
      256) && v0(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!u || E[0] & /*variant*/
      256) && v0(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let S = i;
      i = y(w), i === S ? ~i && D[i].p(w, E) : (l && (ou(), or(D[S], 1, 1, () => {
        D[S] = null;
      }), su()), ~i ? (l = D[i], l ? l.p(w, E) : (l = D[i] = b[i](w), l.c()), H0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      w[5] ? k && (ou(), or(k, 1, 1, () => {
        k = null;
      }), su()) : k ? (k.p(w, E), E[0] & /*timer*/
      32 && H0(k, 1)) : (k = lf(w), k.c(), H0(k, 1), k.m(o.parentNode, o));
    },
    i(w) {
      u || (H0(l), H0(k), u = !0);
    },
    o(w) {
      or(l), or(k), u = !1;
    },
    d(w) {
      w && (te(e), te(t), te(a), te(s), te(o)), c && c.d(w), p && p.d(), _ && _.d(), ~i && D[i].d(w), k && k.d(w);
    }
  };
}
function Zc(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = sr("div"), this.h();
    },
    l(r) {
      e = lr(r, "DIV", { class: !0 }), ir(e).forEach(te), this.h();
    },
    h() {
      V0(e, "class", "eta-bar svelte-17v219f"), ln(e, "transform", t);
    },
    m(r, a) {
      fe(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && ln(e, "transform", t);
    },
    d(r) {
      r && te(e);
    }
  };
}
function dp(n) {
  let e;
  return {
    c() {
      e = Ke("processing |");
    },
    l(t) {
      e = Ze(t, "processing |");
    },
    m(t, r) {
      fe(t, e, r);
    },
    p: uu,
    d(t) {
      t && te(e);
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
      e = Ke("queue: "), r = Ke(t), a = Ke("/"), i = Ke(
        /*queue_size*/
        n[3]
      ), l = Ke(" |");
    },
    l(s) {
      e = Ze(s, "queue: "), r = Ze(s, t), a = Ze(s, "/"), i = Ze(
        s,
        /*queue_size*/
        n[3]
      ), l = Ze(s, " |");
    },
    m(s, o) {
      fe(s, e, o), fe(s, r, o), fe(s, a, o), fe(s, i, o), fe(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && F0(r, t), o[0] & /*queue_size*/
      8 && F0(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (te(e), te(r), te(a), te(i), te(l));
    }
  };
}
function pp(n) {
  let e, t = Ll(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Jc(Yc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = C0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = C0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      fe(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = Ll(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Yc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Jc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && te(e), J4(r, a);
    }
  };
}
function Kc(n) {
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
      u.c(), e = A0(), r = Ke(t), a = Ke(" | "), l = Ke(i);
    },
    l(c) {
      u.l(c), e = D0(c), r = Ze(c, t), a = Ze(c, " | "), l = Ze(c, i);
    },
    m(c, d) {
      u.m(c, d), fe(c, e, d), fe(c, r, d), fe(c, a, d), fe(c, l, d);
    },
    p(c, d) {
      o === (o = s(c)) && u ? u.p(c, d) : (u.d(1), u = o(c), u && (u.c(), u.m(e.parentNode, e))), d[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && F0(r, t);
    },
    d(c) {
      c && (te(e), te(r), te(a), te(l)), u.d(c);
    }
  };
}
function gp(n) {
  let e = ea(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Ke(e);
    },
    l(r) {
      t = Ze(r, e);
    },
    m(r, a) {
      fe(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = ea(
        /*p*/
        r[41].index || 0
      ) + "") && F0(t, e);
    },
    d(r) {
      r && te(t);
    }
  };
}
function _p(n) {
  let e = ea(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = ea(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = Ke(e), r = Ke("/"), i = Ke(a);
    },
    l(l) {
      t = Ze(l, e), r = Ze(l, "/"), i = Ze(l, a);
    },
    m(l, s) {
      fe(l, t, s), fe(l, r, s), fe(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = ea(
        /*p*/
        l[41].index || 0
      ) + "") && F0(t, e), s[0] & /*progress*/
      128 && a !== (a = ea(
        /*p*/
        l[41].length
      ) + "") && F0(i, a);
    },
    d(l) {
      l && (te(t), te(r), te(i));
    }
  };
}
function Jc(n) {
  let e, t = (
    /*p*/
    n[41].index != null && Kc(n)
  );
  return {
    c() {
      t && t.c(), e = C0();
    },
    l(r) {
      t && t.l(r), e = C0();
    },
    m(r, a) {
      t && t.m(r, a), fe(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = Kc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && te(e), t && t.d(r);
    }
  };
}
function Qc(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = Ke(
        /*formatted_timer*/
        n[20]
      ), r = Ke(t), a = Ke("s");
    },
    l(i) {
      e = Ze(
        i,
        /*formatted_timer*/
        n[20]
      ), r = Ze(i, t), a = Ze(i, "s");
    },
    m(i, l) {
      fe(i, e, l), fe(i, r, l), fe(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && F0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && F0(r, t);
    },
    d(i) {
      i && (te(e), te(r), te(a));
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
      Y4(e.$$.fragment);
    },
    l(r) {
      X4(e.$$.fragment, r);
    },
    m(r, a) {
      em(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (H0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      or(e.$$.fragment, r), t = !1;
    },
    d(r) {
      K4(e, r);
    }
  };
}
function bp(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && $c(n)
  );
  return {
    c() {
      e = sr("div"), t = sr("div"), s && s.c(), r = A0(), a = sr("div"), i = sr("div"), this.h();
    },
    l(o) {
      e = lr(o, "DIV", { class: !0 });
      var u = ir(e);
      t = lr(u, "DIV", { class: !0 });
      var c = ir(t);
      s && s.l(c), c.forEach(te), r = D0(u), a = lr(u, "DIV", { class: !0 });
      var d = ir(a);
      i = lr(d, "DIV", { class: !0 }), ir(i).forEach(te), d.forEach(te), u.forEach(te), this.h();
    },
    h() {
      V0(t, "class", "progress-level-inner svelte-17v219f"), V0(i, "class", "progress-bar svelte-17v219f"), ln(i, "width", l), V0(a, "class", "progress-bar-wrap svelte-17v219f"), V0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, u) {
      fe(o, e, u), Dn(e, t), s && s.m(t, null), Dn(e, r), Dn(e, a), Dn(a, i), n[31](i);
    },
    p(o, u) {
      /*progress*/
      o[7] != null ? s ? s.p(o, u) : (s = $c(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && ln(i, "width", l);
    },
    i: uu,
    o: uu,
    d(o) {
      o && te(e), s && s.d(), n[31](null);
    }
  };
}
function $c(n) {
  let e, t = Ll(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = af(Xc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = C0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = C0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      fe(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Ll(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Xc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = af(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && te(e), J4(r, a);
    }
  };
}
function ef(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && wp()
  ), l = (
    /*p*/
    n[41].desc != null && tf(n)
  ), s = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && rf()
  ), o = (
    /*progress_level*/
    n[14] != null && nf(n)
  );
  return {
    c() {
      i && i.c(), e = A0(), l && l.c(), t = A0(), s && s.c(), r = A0(), o && o.c(), a = C0();
    },
    l(u) {
      i && i.l(u), e = D0(u), l && l.l(u), t = D0(u), s && s.l(u), r = D0(u), o && o.l(u), a = C0();
    },
    m(u, c) {
      i && i.m(u, c), fe(u, e, c), l && l.m(u, c), fe(u, t, c), s && s.m(u, c), fe(u, r, c), o && o.m(u, c), fe(u, a, c);
    },
    p(u, c) {
      /*p*/
      u[41].desc != null ? l ? l.p(u, c) : (l = tf(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[41].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[43]
      ] != null ? s || (s = rf(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), /*progress_level*/
      u[14] != null ? o ? o.p(u, c) : (o = nf(u), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && (te(e), te(t), te(r), te(a)), i && i.d(u), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function wp(n) {
  let e;
  return {
    c() {
      e = Ke(" /");
    },
    l(t) {
      e = Ze(t, " /");
    },
    m(t, r) {
      fe(t, e, r);
    },
    d(t) {
      t && te(e);
    }
  };
}
function tf(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = Ke(e);
    },
    l(r) {
      t = Ze(r, e);
    },
    m(r, a) {
      fe(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && F0(t, e);
    },
    d(r) {
      r && te(t);
    }
  };
}
function rf(n) {
  let e;
  return {
    c() {
      e = Ke("-");
    },
    l(t) {
      e = Ze(t, "-");
    },
    m(t, r) {
      fe(t, e, r);
    },
    d(t) {
      t && te(e);
    }
  };
}
function nf(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = Ke(e), r = Ke("%");
    },
    l(a) {
      t = Ze(a, e), r = Ze(a, "%");
    },
    m(a, i) {
      fe(a, t, i), fe(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && F0(t, e);
    },
    d(a) {
      a && (te(t), te(r));
    }
  };
}
function af(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && ef(n)
  );
  return {
    c() {
      t && t.c(), e = C0();
    },
    l(r) {
      t && t.l(r), e = C0();
    },
    m(r, a) {
      t && t.m(r, a), fe(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = ef(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && te(e), t && t.d(r);
    }
  };
}
function lf(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), l = Z4(
    i,
    n,
    /*$$scope*/
    n[29],
    Wc
  );
  return {
    c() {
      e = sr("p"), t = Ke(
        /*loading_text*/
        n[9]
      ), r = A0(), l && l.c(), this.h();
    },
    l(s) {
      e = lr(s, "P", { class: !0 });
      var o = ir(e);
      t = Ze(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(te), r = D0(s), l && l.l(s), this.h();
    },
    h() {
      V0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      fe(s, e, o), Dn(e, t), fe(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && F0(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && tm(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? $4(
          i,
          /*$$scope*/
          s[29],
          o,
          cp
        ) : Q4(
          /*$$scope*/
          s[29]
        ),
        Wc
      );
    },
    i(s) {
      a || (H0(l, s), a = !0);
    },
    o(s) {
      or(l, s), a = !1;
    },
    d(s) {
      s && (te(e), te(r)), l && l.d(s);
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
      e = sr("div"), r && r.c(), this.h();
    },
    l(u) {
      e = lr(u, "DIV", { class: !0 });
      var c = ir(e);
      r && r.l(c), c.forEach(te), this.h();
    },
    h() {
      V0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), v0(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), v0(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), v0(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), v0(
        e,
        "border",
        /*border*/
        n[12]
      ), ln(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), ln(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, c) {
      fe(u, e, c), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(u, c) {
      let d = t;
      t = o(u), t === d ? ~t && s[t].p(u, c) : (r && (ou(), or(s[d], 1, 1, () => {
        s[d] = null;
      }), su()), ~t ? (r = s[t], r ? r.p(u, c) : (r = s[t] = l[t](u), r.c()), H0(r, 1), r.m(e, null)) : r = null), (!i || c[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && V0(e, "class", a), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && v0(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && v0(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && v0(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || c[0] & /*variant, show_progress, border*/
      4416) && v0(
        e,
        "border",
        /*border*/
        u[12]
      ), c[0] & /*absolute*/
      1024 && ln(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && ln(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      i || (H0(r), i = !0);
    },
    o(u) {
      or(r), i = !1;
    },
    d(u) {
      u && te(e), ~t && s[t].d(), n[33](null);
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
let Zi = [], co = !1;
const Dp = typeof window < "u", rm = Dp ? window.requestAnimationFrame : (n) => {
};
function Ap(n) {
  return kp(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Zi.push(e), !co) co = !0;
      else return;
      yield lp(), rm(() => {
        let r = [0, 0];
        for (let a = 0; a < Zi.length; a++) {
          const l = Zi[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), co = !1, Zi = [];
      });
    }
  });
}
function Ep(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = op();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: u } = e, { queue_size: c } = e, { status: d } = e, { scroll_to_output: h = !1 } = e, { timer: p = !0 } = e, { show_progress: _ = "full" } = e, { message: b = null } = e, { progress: D = null } = e, { variant: y = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: E = !1 } = e, { border: S = !1 } = e, { autoscroll: T } = e, C, F = !1, B = 0, I = 0, L = null, P = null, Z = 0, O = null, se, K = null, he = !0;
  const ue = () => {
    t(0, o = t(27, L = t(19, $ = null))), t(25, B = performance.now()), t(26, I = 0), F = !0, Ae();
  };
  function Ae() {
    rm(() => {
      t(26, I = (performance.now() - B) / 1e3), F && Ae();
    });
  }
  function ye() {
    t(26, I = 0), t(0, o = t(27, L = t(19, $ = null))), F && (F = !1);
  }
  sp(() => {
    F && ye();
  });
  let $ = null;
  function de(V) {
    Gc[V ? "unshift" : "push"](() => {
      K = V, t(16, K), t(7, D), t(14, O), t(15, se);
    });
  }
  const ce = () => {
    l("clear_status");
  };
  function Ce(V) {
    Gc[V ? "unshift" : "push"](() => {
      C = V, t(13, C);
    });
  }
  return n.$$set = (V) => {
    "i18n" in V && t(1, s = V.i18n), "eta" in V && t(0, o = V.eta), "queue_position" in V && t(2, u = V.queue_position), "queue_size" in V && t(3, c = V.queue_size), "status" in V && t(4, d = V.status), "scroll_to_output" in V && t(22, h = V.scroll_to_output), "timer" in V && t(5, p = V.timer), "show_progress" in V && t(6, _ = V.show_progress), "message" in V && t(23, b = V.message), "progress" in V && t(7, D = V.progress), "variant" in V && t(8, y = V.variant), "loading_text" in V && t(9, k = V.loading_text), "absolute" in V && t(10, w = V.absolute), "translucent" in V && t(11, E = V.translucent), "border" in V && t(12, S = V.border), "autoscroll" in V && t(24, T = V.autoscroll), "$$scope" in V && t(29, i = V.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = L), o != null && L !== o && (t(28, P = (performance.now() - B) / 1e3 + o), t(19, $ = P.toFixed(1)), t(27, L = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Z = P === null || P <= 0 || !I ? null : Math.min(I / P, 1)), n.$$.dirty[0] & /*progress*/
    128 && D != null && t(18, he = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (D != null ? t(14, O = D.map((V) => {
      if (V.index != null && V.length != null)
        return V.index / V.length;
      if (V.progress != null)
        return V.progress;
    })) : t(14, O = null), O ? (t(15, se = O[O.length - 1]), K && (se === 0 ? t(16, K.style.transition = "0", K) : t(16, K.style.transition = "150ms", K))) : t(15, se = void 0)), n.$$.dirty[0] & /*status*/
    16 && (d === "pending" ? ue() : ye()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && h && (d === "pending" || d === "complete") && Ap(C, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = I.toFixed(1));
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
    E,
    S,
    C,
    O,
    se,
    K,
    Z,
    he,
    $,
    r,
    l,
    h,
    b,
    T,
    B,
    I,
    L,
    P,
    i,
    a,
    de,
    ce,
    Ce
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
  entries: nm,
  setPrototypeOf: sf,
  isFrozen: xp,
  getPrototypeOf: Tp,
  getOwnPropertyDescriptor: Cp
} = Object;
let {
  freeze: Gt,
  seal: M0,
  create: am
} = Object, {
  apply: cu,
  construct: fu
} = typeof Reflect < "u" && Reflect;
Gt || (Gt = function(e) {
  return e;
});
M0 || (M0 = function(e) {
  return e;
});
cu || (cu = function(e, t, r) {
  return e.apply(t, r);
});
fu || (fu = function(e, t) {
  return new e(...t);
});
const Ki = jt(Array.prototype.forEach), Fp = jt(Array.prototype.lastIndexOf), of = jt(Array.prototype.pop), Aa = jt(Array.prototype.push), Mp = jt(Array.prototype.splice), yl = jt(String.prototype.toLowerCase), fo = jt(String.prototype.toString), uf = jt(String.prototype.match), Ea = jt(String.prototype.replace), zp = jt(String.prototype.indexOf), Bp = jt(String.prototype.trim), O0 = jt(Object.prototype.hasOwnProperty), Ut = jt(RegExp.prototype.test), Sa = Ip(TypeError);
function jt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return cu(n, e, r);
  };
}
function Ip(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return fu(n, t);
  };
}
function we(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : yl;
  sf && sf(n, null);
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
    O0(n, e) || (n[e] = null);
  return n;
}
function kn(n) {
  const e = am(null);
  for (const [t, r] of nm(n))
    O0(n, t) && (Array.isArray(r) ? e[t] = Lp(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = kn(r) : e[t] = r);
  return e;
}
function xa(n, e) {
  for (; n !== null; ) {
    const r = Cp(n, e);
    if (r) {
      if (r.get)
        return jt(r.get);
      if (typeof r.value == "function")
        return jt(r.value);
    }
    n = Tp(n);
  }
  function t() {
    return null;
  }
  return t;
}
const cf = Gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ho = Gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), mo = Gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Np = Gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), po = Gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Rp = Gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ff = Gt(["#text"]), hf = Gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), go = Gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), df = Gt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ji = Gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Op = M0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qp = M0(/<%[\w\W]*|[\w\W]*%>/gm), Pp = M0(/\$\{[\w\W]*/gm), Hp = M0(/^data-[\-\w.\u00B7-\uFFFF]+$/), Up = M0(/^aria-[\-\w]+$/), im = M0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vp = M0(/^(?:\w+script|data):/i), Gp = M0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lm = M0(/^html$/i), jp = M0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Up,
  ATTR_WHITESPACE: Gp,
  CUSTOM_ELEMENT: jp,
  DATA_ATTR: Hp,
  DOCTYPE_NAME: lm,
  ERB_EXPR: qp,
  IS_ALLOWED_URI: im,
  IS_SCRIPT_OR_DATA: Vp,
  MUSTACHE_EXPR: Op,
  TMPLIT_EXPR: Pp
});
const Ta = {
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
}, pf = function() {
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
function sm() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wp();
  const e = (ee) => sm(ee);
  if (e.version = "3.2.5", e.removed = [], !n || !n.document || n.document.nodeType !== Ta.document || !n.Element)
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
  } = n, _ = o.prototype, b = xa(_, "cloneNode"), D = xa(_, "remove"), y = xa(_, "nextSibling"), k = xa(_, "childNodes"), w = xa(_, "parentNode");
  if (typeof l == "function") {
    const ee = t.createElement("template");
    ee.content && ee.content.ownerDocument && (t = ee.content.ownerDocument);
  }
  let E, S = "";
  const {
    implementation: T,
    createNodeIterator: C,
    createDocumentFragment: F,
    getElementsByTagName: B
  } = t, {
    importNode: I
  } = r;
  let L = pf();
  e.isSupported = typeof nm == "function" && typeof w == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: Z,
    TMPLIT_EXPR: O,
    DATA_ATTR: se,
    ARIA_ATTR: K,
    IS_SCRIPT_OR_DATA: he,
    ATTR_WHITESPACE: ue,
    CUSTOM_ELEMENT: Ae
  } = mf;
  let {
    IS_ALLOWED_URI: ye
  } = mf, $ = null;
  const de = we({}, [...cf, ...ho, ...mo, ...po, ...ff]);
  let ce = null;
  const Ce = we({}, [...hf, ...go, ...df, ...Ji]);
  let V = Object.seal(am(null, {
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
  })), j = null, ge = null, ke = !0, Te = !0, ze = !1, Le = !0, je = !1, ft = !0, We = !1, qe = !1, Pe = !1, lt = !1, Ot = !1, qt = !1, Hr = !0, q = !1;
  const gr = "user-content-";
  let z0 = !0, N = !1, me = {}, ie = null;
  const Qe = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let W0 = null;
  const Dt = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let At = null;
  const _r = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), l0 = "http://www.w3.org/1998/Math/MathML", m0 = "http://www.w3.org/2000/svg", Re = "http://www.w3.org/1999/xhtml";
  let Jt = Re, gs = !1, _s = null;
  const Fm = we({}, [l0, m0, Re], fo);
  let vi = we({}, ["mi", "mo", "mn", "ms", "mtext"]), bi = we({}, ["annotation-xml"]);
  const Mm = we({}, ["title", "style", "font", "a", "script"]);
  let fa = null;
  const zm = ["application/xhtml+xml", "text/html"], Bm = "text/html";
  let _t = null, qn = null;
  const Im = t.createElement("form"), d1 = function(z) {
    return z instanceof RegExp || z instanceof Function;
  }, vs = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qn && qn === z)) {
      if ((!z || typeof z != "object") && (z = {}), z = kn(z), fa = // eslint-disable-next-line unicorn/prefer-includes
      zm.indexOf(z.PARSER_MEDIA_TYPE) === -1 ? Bm : z.PARSER_MEDIA_TYPE, _t = fa === "application/xhtml+xml" ? fo : yl, $ = O0(z, "ALLOWED_TAGS") ? we({}, z.ALLOWED_TAGS, _t) : de, ce = O0(z, "ALLOWED_ATTR") ? we({}, z.ALLOWED_ATTR, _t) : Ce, _s = O0(z, "ALLOWED_NAMESPACES") ? we({}, z.ALLOWED_NAMESPACES, fo) : Fm, At = O0(z, "ADD_URI_SAFE_ATTR") ? we(kn(_r), z.ADD_URI_SAFE_ATTR, _t) : _r, W0 = O0(z, "ADD_DATA_URI_TAGS") ? we(kn(Dt), z.ADD_DATA_URI_TAGS, _t) : Dt, ie = O0(z, "FORBID_CONTENTS") ? we({}, z.FORBID_CONTENTS, _t) : Qe, j = O0(z, "FORBID_TAGS") ? we({}, z.FORBID_TAGS, _t) : {}, ge = O0(z, "FORBID_ATTR") ? we({}, z.FORBID_ATTR, _t) : {}, me = O0(z, "USE_PROFILES") ? z.USE_PROFILES : !1, ke = z.ALLOW_ARIA_ATTR !== !1, Te = z.ALLOW_DATA_ATTR !== !1, ze = z.ALLOW_UNKNOWN_PROTOCOLS || !1, Le = z.ALLOW_SELF_CLOSE_IN_ATTR !== !1, je = z.SAFE_FOR_TEMPLATES || !1, ft = z.SAFE_FOR_XML !== !1, We = z.WHOLE_DOCUMENT || !1, lt = z.RETURN_DOM || !1, Ot = z.RETURN_DOM_FRAGMENT || !1, qt = z.RETURN_TRUSTED_TYPE || !1, Pe = z.FORCE_BODY || !1, Hr = z.SANITIZE_DOM !== !1, q = z.SANITIZE_NAMED_PROPS || !1, z0 = z.KEEP_CONTENT !== !1, N = z.IN_PLACE || !1, ye = z.ALLOWED_URI_REGEXP || im, Jt = z.NAMESPACE || Re, vi = z.MATHML_TEXT_INTEGRATION_POINTS || vi, bi = z.HTML_INTEGRATION_POINTS || bi, V = z.CUSTOM_ELEMENT_HANDLING || {}, z.CUSTOM_ELEMENT_HANDLING && d1(z.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = z.CUSTOM_ELEMENT_HANDLING.tagNameCheck), z.CUSTOM_ELEMENT_HANDLING && d1(z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), z.CUSTOM_ELEMENT_HANDLING && typeof z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), je && (Te = !1), Ot && (lt = !0), me && ($ = we({}, ff), ce = [], me.html === !0 && (we($, cf), we(ce, hf)), me.svg === !0 && (we($, ho), we(ce, go), we(ce, Ji)), me.svgFilters === !0 && (we($, mo), we(ce, go), we(ce, Ji)), me.mathMl === !0 && (we($, po), we(ce, df), we(ce, Ji))), z.ADD_TAGS && ($ === de && ($ = kn($)), we($, z.ADD_TAGS, _t)), z.ADD_ATTR && (ce === Ce && (ce = kn(ce)), we(ce, z.ADD_ATTR, _t)), z.ADD_URI_SAFE_ATTR && we(At, z.ADD_URI_SAFE_ATTR, _t), z.FORBID_CONTENTS && (ie === Qe && (ie = kn(ie)), we(ie, z.FORBID_CONTENTS, _t)), z0 && ($["#text"] = !0), We && we($, ["html", "head", "body"]), $.table && (we($, ["tbody"]), delete j.tbody), z.TRUSTED_TYPES_POLICY) {
        if (typeof z.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof z.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        E = z.TRUSTED_TYPES_POLICY, S = E.createHTML("");
      } else
        E === void 0 && (E = Xp(p, a)), E !== null && typeof S == "string" && (S = E.createHTML(""));
      Gt && Gt(z), qn = z;
    }
  }, m1 = we({}, [...ho, ...mo, ...Np]), p1 = we({}, [...po, ...Rp]), Lm = function(z) {
    let W = w(z);
    (!W || !W.tagName) && (W = {
      namespaceURI: Jt,
      tagName: "template"
    });
    const Q = yl(z.tagName), He = yl(W.tagName);
    return _s[z.namespaceURI] ? z.namespaceURI === m0 ? W.namespaceURI === Re ? Q === "svg" : W.namespaceURI === l0 ? Q === "svg" && (He === "annotation-xml" || vi[He]) : !!m1[Q] : z.namespaceURI === l0 ? W.namespaceURI === Re ? Q === "math" : W.namespaceURI === m0 ? Q === "math" && bi[He] : !!p1[Q] : z.namespaceURI === Re ? W.namespaceURI === m0 && !bi[He] || W.namespaceURI === l0 && !vi[He] ? !1 : !p1[Q] && (Mm[Q] || !m1[Q]) : !!(fa === "application/xhtml+xml" && _s[z.namespaceURI]) : !1;
  }, X0 = function(z) {
    Aa(e.removed, {
      element: z
    });
    try {
      w(z).removeChild(z);
    } catch {
      D(z);
    }
  }, wi = function(z, W) {
    try {
      Aa(e.removed, {
        attribute: W.getAttributeNode(z),
        from: W
      });
    } catch {
      Aa(e.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(z), z === "is")
      if (lt || Ot)
        try {
          X0(W);
        } catch {
        }
      else
        try {
          W.setAttribute(z, "");
        } catch {
        }
  }, g1 = function(z) {
    let W = null, Q = null;
    if (Pe)
      z = "<remove></remove>" + z;
    else {
      const Et = uf(z, /^[\r\n\t ]+/);
      Q = Et && Et[0];
    }
    fa === "application/xhtml+xml" && Jt === Re && (z = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + z + "</body></html>");
    const He = E ? E.createHTML(z) : z;
    if (Jt === Re)
      try {
        W = new h().parseFromString(He, fa);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = T.createDocument(Jt, "template", null);
      try {
        W.documentElement.innerHTML = gs ? S : He;
      } catch {
      }
    }
    const Lt = W.body || W.documentElement;
    return z && Q && Lt.insertBefore(t.createTextNode(Q), Lt.childNodes[0] || null), Jt === Re ? B.call(W, We ? "html" : "body")[0] : We ? W.documentElement : Lt;
  }, _1 = function(z) {
    return C.call(
      z.ownerDocument || z,
      z,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, bs = function(z) {
    return z instanceof d && (typeof z.nodeName != "string" || typeof z.textContent != "string" || typeof z.removeChild != "function" || !(z.attributes instanceof c) || typeof z.removeAttribute != "function" || typeof z.setAttribute != "function" || typeof z.namespaceURI != "string" || typeof z.insertBefore != "function" || typeof z.hasChildNodes != "function");
  }, v1 = function(z) {
    return typeof s == "function" && z instanceof s;
  };
  function vr(ee, z, W) {
    Ki(ee, (Q) => {
      Q.call(e, z, W, qn);
    });
  }
  const b1 = function(z) {
    let W = null;
    if (vr(L.beforeSanitizeElements, z, null), bs(z))
      return X0(z), !0;
    const Q = _t(z.nodeName);
    if (vr(L.uponSanitizeElement, z, {
      tagName: Q,
      allowedTags: $
    }), z.hasChildNodes() && !v1(z.firstElementChild) && Ut(/<[/\w!]/g, z.innerHTML) && Ut(/<[/\w!]/g, z.textContent) || z.nodeType === Ta.progressingInstruction || ft && z.nodeType === Ta.comment && Ut(/<[/\w]/g, z.data))
      return X0(z), !0;
    if (!$[Q] || j[Q]) {
      if (!j[Q] && y1(Q) && (V.tagNameCheck instanceof RegExp && Ut(V.tagNameCheck, Q) || V.tagNameCheck instanceof Function && V.tagNameCheck(Q)))
        return !1;
      if (z0 && !ie[Q]) {
        const He = w(z) || z.parentNode, Lt = k(z) || z.childNodes;
        if (Lt && He) {
          const Et = Lt.length;
          for (let Qt = Et - 1; Qt >= 0; --Qt) {
            const Y0 = b(Lt[Qt], !0);
            Y0.__removalCount = (z.__removalCount || 0) + 1, He.insertBefore(Y0, y(z));
          }
        }
      }
      return X0(z), !0;
    }
    return z instanceof o && !Lm(z) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Ut(/<\/no(script|embed|frames)/i, z.innerHTML) ? (X0(z), !0) : (je && z.nodeType === Ta.text && (W = z.textContent, Ki([P, Z, O], (He) => {
      W = Ea(W, He, " ");
    }), z.textContent !== W && (Aa(e.removed, {
      element: z.cloneNode()
    }), z.textContent = W)), vr(L.afterSanitizeElements, z, null), !1);
  }, w1 = function(z, W, Q) {
    if (Hr && (W === "id" || W === "name") && (Q in t || Q in Im))
      return !1;
    if (!(Te && !ge[W] && Ut(se, W))) {
      if (!(ke && Ut(K, W))) {
        if (!ce[W] || ge[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(y1(z) && (V.tagNameCheck instanceof RegExp && Ut(V.tagNameCheck, z) || V.tagNameCheck instanceof Function && V.tagNameCheck(z)) && (V.attributeNameCheck instanceof RegExp && Ut(V.attributeNameCheck, W) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(W)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && Ut(V.tagNameCheck, Q) || V.tagNameCheck instanceof Function && V.tagNameCheck(Q)))
          ) return !1;
        } else if (!At[W]) {
          if (!Ut(ye, Ea(Q, ue, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && z !== "script" && zp(Q, "data:") === 0 && W0[z])) {
              if (!(ze && !Ut(he, Ea(Q, ue, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, y1 = function(z) {
    return z !== "annotation-xml" && uf(z, Ae);
  }, k1 = function(z) {
    vr(L.beforeSanitizeAttributes, z, null);
    const {
      attributes: W
    } = z;
    if (!W || bs(z))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ce,
      forceKeepAttr: void 0
    };
    let He = W.length;
    for (; He--; ) {
      const Lt = W[He], {
        name: Et,
        namespaceURI: Qt,
        value: Y0
      } = Lt, ha = _t(Et);
      let Pt = Et === "value" ? Y0 : Bp(Y0);
      if (Q.attrName = ha, Q.attrValue = Pt, Q.keepAttr = !0, Q.forceKeepAttr = void 0, vr(L.uponSanitizeAttribute, z, Q), Pt = Q.attrValue, q && (ha === "id" || ha === "name") && (wi(Et, z), Pt = gr + Pt), ft && Ut(/((--!?|])>)|<\/(style|title)/i, Pt)) {
        wi(Et, z);
        continue;
      }
      if (Q.forceKeepAttr || (wi(Et, z), !Q.keepAttr))
        continue;
      if (!Le && Ut(/\/>/i, Pt)) {
        wi(Et, z);
        continue;
      }
      je && Ki([P, Z, O], (A1) => {
        Pt = Ea(Pt, A1, " ");
      });
      const D1 = _t(z.nodeName);
      if (w1(D1, ha, Pt)) {
        if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Qt)
          switch (p.getAttributeType(D1, ha)) {
            case "TrustedHTML": {
              Pt = E.createHTML(Pt);
              break;
            }
            case "TrustedScriptURL": {
              Pt = E.createScriptURL(Pt);
              break;
            }
          }
        try {
          Qt ? z.setAttributeNS(Qt, Et, Pt) : z.setAttribute(Et, Pt), bs(z) ? X0(z) : of(e.removed);
        } catch {
        }
      }
    }
    vr(L.afterSanitizeAttributes, z, null);
  }, Nm = function ee(z) {
    let W = null;
    const Q = _1(z);
    for (vr(L.beforeSanitizeShadowDOM, z, null); W = Q.nextNode(); )
      vr(L.uponSanitizeShadowNode, W, null), b1(W), k1(W), W.content instanceof i && ee(W.content);
    vr(L.afterSanitizeShadowDOM, z, null);
  };
  return e.sanitize = function(ee) {
    let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, Q = null, He = null, Lt = null;
    if (gs = !ee, gs && (ee = "<!-->"), typeof ee != "string" && !v1(ee))
      if (typeof ee.toString == "function") {
        if (ee = ee.toString(), typeof ee != "string")
          throw Sa("dirty is not a string, aborting");
      } else
        throw Sa("toString is not a function");
    if (!e.isSupported)
      return ee;
    if (qe || vs(z), e.removed = [], typeof ee == "string" && (N = !1), N) {
      if (ee.nodeName) {
        const Y0 = _t(ee.nodeName);
        if (!$[Y0] || j[Y0])
          throw Sa("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ee instanceof s)
      W = g1("<!---->"), Q = W.ownerDocument.importNode(ee, !0), Q.nodeType === Ta.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? W = Q : W.appendChild(Q);
    else {
      if (!lt && !je && !We && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return E && qt ? E.createHTML(ee) : ee;
      if (W = g1(ee), !W)
        return lt ? null : qt ? S : "";
    }
    W && Pe && X0(W.firstChild);
    const Et = _1(N ? ee : W);
    for (; He = Et.nextNode(); )
      b1(He), k1(He), He.content instanceof i && Nm(He.content);
    if (N)
      return ee;
    if (lt) {
      if (Ot)
        for (Lt = F.call(W.ownerDocument); W.firstChild; )
          Lt.appendChild(W.firstChild);
      else
        Lt = W;
      return (ce.shadowroot || ce.shadowrootmode) && (Lt = I.call(r, Lt, !0)), Lt;
    }
    let Qt = We ? W.outerHTML : W.innerHTML;
    return We && $["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Ut(lm, W.ownerDocument.doctype.name) && (Qt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + Qt), je && Ki([P, Z, O], (Y0) => {
      Qt = Ea(Qt, Y0, " ");
    }), E && qt ? E.createHTML(Qt) : Qt;
  }, e.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vs(ee), qe = !0;
  }, e.clearConfig = function() {
    qn = null, qe = !1;
  }, e.isValidAttribute = function(ee, z, W) {
    qn || vs({});
    const Q = _t(ee), He = _t(z);
    return w1(Q, He, W);
  }, e.addHook = function(ee, z) {
    typeof z == "function" && Aa(L[ee], z);
  }, e.removeHook = function(ee, z) {
    if (z !== void 0) {
      const W = Fp(L[ee], z);
      return W === -1 ? void 0 : Mp(L[ee], W, 1)[0];
    }
    return of(L[ee]);
  }, e.removeHooks = function(ee) {
    L[ee] = [];
  }, e.removeAllHooks = function() {
    L = pf();
  }, e;
}
var ay = sm();
const {
  SvelteComponent: Yp,
  attr: Zp,
  children: Kp,
  claim_element: Jp,
  detach: hu,
  element: Qp,
  empty: gf,
  init: $p,
  insert_hydration: om,
  noop: _f,
  safe_not_equal: e8,
  set_style: vf
} = window.__gradio__svelte__internal;
function bf(n) {
  let e, t = `${/*time_limit*/
  n[0]}s`;
  return {
    c() {
      e = Qp("div"), this.h();
    },
    l(r) {
      e = Jp(r, "DIV", { class: !0 }), Kp(e).forEach(hu), this.h();
    },
    h() {
      Zp(e, "class", "streaming-bar svelte-ga0jj6"), vf(e, "animation-duration", t);
    },
    m(r, a) {
      om(r, e, a);
    },
    p(r, a) {
      a & /*time_limit*/
      1 && t !== (t = `${/*time_limit*/
      r[0]}s`) && vf(e, "animation-duration", t);
    },
    d(r) {
      r && hu(e);
    }
  };
}
function t8(n) {
  let e, t = (
    /*time_limit*/
    n[0] && bf(n)
  );
  return {
    c() {
      t && t.c(), e = gf();
    },
    l(r) {
      t && t.l(r), e = gf();
    },
    m(r, a) {
      t && t.m(r, a), om(r, e, a);
    },
    p(r, [a]) {
      /*time_limit*/
      r[0] ? t ? t.p(r, a) : (t = bf(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: _f,
    o: _f,
    d(r) {
      r && hu(e), t && t.d(r);
    }
  };
}
function r8(n, e, t) {
  let { time_limit: r } = e;
  return n.$$set = (a) => {
    "time_limit" in a && t(0, r = a.time_limit);
  }, [r];
}
class um extends Yp {
  constructor(e) {
    super(), $p(this, e, r8, t8, e8, { time_limit: 0 });
  }
}
const {
  SvelteComponent: n8,
  append_hydration: _o,
  attr: Qi,
  children: wf,
  claim_component: a8,
  claim_element: yf,
  claim_space: i8,
  claim_text: l8,
  create_component: s8,
  destroy_component: o8,
  detach: vo,
  element: kf,
  init: u8,
  insert_hydration: c8,
  mount_component: f8,
  safe_not_equal: h8,
  set_data: d8,
  space: m8,
  text: p8,
  toggle_class: Zr,
  transition_in: g8,
  transition_out: _8
} = window.__gradio__svelte__internal;
function v8(n) {
  let e, t, r, a, i, l;
  return r = new /*Icon*/
  n[1]({}), {
    c() {
      e = kf("label"), t = kf("span"), s8(r.$$.fragment), a = m8(), i = p8(
        /*label*/
        n[0]
      ), this.h();
    },
    l(s) {
      e = yf(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = wf(e);
      t = yf(o, "SPAN", { class: !0 });
      var u = wf(t);
      a8(r.$$.fragment, u), u.forEach(vo), a = i8(o), i = l8(
        o,
        /*label*/
        n[0]
      ), o.forEach(vo), this.h();
    },
    h() {
      Qi(t, "class", "svelte-168uj4v"), Qi(e, "for", ""), Qi(e, "data-testid", "block-label"), Qi(e, "class", "svelte-168uj4v"), Zr(e, "hide", !/*show_label*/
      n[2]), Zr(e, "sr-only", !/*show_label*/
      n[2]), Zr(
        e,
        "float",
        /*float*/
        n[4]
      ), Zr(
        e,
        "hide-label",
        /*disable*/
        n[3]
      );
    },
    m(s, o) {
      c8(s, e, o), _o(e, t), f8(r, t, null), _o(e, a), _o(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && d8(
        i,
        /*label*/
        s[0]
      ), (!l || o & /*show_label*/
      4) && Zr(e, "hide", !/*show_label*/
      s[2]), (!l || o & /*show_label*/
      4) && Zr(e, "sr-only", !/*show_label*/
      s[2]), (!l || o & /*float*/
      16) && Zr(
        e,
        "float",
        /*float*/
        s[4]
      ), (!l || o & /*disable*/
      8) && Zr(
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
      s && vo(e), o8(r);
    }
  };
}
function b8(n, e, t) {
  let { label: r = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return n.$$set = (o) => {
    "label" in o && t(0, r = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [r, a, i, l, s];
}
class as extends n8 {
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
  append_hydration: du,
  attr: yr,
  bubble: y8,
  check_outros: k8,
  children: mu,
  claim_component: D8,
  claim_element: pu,
  claim_space: A8,
  claim_text: E8,
  construct_svelte_component: Df,
  create_component: Af,
  destroy_component: Ef,
  detach: Ua,
  element: gu,
  group_outros: S8,
  init: x8,
  insert_hydration: cm,
  listen: T8,
  mount_component: Sf,
  safe_not_equal: C8,
  set_data: F8,
  set_style: $i,
  space: M8,
  text: z8,
  toggle_class: $t,
  transition_in: xf,
  transition_out: Tf
} = window.__gradio__svelte__internal;
function Cf(n) {
  let e, t;
  return {
    c() {
      e = gu("span"), t = z8(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = pu(r, "SPAN", { class: !0 });
      var a = mu(e);
      t = E8(
        a,
        /*label*/
        n[1]
      ), a.forEach(Ua), this.h();
    },
    h() {
      yr(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      cm(r, e, a), du(e, t);
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
      r && Ua(e);
    }
  };
}
function B8(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && Cf(n)
  );
  var u = (
    /*Icon*/
    n[0]
  );
  function c(d, h) {
    return {};
  }
  return u && (a = Df(u, c())), {
    c() {
      e = gu("button"), o && o.c(), t = M8(), r = gu("div"), a && Af(a.$$.fragment), this.h();
    },
    l(d) {
      e = pu(d, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var h = mu(e);
      o && o.l(h), t = A8(h), r = pu(h, "DIV", { class: !0 });
      var p = mu(r);
      a && D8(a.$$.fragment, p), p.forEach(Ua), h.forEach(Ua), this.h();
    },
    h() {
      yr(r, "class", "svelte-vk34kx"), $t(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), $t(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), $t(
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
      ), yr(e, "class", "svelte-vk34kx"), $t(
        e,
        "pending",
        /*pending*/
        n[3]
      ), $t(
        e,
        "padded",
        /*padded*/
        n[5]
      ), $t(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), $t(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), $i(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), $i(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(d, h) {
      cm(d, e, h), o && o.m(e, null), du(e, t), du(e, r), a && Sf(a, r, null), i = !0, l || (s = T8(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(d, [h]) {
      if (/*show_label*/
      d[2] ? o ? o.p(d, h) : (o = Cf(d), o.c(), o.m(e, t)) : o && (o.d(1), o = null), h & /*Icon*/
      1 && u !== (u = /*Icon*/
      d[0])) {
        if (a) {
          S8();
          const p = a;
          Tf(p.$$.fragment, 1, 0, () => {
            Ef(p, 1);
          }), k8();
        }
        u ? (a = Df(u, c()), Af(a.$$.fragment), xf(a.$$.fragment, 1), Sf(a, r, null)) : a = null;
      }
      (!i || h & /*size*/
      16) && $t(
        r,
        "small",
        /*size*/
        d[4] === "small"
      ), (!i || h & /*size*/
      16) && $t(
        r,
        "large",
        /*size*/
        d[4] === "large"
      ), (!i || h & /*size*/
      16) && $t(
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
      8) && $t(
        e,
        "pending",
        /*pending*/
        d[3]
      ), (!i || h & /*padded*/
      32) && $t(
        e,
        "padded",
        /*padded*/
        d[5]
      ), (!i || h & /*highlight*/
      64) && $t(
        e,
        "highlight",
        /*highlight*/
        d[6]
      ), (!i || h & /*transparent*/
      512) && $t(
        e,
        "transparent",
        /*transparent*/
        d[9]
      ), h & /*disabled, _color*/
      2176 && $i(e, "color", !/*disabled*/
      d[7] && /*_color*/
      d[11] ? (
        /*_color*/
        d[11]
      ) : "var(--block-label-text-color)"), h & /*disabled, background*/
      1152 && $i(e, "--bg-color", /*disabled*/
      d[7] ? "auto" : (
        /*background*/
        d[10]
      ));
    },
    i(d) {
      i || (a && xf(a.$$.fragment, d), i = !0);
    },
    o(d) {
      a && Tf(a.$$.fragment, d), i = !1;
    },
    d(d) {
      d && Ua(e), o && o.d(), a && Ef(a), l = !1, s();
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
  attr: bo,
  binding_callbacks: O8,
  children: Ff,
  claim_element: Mf,
  create_slot: q8,
  detach: wo,
  element: zf,
  get_all_dirty_from_scope: P8,
  get_slot_changes: H8,
  init: U8,
  insert_hydration: V8,
  safe_not_equal: G8,
  toggle_class: Kr,
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
      e = zf("div"), t = zf("div"), i && i.c(), this.h();
    },
    l(l) {
      e = Mf(l, "DIV", { class: !0, "aria-label": !0 });
      var s = Ff(e);
      t = Mf(s, "DIV", { class: !0 });
      var o = Ff(t);
      i && i.l(o), o.forEach(wo), s.forEach(wo), this.h();
    },
    h() {
      bo(t, "class", "icon svelte-3w3rth"), bo(e, "class", "empty svelte-3w3rth"), bo(e, "aria-label", "Empty value"), Kr(
        e,
        "small",
        /*size*/
        n[0] === "small"
      ), Kr(
        e,
        "large",
        /*size*/
        n[0] === "large"
      ), Kr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        n[1]
      ), Kr(
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
      1) && Kr(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), (!r || s & /*size*/
      1) && Kr(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), (!r || s & /*unpadded_box*/
      2) && Kr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!r || s & /*parent_height*/
      8) && Kr(
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
      l && wo(e), i && i.d(l), n[6](null);
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
class fm extends N8 {
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
  append_hydration: Sn,
  attr: Za,
  check_outros: $8,
  children: Ka,
  claim_component: hm,
  claim_element: Ja,
  claim_space: is,
  claim_text: An,
  create_component: dm,
  destroy_component: mm,
  detach: Rt,
  element: Qa,
  empty: Nl,
  group_outros: eg,
  init: tg,
  insert_hydration: j0,
  mount_component: pm,
  safe_not_equal: rg,
  set_data: $a,
  space: ls,
  text: En,
  toggle_class: Bf,
  transition_in: Rl,
  transition_out: Ol
} = window.__gradio__svelte__internal;
function ng(n) {
  let e, t;
  return e = new K2({}), {
    c() {
      dm(e.$$.fragment);
    },
    l(r) {
      hm(e.$$.fragment, r);
    },
    m(r, a) {
      pm(e, r, a), t = !0;
    },
    i(r) {
      t || (Rl(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ol(e.$$.fragment, r), t = !1;
    },
    d(r) {
      mm(e, r);
    }
  };
}
function ag(n) {
  let e, t;
  return e = new x2({}), {
    c() {
      dm(e.$$.fragment);
    },
    l(r) {
      hm(e.$$.fragment, r);
    },
    m(r, a) {
      pm(e, r, a), t = !0;
    },
    i(r) {
      t || (Rl(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ol(e.$$.fragment, r), t = !1;
    },
    d(r) {
      mm(e, r);
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
    n[3] !== "short" && If(n)
  );
  return {
    c() {
      t = En(e), r = ls(), i && i.c(), a = Nl();
    },
    l(l) {
      t = An(l, e), r = is(l), i && i.l(l), a = Nl();
    },
    m(l, s) {
      j0(l, t, s), j0(l, r, s), i && i.m(l, s), j0(l, a, s);
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
      ) + "") && $a(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = If(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (Rt(t), Rt(r), Rt(a)), i && i.d(l);
    }
  };
}
function lg(n) {
  let e, t, r = (
    /*heading*/
    n[6] && Lf(n)
  ), a = (
    /*paragraph*/
    n[5] && Nf(n)
  );
  return {
    c() {
      r && r.c(), e = ls(), a && a.c(), t = Nl();
    },
    l(i) {
      r && r.l(i), e = is(i), a && a.l(i), t = Nl();
    },
    m(i, l) {
      r && r.m(i, l), j0(i, e, l), a && a.m(i, l), j0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? r ? r.p(i, l) : (r = Lf(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = Nf(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (Rt(e), Rt(t)), r && r.d(i), a && a.d(i);
    }
  };
}
function If(n) {
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
      e = Qa("span"), t = En("- "), a = En(r), i = En(" -"), l = ls(), o = En(s), this.h();
    },
    l(u) {
      e = Ja(u, "SPAN", { class: !0 });
      var c = Ka(e);
      t = An(c, "- "), a = An(c, r), i = An(c, " -"), c.forEach(Rt), l = is(u), o = An(u, s), this.h();
    },
    h() {
      Za(e, "class", "or svelte-1xg7h5n");
    },
    m(u, c) {
      j0(u, e, c), Sn(e, t), Sn(e, a), Sn(e, i), j0(u, l, c), j0(u, o, c);
    },
    p(u, c) {
      c & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && $a(a, r), c & /*message, i18n*/
      6 && s !== (s = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && $a(o, s);
    },
    d(u) {
      u && (Rt(e), Rt(l), Rt(o));
    }
  };
}
function Lf(n) {
  let e, t;
  return {
    c() {
      e = Qa("h2"), t = En(
        /*heading*/
        n[6]
      ), this.h();
    },
    l(r) {
      e = Ja(r, "H2", { class: !0 });
      var a = Ka(e);
      t = An(
        a,
        /*heading*/
        n[6]
      ), a.forEach(Rt), this.h();
    },
    h() {
      Za(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      j0(r, e, a), Sn(e, t);
    },
    p(r, a) {
      a & /*heading*/
      64 && $a(
        t,
        /*heading*/
        r[6]
      );
    },
    d(r) {
      r && Rt(e);
    }
  };
}
function Nf(n) {
  let e, t;
  return {
    c() {
      e = Qa("p"), t = En(
        /*paragraph*/
        n[5]
      ), this.h();
    },
    l(r) {
      e = Ja(r, "P", { class: !0 });
      var a = Ka(e);
      t = An(
        a,
        /*paragraph*/
        n[5]
      ), a.forEach(Rt), this.h();
    },
    h() {
      Za(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      j0(r, e, a), Sn(e, t);
    },
    p(r, a) {
      a & /*paragraph*/
      32 && $a(
        t,
        /*paragraph*/
        r[5]
      );
    },
    d(r) {
      r && Rt(e);
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
      e = Qa("div"), t = Qa("span"), a.c(), i = ls(), h.c(), this.h();
    },
    l(p) {
      e = Ja(p, "DIV", { class: !0 });
      var _ = Ka(e);
      t = Ja(_, "SPAN", { class: !0 });
      var b = Ka(t);
      a.l(b), b.forEach(Rt), i = is(_), h.l(_), _.forEach(Rt), this.h();
    },
    h() {
      Za(t, "class", "icon-wrap svelte-1xg7h5n"), Bf(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), Za(e, "class", "wrap svelte-1xg7h5n");
    },
    m(p, _) {
      j0(p, e, _), Sn(e, t), o[r].m(t, null), Sn(e, i), h.m(e, null), l = !0;
    },
    p(p, [_]) {
      let b = r;
      r = u(p), r !== b && (eg(), Ol(o[b], 1, 1, () => {
        o[b] = null;
      }), $8(), a = o[r], a || (a = o[r] = s[r](p), a.c()), Rl(a, 1), a.m(t, null)), (!l || _ & /*hovered*/
      16) && Bf(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), d === (d = c(p)) && h ? h.p(p, _) : (h.d(1), h = d(p), h && (h.c(), h.m(e, null)));
    },
    i(p) {
      l || (Rl(a), l = !0);
    },
    o(p) {
      Ol(a), l = !1;
    },
    d(p) {
      p && Rt(e), o[r].d(), h.d();
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
  append_hydration: el,
  attr: yo,
  check_outros: fg,
  children: ko,
  claim_component: hg,
  claim_element: Do,
  claim_space: dg,
  claim_text: mg,
  construct_svelte_component: Rf,
  create_component: Of,
  destroy_component: qf,
  detach: tl,
  element: Ao,
  group_outros: pg,
  init: gg,
  insert_hydration: _g,
  listen: vg,
  mount_component: Pf,
  safe_not_equal: bg,
  set_data: wg,
  set_style: yg,
  space: kg,
  text: Dg,
  transition_in: Hf,
  transition_out: Uf
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
  return c && (a = Rf(c, d())), {
    c() {
      e = Ao("button"), t = Ao("div"), r = Ao("span"), a && Of(a.$$.fragment), i = kg(), l = Dg(
        /*text*/
        n[1]
      ), this.h();
    },
    l(h) {
      e = Do(h, "BUTTON", { class: !0 });
      var p = ko(e);
      t = Do(p, "DIV", { class: !0 });
      var _ = ko(t);
      r = Do(_, "SPAN", { class: !0 });
      var b = ko(r);
      a && hg(a.$$.fragment, b), b.forEach(tl), i = dg(_), l = mg(
        _,
        /*text*/
        n[1]
      ), _.forEach(tl), p.forEach(tl), this.h();
    },
    h() {
      yo(r, "class", "icon-wrap svelte-1kt44zd"), yo(t, "class", "wrap svelte-1kt44zd"), yo(e, "class", "svelte-1kt44zd"), yg(e, "height", "100%");
    },
    m(h, p) {
      _g(h, e, p), el(e, t), el(t, r), a && Pf(a, r, null), el(t, i), el(t, l), s = !0, o || (u = vg(
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
          Uf(_.$$.fragment, 1, 0, () => {
            qf(_, 1);
          }), fg();
        }
        c ? (a = Rf(c, d()), Of(a.$$.fragment), Hf(a.$$.fragment, 1), Pf(a, r, null)) : a = null;
      }
      (!s || p & /*text*/
      2) && wg(
        l,
        /*text*/
        h[1]
      );
    },
    i(h) {
      s || (a && Hf(a.$$.fragment, h), s = !0);
    },
    o(h) {
      a && Uf(a.$$.fragment, h), s = !1;
    },
    d(h) {
      h && tl(e), a && qf(a), o = !1, u();
    }
  };
}
function Sg(n, e, t) {
  let r, { icon: a = j1 } = e;
  const i = Ag(), l = () => i("click");
  return n.$$set = (s) => {
    "icon" in s && t(0, a = s.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    1 && t(1, r = a === j1 ? "Click to Access Webcam" : "Click to Access Microphone");
  }, [a, r, i, l];
}
class gm extends cg {
  constructor(e) {
    super(), gg(this, e, Sg, Eg, bg, { icon: 0 });
  }
}
function _m() {
  return navigator.mediaDevices.enumerateDevices();
}
function xg(n, e) {
  e.srcObject = n, e.muted = !0, e.play();
}
async function Vf(n, e, t, r) {
  const a = r || {
    width: { ideal: 500 },
    height: { ideal: 500 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...a } : a,
    audio: n
  };
  return navigator.mediaDevices.getUserMedia(i).then((l) => (xg(l, e), l));
}
function vm(n, e = "videoinput") {
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
async function ss(n, e, t, r, a, i = "video", l = () => {
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
    (d.data === "change" || d.data === "tick" || d.data === "stopword" || (h == null ? void 0 : h.type) === "warning" || (h == null ? void 0 : h.type) === "error" || (h == null ? void 0 : h.type) === "send_input" || (h == null ? void 0 : h.type) === "fetch_output" || (h == null ? void 0 : h.type) === "stopword" || (h == null ? void 0 : h.type) === "end_stream") && l(h ?? d.data), o(h ?? d.data);
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
function r0(n) {
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
  append_hydration: Eo,
  attr: sn,
  check_outros: bm,
  children: aa,
  claim_component: zg,
  claim_element: xn,
  claim_space: Bg,
  construct_svelte_component: Gf,
  create_component: jf,
  destroy_component: Wf,
  destroy_each: Ig,
  detach: E0,
  element: Tn,
  empty: Xf,
  ensure_array_like: Yf,
  group_outros: wm,
  init: Lg,
  insert_hydration: ca,
  mount_component: Zf,
  noop: Va,
  safe_not_equal: Ng,
  set_style: b0,
  space: Rg,
  src_url_equal: Kf,
  transition_in: ql,
  transition_out: Pl
} = window.__gradio__svelte__internal, { onDestroy: Og } = window.__gradio__svelte__internal;
function Jf(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r[18] = t, r;
}
function Qf(n) {
  let e, t = Yf(Array(3)), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = $f(Jf(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Xf();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Xf();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      ca(a, e, i);
    },
    p(a, i) {
      if (i & /*pulse_color, maxPulseScale, pulseIntensity*/
      82) {
        t = Yf(Array(3));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Jf(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = $f(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && E0(e), Ig(r, a);
    }
  };
}
function $f(n) {
  let e;
  return {
    c() {
      e = Tn("div"), this.h();
    },
    l(t) {
      e = xn(t, "DIV", { class: !0 }), aa(e).forEach(E0), this.h();
    },
    h() {
      sn(e, "class", "pulse-ring svelte-126lrgf"), b0(
        e,
        "background",
        /*pulse_color*/
        n[1]
      ), b0(e, "animation-delay", `${/*i*/
      n[18] * 0.4}s`), b0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        n[6]
      ), b0(e, "opacity", 0.5 * /*pulseIntensity*/
      n[4]);
    },
    m(t, r) {
      ca(t, e, r);
    },
    p(t, r) {
      r & /*pulse_color*/
      2 && b0(
        e,
        "background",
        /*pulse_color*/
        t[1]
      ), r & /*maxPulseScale*/
      64 && b0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        t[6]
      ), r & /*pulseIntensity*/
      16 && b0(e, "opacity", 0.5 * /*pulseIntensity*/
      t[4]);
    },
    d(t) {
      t && E0(e);
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
  return a && (t = Gf(a, i())), {
    c() {
      e = Tn("div"), t && jf(t.$$.fragment);
    },
    l(l) {
      e = xn(l, "DIV", {});
      var s = aa(e);
      t && zg(t.$$.fragment, s), s.forEach(E0);
    },
    m(l, s) {
      ca(l, e, s), t && Zf(t, e, null), r = !0;
    },
    p(l, s) {
      if (s & /*icon*/
      1 && a !== (a = /*icon*/
      l[0])) {
        if (t) {
          wm();
          const o = t;
          Pl(o.$$.fragment, 1, 0, () => {
            Wf(o, 1);
          }), bm();
        }
        a ? (t = Gf(a, i()), jf(t.$$.fragment), ql(t.$$.fragment, 1), Zf(t, e, null)) : t = null;
      }
    },
    i(l) {
      r || (t && ql(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && Pl(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E0(e), t && Wf(t);
    }
  };
}
function Pg(n) {
  let e;
  return {
    c() {
      e = Tn("div");
    },
    l(t) {
      e = xn(t, "DIV", {}), aa(e).forEach(E0);
    },
    m(t, r) {
      ca(t, e, r);
    },
    p: Va,
    i: Va,
    o: Va,
    d(t) {
      t && E0(e);
    }
  };
}
function Hg(n) {
  let e, t;
  return {
    c() {
      e = Tn("img"), this.h();
    },
    l(r) {
      e = xn(r, "IMG", { src: !0, alt: !0, class: !0 }), this.h();
    },
    h() {
      Kf(e.src, t = /*icon*/
      n[0]) || sn(e, "src", t), sn(e, "alt", "Audio visualization icon"), sn(e, "class", "icon-image svelte-126lrgf"), b0(e, "border-radius", `${/*icon_radius*/
      n[2]}%`);
    },
    m(r, a) {
      ca(r, e, a);
    },
    p(r, a) {
      a & /*icon*/
      1 && !Kf(e.src, t = /*icon*/
      r[0]) && sn(e, "src", t), a & /*icon_radius*/
      4 && b0(e, "border-radius", `${/*icon_radius*/
      r[2]}%`);
    },
    i: Va,
    o: Va,
    d(r) {
      r && E0(e);
    }
  };
}
function Ug(n) {
  let e, t, r, a, i, l, s, o = (
    /*pulseIntensity*/
    n[4] > /*pulse_intensity_threshold*/
    n[3] && Qf(n)
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
      e = Tn("div"), t = Tn("div"), o && o.c(), r = Rg(), a = Tn("div"), l.c(), this.h();
    },
    l(h) {
      e = xn(h, "DIV", { class: !0 });
      var p = aa(e);
      t = xn(p, "DIV", { class: !0 });
      var _ = aa(t);
      o && o.l(_), r = Bg(_), a = xn(_, "DIV", { class: !0 });
      var b = aa(a);
      l.l(b), b.forEach(E0), _.forEach(E0), p.forEach(E0), this.h();
    },
    h() {
      sn(a, "class", "gradio-webrtc-pulsing-icon svelte-126lrgf"), b0(a, "transform", `scale(${/*pulseScale*/
      n[5]})`), b0(a, "background", "none"), sn(t, "class", "gradio-webrtc-pulsing-icon-container svelte-126lrgf"), sn(e, "class", "gradio-webrtc-icon-wrapper svelte-126lrgf");
    },
    m(h, p) {
      ca(h, e, p), Eo(e, t), o && o.m(t, null), Eo(t, r), Eo(t, a), c[i].m(a, null), s = !0;
    },
    p(h, [p]) {
      /*pulseIntensity*/
      h[4] > /*pulse_intensity_threshold*/
      h[3] ? o ? o.p(h, p) : (o = Qf(h), o.c(), o.m(t, r)) : o && (o.d(1), o = null);
      let _ = i;
      i = d(h), i === _ ? c[i].p(h, p) : (wm(), Pl(c[_], 1, 1, () => {
        c[_] = null;
      }), bm(), l = c[i], l ? l.p(h, p) : (l = c[i] = u[i](h), l.c()), ql(l, 1), l.m(a, null)), p & /*pulseScale*/
      32 && b0(a, "transform", `scale(${/*pulseScale*/
      h[5]})`);
    },
    i(h) {
      s || (ql(l), s = !0);
    },
    o(h) {
      Pl(l), s = !1;
    },
    d(h) {
      h && E0(e), o && o.d(), c[i].d();
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
    const E = Array.from(p).reduce((S, T) => S + T, 0) / p.length / 255;
    t(5, b = 1 + E * 0.15), t(4, D = E), _ = requestAnimationFrame(k);
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
class li extends Mg {
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
  append_hydration: ut,
  attr: Je,
  binding_callbacks: Xg,
  check_outros: Hl,
  children: zt,
  claim_component: mn,
  claim_element: Bt,
  claim_space: ur,
  claim_text: si,
  create_component: pn,
  create_in_transition: Yg,
  destroy_component: gn,
  destroy_each: Zg,
  detach: xe,
  element: It,
  empty: Ul,
  ensure_array_like: eh,
  group_outros: Vl,
  init: Kg,
  insert_hydration: n0,
  listen: Gl,
  mount_component: _n,
  noop: ym,
  run_all: Jg,
  safe_not_equal: Qg,
  set_data: oi,
  set_input_value: _u,
  set_style: $g,
  space: cr,
  stop_propagation: e9,
  text: ui,
  toggle_class: rl,
  transition_in: pt,
  transition_out: Mt
} = window.__gradio__svelte__internal, { createEventDispatcher: t9, onMount: r9 } = window.__gradio__svelte__internal;
function th(n, e, t) {
  const r = n.slice();
  return r[42] = e[t], r;
}
function rh(n) {
  let e, t, r;
  return t = new li({
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
        n[0] || Cn
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
      e = It("div"), pn(t.$$.fragment), this.h();
    },
    l(a) {
      e = Bt(a, "DIV", { class: !0 });
      var i = zt(e);
      mn(t.$$.fragment, i), i.forEach(xe), this.h();
    },
    h() {
      Je(e, "class", "audio-indicator svelte-1y5s2o2");
    },
    m(a, i) {
      n0(a, e, i), _n(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i[0] & /*stream_state*/
      4096 && (l.stream_state = /*stream_state*/
      a[12]), i[0] & /*icon*/
      1 && (l.icon = /*icon*/
      a[0] || Cn), i[0] & /*icon_button_color*/
      2 && (l.icon_button_color = /*icon_button_color*/
      a[1]), i[0] & /*pulse_color*/
      8 && (l.pulse_color = /*pulse_color*/
      a[3]), i[0] & /*icon_radius*/
      4 && (l.icon_radius = /*icon_radius*/
      a[2]), t.$set(l);
    },
    i(a) {
      r || (pt(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Mt(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && xe(e), gn(t);
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
    n[10] && nh(n)
  );
  return {
    c() {
      e = It("div"), t = It("button"), a.c(), i = cr(), _ && _.c(), l = cr(), b && b.c(), s = Ul(), this.h();
    },
    l(D) {
      e = Bt(D, "DIV", { class: !0 });
      var y = zt(e);
      t = Bt(y, "BUTTON", { "aria-label": !0, class: !0 });
      var k = zt(t);
      a.l(k), k.forEach(xe), i = ur(y), _ && _.l(y), y.forEach(xe), l = ur(D), b && b.l(D), s = Ul(), this.h();
    },
    h() {
      Je(t, "aria-label", "start stream"), Je(t, "class", "svelte-1y5s2o2"), Je(e, "class", "button-wrap svelte-1y5s2o2");
    },
    m(D, y) {
      n0(D, e, y), ut(e, t), h[r].m(t, null), ut(e, i), _ && _.m(e, null), n0(D, l, y), b && b.m(D, y), n0(D, s, y), o = !0, u || (c = Gl(
        t,
        "click",
        /*start_webrtc*/
        n[17]
      ), u = !0);
    },
    p(D, y) {
      let k = r;
      r = p(D), r === k ? h[r].p(D, y) : (Vl(), Mt(h[k], 1, 1, () => {
        h[k] = null;
      }), Hl(), a = h[r], a ? a.p(D, y) : (a = h[r] = d[r](D), a.c()), pt(a, 1), a.m(t, null)), _.p(D, y), /*options_open*/
      D[14] && /*selected_device*/
      D[10] ? b ? (b.p(D, y), y[0] & /*options_open, selected_device*/
      17408 && pt(b, 1)) : (b = nh(D), b.c(), pt(b, 1), b.m(s.parentNode, s)) : b && (Vl(), Mt(b, 1, 1, () => {
        b = null;
      }), Hl());
    },
    i(D) {
      o || (pt(a), pt(_), pt(b), o = !0);
    },
    o(D) {
      Mt(a), Mt(_), Mt(b), o = !1;
    },
    d(D) {
      D && (xe(e), xe(l), xe(s)), h[r].d(), _ && _.d(), b && b.d(D), u = !1, c();
    }
  };
}
function a9(n) {
  let e, t, r, a;
  return t = new gm({}), t.$on(
    "click",
    /*click_handler*/
    n[32]
  ), {
    c() {
      e = It("div"), pn(t.$$.fragment), this.h();
    },
    l(i) {
      e = Bt(i, "DIV", { title: !0, style: !0 });
      var l = zt(e);
      mn(t.$$.fragment, l), l.forEach(xe), this.h();
    },
    h() {
      Je(e, "title", "grant webcam access"), $g(e, "height", "100%");
    },
    m(i, l) {
      n0(i, e, l), _n(t, e, null), a = !0;
    },
    p: ym,
    i(i) {
      a || (pt(t.$$.fragment, i), i && (r || Wg(() => {
        r = Yg(e, e1, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      Mt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && xe(e), gn(t);
    }
  };
}
function i9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].start || /*i18n*/
    n[6]("audio.record")) + ""
  ), l, s;
  return r = new Xl({}), {
    c() {
      e = It("div"), t = It("div"), pn(r.$$.fragment), a = cr(), l = ui(i), this.h();
    },
    l(o) {
      e = Bt(o, "DIV", { class: !0 });
      var u = zt(e);
      t = Bt(u, "DIV", { class: !0, title: !0 });
      var c = zt(t);
      mn(r.$$.fragment, c), c.forEach(xe), a = ur(u), l = si(u, i), u.forEach(xe), this.h();
    },
    h() {
      Je(t, "class", "icon color-primary svelte-1y5s2o2"), Je(t, "title", "start recording"), Je(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      n0(o, e, u), ut(e, t), _n(r, t, null), ut(e, a), ut(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].start || /*i18n*/
      o[6]("audio.record")) + "") && oi(l, i);
    },
    i(o) {
      s || (pt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Mt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && xe(e), gn(r);
    }
  };
}
function l9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].stop || /*i18n*/
    n[6]("audio.stop")) + ""
  ), l, s;
  return r = new Ad({}), {
    c() {
      e = It("div"), t = It("div"), pn(r.$$.fragment), a = cr(), l = ui(i), this.h();
    },
    l(o) {
      e = Bt(o, "DIV", { class: !0 });
      var u = zt(e);
      t = Bt(u, "DIV", { class: !0, title: !0 });
      var c = zt(t);
      mn(r.$$.fragment, c), c.forEach(xe), a = ur(u), l = si(u, i), u.forEach(xe), this.h();
    },
    h() {
      Je(t, "class", "icon color-primary svelte-1y5s2o2"), Je(t, "title", "stop recording"), Je(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      n0(o, e, u), ut(e, t), _n(r, t, null), ut(e, a), ut(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].stop || /*i18n*/
      o[6]("audio.stop")) + "") && oi(l, i);
    },
    i(o) {
      s || (pt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Mt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && xe(e), gn(r);
    }
  };
}
function s9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].waiting || /*i18n*/
    n[6]("audio.waiting")) + ""
  ), l, s;
  return r = new Su({}), {
    c() {
      e = It("div"), t = It("div"), pn(r.$$.fragment), a = cr(), l = ui(i), this.h();
    },
    l(o) {
      e = Bt(o, "DIV", { class: !0 });
      var u = zt(e);
      t = Bt(u, "DIV", { class: !0, title: !0 });
      var c = zt(t);
      mn(r.$$.fragment, c), c.forEach(xe), a = ur(u), l = si(u, i), u.forEach(xe), this.h();
    },
    h() {
      Je(t, "class", "icon color-primary svelte-1y5s2o2"), Je(t, "title", "spinner"), Je(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      n0(o, e, u), ut(e, t), _n(r, t, null), ut(e, a), ut(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].waiting || /*i18n*/
      o[6]("audio.waiting")) + "") && oi(l, i);
    },
    i(o) {
      s || (pt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Mt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && xe(e), gn(r);
    }
  };
}
function o9(n) {
  let e, t, r, a, i;
  return t = new Yl({}), {
    c() {
      e = It("button"), pn(t.$$.fragment), this.h();
    },
    l(l) {
      e = Bt(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = zt(e);
      mn(t.$$.fragment, s), s.forEach(xe), this.h();
    },
    h() {
      Je(e, "class", "icon svelte-1y5s2o2"), Je(e, "aria-label", "select input source");
    },
    m(l, s) {
      n0(l, e, s), _n(t, e, null), r = !0, a || (i = Gl(
        e,
        "click",
        /*click_handler_1*/
        n[33]
      ), a = !0);
    },
    p: ym,
    i(l) {
      r || (pt(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Mt(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && xe(e), gn(t), a = !1, i();
    }
  };
}
function nh(n) {
  let e, t, r, a, i, l, s;
  r = new Yl({});
  function o(d, h) {
    return (
      /*available_video_devices*/
      d[9].length === 0 ? c9 : u9
    );
  }
  let u = o(n), c = u(n);
  return {
    c() {
      e = It("select"), t = It("button"), pn(r.$$.fragment), a = cr(), c.c(), this.h();
    },
    l(d) {
      e = Bt(d, "SELECT", { class: !0, "aria-label": !0 });
      var h = zt(e);
      t = Bt(h, "BUTTON", { class: !0 });
      var p = zt(t);
      mn(r.$$.fragment, p), a = ur(p), p.forEach(xe), c.l(h), h.forEach(xe), this.h();
    },
    h() {
      Je(t, "class", "inset-icon svelte-1y5s2o2"), Je(e, "class", "select-wrap svelte-1y5s2o2"), Je(e, "aria-label", "select source");
    },
    m(d, h) {
      n0(d, e, h), ut(e, t), _n(r, t, null), ut(t, a), c.m(e, null), i = !0, l || (s = [
        Gl(t, "click", e9(
          /*click_handler_2*/
          n[34]
        )),
        jg(t1.call(
          null,
          e,
          /*handle_click_outside*/
          n[18]
        )),
        Gl(
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
      i || (pt(r.$$.fragment, d), i = !0);
    },
    o(d) {
      Mt(r.$$.fragment, d), i = !1;
    },
    d(d) {
      d && xe(e), gn(r), c.d(), l = !1, Jg(s);
    }
  };
}
function u9(n) {
  let e, t = eh(
    /*available_video_devices*/
    n[9]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = ah(th(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ul();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Ul();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      n0(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_video_devices, selected_device*/
      1536) {
        t = eh(
          /*available_video_devices*/
          a[9]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = th(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = ah(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && xe(e), Zg(r, a);
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
      e = It("option"), r = ui(t), this.h();
    },
    l(a) {
      e = Bt(a, "OPTION", { class: !0 });
      var i = zt(e);
      r = si(i, t), i.forEach(xe), this.h();
    },
    h() {
      e.__value = "", _u(e, e.__value), Je(e, "class", "svelte-1y5s2o2");
    },
    m(a, i) {
      n0(a, e, i), ut(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      64 && t !== (t = /*i18n*/
      a[6]("common.no_devices") + "") && oi(r, t);
    },
    d(a) {
      a && xe(e);
    }
  };
}
function ah(n) {
  let e, t = (
    /*device*/
    n[42].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = It("option"), r = ui(t), a = cr(), this.h();
    },
    l(s) {
      e = Bt(s, "OPTION", { class: !0 });
      var o = zt(e);
      r = si(o, t), a = ur(o), o.forEach(xe), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[42].deviceId, _u(e, e.__value), e.selected = l = /*selected_device*/
      n[10].deviceId === /*device*/
      n[42].deviceId, Je(e, "class", "svelte-1y5s2o2");
    },
    m(s, o) {
      n0(s, e, o), ut(e, r), ut(e, a);
    },
    p(s, o) {
      o[0] & /*available_video_devices*/
      512 && t !== (t = /*device*/
      s[42].label + "") && oi(r, t), o[0] & /*available_video_devices*/
      512 && i !== (i = /*device*/
      s[42].deviceId) && (e.__value = i, _u(e, e.__value)), o[0] & /*selected_device, available_video_devices*/
      1536 && l !== (l = /*selected_device*/
      s[10].deviceId === /*device*/
      s[42].deviceId) && (e.selected = l);
    },
    d(s) {
      s && xe(e);
    }
  };
}
function f9(n) {
  let e, t, r, a, i, l, s, o, u;
  t = new um({
    props: { time_limit: (
      /*_time_limit*/
      n[11]
    ) }
  });
  let c = (
    /*stream_state*/
    n[12] === "open" && /*include_audio*/
    n[5] && rh(n)
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
      e = It("div"), pn(t.$$.fragment), r = cr(), c && c.c(), a = cr(), i = It("video"), l = cr(), o.c(), this.h();
    },
    l(_) {
      e = Bt(_, "DIV", { class: !0 });
      var b = zt(e);
      mn(t.$$.fragment, b), r = ur(b), c && c.l(b), a = ur(b), i = Bt(b, "VIDEO", { class: !0 }), zt(i).forEach(xe), l = ur(b), o.l(b), b.forEach(xe), this.h();
    },
    h() {
      i.autoplay = !0, i.playsInline = !0, Je(i, "class", "svelte-1y5s2o2"), rl(i, "hide", !/*webcam_accessed*/
      n[13]), rl(
        i,
        "flip",
        /*stream_state*/
        n[12] != "open" || /*stream_state*/
        n[12] === "open" && /*include_audio*/
        n[5]
      ), Je(e, "class", "wrap svelte-1y5s2o2");
    },
    m(_, b) {
      n0(_, e, b), _n(t, e, null), ut(e, r), c && c.m(e, null), ut(e, a), ut(e, i), n[31](i), ut(e, l), h[s].m(e, null), u = !0;
    },
    p(_, b) {
      const D = {};
      b[0] & /*_time_limit*/
      2048 && (D.time_limit = /*_time_limit*/
      _[11]), t.$set(D), /*stream_state*/
      _[12] === "open" && /*include_audio*/
      _[5] ? c ? (c.p(_, b), b[0] & /*stream_state, include_audio*/
      4128 && pt(c, 1)) : (c = rh(_), c.c(), pt(c, 1), c.m(e, a)) : c && (Vl(), Mt(c, 1, 1, () => {
        c = null;
      }), Hl()), (!u || b[0] & /*webcam_accessed*/
      8192) && rl(i, "hide", !/*webcam_accessed*/
      _[13]), (!u || b[0] & /*stream_state, include_audio*/
      4128) && rl(
        i,
        "flip",
        /*stream_state*/
        _[12] != "open" || /*stream_state*/
        _[12] === "open" && /*include_audio*/
        _[5]
      );
      let y = s;
      s = p(_), s === y ? h[s].p(_, b) : (Vl(), Mt(h[y], 1, 1, () => {
        h[y] = null;
      }), Hl(), o = h[s], o ? o.p(_, b) : (o = h[s] = d[s](_), o.c()), pt(o, 1), o.m(e, null));
    },
    i(_) {
      u || (pt(t.$$.fragment, _), pt(c), pt(o), u = !0);
    },
    o(_) {
      Mt(t.$$.fragment, _), Mt(c), Mt(o), u = !1;
    },
    d(_) {
      _ && xe(e), gn(t), c && c.d(), n[31](null), h[s].d();
    }
  };
}
function t1(n, e) {
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
  var r = this && this.__awaiter || function(j, ge, ke, Te) {
    function ze(Le) {
      return Le instanceof ke ? Le : new ke(function(je) {
        je(Le);
      });
    }
    return new (ke || (ke = Promise))(function(Le, je) {
      function ft(Pe) {
        try {
          qe(Te.next(Pe));
        } catch (lt) {
          je(lt);
        }
      }
      function We(Pe) {
        try {
          qe(Te.throw(Pe));
        } catch (lt) {
          je(lt);
        }
      }
      function qe(Pe) {
        Pe.done ? Le(Pe.value) : ze(Pe.value).then(ft, We);
      }
      qe((Te = Te.apply(j, ge || [])).next());
    });
  };
  let a, i = [], l = null, s = null, { time_limit: o = null } = e, u = "closed", { on_change_cb: c } = e, { reject_cb: d } = e, { mode: h } = e;
  Math.random().toString(36).substring(2);
  let { rtp_params: p = {} } = e, { icon: _ = void 0 } = e, { icon_button_color: b = "var(--color-accent)" } = e, { icon_radius: D = 50 } = e, { pulse_color: y = "var(--color-accent)" } = e, { button_labels: k } = e;
  const w = (j) => {
    j === "closed" ? (t(11, s = null), t(12, u = "closed")) : j === "waiting" ? t(12, u = "waiting") : t(12, u = "open");
  };
  let { track_constraints: E = null } = e, { rtc_configuration: S } = e, { stream_every: T = 1 } = e, { server: C } = e, { include_audio: F } = e, { i18n: B } = e;
  const I = t9();
  r9(() => document.createElement("canvas"));
  const L = (j) => r(void 0, void 0, void 0, function* () {
    const ke = j.target.value;
    yield Vf(F, a, ke, E).then((Te) => r(void 0, void 0, void 0, function* () {
      O = Te, t(10, l = i.find((ze) => ze.deviceId === ke) || null), t(14, Ae = !1);
    }));
  });
  function P() {
    return r(this, void 0, void 0, function* () {
      try {
        Vf(F, a, null, E).then((j) => r(this, void 0, void 0, function* () {
          t(13, se = !0), t(9, i = yield _m()), O = j;
        })).then(() => vm(i)).then((j) => {
          t(9, i = j);
          const ge = O.getTracks().map((ke) => {
            var Te;
            return (Te = ke.getSettings()) === null || Te === void 0 ? void 0 : Te.deviceId;
          })[0];
          t(10, l = ge && j.find((ke) => ke.deviceId === ge) || i[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && I("error", B("image.no_webcam_support"));
      } catch (j) {
        if (j instanceof DOMException && j.name == "NotAllowedError")
          I("error", B("image.allow_webcam_access"));
        else
          throw j;
      }
    });
  }
  let Z = (j) => {
    j.type === "end_stream" ? (c(j), t(12, u = "closed"), r0(K), P()) : (console.debug("calling on_change_cb with msg", j), c(j));
  }, O, se = !1, K, { webrtc_id: he } = e;
  function ue() {
    return r(this, void 0, void 0, function* () {
      if (u === "closed") {
        I("start_recording"), yield C.turn().then((ge) => {
          if (ge.error) {
            I("error", ge.error);
            return;
          }
          t(20, S = ge), console.info("rtc_configuration", ge);
        }), K = new RTCPeerConnection(S), K.addEventListener("connectionstatechange", (ge) => r(this, void 0, void 0, function* () {
          switch (K.connectionState) {
            case "connected":
              t(12, u = "open"), t(11, s = o), I("tick");
              break;
            case "disconnected":
              t(12, u = "closed"), t(11, s = null), r0(K), yield P();
              break;
            case "failed":
              t(12, u = "closed"), t(11, s = null), I("error", "Connection failed!"), r0(K);
              break;
          }
        })), t(12, u = "waiting"), t(21, he = Math.random().toString(36).substring(2));
        const j = setTimeout(
          () => {
            c({ type: "connection_timeout" });
          },
          1e4
        );
        ss(O, K, h === "send" ? null : a, C.offer, he, "video", Z, p, void 0, d).then((ge) => {
          clearTimeout(j), K = ge;
        }).catch(() => {
          clearTimeout(j), console.info("catching"), t(12, u = "closed");
        });
      } else
        I("stop_recording"), r0(K), t(12, u = "closed"), t(11, s = null), yield P();
    });
  }
  let Ae = !1;
  function ye(j) {
    j.preventDefault(), j.stopPropagation(), t(14, Ae = !1);
  }
  const $ = () => a.srcObject;
  function de(j) {
    Xg[j ? "unshift" : "push"](() => {
      a = j, t(8, a);
    });
  }
  const ce = async () => P(), Ce = () => t(14, Ae = !0), V = () => t(14, Ae = !1);
  return n.$$set = (j) => {
    "time_limit" in j && t(22, o = j.time_limit), "on_change_cb" in j && t(23, c = j.on_change_cb), "reject_cb" in j && t(24, d = j.reject_cb), "mode" in j && t(25, h = j.mode), "rtp_params" in j && t(26, p = j.rtp_params), "icon" in j && t(0, _ = j.icon), "icon_button_color" in j && t(1, b = j.icon_button_color), "icon_radius" in j && t(2, D = j.icon_radius), "pulse_color" in j && t(3, y = j.pulse_color), "button_labels" in j && t(4, k = j.button_labels), "track_constraints" in j && t(28, E = j.track_constraints), "rtc_configuration" in j && t(20, S = j.rtc_configuration), "stream_every" in j && t(29, T = j.stream_every), "server" in j && t(30, C = j.server), "include_audio" in j && t(5, F = j.include_audio), "i18n" in j && t(6, B = j.i18n), "webrtc_id" in j && t(21, he = j.webrtc_id);
  }, [
    _,
    b,
    D,
    y,
    k,
    F,
    B,
    t1,
    a,
    i,
    l,
    s,
    u,
    se,
    Ae,
    L,
    P,
    ue,
    ye,
    $,
    S,
    he,
    o,
    c,
    d,
    h,
    p,
    w,
    E,
    T,
    C,
    de,
    ce,
    Ce,
    V
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
    return t1;
  }
}
const {
  SvelteComponent: m9,
  add_flush_callback: p9,
  attr: ih,
  bind: g9,
  binding_callbacks: _9,
  bubble: nl,
  children: v9,
  claim_component: lh,
  claim_element: b9,
  claim_space: w9,
  create_component: sh,
  destroy_component: oh,
  detach: So,
  element: y9,
  init: k9,
  insert_hydration: uh,
  mount_component: ch,
  safe_not_equal: D9,
  space: A9,
  transition_in: fh,
  transition_out: hh
} = window.__gradio__svelte__internal, { createEventDispatcher: E9 } = window.__gradio__svelte__internal;
function S9(n) {
  let e, t, r, a, i, l;
  e = new as({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Eu,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  function s(u) {
    n[21](u);
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
    n[0]), a = new d9({ props: o }), _9.push(() => g9(a, "webrtc_id", s)), a.$on(
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
        sh(e.$$.fragment), t = A9(), r = y9("div"), sh(a.$$.fragment), this.h();
      },
      l(u) {
        lh(e.$$.fragment, u), t = w9(u), r = b9(u, "DIV", { "data-testid": !0, class: !0 });
        var c = v9(r);
        lh(a.$$.fragment, c), c.forEach(So), this.h();
      },
      h() {
        ih(r, "data-testid", "video"), ih(r, "class", "video-container svelte-dn5v7y");
      },
      m(u, c) {
        ch(e, u, c), uh(u, t, c), uh(u, r, c), ch(a, r, null), l = !0;
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
        u[12]), !i && c & /*value*/
        1 && (i = !0, h.webrtc_id = /*value*/
        u[0], p9(() => i = !1)), a.$set(h);
      },
      i(u) {
        l || (fh(e.$$.fragment, u), fh(a.$$.fragment, u), l = !0);
      },
      o(u) {
        hh(e.$$.fragment, u), hh(a.$$.fragment, u), l = !1;
      },
      d(u) {
        u && (So(t), So(r)), oh(e, u), oh(a);
      }
    }
  );
}
let x9 = !1;
function T9(n, e, t) {
  let { value: r = null } = e, { label: a = void 0 } = e, { show_label: i = !0 } = e, { include_audio: l } = e, { i18n: s } = e, { active_source: o = "webcam" } = e, { handle_reset_value: u = () => {
  } } = e, { stream_handler: c } = e, { time_limit: d = null } = e, { button_labels: h } = e, { server: p } = e, { rtc_configuration: _ } = e, { track_constraints: b = {} } = e, { mode: D } = e, { on_change_cb: y } = e, { reject_cb: k } = e, { rtp_params: w = {} } = e, { icon: E = void 0 } = e, { icon_button_color: S = "var(--color-accent)" } = e, { pulse_color: T = "var(--color-accent)" } = e, { icon_radius: C = 50 } = e;
  const F = E9();
  function B(O) {
    r = O, t(0, r);
  }
  function I(O) {
    nl.call(this, n, O);
  }
  function L(O) {
    nl.call(this, n, O);
  }
  function P(O) {
    nl.call(this, n, O);
  }
  function Z(O) {
    nl.call(this, n, O);
  }
  return n.$$set = (O) => {
    "value" in O && t(0, r = O.value), "label" in O && t(1, a = O.label), "show_label" in O && t(2, i = O.show_label), "include_audio" in O && t(3, l = O.include_audio), "i18n" in O && t(4, s = O.i18n), "active_source" in O && t(18, o = O.active_source), "handle_reset_value" in O && t(19, u = O.handle_reset_value), "stream_handler" in O && t(20, c = O.stream_handler), "time_limit" in O && t(5, d = O.time_limit), "button_labels" in O && t(6, h = O.button_labels), "server" in O && t(7, p = O.server), "rtc_configuration" in O && t(8, _ = O.rtc_configuration), "track_constraints" in O && t(9, b = O.track_constraints), "mode" in O && t(10, D = O.mode), "on_change_cb" in O && t(11, y = O.on_change_cb), "reject_cb" in O && t(12, k = O.reject_cb), "rtp_params" in O && t(13, w = O.rtp_params), "icon" in O && t(14, E = O.icon), "icon_button_color" in O && t(15, S = O.icon_button_color), "pulse_color" in O && t(16, T = O.pulse_color), "icon_radius" in O && t(17, C = O.icon_radius);
  }, F("drag", x9), [
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
    E,
    S,
    T,
    C,
    o,
    u,
    c,
    B,
    I,
    L,
    P,
    Z
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
var dh;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})(dh || (dh = {}));
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
  attr: xo,
  binding_callbacks: z9,
  children: mh,
  claim_element: ph,
  claim_text: oy,
  detach: Ga,
  element: gh,
  empty: jl,
  init: B9,
  insert_hydration: r1,
  is_function: _h,
  listen: To,
  noop: vh,
  run_all: I9,
  safe_not_equal: L9,
  set_data: uy,
  src_url_equal: bh,
  text: cy,
  toggle_class: jn
} = window.__gradio__svelte__internal;
function wh(n) {
  let e;
  function t(i, l) {
    return N9;
  }
  let a = t()(n);
  return {
    c() {
      a.c(), e = jl();
    },
    l(i) {
      a.l(i), e = jl();
    },
    m(i, l) {
      a.m(i, l), r1(i, e, l);
    },
    p(i, l) {
      a.p(i, l);
    },
    d(i) {
      i && Ga(e), a.d(i);
    }
  };
}
function N9(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = gh("div"), t = gh("video"), this.h();
    },
    l(l) {
      e = ph(l, "DIV", { class: !0 });
      var s = mh(e);
      t = ph(s, "VIDEO", { src: !0 }), mh(t).forEach(Ga), s.forEach(Ga), this.h();
    },
    h() {
      var l;
      bh(t.src, r = /*value*/
      (l = n[2]) == null ? void 0 : l.video.url) || xo(t, "src", r), xo(e, "class", "container svelte-1uoo7dd"), jn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), jn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), jn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(l, s) {
      r1(l, e, s), M9(e, t), n[6](t), a || (i = [
        To(
          t,
          "loadeddata",
          /*init*/
          n[4]
        ),
        To(t, "mouseover", function() {
          _h(
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
        To(t, "mouseout", function() {
          _h(
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
      4 && !bh(t.src, r = /*value*/
      (o = n[2]) == null ? void 0 : o.video.url) && xo(t, "src", r), s & /*type*/
      1 && jn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), s & /*type*/
      1 && jn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), s & /*selected*/
      2 && jn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    d(l) {
      l && Ga(e), n[6](null), a = !1, I9(i);
    }
  };
}
function R9(n) {
  let e, t = (
    /*value*/
    n[2] && wh(n)
  );
  return {
    c() {
      t && t.c(), e = jl();
    },
    l(r) {
      t && t.l(r), e = jl();
    },
    m(r, a) {
      t && t.m(r, a), r1(r, e, a);
    },
    p(r, [a]) {
      /*value*/
      r[2] ? t ? t.p(r, a) : (t = wh(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: vh,
    o: vh,
    d(r) {
      r && Ga(e), t && t.d(r);
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
      function k(S) {
        try {
          E(_.next(S));
        } catch (T) {
          y(T);
        }
      }
      function w(S) {
        try {
          E(_.throw(S));
        } catch (T) {
          y(T);
        }
      }
      function E(S) {
        S.done ? D(S.value) : b(S.value).then(k, w);
      }
      E((_ = _.apply(d, h || [])).next());
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
  append_hydration: yh,
  assign: kh,
  attr: Wn,
  binding_callbacks: P9,
  bubble: H9,
  check_outros: U9,
  children: Dh,
  claim_component: n1,
  claim_element: Co,
  claim_space: Ah,
  create_component: a1,
  destroy_component: i1,
  detach: Ca,
  element: Fo,
  exclude_internal_props: Eh,
  group_outros: V9,
  init: G9,
  insert_hydration: Mo,
  listen: K0,
  mount_component: l1,
  run_all: j9,
  safe_not_equal: W9,
  space: Sh,
  toggle_class: xh,
  transition_in: ta,
  transition_out: ja
} = window.__gradio__svelte__internal, { createEventDispatcher: X9 } = window.__gradio__svelte__internal;
function Th(n) {
  let e, t;
  return e = new fm({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Y9] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      a1(e.$$.fragment);
    },
    l(r) {
      n1(e.$$.fragment, r);
    },
    m(r, a) {
      l1(e, r, a), t = !0;
    },
    i(r) {
      t || (ta(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ja(e.$$.fragment, r), t = !1;
    },
    d(r) {
      i1(e, r);
    }
  };
}
function Y9(n) {
  let e, t;
  return e = new Eu({}), {
    c() {
      a1(e.$$.fragment);
    },
    l(r) {
      n1(e.$$.fragment, r);
    },
    m(r, a) {
      l1(e, r, a), t = !0;
    },
    i(r) {
      t || (ta(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ja(e.$$.fragment, r), t = !1;
    },
    d(r) {
      i1(e, r);
    }
  };
}
function Z9(n) {
  let e, t, r, a, i, l, s, o, u, c;
  e = new as({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Eu,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  let d = (
    /*value*/
    n[0] === "__webrtc_value__" && Th(n)
  );
  return {
    c() {
      a1(e.$$.fragment), t = Sh(), d && d.c(), r = Sh(), a = Fo("div"), i = Fo("video"), l = Fo("track"), this.h();
    },
    l(h) {
      n1(e.$$.fragment, h), t = Ah(h), d && d.l(h), r = Ah(h), a = Co(h, "DIV", { class: !0 });
      var p = Dh(a);
      i = Co(p, "VIDEO", {
        "data-testid": !0,
        crossorigin: !0,
        class: !0
      });
      var _ = Dh(i);
      l = Co(_, "TRACK", { kind: !0 }), _.forEach(Ca), p.forEach(Ca), this.h();
    },
    h() {
      Wn(l, "kind", "captions"), i.autoplay = !0, Wn(i, "data-testid", s = /*$$props*/
      n[5]["data-testid"]), Wn(i, "crossorigin", "anonymous"), Wn(i, "class", "svelte-1yzqfy6"), xh(
        i,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), Wn(a, "class", "wrap svelte-1yzqfy6");
    },
    m(h, p) {
      l1(e, h, p), Mo(h, t, p), d && d.m(h, p), Mo(h, r, p), Mo(h, a, p), yh(a, i), yh(i, l), n[12](i), o = !0, u || (c = [
        K0(
          i,
          "loadeddata",
          /*dispatch*/
          n[4].bind(null, "loadeddata")
        ),
        K0(
          i,
          "click",
          /*dispatch*/
          n[4].bind(null, "click")
        ),
        K0(
          i,
          "play",
          /*dispatch*/
          n[4].bind(null, "play")
        ),
        K0(
          i,
          "pause",
          /*dispatch*/
          n[4].bind(null, "pause")
        ),
        K0(
          i,
          "ended",
          /*dispatch*/
          n[4].bind(null, "ended")
        ),
        K0(
          i,
          "mouseover",
          /*dispatch*/
          n[4].bind(null, "mouseover")
        ),
        K0(
          i,
          "mouseout",
          /*dispatch*/
          n[4].bind(null, "mouseout")
        ),
        K0(
          i,
          "focus",
          /*dispatch*/
          n[4].bind(null, "focus")
        ),
        K0(
          i,
          "blur",
          /*dispatch*/
          n[4].bind(null, "blur")
        ),
        K0(
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
      1 && ta(d, 1) : (d = Th(h), d.c(), ta(d, 1), d.m(r.parentNode, r)) : d && (V9(), ja(d, 1, 1, () => {
        d = null;
      }), U9()), (!o || p & /*$$props*/
      32 && s !== (s = /*$$props*/
      h[5]["data-testid"])) && Wn(i, "data-testid", s), (!o || p & /*value*/
      1) && xh(
        i,
        "hidden",
        /*value*/
        h[0] === "__webrtc_value__"
      );
    },
    i(h) {
      o || (ta(e.$$.fragment, h), ta(d), o = !0);
    },
    o(h) {
      ja(e.$$.fragment, h), ja(d), o = !1;
    },
    d(h) {
      h && (Ca(t), Ca(r), Ca(a)), i1(e, h), d && d.d(h), n[12](null), u = !1, j9(c);
    }
  };
}
function K9(n, e, t) {
  var r = this && this.__awaiter || function(y, k, w, E) {
    function S(T) {
      return T instanceof w ? T : new w(function(C) {
        C(T);
      });
    }
    return new (w || (w = Promise))(function(T, C) {
      function F(L) {
        try {
          I(E.next(L));
        } catch (P) {
          C(P);
        }
      }
      function B(L) {
        try {
          I(E.throw(L));
        } catch (P) {
          C(P);
        }
      }
      function I(L) {
        L.done ? T(L.value) : S(L.value).then(F, B);
      }
      I((E = E.apply(y, k || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { on_change_cb: o } = e, { server: u } = e, c, d = Math.random().toString(36).substring(2), h;
  const p = X9();
  let _ = (y) => {
    y.type === "end_stream" ? (o(y), r0(h)) : (console.debug("calling on_change_cb with msg", y), o(y));
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
    t(5, e = kh(kh({}, e), Eh(y))), "value" in y && t(0, a = y.value), "label" in y && t(1, i = y.label), "show_label" in y && t(2, l = y.show_label), "rtc_configuration" in y && t(6, s = y.rtc_configuration), "on_change_cb" in y && t(7, o = y.on_change_cb), "server" in y && t(8, u = y.server);
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
            r0(h);
            break;
          case "failed":
            p("error", "Connection failed!"), r0(h);
            break;
        }
      }));
      const y = setTimeout(
        () => {
          o({ type: "connection_timeout" });
        },
        1e4
      );
      ss(null, h, c, u.offer, d, "video", _).then((k) => {
        clearTimeout(y), t(10, h = k);
      }).catch(() => {
        clearTimeout(y), p("error", "Too many concurrent users. Come back later!");
      });
    }
  }, e = Eh(e), [
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
  append_hydration: Qn,
  attr: Ar,
  check_outros: $9,
  children: Er,
  claim_component: e_,
  claim_element: Sr,
  claim_space: Ch,
  create_component: t_,
  destroy_component: r_,
  destroy_each: n_,
  detach: t0,
  element: xr,
  ensure_array_like: Fh,
  group_outros: a_,
  init: i_,
  insert_hydration: ci,
  mount_component: l_,
  noop: ei,
  safe_not_equal: s_,
  set_style: w0,
  space: Mh,
  transition_in: vu,
  transition_out: bu
} = window.__gradio__svelte__internal, { onDestroy: o_ } = window.__gradio__svelte__internal;
function zh(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function u_(n) {
  let e, t = Fh(Array(
    /*numBars*/
    n[0]
  )), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Bh(zh(n, t, a));
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
      i.forEach(t0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-boxContainer svelte-1x8be7j"), w0(
        e,
        "width",
        /*containerWidth*/
        n[9]
      );
    },
    m(a, i) {
      ci(a, e, i);
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(e, null);
    },
    p(a, i) {
      if (i & /*numBars*/
      1) {
        t = Fh(Array(
          /*numBars*/
          a[0]
        ));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = zh(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Bh(), r[l].c(), r[l].m(e, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
      i & /*containerWidth*/
      512 && w0(
        e,
        "width",
        /*containerWidth*/
        a[9]
      );
    },
    i: ei,
    o: ei,
    d(a) {
      a && t0(e), n_(r, a);
    }
  };
}
function c_(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = xr("div"), t = xr("div"), r = Mh(), a = xr("div"), i = Mh(), l = xr("div"), this.h();
    },
    l(s) {
      e = Sr(s, "DIV", { class: !0 });
      var o = Er(e);
      t = Sr(o, "DIV", { class: !0 }), Er(t).forEach(t0), r = Ch(o), a = Sr(o, "DIV", { class: !0 }), Er(a).forEach(t0), i = Ch(o), l = Sr(o, "DIV", { class: !0 }), Er(l).forEach(t0), o.forEach(t0), this.h();
    },
    h() {
      Ar(t, "class", "dot svelte-1x8be7j"), w0(
        t,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(a, "class", "dot svelte-1x8be7j"), w0(
        a,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(l, "class", "dot svelte-1x8be7j"), w0(
        l,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(e, "class", "dots svelte-1x8be7j");
    },
    m(s, o) {
      ci(s, e, o), Qn(e, t), Qn(e, r), Qn(e, a), Qn(e, i), Qn(e, l);
    },
    p(s, o) {
      o & /*pulse_color*/
      32 && w0(
        t,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && w0(
        a,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && w0(
        l,
        "background-color",
        /*pulse_color*/
        s[5]
      );
    },
    i: ei,
    o: ei,
    d(s) {
      s && t0(e);
    }
  };
}
function f_(n) {
  let e, t, r, a;
  return r = new li({
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
      e_(r.$$.fragment, s), s.forEach(t0), l.forEach(t0), this.h();
    },
    h() {
      Ar(t, "class", "gradio-webrtc-icon svelte-1x8be7j"), w0(t, "transform", `scale(${/*pulseScale*/
      n[8]})`), w0(
        t,
        "background",
        /*icon_button_color*/
        n[4]
      ), Ar(e, "class", "gradio-webrtc-icon-container svelte-1x8be7j");
    },
    m(i, l) {
      ci(i, e, l), Qn(e, t), l_(r, t, null), a = !0;
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
      256 && w0(t, "transform", `scale(${/*pulseScale*/
      i[8]})`), l & /*icon_button_color*/
      16 && w0(
        t,
        "background",
        /*icon_button_color*/
        i[4]
      );
    },
    i(i) {
      a || (vu(r.$$.fragment, i), a = !0);
    },
    o(i) {
      bu(r.$$.fragment, i), a = !1;
    },
    d(i) {
      i && t0(e), r_(r);
    }
  };
}
function Bh(n) {
  let e;
  return {
    c() {
      e = xr("div"), this.h();
    },
    l(t) {
      e = Sr(t, "DIV", { class: !0 }), Er(e).forEach(t0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-box svelte-1x8be7j");
    },
    m(t, r) {
      ci(t, e, r);
    },
    p: ei,
    d(t) {
      t && t0(e);
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
      r.l(u), u.forEach(t0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-waveContainer svelte-1x8be7j");
    },
    m(o, u) {
      ci(o, e, u), l[t].m(e, null), a = !0;
    },
    p(o, [u]) {
      let c = t;
      t = s(o), t === c ? l[t].p(o, u) : (a_(), bu(l[c], 1, 1, () => {
        l[c] = null;
      }), $9(), r = l[t], r ? r.p(o, u) : (r = l[t] = i[t](o), r.c()), vu(r, 1), r.m(e, null));
    },
    i(o) {
      a || (vu(r), a = !0);
    },
    o(o) {
      bu(r), a = !1;
    },
    d(o) {
      o && t0(e), l[t].d();
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
    for (let E = 0; E < w.length; E++) {
      const S = _[E] / 255 * 2;
      w[E].style.transform = `scaleY(${Math.max(0.1, S)})`;
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
class km extends Q9 {
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
  attr: Dm,
  binding_callbacks: p_,
  bubble: g_,
  check_outros: Ih,
  children: Am,
  claim_component: os,
  claim_element: Em,
  claim_space: zo,
  create_component: us,
  destroy_component: cs,
  detach: $r,
  element: Sm,
  empty: Lh,
  group_outros: Nh,
  init: __,
  insert_hydration: $n,
  listen: Bo,
  mount_component: fs,
  run_all: v_,
  safe_not_equal: b_,
  space: Io,
  toggle_class: w_,
  transition_in: Q0,
  transition_out: en
} = window.__gradio__svelte__internal, { createEventDispatcher: y_ } = window.__gradio__svelte__internal;
function Rh(n) {
  let e, t, r;
  return t = new km({
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
      e = Sm("div"), us(t.$$.fragment), this.h();
    },
    l(a) {
      e = Em(a, "DIV", { class: !0 });
      var i = Am(e);
      os(t.$$.fragment, i), i.forEach($r), this.h();
    },
    h() {
      Dm(e, "class", "audio-container svelte-js69uk");
    },
    m(a, i) {
      $n(a, e, i), fs(t, e, null), r = !0;
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
      r || (Q0(t.$$.fragment, a), r = !0);
    },
    o(a) {
      en(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && $r(e), cs(t);
    }
  };
}
function Oh(n) {
  let e, t;
  return e = new fm({
    props: {
      size: "small",
      $$slots: { default: [k_] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      us(e.$$.fragment);
    },
    l(r) {
      os(e.$$.fragment, r);
    },
    m(r, a) {
      fs(e, r, a), t = !0;
    },
    i(r) {
      t || (Q0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      en(e.$$.fragment, r), t = !1;
    },
    d(r) {
      cs(e, r);
    }
  };
}
function k_(n) {
  let e, t;
  return e = new Au({}), {
    c() {
      us(e.$$.fragment);
    },
    l(r) {
      os(e.$$.fragment, r);
    },
    m(r, a) {
      fs(e, r, a), t = !0;
    },
    i(r) {
      t || (Q0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      en(e.$$.fragment, r), t = !1;
    },
    d(r) {
      cs(e, r);
    }
  };
}
function D_(n) {
  let e, t, r, a, i, l, s, o, u;
  e = new as({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Au,
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
    n[0] !== "__webrtc_value__" && Rh(n)
  ), d = (
    /*value*/
    n[0] === "__webrtc_value__" && Oh(n)
  );
  return {
    c() {
      us(e.$$.fragment), t = Io(), r = Sm("audio"), a = Io(), c && c.c(), i = Io(), d && d.c(), l = Lh(), this.h();
    },
    l(h) {
      os(e.$$.fragment, h), t = zo(h), r = Em(h, "AUDIO", { class: !0 }), Am(r).forEach($r), a = zo(h), c && c.l(h), i = zo(h), d && d.l(h), l = Lh(), this.h();
    },
    h() {
      Dm(r, "class", "standard-player svelte-js69uk"), w_(r, "hidden", !0);
    },
    m(h, p) {
      fs(e, h, p), $n(h, t, p), $n(h, r, p), n[15](r), $n(h, a, p), c && c.m(h, p), $n(h, i, p), d && d.m(h, p), $n(h, l, p), s = !0, o || (u = [
        Bo(
          r,
          "load",
          /*load_handler*/
          n[14]
        ),
        Bo(
          r,
          "ended",
          /*ended_handler*/
          n[16]
        ),
        Bo(
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
      1 && Q0(c, 1)) : (c = Rh(h), c.c(), Q0(c, 1), c.m(i.parentNode, i)) : c && (Nh(), en(c, 1, 1, () => {
        c = null;
      }), Ih()), /*value*/
      h[0] === "__webrtc_value__" ? d ? p & /*value*/
      1 && Q0(d, 1) : (d = Oh(h), d.c(), Q0(d, 1), d.m(l.parentNode, l)) : d && (Nh(), en(d, 1, 1, () => {
        d = null;
      }), Ih());
    },
    i(h) {
      s || (Q0(e.$$.fragment, h), Q0(c), Q0(d), s = !0);
    },
    o(h) {
      en(e.$$.fragment, h), en(c), en(d), s = !1;
    },
    d(h) {
      h && ($r(t), $r(r), $r(a), $r(i), $r(l)), cs(e, h), n[15](null), c && c.d(h), d && d.d(h), o = !1, v_(u);
    }
  };
}
function A_(n, e, t) {
  var r = this && this.__awaiter || function(L, P, Z, O) {
    function se(K) {
      return K instanceof Z ? K : new Z(function(he) {
        he(K);
      });
    }
    return new (Z || (Z = Promise))(function(K, he) {
      function ue($) {
        try {
          ye(O.next($));
        } catch (de) {
          he(de);
        }
      }
      function Ae($) {
        try {
          ye(O.throw($));
        } catch (de) {
          he(de);
        }
      }
      function ye($) {
        $.done ? K($.value) : se($.value).then(ue, Ae);
      }
      ye((O = O.apply(L, P || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { i18n: o } = e, { on_change_cb: u } = e, { icon: c = void 0 } = e, { icon_button_color: d = "var(--color-accent)" } = e, { pulse_color: h = "var(--color-accent)" } = e, { icon_radius: p = 50 } = e, { server: _ } = e, b = "closed", D, y, k = Math.random().toString(36).substring(2), w = (L) => {
    L.type === "end_stream" ? (u(L), t(8, b = "closed"), r0(y)) : (console.debug("calling on_change_cb with msg", L), u(L));
  };
  const E = y_();
  function S(L) {
    return r(this, void 0, void 0, function* () {
      if (L === "start_webrtc_stream") {
        t(8, b = "waiting"), k = Math.random().toString(36).substring(2), L = k, y = new RTCPeerConnection(s), y.addEventListener("connectionstatechange", (O) => r(this, void 0, void 0, function* () {
          switch (y.connectionState) {
            case "connected":
              console.info("connected"), t(8, b = "open"), E("tick");
              break;
            case "disconnected":
              console.info("closed"), r0(y);
              break;
            case "failed":
              t(8, b = "closed"), E("error", "Connection failed!"), r0(y);
              break;
          }
        }));
        let P = null;
        const Z = setTimeout(
          () => {
            u({ type: "connection_timeout" });
          },
          1e4
        );
        ss(P, y, D, _.offer, k, "audio", w).then((O) => {
          clearTimeout(Z), y = O;
        }).catch(() => {
          clearTimeout(Z), console.info("catching"), E("error", "Too many concurrent users. Come back later!");
        });
      }
      return L;
    });
  }
  function T(L) {
    g_.call(this, n, L);
  }
  function C(L) {
    p_[L ? "unshift" : "push"](() => {
      D = L, t(9, D);
    });
  }
  const F = () => E("stop"), B = () => E("play"), I = () => D.srcObject;
  return n.$$set = (L) => {
    "value" in L && t(0, a = L.value), "label" in L && t(1, i = L.label), "show_label" in L && t(2, l = L.show_label), "rtc_configuration" in L && t(11, s = L.rtc_configuration), "i18n" in L && t(3, o = L.i18n), "on_change_cb" in L && t(12, u = L.on_change_cb), "icon" in L && t(4, c = L.icon), "icon_button_color" in L && t(5, d = L.icon_button_color), "pulse_color" in L && t(6, h = L.pulse_color), "icon_radius" in L && t(7, p = L.icon_radius), "server" in L && t(13, _ = L.server);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && S(a).then((L) => {
      t(0, a = L);
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
    E,
    s,
    u,
    _,
    T,
    C,
    F,
    B,
    I
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
  append_hydration: Fa,
  attr: Ue,
  children: Xn,
  claim_svg_element: Yn,
  detach: yn,
  init: x_,
  insert_hydration: T_,
  noop: Lo,
  safe_not_equal: C_,
  svg_element: Zn
} = window.__gradio__svelte__internal;
function F_(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = Zn("svg"), t = Zn("path"), r = Zn("path"), a = Zn("line"), i = Zn("line"), l = Zn("line"), this.h();
    },
    l(s) {
      e = Yn(s, "svg", {
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
      var o = Xn(e);
      t = Yn(o, "path", { d: !0 }), Xn(t).forEach(yn), r = Yn(o, "path", { d: !0 }), Xn(r).forEach(yn), a = Yn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Xn(a).forEach(yn), i = Yn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Xn(i).forEach(yn), l = Yn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Xn(l).forEach(yn), o.forEach(yn), this.h();
    },
    h() {
      Ue(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ue(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ue(a, "x1", "12"), Ue(a, "y1", "19"), Ue(a, "x2", "12"), Ue(a, "y2", "23"), Ue(i, "x1", "8"), Ue(i, "y1", "23"), Ue(i, "x2", "16"), Ue(i, "y2", "23"), Ue(l, "x1", "1"), Ue(l, "y1", "1"), Ue(l, "x2", "23"), Ue(l, "y2", "23"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-mic");
    },
    m(s, o) {
      T_(s, e, o), Fa(e, t), Fa(e, r), Fa(e, a), Fa(e, i), Fa(e, l);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(s) {
      s && yn(e);
    }
  };
}
class wu extends S_ {
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
`, qh = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${z_}</span>
  <span class="check">${B_}</span>
</button>`, xm = /[&<>"']/, I_ = new RegExp(xm.source, "g"), Tm = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, L_ = new RegExp(Tm.source, "g"), N_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ph = (n) => N_[n] || "";
function No(n, e) {
  if (e) {
    if (xm.test(n))
      return n.replace(I_, Ph);
  } else if (Tm.test(n))
    return n.replace(L_, Ph);
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
`, !r || r === "mermaid" ? '<div class="code_wrap">' + qh + "<pre><code>" + (t ? n : No(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + qh + '<pre><code class="language-' + No(r) + '">' + (t ? n : No(n, !0)) + `</code></pre></div>
`;
  }
}, P_ = new ns();
function H_({
  header_links: n,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new F4();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    c7({
      highlight: (l, s) => {
        var o;
        return (o = oo.languages) != null && o[s] ? oo.highlight(l, oo.languages[s], s) : l;
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
const Hh = [
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
  ...Hh,
  ...U_.filter((n) => !Hh.includes(n))
], {
  HtmlTagHydration: G_,
  SvelteComponent: j_,
  attr: W_,
  binding_callbacks: X_,
  children: Y_,
  claim_element: Z_,
  claim_html_tag: K_,
  detach: Uh,
  element: J_,
  init: Q_,
  insert_hydration: $_,
  noop: Vh,
  safe_not_equal: ev,
  toggle_class: al
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
      t = K_(a, !1), a.forEach(Uh), this.h();
    },
    h() {
      t.a = null, W_(e, "class", "md svelte-1m32c2s"), al(
        e,
        "chatbot",
        /*chatbot*/
        n[0]
      ), al(
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
      1 && al(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && al(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: Vh,
    o: Vh,
    d(r) {
      r && Uh(e), n[12](null);
    }
  };
}
function Gh(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function av(n, e, t) {
  var r = this && this.__awaiter || function(S, T, C, F) {
    function B(I) {
      return I instanceof C ? I : new C(function(L) {
        L(I);
      });
    }
    return new (C || (C = Promise))(function(I, L) {
      function P(se) {
        try {
          O(F.next(se));
        } catch (K) {
          L(K);
        }
      }
      function Z(se) {
        try {
          O(F.throw(se));
        } catch (K) {
          L(K);
        }
      }
      function O(se) {
        se.done ? I(se.value) : B(se.value).then(P, Z);
      }
      O((F = F.apply(S, T || [])).next());
    });
  };
  let { chatbot: a = !0 } = e, { message: i } = e, { sanitize_html: l = !0 } = e, { latex_delimiters: s = [] } = e, { render_markdown: o = !0 } = e, { line_breaks: u = !0 } = e, { header_links: c = !1 } = e, { root: d } = e, { allow_tags: h = !1 } = e, { theme_mode: p = "system" } = e, _, b;
  const D = H_({
    header_links: c,
    line_breaks: u,
    latex_delimiters: s || []
  });
  function y(S, T) {
    if (T === !0) {
      const C = /<\/?([a-zA-Z][a-zA-Z0-9-]*)([\s>])/g;
      return S.replace(C, (F, B, I) => V_.includes(B.toLowerCase()) ? F : F.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }
    if (Array.isArray(T)) {
      const C = T.map((B) => ({
        open: new RegExp(`<(${B})(\\s+[^>]*)?>`, "gi"),
        close: new RegExp(`</(${B})>`, "gi")
      }));
      let F = S;
      return C.forEach((B) => {
        F = F.replace(B.open, (I) => I.replace(/</g, "&lt;").replace(/>/g, "&gt;")), F = F.replace(B.close, (I) => I.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      }), F;
    }
    return S;
  }
  function k(S) {
    let T = S;
    if (o) {
      const C = [];
      s.forEach((F, B) => {
        const I = Gh(F.left), L = Gh(F.right), P = new RegExp(`${I}([\\s\\S]+?)${L}`, "g");
        T = T.replace(P, (Z, O) => (C.push(Z), `%%%LATEX_BLOCK_${C.length - 1}%%%`));
      }), T = D.parse(T), T = T.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (F, B) => C[parseInt(B, 10)]);
    }
    return h && (T = y(T, h)), l && Rc && (T = Rc(T, d)), T;
  }
  function w(S) {
    return r(this, void 0, void 0, function* () {
      if (s.length > 0 && S && s.some((C) => S.includes(C.left) && S.includes(C.right)) && C6(_, {
        delimiters: s,
        throwOnError: !1
      }), _) {
        const T = _.querySelectorAll(".mermaid");
        if (T.length > 0) {
          yield rv();
          const { default: C } = yield import("./mermaid.core-Cmyps_S7.js").then((F) => F.by);
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
  function E(S) {
    X_[S ? "unshift" : "push"](() => {
      _ = S, t(2, _);
    });
  }
  return n.$$set = (S) => {
    "chatbot" in S && t(0, a = S.chatbot), "message" in S && t(4, i = S.message), "sanitize_html" in S && t(5, l = S.sanitize_html), "latex_delimiters" in S && t(6, s = S.latex_delimiters), "render_markdown" in S && t(1, o = S.render_markdown), "line_breaks" in S && t(7, u = S.line_breaks), "header_links" in S && t(8, c = S.header_links), "root" in S && t(9, d = S.root), "allow_tags" in S && t(10, h = S.allow_tags), "theme_mode" in S && t(11, p = S.theme_mode);
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
    E
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
  detach: jh,
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
      uv(t.$$.fragment, i), i.forEach(jh), this.h();
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
      a && jh(e), hv(t);
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
  attr: il,
  check_outros: Av,
  children: Ev,
  claim_component: Sv,
  claim_element: xv,
  claim_space: Tv,
  create_component: Cv,
  create_slot: Fv,
  destroy_component: Mv,
  detach: ll,
  element: zv,
  empty: Wh,
  get_all_dirty_from_scope: Bv,
  get_slot_changes: Iv,
  group_outros: Lv,
  init: Nv,
  insert_hydration: Ro,
  mount_component: Rv,
  safe_not_equal: Ov,
  space: qv,
  toggle_class: Kn,
  transition_in: Na,
  transition_out: kl,
  update_slot_base: Pv
} = window.__gradio__svelte__internal;
function Xh(n) {
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
      t || (Na(e.$$.fragment, r), t = !0);
    },
    o(r) {
      kl(e.$$.fragment, r), t = !1;
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
    n[1] && Xh(n)
  );
  return {
    c() {
      e = zv("span"), s && s.c(), r = qv(), o && o.c(), a = Wh(), this.h();
    },
    l(u) {
      e = xv(u, "SPAN", {
        "data-testid": !0,
        dir: !0,
        class: !0
      });
      var c = Ev(e);
      s && s.l(c), c.forEach(ll), r = Tv(u), o && o.l(u), a = Wh(), this.h();
    },
    h() {
      il(e, "data-testid", "block-info"), il(e, "dir", t = /*rtl*/
      n[3] ? "rtl" : "ltr"), il(e, "class", "svelte-zgrq3"), Kn(e, "sr-only", !/*show_label*/
      n[0]), Kn(e, "hide", !/*show_label*/
      n[0]), Kn(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(u, c) {
      Ro(u, e, c), s && s.m(e, null), Ro(u, r, c), o && o.m(u, c), Ro(u, a, c), i = !0;
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
      u[3] ? "rtl" : "ltr")) && il(e, "dir", t), (!i || c & /*show_label*/
      1) && Kn(e, "sr-only", !/*show_label*/
      u[0]), (!i || c & /*show_label*/
      1) && Kn(e, "hide", !/*show_label*/
      u[0]), (!i || c & /*info*/
      2) && Kn(
        e,
        "has-info",
        /*info*/
        u[1] != null
      ), /*info*/
      u[1] ? o ? (o.p(u, c), c & /*info*/
      2 && Na(o, 1)) : (o = Xh(u), o.c(), Na(o, 1), o.m(a.parentNode, a)) : o && (Lv(), kl(o, 1, 1, () => {
        o = null;
      }), Av());
    },
    i(u) {
      i || (Na(s, u), Na(o), i = !0);
    },
    o(u) {
      kl(s, u), kl(o), i = !1;
    },
    d(u) {
      u && (ll(e), ll(r), ll(a)), s && s.d(u), o && o.d(u);
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
  attr: _0,
  children: Yh,
  claim_svg_element: Zh,
  detach: Oo,
  init: Wv,
  insert_hydration: Xv,
  noop: qo,
  safe_not_equal: Yv,
  svg_element: Kh
} = window.__gradio__svelte__internal;
function Zv(n) {
  let e, t;
  return {
    c() {
      e = Kh("svg"), t = Kh("path"), this.h();
    },
    l(r) {
      e = Zh(r, "svg", {
        width: !0,
        height: !0,
        "stroke-width": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        color: !0
      });
      var a = Yh(e);
      t = Zh(a, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Yh(t).forEach(Oo), a.forEach(Oo), this.h();
    },
    h() {
      _0(t, "d", "M5 13L9 17L19 7"), _0(t, "stroke", "currentColor"), _0(t, "stroke-width", "1.5"), _0(t, "stroke-linecap", "round"), _0(t, "stroke-linejoin", "round"), _0(e, "width", "100%"), _0(e, "height", "100%"), _0(e, "stroke-width", "1.5"), _0(e, "viewBox", "0 0 24 24"), _0(e, "fill", "none"), _0(e, "xmlns", "http://www.w3.org/2000/svg"), _0(e, "color", "currentColor");
    },
    m(r, a) {
      Xv(r, e, a), jv(e, t);
    },
    p: qo,
    i: qo,
    o: qo,
    d(r) {
      r && Oo(e);
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
  append_hydration: Jh,
  attr: J0,
  children: Po,
  claim_svg_element: Ho,
  detach: sl,
  init: Qv,
  insert_hydration: $v,
  noop: Uo,
  safe_not_equal: eb,
  svg_element: Vo
} = window.__gradio__svelte__internal;
function tb(n) {
  let e, t, r;
  return {
    c() {
      e = Vo("svg"), t = Vo("path"), r = Vo("path"), this.h();
    },
    l(a) {
      e = Ho(a, "svg", {
        xmlns: !0,
        viewBox: !0,
        color: !0,
        "aria-hidden": !0,
        width: !0,
        height: !0
      });
      var i = Po(e);
      t = Ho(i, "path", { fill: !0, d: !0 }), Po(t).forEach(sl), r = Ho(i, "path", { fill: !0, d: !0 }), Po(r).forEach(sl), i.forEach(sl), this.h();
    },
    h() {
      J0(t, "fill", "currentColor"), J0(t, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), J0(r, "fill", "currentColor"), J0(r, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), J0(e, "xmlns", "http://www.w3.org/2000/svg"), J0(e, "viewBox", "0 0 33 33"), J0(e, "color", "currentColor"), J0(e, "aria-hidden", "true"), J0(e, "width", "100%"), J0(e, "height", "100%");
    },
    m(a, i) {
      $v(a, e, i), Jh(e, t), Jh(e, r);
    },
    p: Uo,
    i: Uo,
    o: Uo,
    d(a) {
      a && sl(e);
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
  append_hydration: ol,
  attr: o0,
  children: Ma,
  claim_svg_element: za,
  detach: Jn,
  init: ab,
  insert_hydration: ib,
  noop: Go,
  safe_not_equal: lb,
  svg_element: Ba
} = window.__gradio__svelte__internal;
function sb(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = Ba("svg"), t = Ba("g"), r = Ba("g"), a = Ba("g"), i = Ba("path"), this.h();
    },
    l(l) {
      e = za(l, "svg", {
        viewBox: !0,
        width: !0,
        height: !0,
        fill: !0,
        xmlns: !0
      });
      var s = Ma(e);
      t = za(s, "g", { id: !0, "stroke-width": !0 }), Ma(t).forEach(Jn), r = za(s, "g", {
        id: !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Ma(r).forEach(Jn), a = za(s, "g", { id: !0 });
      var o = Ma(a);
      i = za(o, "path", { d: !0, fill: !0 }), Ma(i).forEach(Jn), o.forEach(Jn), s.forEach(Jn), this.h();
    },
    h() {
      o0(t, "id", "SVGRepo_bgCarrier"), o0(t, "stroke-width", "0"), o0(r, "id", "SVGRepo_tracerCarrier"), o0(r, "stroke-linecap", "round"), o0(r, "stroke-linejoin", "round"), o0(i, "d", "M19.1168 12.1484C19.474 12.3581 19.9336 12.2384 20.1432 11.8811C20.3528 11.5238 20.2331 11.0643 19.8758 10.8547L19.1168 12.1484ZM6.94331 4.13656L6.55624 4.77902L6.56378 4.78344L6.94331 4.13656ZM5.92408 4.1598L5.50816 3.5357L5.50816 3.5357L5.92408 4.1598ZM5.51031 5.09156L4.76841 5.20151C4.77575 5.25101 4.78802 5.29965 4.80505 5.34671L5.51031 5.09156ZM7.12405 11.7567C7.26496 12.1462 7.69495 12.3477 8.08446 12.2068C8.47397 12.0659 8.67549 11.6359 8.53458 11.2464L7.12405 11.7567ZM19.8758 12.1484C20.2331 11.9388 20.3528 11.4793 20.1432 11.122C19.9336 10.7648 19.474 10.6451 19.1168 10.8547L19.8758 12.1484ZM6.94331 18.8666L6.56375 18.2196L6.55627 18.2241L6.94331 18.8666ZM5.92408 18.8433L5.50815 19.4674H5.50815L5.92408 18.8433ZM5.51031 17.9116L4.80505 17.6564C4.78802 17.7035 4.77575 17.7521 4.76841 17.8016L5.51031 17.9116ZM8.53458 11.7567C8.67549 11.3672 8.47397 10.9372 8.08446 10.7963C7.69495 10.6554 7.26496 10.8569 7.12405 11.2464L8.53458 11.7567ZM19.4963 12.2516C19.9105 12.2516 20.2463 11.9158 20.2463 11.5016C20.2463 11.0873 19.9105 10.7516 19.4963 10.7516V12.2516ZM7.82931 10.7516C7.4151 10.7516 7.07931 11.0873 7.07931 11.5016C7.07931 11.9158 7.4151 12.2516 7.82931 12.2516V10.7516ZM19.8758 10.8547L7.32284 3.48968L6.56378 4.78344L19.1168 12.1484L19.8758 10.8547ZM7.33035 3.49414C6.76609 3.15419 6.05633 3.17038 5.50816 3.5357L6.34 4.78391C6.40506 4.74055 6.4893 4.73863 6.55627 4.77898L7.33035 3.49414ZM5.50816 3.5357C4.95998 3.90102 4.67184 4.54987 4.76841 5.20151L6.25221 4.98161C6.24075 4.90427 6.27494 4.82727 6.34 4.78391L5.50816 3.5357ZM4.80505 5.34671L7.12405 11.7567L8.53458 11.2464L6.21558 4.83641L4.80505 5.34671ZM19.1168 10.8547L6.56378 18.2197L7.32284 19.5134L19.8758 12.1484L19.1168 10.8547ZM6.55627 18.2241C6.4893 18.2645 6.40506 18.2626 6.34 18.2192L5.50815 19.4674C6.05633 19.8327 6.76609 19.8489 7.33035 19.509L6.55627 18.2241ZM6.34 18.2192C6.27494 18.1759 6.24075 18.0988 6.25221 18.0215L4.76841 17.8016C4.67184 18.4532 4.95998 19.1021 5.50815 19.4674L6.34 18.2192ZM6.21558 18.1667L8.53458 11.7567L7.12405 11.2464L4.80505 17.6564L6.21558 18.1667ZM19.4963 10.7516H7.82931V12.2516H19.4963V10.7516Z"), o0(i, "fill", "currentColor"), o0(a, "id", "SVGRepo_iconCarrier"), o0(e, "viewBox", "0 0 22 24"), o0(e, "width", "100%"), o0(e, "height", "100%"), o0(e, "fill", "none"), o0(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, s) {
      ib(l, e, s), ol(e, t), ol(e, r), ol(e, a), ol(a, i);
    },
    p: Go,
    i: Go,
    o: Go,
    d(l) {
      l && Jn(e);
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
  attr: yt,
  children: Qh,
  claim_svg_element: $h,
  detach: jo,
  init: fb,
  insert_hydration: hb,
  noop: ed,
  safe_not_equal: db,
  svg_element: td
} = window.__gradio__svelte__internal;
function mb(n) {
  let e, t, r;
  return {
    c() {
      e = td("svg"), t = td("rect"), this.h();
    },
    l(a) {
      e = $h(a, "svg", {
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
      var i = Qh(e);
      t = $h(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Qh(t).forEach(jo), i.forEach(jo), this.h();
    },
    h() {
      yt(t, "x", "3"), yt(t, "y", "3"), yt(t, "width", "18"), yt(t, "height", "18"), yt(t, "rx", "2"), yt(t, "ry", "2"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(
        e,
        "fill",
        /*fill*/
        n[0]
      ), yt(e, "stroke", "currentColor"), yt(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), yt(e, "stroke-linecap", "round"), yt(e, "stroke-linejoin", "round"), yt(e, "class", "feather feather-square");
    },
    m(a, i) {
      hb(a, e, i), cb(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && yt(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && yt(e, "stroke-width", r);
    },
    i: ed,
    o: ed,
    d(a) {
      a && jo(e);
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
], rd = {
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
      primary: rd[e][t],
      secondary: rd[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: vb,
  action_destroyer: bb,
  add_render_callback: wb,
  append_hydration: Ia,
  attr: le,
  binding_callbacks: ul,
  bubble: Jr,
  check_outros: ia,
  children: Mn,
  claim_component: fi,
  claim_element: fr,
  claim_space: cl,
  claim_text: s1,
  create_component: hi,
  create_in_transition: yb,
  destroy_component: di,
  detach: rt,
  element: hr,
  empty: Wl,
  group_outros: la,
  init: kb,
  insert_hydration: i0,
  is_function: Db,
  listen: Ve,
  mount_component: mi,
  noop: fn,
  run_all: hs,
  safe_not_equal: Ab,
  set_data: o1,
  set_input_value: hn,
  space: fl,
  text: u1,
  toggle_class: Fr,
  transition_in: ot,
  transition_out: Ft
} = window.__gradio__svelte__internal, { beforeUpdate: Eb, afterUpdate: Sb, createEventDispatcher: xb, tick: nd } = window.__gradio__svelte__internal;
function ad(n) {
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
      t.c(), r = Wl();
    },
    l(o) {
      t.l(o), r = Wl();
    },
    m(o, u) {
      l[e].m(o, u), i0(o, r, u), a = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (la(), Ft(l[c], 1, 1, () => {
        l[c] = null;
      }), ia(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), ot(t, 1), t.m(r.parentNode, r));
    },
    i(o) {
      a || (ot(t), a = !0);
    },
    o(o) {
      Ft(t), a = !1;
    },
    d(o) {
      o && rt(r), l[e].d(o);
    }
  };
}
function Tb(n) {
  let e, t, r, a, i;
  return t = new rb({}), {
    c() {
      e = hr("button"), hi(t.$$.fragment), this.h();
    },
    l(l) {
      e = fr(l, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var s = Mn(e);
      fi(t.$$.fragment, s), s.forEach(rt), this.h();
    },
    h() {
      le(e, "class", "copy-button svelte-bj4kw9"), le(e, "aria-label", "Copy"), le(e, "aria-roledescription", "Copy text");
    },
    m(l, s) {
      i0(l, e, s), mi(t, e, null), r = !0, a || (i = Ve(
        e,
        "click",
        /*handle_copy*/
        n[21]
      ), a = !0);
    },
    p: fn,
    i(l) {
      r || (ot(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Ft(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && rt(e), di(t), a = !1, i();
    }
  };
}
function Cb(n) {
  let e, t, r, a;
  return t = new Kv({}), {
    c() {
      e = hr("button"), hi(t.$$.fragment), this.h();
    },
    l(i) {
      e = fr(i, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var l = Mn(e);
      fi(t.$$.fragment, l), l.forEach(rt), this.h();
    },
    h() {
      le(e, "class", "copy-button svelte-bj4kw9"), le(e, "aria-label", "Copied"), le(e, "aria-roledescription", "Text copied");
    },
    m(i, l) {
      i0(i, e, l), mi(t, e, null), a = !0;
    },
    p: fn,
    i(i) {
      a || (ot(t.$$.fragment, i), i && (r || wb(() => {
        r = yb(e, e1, { duration: 300 }), r.start();
      })), a = !0);
    },
    o(i) {
      Ft(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && rt(e), di(t);
    }
  };
}
function Fb(n) {
  let e;
  return {
    c() {
      e = u1(
        /*label*/
        n[3]
      );
    },
    l(t) {
      e = s1(
        t,
        /*label*/
        n[3]
      );
    },
    m(t, r) {
      i0(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      8 && o1(
        e,
        /*label*/
        t[3]
      );
    },
    d(t) {
      t && rt(e);
    }
  };
}
function Mb(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = hr("textarea"), this.h();
    },
    l(s) {
      e = fr(s, "TEXTAREA", {
        "data-testid": !0,
        class: !0,
        dir: !0,
        placeholder: !0,
        rows: !0,
        maxlength: !0,
        style: !0
      }), Mn(e).forEach(rt), this.h();
    },
    h() {
      le(e, "data-testid", "textbox"), le(e, "class", "scroll-hide svelte-bj4kw9"), le(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), le(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), le(
        e,
        "rows",
        /*lines*/
        n[1]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], le(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), le(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : ""), Fr(e, "no-label", !/*show_label*/
      n[6] && /*submit_btn*/
      (n[10] || /*stop_btn*/
      n[11]));
    },
    m(s, o) {
      i0(s, e, o), hn(
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
      s[12] ? "rtl" : "ltr") && le(e, "dir", t), o[0] & /*placeholder*/
      4 && le(
        e,
        "placeholder",
        /*placeholder*/
        s[2]
      ), o[0] & /*lines*/
      2 && le(
        e,
        "rows",
        /*lines*/
        s[1]
      ), o[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      s[5]), o[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      s[13]), o[0] & /*max_length*/
      32768 && le(
        e,
        "maxlength",
        /*max_length*/
        s[15]
      ), o[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      s[14] ? "text-align: " + /*text_align*/
      s[14] : "") && le(e, "style", r), a && Db(a.update) && o[0] & /*value*/
      1 && a.update.call(
        null,
        /*value*/
        s[0]
      ), o[0] & /*value*/
      1 && hn(
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
      s && rt(e), n[46](null), i = !1, hs(l);
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
      a && a.c(), e = Wl();
    },
    l(i) {
      a && a.l(i), e = Wl();
    },
    m(i, l) {
      a && a.m(i, l), i0(i, e, l);
    },
    p(i, l) {
      r === (r = t(i)) && a ? a.p(i, l) : (a && a.d(1), a = r && r(i), a && (a.c(), a.m(e.parentNode, e)));
    },
    d(i) {
      i && rt(e), a && a.d(i);
    }
  };
}
function Bb(n) {
  let e, t, r;
  return {
    c() {
      e = hr("input"), this.h();
    },
    l(a) {
      e = fr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      le(e, "data-testid", "textbox"), le(e, "type", "email"), le(e, "class", "scroll-hide svelte-bj4kw9"), le(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], le(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), le(e, "autocomplete", "email");
    },
    m(a, i) {
      i0(a, e, i), hn(
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
      4 && le(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && le(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && hn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && rt(e), n[44](null), t = !1, hs(r);
    }
  };
}
function Ib(n) {
  let e, t, r;
  return {
    c() {
      e = hr("input"), this.h();
    },
    l(a) {
      e = fr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      le(e, "data-testid", "password"), le(e, "type", "password"), le(e, "class", "scroll-hide svelte-bj4kw9"), le(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], le(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), le(e, "autocomplete", "");
    },
    m(a, i) {
      i0(a, e, i), hn(
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
      4 && le(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && le(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && hn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && rt(e), n[42](null), t = !1, hs(r);
    }
  };
}
function Lb(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = hr("input"), this.h();
    },
    l(l) {
      e = fr(l, "INPUT", {
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
      le(e, "data-testid", "textbox"), le(e, "type", "text"), le(e, "class", "scroll-hide svelte-bj4kw9"), le(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), le(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], le(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), le(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : "");
    },
    m(l, s) {
      i0(l, e, s), hn(
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
      l[12] ? "rtl" : "ltr") && le(e, "dir", t), s[0] & /*placeholder*/
      4 && le(
        e,
        "placeholder",
        /*placeholder*/
        l[2]
      ), s[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      l[5]), s[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      l[13]), s[0] & /*max_length*/
      32768 && le(
        e,
        "maxlength",
        /*max_length*/
        l[15]
      ), s[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      l[14] ? "text-align: " + /*text_align*/
      l[14] : "") && le(e, "style", r), s[0] & /*value*/
      1 && e.value !== /*value*/
      l[0] && hn(
        e,
        /*value*/
        l[0]
      );
    },
    d(l) {
      l && rt(e), n[40](null), a = !1, hs(i);
    }
  };
}
function id(n) {
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
      e = hr("button"), r.c(), this.h();
    },
    l(c) {
      e = fr(c, "BUTTON", { class: !0 });
      var d = Mn(e);
      r.l(d), d.forEach(rt), this.h();
    },
    h() {
      le(e, "class", "submit-button svelte-bj4kw9"), Fr(
        e,
        "padded-button",
        /*submit_btn*/
        n[10] !== !0
      );
    },
    m(c, d) {
      i0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ve(
        e,
        "click",
        /*handle_submit*/
        n[26]
      ), i = !0);
    },
    p(c, d) {
      let h = t;
      t = u(c), t === h ? o[t].p(c, d) : (la(), Ft(o[h], 1, 1, () => {
        o[h] = null;
      }), ia(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ot(r, 1), r.m(e, null)), (!a || d[0] & /*submit_btn*/
      1024) && Fr(
        e,
        "padded-button",
        /*submit_btn*/
        c[10] !== !0
      );
    },
    i(c) {
      a || (ot(r), a = !0);
    },
    o(c) {
      Ft(r), a = !1;
    },
    d(c) {
      c && rt(e), o[t].d(), i = !1, l();
    }
  };
}
function Nb(n) {
  let e;
  return {
    c() {
      e = u1(
        /*submit_btn*/
        n[10]
      );
    },
    l(t) {
      e = s1(
        t,
        /*submit_btn*/
        n[10]
      );
    },
    m(t, r) {
      i0(t, e, r);
    },
    p(t, r) {
      r[0] & /*submit_btn*/
      1024 && o1(
        e,
        /*submit_btn*/
        t[10]
      );
    },
    i: fn,
    o: fn,
    d(t) {
      t && rt(e);
    }
  };
}
function Rb(n) {
  let e, t;
  return e = new ob({}), {
    c() {
      hi(e.$$.fragment);
    },
    l(r) {
      fi(e.$$.fragment, r);
    },
    m(r, a) {
      mi(e, r, a), t = !0;
    },
    p: fn,
    i(r) {
      t || (ot(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ft(e.$$.fragment, r), t = !1;
    },
    d(r) {
      di(e, r);
    }
  };
}
function ld(n) {
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
      e = hr("button"), r.c(), this.h();
    },
    l(c) {
      e = fr(c, "BUTTON", { class: !0 });
      var d = Mn(e);
      r.l(d), d.forEach(rt), this.h();
    },
    h() {
      le(e, "class", "stop-button svelte-bj4kw9"), Fr(
        e,
        "padded-button",
        /*stop_btn*/
        n[11] !== !0
      );
    },
    m(c, d) {
      i0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ve(
        e,
        "click",
        /*handle_stop*/
        n[25]
      ), i = !0);
    },
    p(c, d) {
      let h = t;
      t = u(c), t === h ? o[t].p(c, d) : (la(), Ft(o[h], 1, 1, () => {
        o[h] = null;
      }), ia(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ot(r, 1), r.m(e, null)), (!a || d[0] & /*stop_btn*/
      2048) && Fr(
        e,
        "padded-button",
        /*stop_btn*/
        c[11] !== !0
      );
    },
    i(c) {
      a || (ot(r), a = !0);
    },
    o(c) {
      Ft(r), a = !1;
    },
    d(c) {
      c && rt(e), o[t].d(), i = !1, l();
    }
  };
}
function Ob(n) {
  let e;
  return {
    c() {
      e = u1(
        /*stop_btn*/
        n[11]
      );
    },
    l(t) {
      e = s1(
        t,
        /*stop_btn*/
        n[11]
      );
    },
    m(t, r) {
      i0(t, e, r);
    },
    p(t, r) {
      r[0] & /*stop_btn*/
      2048 && o1(
        e,
        /*stop_btn*/
        t[11]
      );
    },
    i: fn,
    o: fn,
    d(t) {
      t && rt(e);
    }
  };
}
function qb(n) {
  let e, t;
  return e = new gb({
    props: { fill: "none", stroke_width: 2.5 }
  }), {
    c() {
      hi(e.$$.fragment);
    },
    l(r) {
      fi(e.$$.fragment, r);
    },
    m(r, a) {
      mi(e, r, a), t = !0;
    },
    p: fn,
    i(r) {
      t || (ot(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ft(e.$$.fragment, r), t = !1;
    },
    d(r) {
      di(e, r);
    }
  };
}
function Pb(n) {
  let e, t, r, a, i, l, s, o, u = (
    /*show_label*/
    n[6] && /*show_copy_button*/
    n[9] && ad(n)
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
    n[10] && id(n)
  ), _ = (
    /*stop_btn*/
    n[11] && ld(n)
  );
  return {
    c() {
      e = hr("label"), u && u.c(), t = fl(), hi(r.$$.fragment), a = fl(), i = hr("div"), h.c(), l = fl(), p && p.c(), s = fl(), _ && _.c(), this.h();
    },
    l(b) {
      e = fr(b, "LABEL", { class: !0 });
      var D = Mn(e);
      u && u.l(D), t = cl(D), fi(r.$$.fragment, D), a = cl(D), i = fr(D, "DIV", { class: !0 });
      var y = Mn(i);
      h.l(y), l = cl(y), p && p.l(y), s = cl(y), _ && _.l(y), y.forEach(rt), D.forEach(rt), this.h();
    },
    h() {
      le(i, "class", "input-container svelte-bj4kw9"), le(e, "class", "svelte-bj4kw9"), Fr(
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
      i0(b, e, D), u && u.m(e, null), Ia(e, t), mi(r, e, null), Ia(e, a), Ia(e, i), h.m(i, null), Ia(i, l), p && p.m(i, null), Ia(i, s), _ && _.m(i, null), o = !0;
    },
    p(b, D) {
      /*show_label*/
      b[6] && /*show_copy_button*/
      b[9] ? u ? (u.p(b, D), D[0] & /*show_label, show_copy_button*/
      576 && ot(u, 1)) : (u = ad(b), u.c(), ot(u, 1), u.m(e, t)) : u && (la(), Ft(u, 1, 1, () => {
        u = null;
      }), ia());
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
      1024 && ot(p, 1)) : (p = id(b), p.c(), ot(p, 1), p.m(i, s)) : p && (la(), Ft(p, 1, 1, () => {
        p = null;
      }), ia()), /*stop_btn*/
      b[11] ? _ ? (_.p(b, D), D[0] & /*stop_btn*/
      2048 && ot(_, 1)) : (_ = ld(b), _.c(), ot(_, 1), _.m(i, null)) : _ && (la(), Ft(_, 1, 1, () => {
        _ = null;
      }), ia()), (!o || D[0] & /*container*/
      128) && Fr(
        e,
        "container",
        /*container*/
        b[7]
      );
    },
    i(b) {
      o || (ot(u), ot(r.$$.fragment, b), ot(p), ot(_), o = !0);
    },
    o(b) {
      Ft(u), Ft(r.$$.fragment, b), Ft(p), Ft(_), o = !1;
    },
    d(b) {
      b && rt(e), u && u.d(), di(r), h.d(), p && p.d(), _ && _.d();
    }
  };
}
function Hb(n, e, t) {
  var r = this && this.__awaiter || function(N, me, ie, Qe) {
    function W0(Dt) {
      return Dt instanceof ie ? Dt : new ie(function(At) {
        At(Dt);
      });
    }
    return new (ie || (ie = Promise))(function(Dt, At) {
      function _r(Re) {
        try {
          m0(Qe.next(Re));
        } catch (Jt) {
          At(Jt);
        }
      }
      function l0(Re) {
        try {
          m0(Qe.throw(Re));
        } catch (Jt) {
          At(Jt);
        }
      }
      function m0(Re) {
        Re.done ? Dt(Re.value) : W0(Re.value).then(_r, l0);
      }
      m0((Qe = Qe.apply(N, me || [])).next());
    });
  };
  let { value: a = "" } = e, { value_is_output: i = !1 } = e, { lines: l = 1 } = e, { placeholder: s = "Type here..." } = e, { label: o } = e, { info: u = void 0 } = e, { disabled: c = !1 } = e, { show_label: d = !0 } = e, { container: h = !0 } = e, { max_lines: p = void 0 } = e, { type: _ = "text" } = e, { show_copy_button: b = !1 } = e, { submit_btn: D = null } = e, { stop_btn: y = null } = e, { rtl: k = !1 } = e, { autofocus: w = !1 } = e, { text_align: E = void 0 } = e, { autoscroll: S = !0 } = e, { max_length: T = void 0 } = e, { root: C } = e, F, B = !1, I, L, P = 0, Z = !1, O;
  const se = !D, K = xb();
  Eb(() => {
    L = F && F.offsetHeight + F.scrollTop > F.scrollHeight - 100;
  });
  const he = () => {
    L && S && !Z && F.scrollTo(0, F.scrollHeight);
  };
  function ue() {
    K("change", a), i || K("input");
  }
  Sb(() => {
    w && F.focus(), L && S && he(), t(28, i = !1);
  });
  function Ae() {
    return r(this, void 0, void 0, function* () {
      "clipboard" in navigator && (yield navigator.clipboard.writeText(a), K("copy", { value: a }), ye());
    });
  }
  function ye() {
    t(19, B = !0), I && clearTimeout(I), I = setTimeout(
      () => {
        t(19, B = !1);
      },
      1e3
    );
  }
  function $(N) {
    const me = N.target, ie = me.value, Qe = [me.selectionStart, me.selectionEnd];
    K("select", { value: ie.substring(...Qe), index: Qe });
  }
  function de(N) {
    return r(this, void 0, void 0, function* () {
      yield nd(), (N.key === "Enter" && N.shiftKey && l > 1 || N.key === "Enter" && !N.shiftKey && l === 1 && O >= 1) && (N.preventDefault(), K("submit"));
    });
  }
  function ce(N) {
    const me = N.target, ie = me.scrollTop;
    ie < P && (Z = !0), P = ie;
    const Qe = me.scrollHeight - me.clientHeight;
    ie >= Qe && (Z = !1);
  }
  function Ce() {
    K("stop");
  }
  function V() {
    K("submit");
  }
  function j(N) {
    return r(this, void 0, void 0, function* () {
      if (yield nd(), l === O) return;
      const me = N.target, ie = window.getComputedStyle(me), Qe = parseFloat(ie.paddingTop), W0 = parseFloat(ie.paddingBottom), Dt = parseFloat(ie.lineHeight);
      let At = O === void 0 ? !1 : Qe + W0 + Dt * O, _r = Qe + W0 + l * Dt;
      me.style.height = "1px";
      let l0;
      At && me.scrollHeight > At ? l0 = At : me.scrollHeight < _r ? l0 = _r : l0 = me.scrollHeight, me.style.height = `${l0}px`;
    });
  }
  function ge(N, me) {
    if (l !== O && (N.style.overflowY = "scroll", N.addEventListener("input", j), !!me.trim()))
      return j({ target: N }), {
        destroy: () => N.removeEventListener("input", j)
      };
  }
  function ke(N) {
    Jr.call(this, n, N);
  }
  function Te(N) {
    Jr.call(this, n, N);
  }
  function ze(N) {
    Jr.call(this, n, N);
  }
  function Le(N) {
    Jr.call(this, n, N);
  }
  function je(N) {
    Jr.call(this, n, N);
  }
  function ft(N) {
    Jr.call(this, n, N);
  }
  function We(N) {
    Jr.call(this, n, N);
  }
  function qe(N) {
    Jr.call(this, n, N);
  }
  function Pe() {
    a = this.value, t(0, a);
  }
  function lt(N) {
    ul[N ? "unshift" : "push"](() => {
      F = N, t(17, F);
    });
  }
  function Ot() {
    a = this.value, t(0, a);
  }
  function qt(N) {
    ul[N ? "unshift" : "push"](() => {
      F = N, t(17, F);
    });
  }
  function Hr() {
    a = this.value, t(0, a);
  }
  function q(N) {
    ul[N ? "unshift" : "push"](() => {
      F = N, t(17, F);
    });
  }
  function gr() {
    a = this.value, t(0, a);
  }
  function z0(N) {
    ul[N ? "unshift" : "push"](() => {
      F = N, t(17, F);
    });
  }
  return n.$$set = (N) => {
    "value" in N && t(0, a = N.value), "value_is_output" in N && t(28, i = N.value_is_output), "lines" in N && t(1, l = N.lines), "placeholder" in N && t(2, s = N.placeholder), "label" in N && t(3, o = N.label), "info" in N && t(4, u = N.info), "disabled" in N && t(5, c = N.disabled), "show_label" in N && t(6, d = N.show_label), "container" in N && t(7, h = N.container), "max_lines" in N && t(29, p = N.max_lines), "type" in N && t(8, _ = N.type), "show_copy_button" in N && t(9, b = N.show_copy_button), "submit_btn" in N && t(10, D = N.submit_btn), "stop_btn" in N && t(11, y = N.stop_btn), "rtl" in N && t(12, k = N.rtl), "autofocus" in N && t(13, w = N.autofocus), "text_align" in N && t(14, E = N.text_align), "autoscroll" in N && t(30, S = N.autoscroll), "max_length" in N && t(15, T = N.max_length), "root" in N && t(16, C = N.root);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*max_lines, type, lines*/
    536871170 && (p === void 0 ? _ === "text" ? t(18, O = Math.max(l, 20)) : t(18, O = 1) : t(18, O = Math.max(p, l))), n.$$.dirty[0] & /*value*/
    1 && a === null && t(0, a = ""), n.$$.dirty[0] & /*value, el, lines, _max_lines*/
    393219 && F && l !== O && j({ target: F }), n.$$.dirty[0] & /*value*/
    1 && ue();
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
    E,
    T,
    C,
    F,
    O,
    B,
    se,
    Ae,
    $,
    de,
    ce,
    Ce,
    V,
    ge,
    i,
    p,
    S,
    ke,
    Te,
    ze,
    Le,
    je,
    ft,
    We,
    qe,
    Pe,
    lt,
    Ot,
    qt,
    Hr,
    q,
    gr,
    z0
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
  attr: dt,
  bind: jb,
  binding_callbacks: Wb,
  check_outros: Dl,
  children: tn,
  claim_component: Nr,
  claim_element: rn,
  claim_space: hl,
  create_component: Rr,
  destroy_component: Or,
  detach: P0,
  element: nn,
  group_outros: Al,
  init: Xb,
  insert_hydration: c1,
  is_function: Yb,
  listen: yu,
  mount_component: qr,
  noop: f1,
  run_all: Zb,
  safe_not_equal: Kb,
  space: dl,
  toggle_class: Wa,
  transition_in: mt,
  transition_out: Ct
} = window.__gradio__svelte__internal;
function sd(n) {
  let e, t, r, a;
  return t = new Su({}), {
    c() {
      e = nn("div"), Rr(t.$$.fragment), this.h();
    },
    l(i) {
      e = rn(i, "DIV", { class: !0, style: !0 });
      var l = tn(e);
      Nr(t.$$.fragment, l), l.forEach(P0), this.h();
    },
    h() {
      dt(e, "class", "button svelte-1j1z049"), dt(e, "style", r = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`);
    },
    m(i, l) {
      c1(i, e, l), qr(t, e, null), a = !0;
    },
    p(i, l) {
      (!a || l & /*icon_button_color*/
      64 && r !== (r = `fill: ${/*icon_button_color*/
      i[6]}; stroke: ${/*icon_button_color*/
      i[6]}; color: ${/*icon_button_color*/
      i[6]};`)) && dt(e, "style", r);
    },
    i(i) {
      a || (mt(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Ct(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && P0(e), Or(t);
    }
  };
}
function Jb(n) {
  let e, t;
  return e = new Cn({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: f1,
    i(r) {
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function Qb(n) {
  let e, t;
  return e = new li({
    props: {
      audio_source_callback: (
        /*input_audio_source_callback*/
        n[3]
      ),
      stream_state: "open",
      icon: (
        /*is_mic_muted*/
        n[12] ? wu : Cn
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
      r[12] ? wu : Cn), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function od(n) {
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
      e = nn("button"), t = nn("div"), a.c(), this.h();
    },
    l(p) {
      e = rn(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = tn(e);
      t = rn(_, "DIV", { class: !0, style: !0 });
      var b = tn(t);
      a.l(b), b.forEach(P0), _.forEach(P0), this.h();
    },
    h() {
      dt(t, "class", "icon"), dt(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), dt(e, "class", "button svelte-1j1z049"), dt(e, "aria-label", l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio"), Wa(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    m(p, _) {
      c1(p, e, _), kr(e, t), d[r].m(t, null), s = !0, o || (u = yu(e, "click", function() {
        Yb(
          /*toggleMute*/
          n[4]
        ) && n[4].apply(this, arguments);
      }), o = !0);
    },
    p(p, _) {
      n = p;
      let b = r;
      r = h(n), r === b ? d[r].p(n, _) : (Al(), Ct(d[b], 1, 1, () => {
        d[b] = null;
      }), Dl(), a = d[r], a ? a.p(n, _) : (a = d[r] = c[r](n), a.c()), mt(a, 1), a.m(t, null)), (!s || _ & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`)) && dt(t, "style", i), (!s || _ & /*is_muted*/
      2048 && l !== (l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio")) && dt(e, "aria-label", l), (!s || _ & /*stream_state*/
      256) && Wa(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    i(p) {
      s || (mt(a), s = !0);
    },
    o(p) {
      Ct(a), s = !1;
    },
    d(p) {
      p && P0(e), d[r].d(), o = !1, u();
    }
  };
}
function $b(n) {
  let e, t;
  return e = new El({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: f1,
    i(r) {
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function ew(n) {
  let e, t;
  return e = new Sl({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: f1,
    i(r) {
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function tw(n) {
  let e, t;
  return e = new li({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[2]
      ),
      stream_state: "open",
      icon: (
        /*is_muted*/
        n[11] ? Sl : El
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
      r[11] ? Sl : El), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function rw(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h, p, _, b, D, y, k, w;
  function E(L) {
    n[17](L);
  }
  let S = {
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
  n[0].textbox !== void 0 && (S.value = /*value*/
  n[0].textbox), t = new Ub({ props: S }), Wb.push(() => jb(t, "value", E)), t.$on(
    "submit",
    /*submit_handler*/
    n[18]
  );
  let T = (
    /*pending*/
    n[10] && sd(n)
  );
  const C = [Qb, Jb], F = [];
  function B(L, P) {
    return (
      /*stream_state*/
      L[8] === "open" ? 0 : 1
    );
  }
  o = B(n), u = F[o] = C[o](n);
  let I = (
    /*mode*/
    n[9] === "send-receive" && od(n)
  );
  return b = new Ad({ props: { fill: "none" } }), {
    c() {
      e = nn("div"), Rr(t.$$.fragment), a = dl(), T && T.c(), i = dl(), l = nn("button"), s = nn("div"), u.c(), d = dl(), I && I.c(), h = dl(), p = nn("button"), _ = nn("div"), Rr(b.$$.fragment), this.h();
    },
    l(L) {
      e = rn(L, "DIV", { class: !0 });
      var P = tn(e);
      Nr(t.$$.fragment, P), a = hl(P), T && T.l(P), i = hl(P), l = rn(P, "BUTTON", { class: !0 });
      var Z = tn(l);
      s = rn(Z, "DIV", { class: !0, style: !0 });
      var O = tn(s);
      u.l(O), O.forEach(P0), Z.forEach(P0), d = hl(P), I && I.l(P), h = hl(P), p = rn(P, "BUTTON", { class: !0, "aria-label": !0 });
      var se = tn(p);
      _ = rn(se, "DIV", { class: !0, style: !0 });
      var K = tn(_);
      Nr(b.$$.fragment, K), K.forEach(P0), se.forEach(P0), P.forEach(P0), this.h();
    },
    h() {
      dt(s, "class", "icon"), dt(s, "style", c = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), dt(l, "class", "button svelte-1j1z049"), Wa(l, "padded-button", !1), dt(_, "class", "icon"), dt(_, "style", D = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), dt(p, "class", "button svelte-1j1z049"), dt(p, "aria-label", "stop stream"), Wa(
        p,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      ), dt(e, "class", "input-container svelte-1j1z049");
    },
    m(L, P) {
      c1(L, e, P), qr(t, e, null), kr(e, a), T && T.m(e, null), kr(e, i), kr(e, l), kr(l, s), F[o].m(s, null), kr(e, d), I && I.m(e, null), kr(e, h), kr(e, p), kr(p, _), qr(b, _, null), y = !0, k || (w = [
        yu(
          l,
          "click",
          /*click_mic_icon*/
          n[13]
        ),
        yu(
          p,
          "click",
          /*click_stop_stream*/
          n[14]
        )
      ], k = !0);
    },
    p(L, P) {
      const Z = {};
      P & /*pending*/
      1024 && (Z.submit_btn = !/*pending*/
      L[10]), P & /*pending*/
      1024 && (Z.disabled = /*pending*/
      L[10]), !r && P & /*value*/
      1 && (r = !0, Z.value = /*value*/
      L[0].textbox, Gb(() => r = !1)), t.$set(Z), /*pending*/
      L[10] ? T ? (T.p(L, P), P & /*pending*/
      1024 && mt(T, 1)) : (T = sd(L), T.c(), mt(T, 1), T.m(e, i)) : T && (Al(), Ct(T, 1, 1, () => {
        T = null;
      }), Dl());
      let O = o;
      o = B(L), o === O ? F[o].p(L, P) : (Al(), Ct(F[O], 1, 1, () => {
        F[O] = null;
      }), Dl(), u = F[o], u ? u.p(L, P) : (u = F[o] = C[o](L), u.c()), mt(u, 1), u.m(s, null)), (!y || P & /*icon_button_color*/
      64 && c !== (c = `fill: ${/*icon_button_color*/
      L[6]}; stroke: ${/*icon_button_color*/
      L[6]}; color: ${/*icon_button_color*/
      L[6]};`)) && dt(s, "style", c), /*mode*/
      L[9] === "send-receive" ? I ? (I.p(L, P), P & /*mode*/
      512 && mt(I, 1)) : (I = od(L), I.c(), mt(I, 1), I.m(e, h)) : I && (Al(), Ct(I, 1, 1, () => {
        I = null;
      }), Dl()), (!y || P & /*icon_button_color*/
      64 && D !== (D = `fill: ${/*icon_button_color*/
      L[6]}; stroke: ${/*icon_button_color*/
      L[6]}; color: ${/*icon_button_color*/
      L[6]};`)) && dt(_, "style", D), (!y || P & /*stream_state*/
      256) && Wa(
        p,
        "hidden",
        /*stream_state*/
        L[8] === "closed"
      );
    },
    i(L) {
      y || (mt(t.$$.fragment, L), mt(T), mt(u), mt(I), mt(b.$$.fragment, L), y = !0);
    },
    o(L) {
      Ct(t.$$.fragment, L), Ct(T), Ct(u), Ct(I), Ct(b.$$.fragment, L), y = !1;
    },
    d(L) {
      L && P0(e), Or(t), T && T.d(), F[o].d(), I && I.d(), Or(b), k = !1, Zb(w);
    }
  };
}
function nw(n) {
  let e, t;
  return e = new Dd({
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
      t || (mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ct(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function aw(n, e, t) {
  var r = this && this.__awaiter || function(C, F, B, I) {
    function L(P) {
      return P instanceof B ? P : new B(function(Z) {
        Z(P);
      });
    }
    return new (B || (B = Promise))(function(P, Z) {
      function O(he) {
        try {
          K(I.next(he));
        } catch (ue) {
          Z(ue);
        }
      }
      function se(he) {
        try {
          K(I.throw(he));
        } catch (ue) {
          Z(ue);
        }
      }
      function K(he) {
        he.done ? P(he.value) : L(he.value).then(O, se);
      }
      K((I = I.apply(C, F || [])).next());
    });
  };
  let { value: a = null } = e, { access_mic: i } = e, { start_stream: l } = e, { audio_source_callback: s } = e, { input_audio_source_callback: o } = e, { toggleMuteMicrophone: u } = e, { toggleMute: c } = e, { on_change_cb: d } = e, { icon_button_color: h = "var(--color-accent)" } = e, { pulse_color: p = "var(--color-accent)" } = e, { stream_state: _ = "closed" } = e, { mode: b = "send-receive" } = e, { pending: D = !1 } = e, { is_muted: y = !1 } = e, { is_mic_muted: k = !1 } = e;
  function w() {
    _ === "open" ? u() : (i(), l());
  }
  function E() {
    return r(this, void 0, void 0, function* () {
      yield l();
    });
  }
  function S(C) {
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
    E,
    i,
    u,
    S,
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
  add_flush_callback: ml,
  add_render_callback: ow,
  append_hydration: et,
  attr: be,
  bind: pl,
  binding_callbacks: Ra,
  bubble: Wo,
  check_outros: er,
  children: nt,
  claim_component: Wt,
  claim_element: at,
  claim_space: f0,
  claim_text: pi,
  create_component: Xt,
  create_in_transition: uw,
  destroy_component: Yt,
  destroy_each: cw,
  detach: ve,
  element: it,
  empty: ud,
  ensure_array_like: cd,
  group_outros: tr,
  init: fw,
  insert_hydration: kt,
  listen: U0,
  mount_component: Zt,
  noop: h1,
  run_all: Cm,
  safe_not_equal: hw,
  set_data: gi,
  set_input_value: ku,
  set_style: dw,
  space: h0,
  stop_propagation: mw,
  text: _i,
  toggle_class: Du,
  transition_in: _e,
  transition_out: De
} = window.__gradio__svelte__internal, { createEventDispatcher: pw } = window.__gradio__svelte__internal, { onMount: gw } = window.__gradio__svelte__internal;
function fd(n, e, t) {
  const r = n.slice();
  return r[57] = e[t], r;
}
function hd(n) {
  let e, t;
  return e = new as({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      Icon: Au,
      float: !1,
      label: (
        /*label*/
        n[2] || /*i18n*/
        n[4]("audio.audio")
      )
    }
  }), {
    c() {
      Xt(e.$$.fragment);
    },
    l(r) {
      Wt(e.$$.fragment, r);
    },
    m(r, a) {
      Zt(e, r, a), t = !0;
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
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Yt(e, r);
    }
  };
}
function _w(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h = (
    /*stream_state*/
    n[16] === "open" && /*mode*/
    n[1].includes("send")
  ), p, _, b, D;
  e = new km({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[23]
      ),
      stream_state: (
        /*stream_state*/
        n[16]
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
        n[13]
      ),
      icon_radius: (
        /*icon_radius*/
        n[9]
      )
    }
  }), r = new um({
    props: { time_limit: (
      /*_time_limit*/
      n[15]
    ) }
  });
  const y = [kw, yw, ww], k = [];
  function w(F, B) {
    return (
      /*stream_state*/
      F[16] === "waiting" ? 0 : (
        /*stream_state*/
        F[16] === "open" ? 1 : 2
      )
    );
  }
  s = w(n), o = k[s] = y[s](n);
  let E = (
    /*stream_state*/
    n[16] === "closed" && dd(n)
  ), S = (
    /*stream_state*/
    n[16] === "open" && /*mode*/
    n[1] === "send-receive" && md(n)
  ), T = h && pd(n), C = (
    /*options_open*/
    n[14] && /*selected_device*/
    n[19] && gd(n)
  );
  return {
    c() {
      Xt(e.$$.fragment), t = h0(), Xt(r.$$.fragment), a = h0(), i = it("div"), l = it("button"), o.c(), u = h0(), E && E.c(), c = h0(), S && S.c(), d = h0(), T && T.c(), p = h0(), C && C.c(), this.h();
    },
    l(F) {
      Wt(e.$$.fragment, F), t = f0(F), Wt(r.$$.fragment, F), a = f0(F), i = at(F, "DIV", { class: !0 });
      var B = nt(i);
      l = at(B, "BUTTON", { "aria-label": !0, class: !0 });
      var I = nt(l);
      o.l(I), I.forEach(ve), u = f0(B), E && E.l(B), c = f0(B), S && S.l(B), d = f0(B), T && T.l(B), p = f0(B), C && C.l(B), B.forEach(ve), this.h();
    },
    h() {
      be(l, "aria-label", "start stream"), be(l, "class", "svelte-k2wuss"), be(i, "class", "button-wrap svelte-k2wuss"), Du(
        i,
        "pulse",
        /*stopword_recognized*/
        n[12]
      );
    },
    m(F, B) {
      Zt(e, F, B), kt(F, t, B), Zt(r, F, B), kt(F, a, B), kt(F, i, B), et(i, l), k[s].m(l, null), et(i, u), E && E.m(i, null), et(i, c), S && S.m(i, null), et(i, d), T && T.m(i, null), et(i, p), C && C.m(i, null), _ = !0, b || (D = U0(
        l,
        "click",
        /*start_stream*/
        n[26]
      ), b = !0);
    },
    p(F, B) {
      const I = {};
      B[0] & /*stream_state*/
      65536 && (I.stream_state = /*stream_state*/
      F[16]), B[0] & /*icon*/
      64 && (I.icon = /*icon*/
      F[6]), B[0] & /*icon_button_color*/
      128 && (I.icon_button_color = /*icon_button_color*/
      F[7]), B[0] & /*pulse_color*/
      256 && (I.pulse_color = /*pulse_color*/
      F[8]), B[0] & /*pending*/
      8192 && (I.pending = /*pending*/
      F[13]), B[0] & /*icon_radius*/
      512 && (I.icon_radius = /*icon_radius*/
      F[9]), e.$set(I);
      const L = {};
      B[0] & /*_time_limit*/
      32768 && (L.time_limit = /*_time_limit*/
      F[15]), r.$set(L);
      let P = s;
      s = w(F), s === P ? k[s].p(F, B) : (tr(), De(k[P], 1, 1, () => {
        k[P] = null;
      }), er(), o = k[s], o ? o.p(F, B) : (o = k[s] = y[s](F), o.c()), _e(o, 1), o.m(l, null)), /*stream_state*/
      F[16] === "closed" ? E ? (E.p(F, B), B[0] & /*stream_state*/
      65536 && _e(E, 1)) : (E = dd(F), E.c(), _e(E, 1), E.m(i, c)) : E && (tr(), De(E, 1, 1, () => {
        E = null;
      }), er()), /*stream_state*/
      F[16] === "open" && /*mode*/
      F[1] === "send-receive" ? S ? (S.p(F, B), B[0] & /*stream_state, mode*/
      65538 && _e(S, 1)) : (S = md(F), S.c(), _e(S, 1), S.m(i, d)) : S && (tr(), De(S, 1, 1, () => {
        S = null;
      }), er()), B[0] & /*stream_state, mode*/
      65538 && (h = /*stream_state*/
      F[16] === "open" && /*mode*/
      F[1].includes("send")), h ? T ? (T.p(F, B), B[0] & /*stream_state, mode*/
      65538 && _e(T, 1)) : (T = pd(F), T.c(), _e(T, 1), T.m(i, p)) : T && (tr(), De(T, 1, 1, () => {
        T = null;
      }), er()), /*options_open*/
      F[14] && /*selected_device*/
      F[19] ? C ? (C.p(F, B), B[0] & /*options_open, selected_device*/
      540672 && _e(C, 1)) : (C = gd(F), C.c(), _e(C, 1), C.m(i, null)) : C && (tr(), De(C, 1, 1, () => {
        C = null;
      }), er()), (!_ || B[0] & /*stopword_recognized*/
      4096) && Du(
        i,
        "pulse",
        /*stopword_recognized*/
        F[12]
      );
    },
    i(F) {
      _ || (_e(e.$$.fragment, F), _e(r.$$.fragment, F), _e(o), _e(E), _e(S), _e(T), _e(C), _ = !0);
    },
    o(F) {
      De(e.$$.fragment, F), De(r.$$.fragment, F), De(o), De(E), De(S), De(T), De(C), _ = !1;
    },
    d(F) {
      F && (ve(t), ve(a), ve(i)), Yt(e, F), Yt(r, F), k[s].d(), E && E.d(), S && S.d(), T && T.d(), C && C.d(), b = !1, D();
    }
  };
}
function vw(n) {
  let e, t, r, a;
  return t = new gm({ props: { icon: Cn } }), t.$on(
    "click",
    /*click_handler*/
    n[49]
  ), {
    c() {
      e = it("div"), Xt(t.$$.fragment), this.h();
    },
    l(i) {
      e = at(i, "DIV", { title: !0, style: !0 });
      var l = nt(e);
      Wt(t.$$.fragment, l), l.forEach(ve), this.h();
    },
    h() {
      be(e, "title", "grant webcam access"), dw(e, "height", "100%");
    },
    m(i, l) {
      kt(i, e, l), Zt(t, e, null), a = !0;
    },
    p: h1,
    i(i) {
      a || (_e(t.$$.fragment, i), i && (r || ow(() => {
        r = uw(e, e1, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      De(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ve(e), Yt(t);
    }
  };
}
function bw(n) {
  let e, t, r, a, i, l;
  function s(h) {
    n[45](h);
  }
  function o(h) {
    n[46](h);
  }
  function u(h) {
    n[47](h);
  }
  function c(h) {
    n[48](h);
  }
  let d = {
    start_stream: (
      /*start_stream*/
      n[26]
    ),
    access_mic: (
      /*access_mic*/
      n[25]
    ),
    audio_source_callback: (
      /*audio_source_callback*/
      n[23]
    ),
    input_audio_source_callback: (
      /*input_audio_source_callback*/
      n[31]
    ),
    toggleMuteMicrophone: (
      /*toggleMuteMicrophone*/
      n[30]
    ),
    toggleMute: (
      /*toggleMute*/
      n[29]
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
      n[13]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (d.value = /*value*/
    n[0]), /*stream_state*/
    n[16] !== void 0 && (d.stream_state = /*stream_state*/
    n[16]), /*is_muted*/
    n[21] !== void 0 && (d.is_muted = /*is_muted*/
    n[21]), /*is_mic_muted*/
    n[22] !== void 0 && (d.is_mic_muted = /*is_mic_muted*/
    n[22]), e = new iw({ props: d }), Ra.push(() => pl(e, "value", s)), Ra.push(() => pl(e, "stream_state", o)), Ra.push(() => pl(e, "is_muted", u)), Ra.push(() => pl(e, "is_mic_muted", c)), {
      c() {
        Xt(e.$$.fragment);
      },
      l(h) {
        Wt(e.$$.fragment, h);
      },
      m(h, p) {
        Zt(e, h, p), l = !0;
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
        8192 && (_.pending = /*pending*/
        h[13]), !t && p[0] & /*value*/
        1 && (t = !0, _.value = /*value*/
        h[0], ml(() => t = !1)), !r && p[0] & /*stream_state*/
        65536 && (r = !0, _.stream_state = /*stream_state*/
        h[16], ml(() => r = !1)), !a && p[0] & /*is_muted*/
        2097152 && (a = !0, _.is_muted = /*is_muted*/
        h[21], ml(() => a = !1)), !i && p[0] & /*is_mic_muted*/
        4194304 && (i = !0, _.is_mic_muted = /*is_mic_muted*/
        h[22], ml(() => i = !1)), e.$set(_);
      },
      i(h) {
        l || (_e(e.$$.fragment, h), l = !0);
      },
      o(h) {
        De(e.$$.fragment, h), l = !1;
      },
      d(h) {
        Yt(e, h);
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
  return r = new Xl({}), {
    c() {
      e = it("div"), t = it("div"), Xt(r.$$.fragment), a = h0(), l = _i(i), this.h();
    },
    l(o) {
      e = at(o, "DIV", { class: !0 });
      var u = nt(e);
      t = at(u, "DIV", { class: !0, title: !0 });
      var c = nt(t);
      Wt(r.$$.fragment, c), c.forEach(ve), a = f0(u), l = pi(u, i), u.forEach(ve), this.h();
    },
    h() {
      be(t, "class", "icon color-primary svelte-k2wuss"), be(t, "title", "start recording"), be(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, u) {
      kt(o, e, u), et(e, t), Zt(r, t, null), et(e, a), et(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (o[10].start || /*i18n*/
      o[4]("audio.record")) + "") && gi(l, i);
    },
    i(o) {
      s || (_e(r.$$.fragment, o), s = !0);
    },
    o(o) {
      De(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ve(e), Yt(r);
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
      e = it("div"), r.c(), a = h0(), l = _i(i), this.h();
    },
    l(d) {
      e = at(d, "DIV", { class: !0 });
      var h = nt(e);
      r.l(h), a = f0(h), l = pi(h, i), h.forEach(ve), this.h();
    },
    h() {
      be(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(d, h) {
      kt(d, e, h), u[t].m(e, null), et(e, a), et(e, l), s = !0;
    },
    p(d, h) {
      let p = t;
      t = c(d), t === p ? u[t].p(d, h) : (tr(), De(u[p], 1, 1, () => {
        u[p] = null;
      }), er(), r = u[t], r ? r.p(d, h) : (r = u[t] = o[t](d), r.c()), _e(r, 1), r.m(e, a)), (!s || h[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (d[10].stop || /*i18n*/
      d[4]("audio.stop")) + "") && gi(l, i);
    },
    i(d) {
      s || (_e(r), s = !0);
    },
    o(d) {
      De(r), s = !1;
    },
    d(d) {
      d && ve(e), u[t].d();
    }
  };
}
function kw(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].waiting || "Connecting...") + ""
  ), l, s;
  return r = new Su({}), {
    c() {
      e = it("div"), t = it("div"), Xt(r.$$.fragment), a = h0(), l = _i(i), this.h();
    },
    l(o) {
      e = at(o, "DIV", { class: !0 });
      var u = nt(e);
      t = at(u, "DIV", { class: !0, title: !0 });
      var c = nt(t);
      Wt(r.$$.fragment, c), c.forEach(ve), a = f0(u), l = pi(u, i), u.forEach(ve), this.h();
    },
    h() {
      be(t, "class", "icon color-primary svelte-k2wuss"), be(t, "title", "spinner"), be(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, u) {
      kt(o, e, u), et(e, t), Zt(r, t, null), et(e, a), et(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels*/
      1024) && i !== (i = /*button_labels*/
      (o[10].waiting || "Connecting...") + "") && gi(l, i);
    },
    i(o) {
      s || (_e(r.$$.fragment, o), s = !0);
    },
    o(o) {
      De(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ve(e), Yt(r);
    }
  };
}
function Dw(n) {
  let e, t, r;
  return t = new Xl({}), {
    c() {
      e = it("div"), Xt(t.$$.fragment), this.h();
    },
    l(a) {
      e = at(a, "DIV", { class: !0, title: !0 });
      var i = nt(e);
      Wt(t.$$.fragment, i), i.forEach(ve), this.h();
    },
    h() {
      be(e, "class", "icon color-primary svelte-k2wuss"), be(e, "title", "start recording");
    },
    m(a, i) {
      kt(a, e, i), Zt(t, e, null), r = !0;
    },
    p: h1,
    i(a) {
      r || (_e(t.$$.fragment, a), r = !0);
    },
    o(a) {
      De(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && ve(e), Yt(t);
    }
  };
}
function Aw(n) {
  let e, t, r, a;
  return t = new li({
    props: {
      audio_source_callback: (
        /*input_audio_source_callback*/
        n[31]
      ),
      stream_state: "open",
      icon: Xl,
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
      e = it("div"), Xt(t.$$.fragment), this.h();
    },
    l(i) {
      e = at(i, "DIV", { class: !0, title: !0, style: !0 });
      var l = nt(e);
      Wt(t.$$.fragment, l), l.forEach(ve), this.h();
    },
    h() {
      be(e, "class", "icon svelte-k2wuss"), be(e, "title", "stop recording"), be(e, "style", r = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`);
    },
    m(i, l) {
      kt(i, e, l), Zt(t, e, null), a = !0;
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
      i[7]};`)) && be(e, "style", r);
    },
    i(i) {
      a || (_e(t.$$.fragment, i), a = !0);
    },
    o(i) {
      De(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ve(e), Yt(t);
    }
  };
}
function dd(n) {
  let e, t, r, a, i;
  return t = new Yl({}), {
    c() {
      e = it("button"), Xt(t.$$.fragment), this.h();
    },
    l(l) {
      e = at(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = nt(e);
      Wt(t.$$.fragment, s), s.forEach(ve), this.h();
    },
    h() {
      be(e, "class", "icon svelte-k2wuss"), be(e, "aria-label", "select input source");
    },
    m(l, s) {
      kt(l, e, s), Zt(t, e, null), r = !0, a || (i = U0(
        e,
        "click",
        /*click_handler_1*/
        n[50]
      ), a = !0);
    },
    p: h1,
    i(l) {
      r || (_e(t.$$.fragment, l), r = !0);
    },
    o(l) {
      De(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && ve(e), Yt(t), a = !1, i();
    }
  };
}
function md(n) {
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
      e = it("button"), t = it("div"), a.c(), this.h();
    },
    l(p) {
      e = at(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = nt(e);
      t = at(_, "DIV", { class: !0, style: !0 });
      var b = nt(t);
      a.l(b), b.forEach(ve), _.forEach(ve), this.h();
    },
    h() {
      be(t, "class", "icon svelte-k2wuss"), be(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), be(e, "class", "mute-button svelte-k2wuss"), be(e, "aria-label", l = /*is_muted*/
      n[21] ? "unmute audio" : "mute audio");
    },
    m(p, _) {
      kt(p, e, _), et(e, t), d[r].m(t, null), s = !0, o || (u = U0(
        e,
        "click",
        /*toggleMute*/
        n[29]
      ), o = !0);
    },
    p(p, _) {
      let b = r;
      r = h(p), r !== b && (tr(), De(d[b], 1, 1, () => {
        d[b] = null;
      }), er(), a = d[r], a || (a = d[r] = c[r](p), a.c()), _e(a, 1), a.m(t, null)), (!s || _[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && be(t, "style", i), (!s || _[0] & /*is_muted*/
      2097152 && l !== (l = /*is_muted*/
      p[21] ? "unmute audio" : "mute audio")) && be(e, "aria-label", l);
    },
    i(p) {
      s || (_e(a), s = !0);
    },
    o(p) {
      De(a), s = !1;
    },
    d(p) {
      p && ve(e), d[r].d(), o = !1, u();
    }
  };
}
function Ew(n) {
  let e, t;
  return e = new El({}), {
    c() {
      Xt(e.$$.fragment);
    },
    l(r) {
      Wt(e.$$.fragment, r);
    },
    m(r, a) {
      Zt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Yt(e, r);
    }
  };
}
function Sw(n) {
  let e, t;
  return e = new Sl({}), {
    c() {
      Xt(e.$$.fragment);
    },
    l(r) {
      Wt(e.$$.fragment, r);
    },
    m(r, a) {
      Zt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Yt(e, r);
    }
  };
}
function pd(n) {
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
      e = it("button"), t = it("div"), a.c(), this.h();
    },
    l(p) {
      e = at(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = nt(e);
      t = at(_, "DIV", { class: !0, style: !0 });
      var b = nt(t);
      a.l(b), b.forEach(ve), _.forEach(ve), this.h();
    },
    h() {
      be(t, "class", "icon svelte-k2wuss"), be(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), be(e, "class", "mute-button svelte-k2wuss"), be(e, "aria-label", l = /*is_mic_muted*/
      n[22] ? "unmute mic" : "mute mic");
    },
    m(p, _) {
      kt(p, e, _), et(e, t), d[r].m(t, null), s = !0, o || (u = U0(
        e,
        "click",
        /*toggleMuteMicrophone*/
        n[30]
      ), o = !0);
    },
    p(p, _) {
      let b = r;
      r = h(p), r !== b && (tr(), De(d[b], 1, 1, () => {
        d[b] = null;
      }), er(), a = d[r], a || (a = d[r] = c[r](p), a.c()), _e(a, 1), a.m(t, null)), (!s || _[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && be(t, "style", i), (!s || _[0] & /*is_mic_muted*/
      4194304 && l !== (l = /*is_mic_muted*/
      p[22] ? "unmute mic" : "mute mic")) && be(e, "aria-label", l);
    },
    i(p) {
      s || (_e(a), s = !0);
    },
    o(p) {
      De(a), s = !1;
    },
    d(p) {
      p && ve(e), d[r].d(), o = !1, u();
    }
  };
}
function xw(n) {
  let e, t;
  return e = new Cn({}), {
    c() {
      Xt(e.$$.fragment);
    },
    l(r) {
      Wt(e.$$.fragment, r);
    },
    m(r, a) {
      Zt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Yt(e, r);
    }
  };
}
function Tw(n) {
  let e, t;
  return e = new wu({}), {
    c() {
      Xt(e.$$.fragment);
    },
    l(r) {
      Wt(e.$$.fragment, r);
    },
    m(r, a) {
      Zt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Yt(e, r);
    }
  };
}
function gd(n) {
  let e, t, r, a, i, l, s;
  r = new Yl({});
  function o(d, h) {
    return (
      /*available_audio_devices*/
      d[18].length === 0 ? Fw : Cw
    );
  }
  let u = o(n), c = u(n);
  return {
    c() {
      e = it("select"), t = it("button"), Xt(r.$$.fragment), a = h0(), c.c(), this.h();
    },
    l(d) {
      e = at(d, "SELECT", { class: !0, "aria-label": !0 });
      var h = nt(e);
      t = at(h, "BUTTON", { class: !0 });
      var p = nt(t);
      Wt(r.$$.fragment, p), a = f0(p), p.forEach(ve), c.l(h), h.forEach(ve), this.h();
    },
    h() {
      be(t, "class", "inset-icon svelte-k2wuss"), be(e, "class", "select-wrap svelte-k2wuss"), be(e, "aria-label", "select source");
    },
    m(d, h) {
      kt(d, e, h), et(e, t), Zt(r, t, null), et(t, a), c.m(e, null), i = !0, l || (s = [
        U0(t, "click", mw(
          /*click_handler_2*/
          n[51]
        )),
        sw(zw.call(
          null,
          e,
          /*handle_click_outside*/
          n[27]
        )),
        U0(
          e,
          "change",
          /*handle_device_change*/
          n[28]
        )
      ], l = !0);
    },
    p(d, h) {
      u === (u = o(d)) && c ? c.p(d, h) : (c.d(1), c = u(d), c && (c.c(), c.m(e, null)));
    },
    i(d) {
      i || (_e(r.$$.fragment, d), i = !0);
    },
    o(d) {
      De(r.$$.fragment, d), i = !1;
    },
    d(d) {
      d && ve(e), Yt(r), c.d(), l = !1, Cm(s);
    }
  };
}
function Cw(n) {
  let e, t = cd(
    /*available_audio_devices*/
    n[18]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = _d(fd(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = ud();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = ud();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      kt(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_audio_devices, selected_device*/
      786432) {
        t = cd(
          /*available_audio_devices*/
          a[18]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = fd(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = _d(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ve(e), cw(r, a);
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
      e = it("option"), r = _i(t), this.h();
    },
    l(a) {
      e = at(a, "OPTION", { class: !0 });
      var i = nt(e);
      r = pi(i, t), i.forEach(ve), this.h();
    },
    h() {
      e.__value = "", ku(e, e.__value), be(e, "class", "svelte-k2wuss");
    },
    m(a, i) {
      kt(a, e, i), et(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      16 && t !== (t = /*i18n*/
      a[4]("common.no_devices") + "") && gi(r, t);
    },
    d(a) {
      a && ve(e);
    }
  };
}
function _d(n) {
  let e, t = (
    /*device*/
    n[57].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = it("option"), r = _i(t), a = h0(), this.h();
    },
    l(s) {
      e = at(s, "OPTION", { class: !0 });
      var o = nt(e);
      r = pi(o, t), a = f0(o), o.forEach(ve), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[57].deviceId, ku(e, e.__value), e.selected = l = /*selected_device*/
      n[19].deviceId === /*device*/
      n[57].deviceId, be(e, "class", "svelte-k2wuss");
    },
    m(s, o) {
      kt(s, e, o), et(e, r), et(e, a);
    },
    p(s, o) {
      o[0] & /*available_audio_devices*/
      262144 && t !== (t = /*device*/
      s[57].label + "") && gi(r, t), o[0] & /*available_audio_devices*/
      262144 && i !== (i = /*device*/
      s[57].deviceId) && (e.__value = i, ku(e, e.__value)), o[0] & /*selected_device, available_audio_devices*/
      786432 && l !== (l = /*selected_device*/
      s[19].deviceId === /*device*/
      s[57].deviceId) && (e.selected = l);
    },
    d(s) {
      s && ve(e);
    }
  };
}
function Mw(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[11] !== "textbox" && hd(n)
  );
  const d = [bw, vw, _w], h = [];
  function p(_, b) {
    return (
      /*variant*/
      _[11] === "textbox" ? 0 : (
        /*mic_accessed*/
        _[20] ? 2 : 1
      )
    );
  }
  return i = p(n), l = h[i] = d[i](n), {
    c() {
      c && c.c(), e = h0(), t = it("div"), r = it("audio"), a = h0(), l.c(), this.h();
    },
    l(_) {
      c && c.l(_), e = f0(_), t = at(_, "DIV", { class: !0 });
      var b = nt(t);
      r = at(b, "AUDIO", { class: !0 }), nt(r).forEach(ve), a = f0(b), l.l(b), b.forEach(ve), this.h();
    },
    h() {
      be(r, "class", "standard-player svelte-k2wuss"), Du(r, "hidden", !0), be(t, "class", "audio-container svelte-k2wuss");
    },
    m(_, b) {
      c && c.m(_, b), kt(_, e, b), kt(_, t, b), et(t, r), n[42](r), et(t, a), h[i].m(t, null), s = !0, o || (u = [
        U0(
          r,
          "load",
          /*load_handler*/
          n[39]
        ),
        U0(
          r,
          "ended",
          /*ended_handler*/
          n[43]
        ),
        U0(
          r,
          "play",
          /*play_handler*/
          n[44]
        ),
        U0(
          r,
          "start_recording",
          /*start_recording_handler*/
          n[40]
        ),
        U0(
          r,
          "stop_recording",
          /*stop_recording_handler*/
          n[41]
        )
      ], o = !0);
    },
    p(_, b) {
      /*variant*/
      _[11] !== "textbox" ? c ? (c.p(_, b), b[0] & /*variant*/
      2048 && _e(c, 1)) : (c = hd(_), c.c(), _e(c, 1), c.m(e.parentNode, e)) : c && (tr(), De(c, 1, 1, () => {
        c = null;
      }), er());
      let D = i;
      i = p(_), i === D ? h[i].p(_, b) : (tr(), De(h[D], 1, 1, () => {
        h[D] = null;
      }), er(), l = h[i], l ? l.p(_, b) : (l = h[i] = d[i](_), l.c()), _e(l, 1), l.m(t, null));
    },
    i(_) {
      s || (_e(c), _e(l), s = !0);
    },
    o(_) {
      De(c), De(l), s = !1;
    },
    d(_) {
      _ && (ve(e), ve(t)), c && c.d(_), n[42](null), h[i].d(), o = !1, Cm(u);
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
  var r = this && this.__awaiter || function(N, me, ie, Qe) {
    function W0(Dt) {
      return Dt instanceof ie ? Dt : new ie(function(At) {
        At(Dt);
      });
    }
    return new (ie || (ie = Promise))(function(Dt, At) {
      function _r(Re) {
        try {
          m0(Qe.next(Re));
        } catch (Jt) {
          At(Jt);
        }
      }
      function l0(Re) {
        try {
          m0(Qe.throw(Re));
        } catch (Jt) {
          At(Jt);
        }
      }
      function m0(Re) {
        Re.done ? Dt(Re.value) : W0(Re.value).then(_r, l0);
      }
      m0((Qe = Qe.apply(N, me || [])).next());
    });
  };
  let { mode: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s = !0 } = e, { rtc_configuration: o = null } = e, { i18n: u } = e, { time_limit: c = null } = e, { track_constraints: d = {} } = e, { rtp_params: h = {} } = e, { on_change_cb: p } = e, { reject_cb: _ } = e, { icon: b = void 0 } = e, { icon_button_color: D = "var(--color-accent)" } = e, { pulse_color: y = "var(--color-accent)" } = e, { icon_radius: k = 50 } = e, { button_labels: w } = e, { variant: E = "wave" } = e, S = !1, T = !1, C;
  gw(() => {
    (i == null ? void 0 : i.webrtc_id) === "__webrtc_value__" && t(38, C = new Audio("https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/pop-sounds.mp3"));
  });
  let F = (N) => {
    N === "stopword" ? (t(12, T = !0), setTimeout(
      () => {
        t(12, T = !1);
      },
      3e3
    )) : N.type === "end_stream" ? (t(16, P = "closed"), r0(O), p(N)) : (console.debug("calling on_change_cb with msg", N), p(N));
  }, B = !1, I = null, { server: L } = e, P = "closed", Z, O, se = null, K, he, ue = null, Ae = !1, ye = !1, $ = !1;
  const de = () => a === "send" ? K : Z.srcObject, ce = pw();
  function Ce() {
    return r(this, void 0, void 0, function* () {
      try {
        const me = ue ? Object.assign(
          {
            deviceId: { exact: ue.deviceId }
          },
          d
        ) : d;
        K = yield navigator.mediaDevices.getUserMedia({ audio: me });
      } catch (me) {
        if (!navigator.mediaDevices) {
          ce("error", u("audio.no_device_support"));
          return;
        }
        if (me instanceof DOMException && me.name == "NotAllowedError") {
          ce("error", u("audio.allow_recording_access"));
          return;
        }
        throw me;
      }
      t(18, he = vm(yield _m(), "audioinput")), t(20, Ae = !0);
      const N = K.getTracks().map((me) => {
        var ie;
        return (ie = me.getSettings()) === null || ie === void 0 ? void 0 : ie.deviceId;
      })[0];
      t(19, ue = N && he.find((me) => me.deviceId === N) || he[0]);
    });
  }
  function V() {
    return r(this, void 0, void 0, function* () {
      if (P === "open") {
        ce("stop_recording"), r0(O), t(16, P = "closed"), t(15, I = null), yield Ce(), yield L.quit_output_stream({ webrtc_id: se });
        return;
      }
      ce("start_recording"), se = Math.random().toString(36).substring(2), t(0, i.webrtc_id = se, i), t(16, P = "waiting"), yield L.turn().then((ie) => {
        if (ie.error) {
          ce("error", ie.error);
          return;
        }
        t(32, o = ie), console.info("rtc_configuration", ie);
      }), O = new RTCPeerConnection(o), console.info("created"), O.addEventListener("connectionstatechange", (ie) => r(this, void 0, void 0, function* () {
        switch (O.connectionState) {
          case "connected":
            console.info("connected"), t(16, P = "open"), t(15, I = c);
            break;
          case "disconnected":
            console.info("closed"), t(16, P = "closed"), t(15, I = null), r0(O);
            break;
          case "failed":
            console.info("failed"), t(16, P = "closed"), t(15, I = null), ce("error", "Connection failed!"), r0(O);
            break;
        }
      })), K = null;
      try {
        yield Ce();
      } catch (ie) {
        if (!navigator.mediaDevices) {
          ce("error", u("audio.no_device_support"));
          return;
        }
        if (ie instanceof DOMException && ie.name == "NotAllowedError") {
          ce("error", u("audio.allow_recording_access"));
          return;
        }
        throw ie;
      }
      if (K == null) return;
      const N = (ie) => {
        ie.type === "log" && ie.data === "pause_detected" ? t(13, S = !0) : ie.type === "log" && ie.data === "response_starting" && t(
          13,
          S = !1
        );
      }, me = setTimeout(
        () => {
          F({ type: "connection_timeout" });
        },
        1e4
      );
      ss(K, O, a === "send" ? null : Z, L.offer, se, "audio", F, h, N, _).then((ie) => {
        clearTimeout(me), O = ie;
      }).catch(() => {
        console.info("catching"), clearTimeout(me), t(16, P = "closed");
      });
    });
  }
  function j(N) {
    N.preventDefault(), N.stopPropagation(), t(14, B = !1);
  }
  const ge = (N) => r(void 0, void 0, void 0, function* () {
    const ie = N.target.value;
    K = yield navigator.mediaDevices.getUserMedia({
      audio: Object.assign({ deviceId: { exact: ie } }, d)
    }), t(19, ue = he.find((Qe) => Qe.deviceId === ie) || null), t(14, B = !1);
  });
  function ke() {
    Z && (t(17, Z.muted = !Z.muted, Z), t(21, ye = Z.muted));
  }
  function Te() {
    if (K && K.getAudioTracks().length > 0) {
      const N = K.getAudioTracks()[0];
      N.enabled = !N.enabled, t(22, $ = !N.enabled);
    }
  }
  function ze() {
    return K;
  }
  function Le(N) {
    Wo.call(this, n, N);
  }
  function je(N) {
    Wo.call(this, n, N);
  }
  function ft(N) {
    Wo.call(this, n, N);
  }
  function We(N) {
    Ra[N ? "unshift" : "push"](() => {
      Z = N, t(17, Z);
    });
  }
  const qe = () => ce("stop"), Pe = () => ce("play");
  function lt(N) {
    i = N, t(0, i);
  }
  function Ot(N) {
    P = N, t(16, P);
  }
  function qt(N) {
    ye = N, t(21, ye);
  }
  function Hr(N) {
    $ = N, t(22, $);
  }
  const q = async () => Ce(), gr = () => t(14, B = !0), z0 = () => t(14, B = !1);
  return n.$$set = (N) => {
    "mode" in N && t(1, a = N.mode), "value" in N && t(0, i = N.value), "label" in N && t(2, l = N.label), "show_label" in N && t(3, s = N.show_label), "rtc_configuration" in N && t(32, o = N.rtc_configuration), "i18n" in N && t(4, u = N.i18n), "time_limit" in N && t(33, c = N.time_limit), "track_constraints" in N && t(34, d = N.track_constraints), "rtp_params" in N && t(35, h = N.rtp_params), "on_change_cb" in N && t(5, p = N.on_change_cb), "reject_cb" in N && t(36, _ = N.reject_cb), "icon" in N && t(6, b = N.icon), "icon_button_color" in N && t(7, D = N.icon_button_color), "pulse_color" in N && t(8, y = N.pulse_color), "icon_radius" in N && t(9, k = N.icon_radius), "button_labels" in N && t(10, w = N.button_labels), "variant" in N && t(11, E = N.variant), "server" in N && t(37, L = N.server);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*stopword_recognized*/
    4096 | n.$$.dirty[1] & /*notification_sound*/
    128 && T && C.play();
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
    E,
    T,
    S,
    B,
    I,
    P,
    Z,
    he,
    ue,
    Ae,
    ye,
    $,
    de,
    ce,
    Ce,
    V,
    j,
    ge,
    ke,
    Te,
    ze,
    o,
    c,
    d,
    h,
    _,
    L,
    C,
    Le,
    je,
    ft,
    We,
    qe,
    Pe,
    lt,
    Ot,
    qt,
    Hr,
    q,
    gr,
    z0
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
        rtc_configuration: 32,
        i18n: 4,
        time_limit: 33,
        track_constraints: 34,
        rtp_params: 35,
        on_change_cb: 5,
        reject_cb: 36,
        icon: 6,
        icon_button_color: 7,
        pulse_color: 8,
        icon_radius: 9,
        button_labels: 10,
        variant: 11,
        server: 37
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Lw,
  add_flush_callback: ds,
  assign: Nw,
  bind: ms,
  binding_callbacks: ps,
  check_outros: Rw,
  claim_component: Ln,
  claim_space: Ow,
  create_component: Nn,
  destroy_component: Rn,
  detach: vd,
  empty: bd,
  flush: Be,
  get_spread_object: qw,
  get_spread_update: Pw,
  group_outros: Hw,
  init: Uw,
  insert_hydration: wd,
  mount_component: On,
  safe_not_equal: Vw,
  space: Gw,
  transition_in: Mr,
  transition_out: zr
} = window.__gradio__svelte__internal;
function jw(n) {
  let e, t, r;
  function a(l) {
    n[48](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[26]
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
      n[27]
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
    ),
    variant: (
      /*variant*/
      n[25]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new Iw({ props: i }), ps.push(() => ms(e, "value", a)), e.$on(
      "start_recording",
      /*start_recording_handler_1*/
      n[49]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler_1*/
      n[50]
    ), e.$on(
      "tick",
      /*tick_handler_3*/
      n[51]
    ), e.$on(
      "error",
      /*error_handler_3*/
      n[52]
    ), e.$on(
      "warning",
      /*warning_handler*/
      n[53]
    ), {
      c() {
        Nn(e.$$.fragment);
      },
      l(l) {
        Ln(e.$$.fragment, l);
      },
      m(l, s) {
        On(e, l, s), r = !0;
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
        l[4]), s[0] & /*variant*/
        33554432 && (o.variant = /*variant*/
        l[25]), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], ds(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Rn(e, l);
      }
    }
  );
}
function Ww(n) {
  let e, t, r;
  function a(l) {
    n[37](l);
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
      n[26]
    ),
    reject_cb: (
      /*reject_cb*/
      n[27]
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
      n[36]
    ),
    $$slots: { default: [Zw] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new C9({ props: i }), ps.push(() => ms(e, "value", a)), e.$on(
      "clear",
      /*clear_handler*/
      n[38]
    ), e.$on(
      "play",
      /*play_handler*/
      n[39]
    ), e.$on(
      "pause",
      /*pause_handler*/
      n[40]
    ), e.$on(
      "upload",
      /*upload_handler*/
      n[41]
    ), e.$on(
      "stop",
      /*stop_handler*/
      n[42]
    ), e.$on(
      "end",
      /*end_handler*/
      n[43]
    ), e.$on(
      "start_recording",
      /*start_recording_handler*/
      n[44]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[45]
    ), e.$on(
      "tick",
      /*tick_handler_2*/
      n[46]
    ), e.$on(
      "error",
      /*error_handler_2*/
      n[47]
    ), {
      c() {
        Nn(e.$$.fragment);
      },
      l(l) {
        Ln(e.$$.fragment, l);
      },
      m(l, s) {
        On(e, l, s), r = !0;
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
        l[36]), s[0] & /*gradio*/
        16384 | s[1] & /*$$scope*/
        8388608 && (o.$$scope = { dirty: s, ctx: l }), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], ds(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Rn(e, l);
      }
    }
  );
}
function Xw(n) {
  let e, t, r;
  function a(l) {
    n[33](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[26]
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
    n[0]), e = new E_({ props: i }), ps.push(() => ms(e, "value", a)), e.$on(
      "tick",
      /*tick_handler_1*/
      n[34]
    ), e.$on(
      "error",
      /*error_handler_1*/
      n[35]
    ), {
      c() {
        Nn(e.$$.fragment);
      },
      l(l) {
        Ln(e.$$.fragment, l);
      },
      m(l, s) {
        On(e, l, s), r = !0;
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
        l[0], ds(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Rn(e, l);
      }
    }
  );
}
function Yw(n) {
  let e, t, r;
  function a(l) {
    n[30](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[26]
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
    n[0]), e = new J9({ props: i }), ps.push(() => ms(e, "value", a)), e.$on(
      "tick",
      /*tick_handler*/
      n[31]
    ), e.$on(
      "error",
      /*error_handler*/
      n[32]
    ), {
      c() {
        Nn(e.$$.fragment);
      },
      l(l) {
        Ln(e.$$.fragment, l);
      },
      m(l, s) {
        On(e, l, s), r = !0;
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
        l[0], ds(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Rn(e, l);
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
        n[14].i18n
      ),
      type: "video"
    }
  }), {
    c() {
      Nn(e.$$.fragment);
    },
    l(r) {
      Ln(e.$$.fragment, r);
    },
    m(r, a) {
      On(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*gradio*/
      16384 && (i.i18n = /*gradio*/
      r[14].i18n), e.$set(i);
    },
    i(r) {
      t || (Mr(e.$$.fragment, r), t = !0);
    },
    o(r) {
      zr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Rn(e, r);
    }
  };
}
function Kw(n) {
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
  for (let h = 0; h < s.length; h += 1)
    o = Nw(o, s[h]);
  e = new Sp({ props: o }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[29]
  );
  const u = [Yw, Xw, Ww, jw], c = [];
  function d(h, p) {
    return (
      /*mode*/
      h[18] == "receive" && /*modality*/
      h[17] === "video" ? 0 : (
        /*mode*/
        h[18] == "receive" && /*modality*/
        h[17] === "audio" ? 1 : (
          /*mode*/
          (h[18] === "send-receive" || /*mode*/
          h[18] == "send") && /*modality*/
          (h[17] === "video" || /*modality*/
          h[17] == "audio-video") ? 2 : (
            /*mode*/
            (h[18] === "send-receive" || /*mode*/
            h[18] === "send") && /*modality*/
            h[17] === "audio" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(r = d(n)) && (a = c[r] = u[r](n)), {
    c() {
      Nn(e.$$.fragment), t = Gw(), a && a.c(), i = bd();
    },
    l(h) {
      Ln(e.$$.fragment, h), t = Ow(h), a && a.l(h), i = bd();
    },
    m(h, p) {
      On(e, h, p), wd(h, t, p), ~r && c[r].m(h, p), wd(h, i, p), l = !0;
    },
    p(h, p) {
      const _ = p[0] & /*gradio, loading_status*/
      16512 ? Pw(s, [
        p[0] & /*gradio*/
        16384 && {
          autoscroll: (
            /*gradio*/
            h[14].autoscroll
          )
        },
        p[0] & /*gradio*/
        16384 && { i18n: (
          /*gradio*/
          h[14].i18n
        ) },
        p[0] & /*loading_status*/
        128 && qw(
          /*loading_status*/
          h[7]
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
      h && (vd(t), vd(i)), Rn(e, h), ~r && c[r].d(h);
    }
  };
}
function Jw(n) {
  let e, t;
  return e = new Dd({
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
      $$slots: { default: [Kw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Nn(e.$$.fragment);
    },
    l(r) {
      Ln(e.$$.fragment, r);
    },
    m(r, a) {
      On(e, r, a), t = !0;
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
      r[13]), a[0] & /*label, show_label, server, rtc_configuration, value, gradio, mode, modality, icon, icon_button_color, pulse_color, icon_radius, time_limit, track_constraints, rtp_params, button_labels, variant, loading_status*/
      67093745 | a[1] & /*$$scope*/
      8388608 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (Mr(e.$$.fragment, r), t = !0);
    },
    o(r) {
      zr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Rn(e, r);
    }
  };
}
function Qw(n, e, t) {
  let { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { button_labels: l } = e, { label: s } = e, { root: o } = e, { show_label: u } = e, { loading_status: c } = e, { height: d } = e, { width: h } = e, { server: p } = e, { container: _ = !1 } = e, { scale: b = null } = e, { min_width: D = void 0 } = e, { gradio: y } = e, { rtc_configuration: k } = e, { time_limit: w = null } = e, { modality: E = "video" } = e, { mode: S = "send-receive" } = e, { rtp_params: T = {} } = e, { track_constraints: C = {} } = e, { icon: F = void 0 } = e, { icon_button_color: B = "var(--color-accent)" } = e, { pulse_color: I = "var(--color-accent)" } = e, { icon_radius: L = 50 } = e, { variant: P = "wave" } = e, { value: Z = P === "textbox" || (S === "send-receive" || S == "send") && E === "audio" ? {
    textbox: "",
    webrtc_id: "__webrtc_value__"
  } : "__webrtc_value__" } = e;
  const O = (q) => {
    console.log("on_change_cb in index.svelte", q), (q == null ? void 0 : q.type) === "info" || (q == null ? void 0 : q.type) === "warning" || (q == null ? void 0 : q.type) === "error" ? y.dispatch(
      (q == null ? void 0 : q.type) === "error" ? "error" : "warning",
      (q == null ? void 0 : q.data) || (q == null ? void 0 : q.message)
    ) : (q == null ? void 0 : q.type) === "end_stream" ? y.dispatch("warning", q.data) : (q == null ? void 0 : q.type) === "fetch_output" ? y.dispatch("state_change") : (q == null ? void 0 : q.type) === "send_input" ? y.dispatch("tick") : (q == null ? void 0 : q.type) === "submit" ? (console.log("submit in index.svelte", q.data), y.dispatch("submit", q.data)) : (q == null ? void 0 : q.type) === "connection_timeout" && y.dispatch("warning", "Taking a while to connect. Are you on a VPN?"), q.type === "state_change" && y.dispatch(q === "change" ? "state_change" : "tick");
  }, se = (q) => {
    var gr, z0;
    q.status === "failed" && ((gr = q.meta) === null || gr === void 0 ? void 0 : gr.error) === "concurrency_limit_reached" ? y.dispatch("error", "Too many concurrent connections. Please try again later!") : q.status === "failed" && ((z0 = q.meta) === null || z0 === void 0 ? void 0 : z0.error) === "connection_already_exists" ? y.dispatch("error", "Connection already exists") : y.dispatch("error", "Unexpected server error");
  }, K = () => y.dispatch("clear_status", c);
  function he(q) {
    Z = q, t(0, Z);
  }
  const ue = () => y.dispatch("tick"), Ae = ({ detail: q }) => y.dispatch("error", q);
  function ye(q) {
    Z = q, t(0, Z);
  }
  const $ = () => y.dispatch("tick"), de = ({ detail: q }) => y.dispatch("error", q), ce = (...q) => y.client.stream(...q);
  function Ce(q) {
    Z = q, t(0, Z);
  }
  const V = () => y.dispatch("clear"), j = () => y.dispatch("play"), ge = () => y.dispatch("pause"), ke = () => y.dispatch("upload"), Te = () => y.dispatch("stop"), ze = () => y.dispatch("end"), Le = () => y.dispatch("start_recording"), je = () => y.dispatch("stop_recording"), ft = () => y.dispatch("tick"), We = ({ detail: q }) => y.dispatch("error", q);
  function qe(q) {
    Z = q, t(0, Z);
  }
  const Pe = () => y.dispatch("start_recording"), lt = () => y.dispatch("stop_recording"), Ot = () => y.dispatch("tick"), qt = ({ detail: q }) => y.dispatch("error", q), Hr = ({ detail: q }) => y.dispatch("warning", q);
  return n.$$set = (q) => {
    "elem_id" in q && t(1, r = q.elem_id), "elem_classes" in q && t(2, a = q.elem_classes), "visible" in q && t(3, i = q.visible), "button_labels" in q && t(4, l = q.button_labels), "label" in q && t(5, s = q.label), "root" in q && t(28, o = q.root), "show_label" in q && t(6, u = q.show_label), "loading_status" in q && t(7, c = q.loading_status), "height" in q && t(8, d = q.height), "width" in q && t(9, h = q.width), "server" in q && t(10, p = q.server), "container" in q && t(11, _ = q.container), "scale" in q && t(12, b = q.scale), "min_width" in q && t(13, D = q.min_width), "gradio" in q && t(14, y = q.gradio), "rtc_configuration" in q && t(15, k = q.rtc_configuration), "time_limit" in q && t(16, w = q.time_limit), "modality" in q && t(17, E = q.modality), "mode" in q && t(18, S = q.mode), "rtp_params" in q && t(19, T = q.rtp_params), "track_constraints" in q && t(20, C = q.track_constraints), "icon" in q && t(21, F = q.icon), "icon_button_color" in q && t(22, B = q.icon_button_color), "pulse_color" in q && t(23, I = q.pulse_color), "icon_radius" in q && t(24, L = q.icon_radius), "variant" in q && t(25, P = q.variant), "value" in q && t(0, Z = q.value);
  }, [
    Z,
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
    E,
    S,
    T,
    C,
    F,
    B,
    I,
    L,
    P,
    O,
    se,
    o,
    K,
    he,
    ue,
    Ae,
    ye,
    $,
    de,
    ce,
    Ce,
    V,
    j,
    ge,
    ke,
    Te,
    ze,
    Le,
    je,
    ft,
    We,
    qe,
    Pe,
    lt,
    Ot,
    qt,
    Hr
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
        elem_id: 1,
        elem_classes: 2,
        visible: 3,
        button_labels: 4,
        label: 5,
        root: 28,
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
        icon_radius: 24,
        variant: 25,
        value: 0
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Be();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Be();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(e) {
    this.$$set({ visible: e }), Be();
  }
  get button_labels() {
    return this.$$.ctx[4];
  }
  set button_labels(e) {
    this.$$set({ button_labels: e }), Be();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Be();
  }
  get root() {
    return this.$$.ctx[28];
  }
  set root(e) {
    this.$$set({ root: e }), Be();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Be();
  }
  get loading_status() {
    return this.$$.ctx[7];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Be();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Be();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Be();
  }
  get server() {
    return this.$$.ctx[10];
  }
  set server(e) {
    this.$$set({ server: e }), Be();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Be();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Be();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Be();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Be();
  }
  get rtc_configuration() {
    return this.$$.ctx[15];
  }
  set rtc_configuration(e) {
    this.$$set({ rtc_configuration: e }), Be();
  }
  get time_limit() {
    return this.$$.ctx[16];
  }
  set time_limit(e) {
    this.$$set({ time_limit: e }), Be();
  }
  get modality() {
    return this.$$.ctx[17];
  }
  set modality(e) {
    this.$$set({ modality: e }), Be();
  }
  get mode() {
    return this.$$.ctx[18];
  }
  set mode(e) {
    this.$$set({ mode: e }), Be();
  }
  get rtp_params() {
    return this.$$.ctx[19];
  }
  set rtp_params(e) {
    this.$$set({ rtp_params: e }), Be();
  }
  get track_constraints() {
    return this.$$.ctx[20];
  }
  set track_constraints(e) {
    this.$$set({ track_constraints: e }), Be();
  }
  get icon() {
    return this.$$.ctx[21];
  }
  set icon(e) {
    this.$$set({ icon: e }), Be();
  }
  get icon_button_color() {
    return this.$$.ctx[22];
  }
  set icon_button_color(e) {
    this.$$set({ icon_button_color: e }), Be();
  }
  get pulse_color() {
    return this.$$.ctx[23];
  }
  set pulse_color(e) {
    this.$$set({ pulse_color: e }), Be();
  }
  get icon_radius() {
    return this.$$.ctx[24];
  }
  set icon_radius(e) {
    this.$$set({ icon_radius: e }), Be();
  }
  get variant() {
    return this.$$.ctx[25];
  }
  set variant(e) {
    this.$$set({ variant: e }), Be();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Be();
  }
}
export {
  fy as E,
  hy as I,
  C9 as a,
  iy as b,
  Nc as c,
  ly as d,
  ny as g,
  ry as k,
  sy as l,
  ay as p
};
