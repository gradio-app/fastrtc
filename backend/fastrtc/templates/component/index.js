var Th = Object.defineProperty;
var ko = (n) => {
  throw TypeError(n);
};
var Mh = (n, e, t) => e in n ? Th(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ze = (n, e, t) => Mh(n, typeof e != "symbol" ? e + "" : e, t), Bh = (n, e, t) => e.has(n) || ko("Cannot " + t);
var Do = (n, e, t) => e.has(n) ? ko("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var ga = (n, e, t) => (Bh(n, e, "access private method"), t);
const {
  SvelteComponent: zh,
  assign: Ih,
  children: Nh,
  claim_element: Rh,
  create_slot: Lh,
  detach: Ao,
  element: Oh,
  get_all_dirty_from_scope: qh,
  get_slot_changes: Ph,
  get_spread_update: Hh,
  init: Vh,
  insert_hydration: Uh,
  safe_not_equal: Gh,
  set_dynamic_element_data: Eo,
  set_style: ft,
  toggle_class: Yt,
  transition_in: Rc,
  transition_out: Lc,
  update_slot_base: jh
} = window.__gradio__svelte__internal;
function Wh(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = Lh(
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
    s = Ih(s, l[o]);
  return {
    c() {
      e = Oh(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = Rh(
        o,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var c = Nh(e);
      i && i.l(c), c.forEach(Ao), this.h();
    },
    h() {
      Eo(
        /*tag*/
        n[18]
      )(e, s), Yt(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), Yt(
        e,
        "padded",
        /*padding*/
        n[9]
      ), Yt(
        e,
        "flex",
        /*flex*/
        n[0]
      ), Yt(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), Yt(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), Yt(e, "hide-container", !/*explicit_call*/
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
      Uh(o, e, c), i && i.m(e, null), r = !0;
    },
    p(o, c) {
      i && i.p && (!r || c & /*$$scope*/
      2097152) && jh(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        r ? Ph(
          a,
          /*$$scope*/
          o[21],
          c,
          null
        ) : qh(
          /*$$scope*/
          o[21]
        ),
        null
      ), Eo(
        /*tag*/
        o[18]
      )(e, s = Hh(l, [
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
      ])), Yt(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), Yt(
        e,
        "padded",
        /*padding*/
        o[9]
      ), Yt(
        e,
        "flex",
        /*flex*/
        o[0]
      ), Yt(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), Yt(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), Yt(e, "hide-container", !/*explicit_call*/
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
      r || (Rc(i, o), r = !0);
    },
    o(o) {
      Lc(i, o), r = !1;
    },
    d(o) {
      o && Ao(e), i && i.d(o);
    }
  };
}
function Yh(n) {
  let e, t = (
    /*tag*/
    n[18] && Wh(n)
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
      e || (Rc(t, r), e = !0);
    },
    o(r) {
      Lc(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function Xh(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: c = "" } = e, { elem_classes: h = [] } = e, { variant: m = "solid" } = e, { border_mode: f = "base" } = e, { padding: p = !0 } = e, { type: v = "normal" } = e, { test_id: w = void 0 } = e, { explicit_call: S = !1 } = e, { container: A = !0 } = e, { visible: y = !0 } = e, { allow_overflow: b = !0 } = e, { overflow_behavior: E = "auto" } = e, { scale: x = null } = e, { min_width: T = 0 } = e, { flex: z = !1 } = e;
  y || (z = !1);
  let I = v === "fieldset" ? "fieldset" : "div";
  const B = (R) => {
    if (R !== void 0) {
      if (typeof R == "number")
        return R + "px";
      if (typeof R == "string")
        return R;
    }
  };
  return n.$$set = (R) => {
    "height" in R && t(1, i = R.height), "min_height" in R && t(2, l = R.min_height), "max_height" in R && t(3, s = R.max_height), "width" in R && t(4, o = R.width), "elem_id" in R && t(5, c = R.elem_id), "elem_classes" in R && t(6, h = R.elem_classes), "variant" in R && t(7, m = R.variant), "border_mode" in R && t(8, f = R.border_mode), "padding" in R && t(9, p = R.padding), "type" in R && t(20, v = R.type), "test_id" in R && t(10, w = R.test_id), "explicit_call" in R && t(11, S = R.explicit_call), "container" in R && t(12, A = R.container), "visible" in R && t(13, y = R.visible), "allow_overflow" in R && t(14, b = R.allow_overflow), "overflow_behavior" in R && t(15, E = R.overflow_behavior), "scale" in R && t(16, x = R.scale), "min_width" in R && t(17, T = R.min_width), "flex" in R && t(0, z = R.flex), "$$scope" in R && t(21, a = R.$$scope);
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
    y,
    b,
    E,
    x,
    T,
    I,
    B,
    v,
    a,
    r
  ];
}
class Zh extends zh {
  constructor(e) {
    super(), Vh(this, e, Xh, Yh, Gh, {
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
const Kh = [
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
Kh.reduce(
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
  SvelteComponent: Qh,
  append_hydration: Jh,
  attr: i0,
  children: Fo,
  claim_svg_element: xo,
  detach: Gi,
  init: $h,
  insert_hydration: ef,
  noop: ji,
  safe_not_equal: tf,
  svg_element: Co
} = window.__gradio__svelte__internal;
function rf(n) {
  let e, t;
  return {
    c() {
      e = Co("svg"), t = Co("circle"), this.h();
    },
    l(r) {
      e = xo(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var a = Fo(e);
      t = xo(a, "circle", { cx: !0, cy: !0, r: !0 }), Fo(t).forEach(Gi), a.forEach(Gi), this.h();
    },
    h() {
      i0(t, "cx", "12"), i0(t, "cy", "12"), i0(t, "r", "10"), i0(e, "xmlns", "http://www.w3.org/2000/svg"), i0(e, "width", "100%"), i0(e, "height", "100%"), i0(e, "viewBox", "0 0 24 24"), i0(e, "stroke-width", "1.5"), i0(e, "stroke-linecap", "round"), i0(e, "stroke-linejoin", "round"), i0(e, "class", "feather feather-circle");
    },
    m(r, a) {
      ef(r, e, a), Jh(e, t);
    },
    p: ji,
    i: ji,
    o: ji,
    d(r) {
      r && Gi(e);
    }
  };
}
class bi extends Qh {
  constructor(e) {
    super(), $h(this, e, null, rf, tf, {});
  }
}
const {
  SvelteComponent: nf,
  append_hydration: Wi,
  attr: l0,
  children: _a,
  claim_svg_element: va,
  detach: yn,
  init: af,
  insert_hydration: lf,
  noop: Yi,
  safe_not_equal: sf,
  set_style: y0,
  svg_element: ba
} = window.__gradio__svelte__internal;
function of(n) {
  let e, t, r, a;
  return {
    c() {
      e = ba("svg"), t = ba("g"), r = ba("path"), a = ba("path"), this.h();
    },
    l(i) {
      e = va(i, "svg", {
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
      var l = _a(e);
      t = va(l, "g", { transform: !0 });
      var s = _a(t);
      r = va(s, "path", { d: !0, style: !0 }), _a(r).forEach(yn), s.forEach(yn), a = va(l, "path", { d: !0, style: !0 }), _a(a).forEach(yn), l.forEach(yn), this.h();
    },
    h() {
      l0(r, "d", "M18,6L6.087,17.913"), y0(r, "fill", "none"), y0(r, "fill-rule", "nonzero"), y0(r, "stroke-width", "2px"), l0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), l0(a, "d", "M4.364,4.364L19.636,19.636"), y0(a, "fill", "none"), y0(a, "fill-rule", "nonzero"), y0(a, "stroke-width", "2px"), l0(e, "width", "100%"), l0(e, "height", "100%"), l0(e, "viewBox", "0 0 24 24"), l0(e, "version", "1.1"), l0(e, "xmlns", "http://www.w3.org/2000/svg"), l0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), l0(e, "xml:space", "preserve"), l0(e, "stroke", "currentColor"), y0(e, "fill-rule", "evenodd"), y0(e, "clip-rule", "evenodd"), y0(e, "stroke-linecap", "round"), y0(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      lf(i, e, l), Wi(e, t), Wi(t, r), Wi(e, a);
    },
    p: Yi,
    i: Yi,
    o: Yi,
    d(i) {
      i && yn(e);
    }
  };
}
class uf extends nf {
  constructor(e) {
    super(), af(this, e, null, of, sf, {});
  }
}
const {
  SvelteComponent: cf,
  append_hydration: hf,
  attr: Zr,
  children: To,
  claim_svg_element: Mo,
  detach: Xi,
  init: ff,
  insert_hydration: df,
  noop: Zi,
  safe_not_equal: mf,
  svg_element: Bo
} = window.__gradio__svelte__internal;
function pf(n) {
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
      t = Mo(a, "path", { d: !0 }), To(t).forEach(Xi), a.forEach(Xi), this.h();
    },
    h() {
      Zr(t, "d", "M5 8l4 4 4-4z"), Zr(e, "class", "dropdown-arrow svelte-145leq6"), Zr(e, "xmlns", "http://www.w3.org/2000/svg"), Zr(e, "width", "100%"), Zr(e, "height", "100%"), Zr(e, "viewBox", "0 0 18 18");
    },
    m(r, a) {
      df(r, e, a), hf(e, t);
    },
    p: Zi,
    i: Zi,
    o: Zi,
    d(r) {
      r && Xi(e);
    }
  };
}
class yi extends cf {
  constructor(e) {
    super(), ff(this, e, null, pf, mf, {});
  }
}
const {
  SvelteComponent: gf,
  append_hydration: _f,
  attr: ya,
  children: zo,
  claim_svg_element: Io,
  detach: Ki,
  init: vf,
  insert_hydration: bf,
  noop: Qi,
  safe_not_equal: yf,
  svg_element: No
} = window.__gradio__svelte__internal;
function wf(n) {
  let e, t;
  return {
    c() {
      e = No("svg"), t = No("path"), this.h();
    },
    l(r) {
      e = Io(r, "svg", { xmlns: !0, viewBox: !0 });
      var a = zo(e);
      t = Io(a, "path", { fill: !0, d: !0 }), zo(t).forEach(Ki), a.forEach(Ki), this.h();
    },
    h() {
      ya(t, "fill", "currentColor"), ya(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), ya(e, "xmlns", "http://www.w3.org/2000/svg"), ya(e, "viewBox", "0 0 24 24");
    },
    m(r, a) {
      bf(r, e, a), _f(e, t);
    },
    p: Qi,
    i: Qi,
    o: Qi,
    d(r) {
      r && Ki(e);
    }
  };
}
class kf extends gf {
  constructor(e) {
    super(), vf(this, e, null, wf, yf, {});
  }
}
const {
  SvelteComponent: Df,
  append_hydration: wa,
  attr: et,
  children: wn,
  claim_svg_element: kn,
  detach: Kr,
  init: Af,
  insert_hydration: Ef,
  noop: Ji,
  safe_not_equal: Sf,
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
      Ef(l, e, s), wa(e, t), wa(e, r), wa(e, a), wa(e, i);
    },
    p: Ji,
    i: Ji,
    o: Ji,
    d(l) {
      l && Kr(e);
    }
  };
}
class Ja extends Df {
  constructor(e) {
    super(), Af(this, e, null, Ff, Sf, {});
  }
}
const {
  SvelteComponent: xf,
  append_hydration: $i,
  attr: dt,
  children: ka,
  claim_svg_element: Da,
  detach: An,
  init: Cf,
  insert_hydration: Tf,
  noop: el,
  safe_not_equal: Mf,
  svg_element: Aa
} = window.__gradio__svelte__internal;
function Bf(n) {
  let e, t, r, a;
  return {
    c() {
      e = Aa("svg"), t = Aa("path"), r = Aa("circle"), a = Aa("circle"), this.h();
    },
    l(i) {
      e = Da(i, "svg", {
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
      var l = ka(e);
      t = Da(l, "path", { d: !0 }), ka(t).forEach(An), r = Da(l, "circle", { cx: !0, cy: !0, r: !0 }), ka(r).forEach(An), a = Da(l, "circle", { cx: !0, cy: !0, r: !0 }), ka(a).forEach(An), l.forEach(An), this.h();
    },
    h() {
      dt(t, "d", "M9 18V5l12-2v13"), dt(r, "cx", "6"), dt(r, "cy", "18"), dt(r, "r", "3"), dt(a, "cx", "18"), dt(a, "cy", "16"), dt(a, "r", "3"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "fill", "none"), dt(e, "stroke", "currentColor"), dt(e, "stroke-width", "1.5"), dt(e, "stroke-linecap", "round"), dt(e, "stroke-linejoin", "round"), dt(e, "class", "feather feather-music");
    },
    m(i, l) {
      Tf(i, e, l), $i(e, t), $i(e, r), $i(e, a);
    },
    p: el,
    i: el,
    o: el,
    d(i) {
      i && An(e);
    }
  };
}
class Ds extends xf {
  constructor(e) {
    super(), Cf(this, e, null, Bf, Mf, {});
  }
}
const {
  SvelteComponent: zf,
  append_hydration: If,
  attr: lt,
  children: Ro,
  claim_svg_element: Lo,
  detach: tl,
  init: Nf,
  insert_hydration: Rf,
  noop: Oo,
  safe_not_equal: Lf,
  svg_element: qo
} = window.__gradio__svelte__internal;
function Of(n) {
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
      }), Ro(t).forEach(tl), i.forEach(tl), this.h();
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
      Rf(a, e, i), If(e, t);
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
      a && tl(e);
    }
  };
}
function qf(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
class Pf extends zf {
  constructor(e) {
    super(), Nf(this, e, qf, Of, Lf, { fill: 0, stroke_width: 1 });
  }
}
const {
  SvelteComponent: Hf,
  append_hydration: rl,
  attr: wt,
  children: Ea,
  claim_svg_element: Sa,
  detach: En,
  init: Vf,
  insert_hydration: Uf,
  noop: nl,
  safe_not_equal: Gf,
  svg_element: Fa
} = window.__gradio__svelte__internal;
function jf(n) {
  let e, t, r, a;
  return {
    c() {
      e = Fa("svg"), t = Fa("path"), r = Fa("polyline"), a = Fa("line"), this.h();
    },
    l(i) {
      e = Sa(i, "svg", {
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
      var l = Ea(e);
      t = Sa(l, "path", { d: !0 }), Ea(t).forEach(En), r = Sa(l, "polyline", { points: !0 }), Ea(r).forEach(En), a = Sa(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Ea(a).forEach(En), l.forEach(En), this.h();
    },
    h() {
      wt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), wt(r, "points", "17 8 12 3 7 8"), wt(a, "x1", "12"), wt(a, "y1", "3"), wt(a, "x2", "12"), wt(a, "y2", "15"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "width", "90%"), wt(e, "height", "90%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "fill", "none"), wt(e, "stroke", "currentColor"), wt(e, "stroke-width", "2"), wt(e, "stroke-linecap", "round"), wt(e, "stroke-linejoin", "round"), wt(e, "class", "feather feather-upload");
    },
    m(i, l) {
      Uf(i, e, l), rl(e, t), rl(e, r), rl(e, a);
    },
    p: nl,
    i: nl,
    o: nl,
    d(i) {
      i && En(e);
    }
  };
}
class Wf extends Hf {
  constructor(e) {
    super(), Vf(this, e, null, jf, Gf, {});
  }
}
const {
  SvelteComponent: Yf,
  append_hydration: Po,
  attr: mt,
  children: al,
  claim_svg_element: il,
  detach: xa,
  init: Xf,
  insert_hydration: Zf,
  noop: ll,
  safe_not_equal: Kf,
  svg_element: sl
} = window.__gradio__svelte__internal;
function Qf(n) {
  let e, t, r;
  return {
    c() {
      e = sl("svg"), t = sl("polygon"), r = sl("rect"), this.h();
    },
    l(a) {
      e = il(a, "svg", {
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
      var i = al(e);
      t = il(i, "polygon", { points: !0 }), al(t).forEach(xa), r = il(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), al(r).forEach(xa), i.forEach(xa), this.h();
    },
    h() {
      mt(t, "points", "23 7 16 12 23 17 23 7"), mt(r, "x", "1"), mt(r, "y", "5"), mt(r, "width", "15"), mt(r, "height", "14"), mt(r, "rx", "2"), mt(r, "ry", "2"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "fill", "none"), mt(e, "stroke", "currentColor"), mt(e, "stroke-width", "1.5"), mt(e, "stroke-linecap", "round"), mt(e, "stroke-linejoin", "round"), mt(e, "class", "feather feather-video");
    },
    m(a, i) {
      Zf(a, e, i), Po(e, t), Po(e, r);
    },
    p: ll,
    i: ll,
    o: ll,
    d(a) {
      a && xa(e);
    }
  };
}
class As extends Yf {
  constructor(e) {
    super(), Xf(this, e, null, Qf, Kf, {});
  }
}
const {
  SvelteComponent: Jf,
  append_hydration: Sn,
  attr: st,
  children: Fn,
  claim_svg_element: xn,
  claim_text: $f,
  detach: Qr,
  init: e2,
  insert_hydration: t2,
  noop: ol,
  safe_not_equal: r2,
  svg_element: Cn,
  text: n2
} = window.__gradio__svelte__internal;
function a2(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = Cn("svg"), t = Cn("title"), r = n2("High volume"), a = Cn("path"), i = Cn("path"), l = Cn("path"), this.h();
    },
    l(s) {
      e = xn(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        stroke: !0,
        xmlns: !0,
        color: !0
      });
      var o = Fn(e);
      t = xn(o, "title", {});
      var c = Fn(t);
      r = $f(c, "High volume"), c.forEach(Qr), a = xn(o, "path", { d: !0, "stroke-width": !0 }), Fn(a).forEach(Qr), i = xn(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Fn(i).forEach(Qr), l = xn(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Fn(l).forEach(Qr), o.forEach(Qr), this.h();
    },
    h() {
      st(a, "d", "M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"), st(a, "stroke-width", "1.5"), st(i, "d", "M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5"), st(i, "stroke-width", "1.5"), st(i, "stroke-linecap", "round"), st(i, "stroke-linejoin", "round"), st(l, "d", "M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5"), st(l, "stroke-width", "1.5"), st(l, "stroke-linecap", "round"), st(l, "stroke-linejoin", "round"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "stroke-width", "1.5"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "color", "currentColor");
    },
    m(s, o) {
      t2(s, e, o), Sn(e, t), Sn(t, r), Sn(e, a), Sn(e, i), Sn(e, l);
    },
    p: ol,
    i: ol,
    o: ol,
    d(s) {
      s && Qr(e);
    }
  };
}
class i2 extends Jf {
  constructor(e) {
    super(), e2(this, e, null, a2, r2, {});
  }
}
const {
  SvelteComponent: l2,
  append_hydration: ar,
  attr: nt,
  children: ir,
  claim_svg_element: lr,
  claim_text: s2,
  detach: q0,
  init: o2,
  insert_hydration: u2,
  noop: ul,
  safe_not_equal: c2,
  svg_element: sr,
  text: h2
} = window.__gradio__svelte__internal;
function f2(n) {
  let e, t, r, a, i, l, s, o, c;
  return {
    c() {
      e = sr("svg"), t = sr("title"), r = h2("Muted volume"), a = sr("g"), i = sr("path"), l = sr("path"), s = sr("defs"), o = sr("clipPath"), c = sr("rect"), this.h();
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
      r = s2(f, "Muted volume"), f.forEach(q0), a = lr(m, "g", { "clip-path": !0 });
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
      u2(h, e, m), ar(e, t), ar(t, r), ar(e, a), ar(a, i), ar(a, l), ar(e, s), ar(s, o), ar(o, c);
    },
    p: ul,
    i: ul,
    o: ul,
    d(h) {
      h && q0(e);
    }
  };
}
class d2 extends l2 {
  constructor(e) {
    super(), o2(this, e, null, f2, c2, {});
  }
}
const {
  SvelteComponent: m2,
  append_hydration: Ho,
  attr: or,
  children: cl,
  claim_svg_element: hl,
  detach: Ca,
  init: p2,
  insert_hydration: g2,
  noop: fl,
  safe_not_equal: _2,
  svg_element: dl
} = window.__gradio__svelte__internal;
function v2(n) {
  let e, t, r;
  return {
    c() {
      e = dl("svg"), t = dl("path"), r = dl("path"), this.h();
    },
    l(a) {
      e = hl(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var i = cl(e);
      t = hl(i, "path", { fill: !0, d: !0 }), cl(t).forEach(Ca), r = hl(i, "path", { fill: !0, d: !0 }), cl(r).forEach(Ca), i.forEach(Ca), this.h();
    },
    h() {
      or(t, "fill", "currentColor"), or(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), or(r, "fill", "currentColor"), or(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), or(e, "xmlns", "http://www.w3.org/2000/svg"), or(e, "width", "100%"), or(e, "height", "100%"), or(e, "viewBox", "0 0 24 24");
    },
    m(a, i) {
      g2(a, e, i), Ho(e, t), Ho(e, r);
    },
    p: fl,
    i: fl,
    o: fl,
    d(a) {
      a && Ca(e);
    }
  };
}
let Vo = class extends m2 {
  constructor(e) {
    super(), p2(this, e, null, v2, _2, {});
  }
};
const {
  SvelteComponent: b2,
  append_hydration: Uo,
  attr: ot,
  children: ml,
  claim_svg_element: pl,
  detach: Ta,
  init: y2,
  insert_hydration: w2,
  noop: gl,
  safe_not_equal: k2,
  svg_element: _l
} = window.__gradio__svelte__internal;
function D2(n) {
  let e, t, r;
  return {
    c() {
      e = _l("svg"), t = _l("circle"), r = _l("animateTransform"), this.h();
    },
    l(a) {
      e = pl(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0
      });
      var i = ml(e);
      t = pl(i, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0
      });
      var l = ml(t);
      r = pl(l, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        repeatCount: !0
      }), ml(r).forEach(Ta), l.forEach(Ta), i.forEach(Ta), this.h();
    },
    h() {
      ot(r, "attributeName", "transform"), ot(r, "type", "rotate"), ot(r, "from", "0 25 25"), ot(r, "to", "360 25 25"), ot(r, "repeatCount", "indefinite"), ot(t, "cx", "25"), ot(t, "cy", "25"), ot(t, "r", "20"), ot(t, "fill", "none"), ot(t, "stroke-width", "3.0"), ot(t, "stroke-linecap", "round"), ot(t, "stroke-dasharray", "94.2477796076938 94.2477796076938"), ot(t, "stroke-dashoffset", "0"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 50 50"), ot(e, "class", "svelte-pb9pol");
    },
    m(a, i) {
      w2(a, e, i), Uo(e, t), Uo(t, r);
    },
    p: gl,
    i: gl,
    o: gl,
    d(a) {
      a && Ta(e);
    }
  };
}
class Oc extends b2 {
  constructor(e) {
    super(), y2(this, e, null, D2, k2, {});
  }
}
class Es {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Es(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Ss {
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
    return new Ss(t, Es.range(this, e));
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
var A2 = function(e, t) {
  return e.indexOf(t) !== -1;
}, E2 = function(e, t) {
  return e === void 0 ? t : e;
}, S2 = /([A-Z])/g, F2 = function(e) {
  return e.replace(S2, "-$1").toLowerCase();
}, x2 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, C2 = /[&><"']/g;
function T2(n) {
  return String(n).replace(C2, (e) => x2[e]);
}
var qc = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, M2 = function(e) {
  var t = qc(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, B2 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, z2 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ee = {
  contains: A2,
  deflt: E2,
  escape: T2,
  hyphenate: F2,
  getBaseElem: qc,
  isCharacterBox: M2,
  protocolFromUrl: z2
};
class ur {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return D0[I2[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return D0[N2[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return D0[R2[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return D0[L2[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return D0[O2[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return D0[q2[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Fs = 0, $a = 1, cn = 2, Z0 = 3, Yn = 4, Qt = 5, dn = 6, St = 7, D0 = [new ur(Fs, 0, !1), new ur($a, 0, !0), new ur(cn, 1, !1), new ur(Z0, 1, !0), new ur(Yn, 2, !1), new ur(Qt, 2, !0), new ur(dn, 3, !1), new ur(St, 3, !0)], I2 = [Yn, Qt, Yn, Qt, dn, St, dn, St], N2 = [Qt, Qt, Qt, Qt, St, St, St, St], R2 = [cn, Z0, Yn, Qt, dn, St, dn, St], L2 = [Z0, Z0, Qt, Qt, St, St, St, St], O2 = [$a, $a, Z0, Z0, Qt, Qt, St, St], q2 = [Fs, $a, cn, Z0, cn, Z0, cn, Z0], re = {
  DISPLAY: D0[Fs],
  TEXT: D0[cn],
  SCRIPT: D0[Yn],
  SCRIPTSCRIPT: D0[dn]
}, ts = [{
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
function P2(n) {
  for (var e = 0; e < ts.length; e++)
    for (var t = ts[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var Za = [];
ts.forEach((n) => n.blocks.forEach((e) => Za.push(...e)));
function H2(n) {
  for (var e = 0; e < Za.length; e += 2)
    if (n >= Za[e] && n <= Za[e + 1])
      return !0;
  return !1;
}
var Jr = 80, V2 = function(e, t) {
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
}, U2 = function(e, t) {
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
}, G2 = function(e, t) {
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
}, j2 = function(e, t) {
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
}, W2 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Y2 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, X2 = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Z2 = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = V2(t, Jr);
      break;
    case "sqrtSize1":
      a = U2(t, Jr);
      break;
    case "sqrtSize2":
      a = G2(t, Jr);
      break;
    case "sqrtSize3":
      a = j2(t, Jr);
      break;
    case "sqrtSize4":
      a = W2(t, Jr);
      break;
    case "sqrtTall":
      a = X2(t, Jr, r);
  }
  return a;
}, K2 = function(e, t) {
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
}, Q2 = function(e, t) {
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
function xs(n, e, t) {
  if (!G0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = G0[e][r];
  if (!a && n[0] in jo && (r = jo[n[0]].charCodeAt(0), a = G0[e][r]), !a && t === "text" && H2(r) && (a = G0[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var rs = {
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
}, J2 = {
  ex: !0,
  em: !0,
  mu: !0
}, $2 = function(e) {
  return typeof e != "string" && (e = e.unit), e in rs || e in J2 || e === "ex";
}, qe = function(e, t) {
  var r;
  if (e.unit in rs)
    r = rs[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
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
}, Pc = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Hc = function(e) {
  var t = document.createElement(e);
  t.className = _r(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Vc = function(e) {
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
class wi {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Pc.call(this, e, r, a), this.children = t || [];
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
    return Hc.call(this, "span");
  }
  toMarkup() {
    return Vc.call(this, "span");
  }
}
class Uc {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Pc.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    return Hc.call(this, "a");
  }
  toMarkup() {
    return Vc.call(this, "a");
  }
}
class ed {
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
var td = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class B0 {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var c = P2(this.text.charCodeAt(0));
    c && this.classes.push(c + "_fallback"), /[îïíì]/.test(this.text) && (this.text = td[this.text]);
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
  if (n instanceof B0)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function rd(n) {
  if (n instanceof wi)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var nd = {
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
var d = "math", O = "text", g = "main", k = "ams", Re = "accent-token", X = "bin", xt = "close", pn = "inner", $ = "mathord", rt = "op-token", jt = "open", ki = "punct", D = "rel", tr = "spacing", F = "textord";
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
u(d, g, ki, ".", "\\ldotp");
u(d, g, ki, "⋅", "\\cdotp");
u(d, g, F, "#", "\\#");
u(O, g, F, "#", "\\#");
u(d, g, F, "&", "\\&");
u(O, g, F, "&", "\\&");
u(d, g, F, "ℵ", "\\aleph", !0);
u(d, g, F, "∀", "\\forall", !0);
u(d, g, F, "ℏ", "\\hbar", !0);
u(d, g, F, "∃", "\\exists", !0);
u(d, g, F, "∇", "\\nabla", !0);
u(d, g, F, "♭", "\\flat", !0);
u(d, g, F, "ℓ", "\\ell", !0);
u(d, g, F, "♮", "\\natural", !0);
u(d, g, F, "♣", "\\clubsuit", !0);
u(d, g, F, "℘", "\\wp", !0);
u(d, g, F, "♯", "\\sharp", !0);
u(d, g, F, "♢", "\\diamondsuit", !0);
u(d, g, F, "ℜ", "\\Re", !0);
u(d, g, F, "♡", "\\heartsuit", !0);
u(d, g, F, "ℑ", "\\Im", !0);
u(d, g, F, "♠", "\\spadesuit", !0);
u(d, g, F, "§", "\\S", !0);
u(O, g, F, "§", "\\S");
u(d, g, F, "¶", "\\P", !0);
u(O, g, F, "¶", "\\P");
u(d, g, F, "†", "\\dag");
u(O, g, F, "†", "\\dag");
u(O, g, F, "†", "\\textdagger");
u(d, g, F, "‡", "\\ddag");
u(O, g, F, "‡", "\\ddag");
u(O, g, F, "‡", "\\textdaggerdbl");
u(d, g, xt, "⎱", "\\rmoustache", !0);
u(d, g, jt, "⎰", "\\lmoustache", !0);
u(d, g, xt, "⟯", "\\rgroup", !0);
u(d, g, jt, "⟮", "\\lgroup", !0);
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
u(d, k, F, "ℏ", "\\hslash");
u(d, k, F, "▽", "\\triangledown");
u(d, k, F, "◊", "\\lozenge");
u(d, k, F, "Ⓢ", "\\circledS");
u(d, k, F, "®", "\\circledR");
u(O, k, F, "®", "\\circledR");
u(d, k, F, "∡", "\\measuredangle", !0);
u(d, k, F, "∄", "\\nexists");
u(d, k, F, "℧", "\\mho");
u(d, k, F, "Ⅎ", "\\Finv", !0);
u(d, k, F, "⅁", "\\Game", !0);
u(d, k, F, "‵", "\\backprime");
u(d, k, F, "▲", "\\blacktriangle");
u(d, k, F, "▼", "\\blacktriangledown");
u(d, k, F, "■", "\\blacksquare");
u(d, k, F, "⧫", "\\blacklozenge");
u(d, k, F, "★", "\\bigstar");
u(d, k, F, "∢", "\\sphericalangle", !0);
u(d, k, F, "∁", "\\complement", !0);
u(d, k, F, "ð", "\\eth", !0);
u(O, g, F, "ð", "ð");
u(d, k, F, "╱", "\\diagup");
u(d, k, F, "╲", "\\diagdown");
u(d, k, F, "□", "\\square");
u(d, k, F, "□", "\\Box");
u(d, k, F, "◊", "\\Diamond");
u(d, k, F, "¥", "\\yen", !0);
u(O, k, F, "¥", "\\yen", !0);
u(d, k, F, "✓", "\\checkmark", !0);
u(O, k, F, "✓", "\\checkmark");
u(d, k, F, "ℶ", "\\beth", !0);
u(d, k, F, "ℸ", "\\daleth", !0);
u(d, k, F, "ℷ", "\\gimel", !0);
u(d, k, F, "ϝ", "\\digamma", !0);
u(d, k, F, "ϰ", "\\varkappa");
u(d, k, jt, "┌", "\\@ulcorner", !0);
u(d, k, xt, "┐", "\\@urcorner", !0);
u(d, k, jt, "└", "\\@llcorner", !0);
u(d, k, xt, "┘", "\\@lrcorner", !0);
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
u(d, g, F, "‘", "`");
u(d, g, F, "$", "\\$");
u(O, g, F, "$", "\\$");
u(O, g, F, "$", "\\textdollar");
u(d, g, F, "%", "\\%");
u(O, g, F, "%", "\\%");
u(d, g, F, "_", "\\_");
u(O, g, F, "_", "\\_");
u(O, g, F, "_", "\\textunderscore");
u(d, g, F, "∠", "\\angle", !0);
u(d, g, F, "∞", "\\infty", !0);
u(d, g, F, "′", "\\prime");
u(d, g, F, "△", "\\triangle");
u(d, g, F, "Γ", "\\Gamma", !0);
u(d, g, F, "Δ", "\\Delta", !0);
u(d, g, F, "Θ", "\\Theta", !0);
u(d, g, F, "Λ", "\\Lambda", !0);
u(d, g, F, "Ξ", "\\Xi", !0);
u(d, g, F, "Π", "\\Pi", !0);
u(d, g, F, "Σ", "\\Sigma", !0);
u(d, g, F, "Υ", "\\Upsilon", !0);
u(d, g, F, "Φ", "\\Phi", !0);
u(d, g, F, "Ψ", "\\Psi", !0);
u(d, g, F, "Ω", "\\Omega", !0);
u(d, g, F, "A", "Α");
u(d, g, F, "B", "Β");
u(d, g, F, "E", "Ε");
u(d, g, F, "Z", "Ζ");
u(d, g, F, "H", "Η");
u(d, g, F, "I", "Ι");
u(d, g, F, "K", "Κ");
u(d, g, F, "M", "Μ");
u(d, g, F, "N", "Ν");
u(d, g, F, "O", "Ο");
u(d, g, F, "P", "Ρ");
u(d, g, F, "T", "Τ");
u(d, g, F, "X", "Χ");
u(d, g, F, "¬", "\\neg", !0);
u(d, g, F, "¬", "\\lnot");
u(d, g, F, "⊤", "\\top");
u(d, g, F, "⊥", "\\bot");
u(d, g, F, "∅", "\\emptyset");
u(d, k, F, "∅", "\\varnothing");
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
u(d, g, F, "√", "\\surd");
u(d, g, jt, "⟨", "\\langle", !0);
u(d, g, jt, "∣", "\\lvert");
u(d, g, jt, "∥", "\\lVert");
u(d, g, xt, "?", "?");
u(d, g, xt, "!", "!");
u(d, g, xt, "⟩", "\\rangle", !0);
u(d, g, xt, "∣", "\\rvert");
u(d, g, xt, "∥", "\\rVert");
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
u(d, g, ki, ",", ",");
u(d, g, ki, ";", ";");
u(d, k, X, "⊼", "\\barwedge", !0);
u(d, k, X, "⊻", "\\veebar", !0);
u(d, g, X, "⊙", "\\odot", !0);
u(d, g, X, "⊕", "\\oplus", !0);
u(d, g, X, "⊗", "\\otimes", !0);
u(d, g, F, "∂", "\\partial", !0);
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
u(d, g, jt, "{", "\\{");
u(O, g, F, "{", "\\{");
u(O, g, F, "{", "\\textbraceleft");
u(d, g, xt, "}", "\\}");
u(O, g, F, "}", "\\}");
u(O, g, F, "}", "\\textbraceright");
u(d, g, jt, "{", "\\lbrace");
u(d, g, xt, "}", "\\rbrace");
u(d, g, jt, "[", "\\lbrack", !0);
u(O, g, F, "[", "\\lbrack", !0);
u(d, g, xt, "]", "\\rbrack", !0);
u(O, g, F, "]", "\\rbrack", !0);
u(d, g, jt, "(", "\\lparen", !0);
u(d, g, xt, ")", "\\rparen", !0);
u(O, g, F, "<", "\\textless", !0);
u(O, g, F, ">", "\\textgreater", !0);
u(d, g, jt, "⌊", "\\lfloor", !0);
u(d, g, xt, "⌋", "\\rfloor", !0);
u(d, g, jt, "⌈", "\\lceil", !0);
u(d, g, xt, "⌉", "\\rceil", !0);
u(d, g, F, "\\", "\\backslash");
u(d, g, F, "∣", "|");
u(d, g, F, "∣", "\\vert");
u(O, g, F, "|", "\\textbar", !0);
u(d, g, F, "∥", "\\|");
u(d, g, F, "∥", "\\Vert");
u(O, g, F, "∥", "\\textbardbl");
u(O, g, F, "~", "\\textasciitilde");
u(O, g, F, "\\", "\\textbackslash");
u(O, g, F, "^", "\\textasciicircum");
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
u(d, g, F, "⋮", "\\varvdots");
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
u(d, g, F, "ı", "ı");
u(d, g, F, "ȷ", "ȷ");
u(O, g, F, "ı", "\\i", !0);
u(O, g, F, "ȷ", "\\j", !0);
u(O, g, F, "ß", "\\ss", !0);
u(O, g, F, "æ", "\\ae", !0);
u(O, g, F, "œ", "\\oe", !0);
u(O, g, F, "ø", "\\o", !0);
u(O, g, F, "Æ", "\\AE", !0);
u(O, g, F, "Œ", "\\OE", !0);
u(O, g, F, "Ø", "\\O", !0);
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
var Gc = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
u(O, g, F, "–", "--", !0);
u(O, g, F, "–", "\\textendash");
u(O, g, F, "—", "---", !0);
u(O, g, F, "—", "\\textemdash");
u(O, g, F, "‘", "`", !0);
u(O, g, F, "‘", "\\textquoteleft");
u(O, g, F, "’", "'", !0);
u(O, g, F, "’", "\\textquoteright");
u(O, g, F, "“", "``", !0);
u(O, g, F, "“", "\\textquotedblleft");
u(O, g, F, "”", "''", !0);
u(O, g, F, "”", "\\textquotedblright");
u(d, g, F, "°", "\\degree", !0);
u(O, g, F, "°", "\\degree");
u(O, g, F, "°", "\\textdegree", !0);
u(d, g, F, "£", "\\pounds");
u(d, g, F, "£", "\\mathsterling", !0);
u(O, g, F, "£", "\\pounds");
u(O, g, F, "£", "\\textsterling", !0);
u(d, k, F, "✠", "\\maltese");
u(O, k, F, "✠", "\\maltese");
var Xo = '0123456789/@."';
for (var vl = 0; vl < Xo.length; vl++) {
  var Zo = Xo.charAt(vl);
  u(d, g, F, Zo, Zo);
}
var Ko = '0123456789!@*()-=+";:?/.,';
for (var bl = 0; bl < Ko.length; bl++) {
  var Qo = Ko.charAt(bl);
  u(O, g, F, Qo, Qo);
}
var ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var yl = 0; yl < ei.length; yl++) {
  var Ma = ei.charAt(yl);
  u(d, g, $, Ma, Ma), u(O, g, F, Ma, Ma);
}
u(d, k, F, "C", "ℂ");
u(O, k, F, "C", "ℂ");
u(d, k, F, "H", "ℍ");
u(O, k, F, "H", "ℍ");
u(d, k, F, "N", "ℕ");
u(O, k, F, "N", "ℕ");
u(d, k, F, "P", "ℙ");
u(O, k, F, "P", "ℙ");
u(d, k, F, "Q", "ℚ");
u(O, k, F, "Q", "ℚ");
u(d, k, F, "R", "ℝ");
u(O, k, F, "R", "ℝ");
u(d, k, F, "Z", "ℤ");
u(O, k, F, "Z", "ℤ");
u(d, g, $, "h", "ℎ");
u(O, g, $, "h", "ℎ");
var ne = "";
for (var At = 0; At < ei.length; At++) {
  var je = ei.charAt(At);
  ne = String.fromCharCode(55349, 56320 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56372 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56424 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56580 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56684 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56736 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56788 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56840 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56944 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), At < 26 && (ne = String.fromCharCode(55349, 56632 + At), u(d, g, $, je, ne), u(O, g, F, je, ne), ne = String.fromCharCode(55349, 56476 + At), u(d, g, $, je, ne), u(O, g, F, je, ne));
}
ne = "𝕜";
u(d, g, $, "k", ne);
u(O, g, F, "k", ne);
for (var Fr = 0; Fr < 10; Fr++) {
  var cr = Fr.toString();
  ne = String.fromCharCode(55349, 57294 + Fr), u(d, g, $, cr, ne), u(O, g, F, cr, ne), ne = String.fromCharCode(55349, 57314 + Fr), u(d, g, $, cr, ne), u(O, g, F, cr, ne), ne = String.fromCharCode(55349, 57324 + Fr), u(d, g, $, cr, ne), u(O, g, F, cr, ne), ne = String.fromCharCode(55349, 57334 + Fr), u(d, g, $, cr, ne), u(O, g, F, cr, ne);
}
var Jo = "ÐÞþ";
for (var wl = 0; wl < Jo.length; wl++) {
  var Ba = Jo.charAt(wl);
  u(d, g, $, Ba, Ba), u(O, g, F, Ba, Ba);
}
var za = [
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
], ad = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [za[s][2], za[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [$o[o][2], $o[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [za[0][2], za[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new J("Unsupported character: " + e);
  }
}, Di = function(e, t, r) {
  return Ke[r][e] && Ke[r][e].replace && (e = Ke[r][e].replace), {
    value: e,
    metrics: xs(e, t, r)
  };
}, h0 = function(e, t, r, a, i) {
  var l = Di(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var c = s.italic;
    (r === "text" || a && a.font === "mathit") && (c = 0), o = new B0(e, s.height, s.depth, c, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new B0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var h = a.getColor();
    h && (o.style.color = h);
  }
  return o;
}, id = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && Di(e, "Main-Bold", t).metrics ? h0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Ke[t][e].font === "main" ? h0(e, "Main-Regular", t, r, a) : h0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, ld = function(e, t, r, a, i) {
  return i !== "textord" && Di(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, sd = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, c = "", h = "";
  if (i.charCodeAt(0) === 55349 && ([c, h] = ad(i, a)), c.length > 0)
    return h0(i, c, a, t, l.concat(h));
  if (o) {
    var m, f;
    if (o === "boldsymbol") {
      var p = ld(i, a, t, l, r);
      m = p.fontName, f = [p.fontClass];
    } else s ? (m = Yc[o].fontName, f = [o]) : (m = Ia(o, t.fontWeight, t.fontShape), f = [o, t.fontWeight, t.fontShape]);
    if (Di(i, m, a).metrics)
      return h0(i, m, a, t, l.concat(f));
    if (Gc.hasOwnProperty(i) && m.slice(0, 10) === "Typewriter") {
      for (var v = [], w = 0; w < i.length; w++)
        v.push(h0(i[w], m, a, t, l.concat(f)));
      return Wc(v);
    }
  }
  if (r === "mathord")
    return h0(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var S = Ke[a][i] && Ke[a][i].font;
    if (S === "ams") {
      var A = Ia("amsrm", t.fontWeight, t.fontShape);
      return h0(i, A, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (S === "main" || !S) {
      var y = Ia("textrm", t.fontWeight, t.fontShape);
      return h0(i, y, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var b = Ia(S, t.fontWeight, t.fontShape);
      return h0(i, b, a, t, l.concat(b, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, od = (n, e) => {
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
}, ud = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof B0 && r instanceof B0 && od(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, Cs = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, Mt = function(e, t, r, a) {
  var i = new wi(e, t, r, a);
  return Cs(i), i;
}, jc = (n, e, t, r) => new wi(n, e, t, r), cd = function(e, t, r) {
  var a = Mt([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = G(a.height), a.maxFontSize = 1, a;
}, hd = function(e, t, r, a) {
  var i = new Uc(e, t, r, a);
  return Cs(i), i;
}, Wc = function(e) {
  var t = new ta(e);
  return Cs(t), t;
}, fd = function(e, t) {
  return e instanceof ta ? Mt([], [e], t) : e;
}, dd = function(e) {
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
}, md = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = dd(e), i = 0, l = 0; l < r.length; l++) {
    var s = r[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var c = Mt(["pstrut"], []);
  c.style.height = G(i);
  for (var h = [], m = a, f = a, p = a, v = 0; v < r.length; v++) {
    var w = r[v];
    if (w.type === "kern")
      p += w.size;
    else {
      var S = w.elem, A = w.wrapperClasses || [], y = w.wrapperStyle || {}, b = Mt(A, [c, S], void 0, y);
      b.style.top = G(-i - p - S.depth), w.marginLeft && (b.style.marginLeft = w.marginLeft), w.marginRight && (b.style.marginRight = w.marginRight), h.push(b), p += S.height + S.depth;
    }
    m = Math.min(m, p), f = Math.max(f, p);
  }
  var E = Mt(["vlist"], h);
  E.style.height = G(f);
  var x;
  if (m < 0) {
    var T = Mt([], []), z = Mt(["vlist"], [T]);
    z.style.height = G(-m);
    var I = Mt(["vlist-s"], [new B0("​")]);
    x = [Mt(["vlist-r"], [E, I]), Mt(["vlist-r"], [z])];
  } else
    x = [Mt(["vlist-r"], [E])];
  var B = Mt(["vlist-t"], x);
  return x.length === 2 && B.classes.push("vlist-t2"), B.height = f, B.depth = -m, B;
}, pd = (n, e) => {
  var t = Mt(["mspace"], [], e), r = qe(n, e);
  return t.style.marginRight = G(r), t;
}, Ia = function(e, t, r) {
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
}, Yc = {
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
}, Xc = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, gd = function(e, t) {
  var [r, a, i] = Xc[e], l = new Lr(r), s = new vr([l], {
    width: G(a),
    height: G(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = jc(["overlay"], [s], t);
  return o.height = i, o.style.height = G(i), o.style.width = G(a), o;
}, M = {
  fontMap: Yc,
  makeSymbol: h0,
  mathsym: id,
  makeSpan: Mt,
  makeSvgSpan: jc,
  makeLineSpan: cd,
  makeAnchor: hd,
  makeFragment: Wc,
  wrapFragment: fd,
  makeVList: md,
  makeOrd: sd,
  makeGlue: pd,
  staticSvg: gd,
  svgData: Xc,
  tryCombineChars: ud
}, Oe = {
  number: 3,
  unit: "mu"
}, xr = {
  number: 4,
  unit: "mu"
}, P0 = {
  number: 5,
  unit: "mu"
}, _d = {
  mord: {
    mop: Oe,
    mbin: xr,
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
    mord: xr,
    mop: xr,
    mopen: xr,
    minner: xr
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
    mbin: xr,
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
    mbin: xr,
    mrel: P0,
    mopen: Oe,
    mpunct: Oe,
    minner: Oe
  }
}, vd = {
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
}, Zc = {}, ti = {}, ri = {};
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
    Zc[t[o]] = s;
  e && (i && (ti[e] = i), l && (ri[e] = l));
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
var ni = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Ze = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, mn = M.makeSpan, bd = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], yd = ["rightmost", "mrel", "mclose", "mpunct"], wd = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
}, kd = {
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
    h.type === "sizing" ? c = t.havingSize(h.size) : h.type === "styling" && (c = t.havingStyle(wd[h.style]));
  }
  var m = mn([a[0] || "leftmost"], [], t), f = mn([a[1] || "rightmost"], [], t), p = r === "root";
  return eu(i, (v, w) => {
    var S = w.classes[0], A = v.classes[0];
    S === "mbin" && ee.contains(yd, A) ? w.classes[0] = "mord" : A === "mbin" && ee.contains(bd, S) && (v.classes[0] = "mord");
  }, {
    node: m
  }, f, p), eu(i, (v, w) => {
    var S = ns(w), A = ns(v), y = S && A ? v.hasClass("mtight") ? vd[S][A] : _d[S][A] : null;
    if (y)
      return M.makeGlue(y, c);
  }, {
    node: m
  }, f, p), i;
}, eu = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Kc(s);
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
}, Kc = function(e) {
  return e instanceof ta || e instanceof Uc || e instanceof wi && e.hasClass("enclosing") ? e : null;
}, Dd = function n(e, t) {
  var r = Kc(e);
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
}, ns = function(e, t) {
  return e ? (t && (e = Dd(e, t)), kd[e.classes[0]] || null) : null;
}, Xn = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return mn(t.concat(r));
}, ye = function(e, t, r) {
  if (!e)
    return mn();
  if (ti[e.type]) {
    var a = ti[e.type](e, t);
    if (r && t.size !== r.size) {
      a = mn(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
};
function Qc(n) {
  return new ta(n);
}
class f0 {
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
class Ad {
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
  MathNode: f0,
  TextNode: qn,
  SpaceNode: Ad,
  newDocumentFragment: Qc
}, t0 = function(e, t, r) {
  return Ke[t][e] && Ke[t][e].replace && e.charCodeAt(0) !== 55349 && !(Gc.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Ke[t][e].replace), new P.TextNode(e);
}, Ts = function(e) {
  return e.length === 1 ? e[0] : new P.MathNode("mrow", e);
}, Ms = function(e, t) {
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
  return xs(i, l, a) ? M.fontMap[r].variant : null;
}, Wt = function(e, t, r) {
  if (e.length === 1) {
    var a = Ce(e[0], t);
    return r && a instanceof f0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = Ce(e[s], t);
    if (o instanceof f0 && l instanceof f0) {
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
  return Ts(Wt(e, t, r));
}, Ce = function(e, t) {
  if (!e)
    return new P.MathNode("mrow");
  if (ri[e.type]) {
    var r = ri[e.type](e, t);
    return r;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
}, Ed = {
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
}, Sd = function(e) {
  var t = new P.MathNode("mo", [new P.TextNode(Ed[e.replace(/^\\/, "")])]);
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
}, xd = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Cd = function(e, t) {
  function r() {
    var s = 4e5, o = e.label.slice(1);
    if (ee.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var c = e, h = xd(c.base), m, f, p;
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
      var A = [], y = Fd[o], [b, E, x] = y, T = x / 1e3, z = b.length, I, B;
      if (z === 1) {
        var R = y[3];
        I = ["hide-tail"], B = [R];
      } else if (z === 2)
        I = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (z === 3)
        I = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + z + " children.");
      for (var L = 0; L < z; L++) {
        var W = new Lr(b[L]), se = new vr([W], {
          width: "400em",
          height: G(T),
          viewBox: "0 0 " + s + " " + x,
          preserveAspectRatio: B[L] + " slice"
        }), q = M.makeSvgSpan([I[L]], [se], t);
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
}, Td = function(e, t, r, a, i) {
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
  encloseSpan: Td,
  mathMLnode: Sd,
  svgSpan: Cd
};
function ue(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function Bs(n) {
  var e = Ai(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function Ai(n) {
  return n && (n.type === "atom" || nd.hasOwnProperty(n.type)) ? n : null;
}
var zs = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = ue(n.base, "accent"), t = r.base, n.base = t, a = rd(ye(n, e)), n.base = r) : (r = ue(n, "accent"), t = r.base);
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
}, Jc = (n, e) => {
  var t = n.isStretchy ? er.mathMLnode(n.label) : new P.MathNode("mo", [t0(n.label, n.mode)]), r = new P.MathNode("mover", [Ce(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, Md = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
Y({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = ni(e[0]), r = !Md.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: zs,
  mathmlBuilder: Jc
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
  htmlBuilder: zs,
  mathmlBuilder: Jc
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
var Na = (n) => {
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
      var a = Na(Ce(n.body, e));
      if (n.below) {
        var i = Na(Ce(n.below, e));
        r = new P.MathNode("munderover", [t, i, a]);
      } else
        r = new P.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = Na(Ce(n.below, e));
      r = new P.MathNode("munder", [t, l]);
    } else
      r = Na(), r = new P.MathNode("mover", [t, r]);
    return r;
  }
});
var Bd = M.makeSpan;
function $c(n, e) {
  var t = gt(n.body, e, !0);
  return Bd([n.mclass], t, e);
}
function e4(n, e) {
  var t, r = Wt(n.body, e);
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
  htmlBuilder: $c,
  mathmlBuilder: e4
});
var Ei = (n) => {
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
      mclass: Ei(e[0]),
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
    r !== "\\stackrel" ? l = Ei(a) : l = "mrel";
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
  htmlBuilder: $c,
  mathmlBuilder: e4
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
      mclass: Ei(e[0]),
      body: Ze(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = gt(n.body, e, !0), r = M.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = Wt(n.body, e), r = new P.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var zd = {
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
}), ru = (n) => n.type === "textord" && n.text === "@", Id = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function Nd(n, e, t) {
  var r = zd[n];
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
function Rd(n) {
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
        var c = Bs(l[o]).text, h = new Array(2);
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
              if (Id(l[p], c)) {
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
        var v = Nd(c, h, n), w = {
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
    } = n, r = ue(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = ue(a[l], "textord");
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
var t4 = (n, e) => {
  var t = gt(n.body, e.withColor(n.color), !1);
  return M.makeFragment(t);
}, r4 = (n, e) => {
  var t = Wt(n.body, e.withColor(n.color)), r = new P.MathNode("mstyle", t);
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
    } = n, r = ue(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: Ze(a)
    };
  },
  htmlBuilder: t4,
  mathmlBuilder: r4
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
    } = n, a = ue(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: t4,
  mathmlBuilder: r4
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
      size: a && ue(a, "size").value
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
var as = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, n4 = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new J("Expected a control sequence", n);
  return e;
}, Ld = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, a4 = (n, e, t, r) => {
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
    if (as[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = as[r.text]), ue(e.parseFunction(), "internal");
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
    }, t === as[t]), {
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
    } = n, r = n4(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Ld(e);
    return a4(e, r, a, t === "\\\\globallet"), {
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
    } = n, r = n4(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return a4(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var On = function(e, t, r) {
  var a = Ke.math[e] && Ke.math[e].replace, i = xs(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Is = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = M.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, i4 = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = G(i), e.height -= i, e.depth += i;
}, Od = function(e, t, r, a, i, l) {
  var s = M.makeSymbol(e, "Main-Regular", i, a), o = Is(s, t, a, l);
  return r && i4(o, a, t), o;
}, qd = function(e, t, r, a) {
  return M.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, l4 = function(e, t, r, a, i, l) {
  var s = qd(e, t, i, a), o = Is(M.makeSpan(["delimsizing", "size" + t], [s], a), re.TEXT, a, l);
  return r && i4(o, a, re.TEXT), o;
}, kl = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = M.makeSpan(["delimsizinginner", a], [M.makeSpan([], [M.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, Dl = function(e, t, r) {
  var a = G0["Size4-Regular"][e.charCodeAt(0)] ? G0["Size4-Regular"][e.charCodeAt(0)][4] : G0["Size1-Regular"][e.charCodeAt(0)][4], i = new Lr("inner", K2(e, Math.round(1e3 * t))), l = new vr([i], {
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
}, is = 8e-3, Ra = {
  type: "kern",
  size: -1 * is
}, Pd = ["|", "\\lvert", "\\rvert", "\\vert"], Hd = ["\\|", "\\lVert", "\\rVert", "\\Vert"], s4 = function(e, t, r, a, i, l) {
  var s, o, c, h, m = "", f = 0;
  s = c = h = e, o = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? c = h = "⏐" : e === "\\Uparrow" ? c = h = "‖" : e === "\\downarrow" ? s = c = "⏐" : e === "\\Downarrow" ? s = c = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", c = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", c = "‖", h = "\\Downarrow") : ee.contains(Pd, e) ? (c = "∣", m = "vert", f = 333) : ee.contains(Hd, e) ? (c = "∥", m = "doublevert", f = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", c = "⎢", h = "⎣", p = "Size4-Regular", m = "lbrack", f = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", c = "⎥", h = "⎦", p = "Size4-Regular", m = "rbrack", f = 667) : e === "\\lfloor" || e === "⌊" ? (c = s = "⎢", h = "⎣", p = "Size4-Regular", m = "lfloor", f = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", c = h = "⎢", p = "Size4-Regular", m = "lceil", f = 667) : e === "\\rfloor" || e === "⌋" ? (c = s = "⎥", h = "⎦", p = "Size4-Regular", m = "rfloor", f = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", c = h = "⎥", p = "Size4-Regular", m = "rceil", f = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", c = "⎜", h = "⎝", p = "Size4-Regular", m = "lparen", f = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", c = "⎟", h = "⎠", p = "Size4-Regular", m = "rparen", f = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", h = "⎩", c = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", h = "⎭", c = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", h = "⎩", c = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", h = "⎭", c = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", h = "⎭", c = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", h = "⎩", c = "⎪", p = "Size4-Regular");
  var v = On(s, p, i), w = v.height + v.depth, S = On(c, p, i), A = S.height + S.depth, y = On(h, p, i), b = y.height + y.depth, E = 0, x = 1;
  if (o !== null) {
    var T = On(o, p, i);
    E = T.height + T.depth, x = 2;
  }
  var z = w + b + E, I = Math.max(0, Math.ceil((t - z) / (x * A))), B = z + I * x * A, R = a.fontMetrics().axisHeight;
  r && (R *= a.sizeMultiplier);
  var L = B / 2 - R, W = [];
  if (m.length > 0) {
    var se = B - w - b, q = Math.round(B * 1e3), oe = Q2(m, Math.round(se * 1e3)), ae = new Lr(m, oe), we = (f / 1e3).toFixed(3) + "em", de = (q / 1e3).toFixed(3) + "em", ke = new vr([ae], {
      width: we,
      height: de,
      viewBox: "0 0 " + f + " " + q
    }), De = M.makeSvgSpan([], [ke], a);
    De.height = q / 1e3, De.style.width = we, De.style.height = de, W.push({
      type: "elem",
      elem: De
    });
  } else {
    if (W.push(kl(h, p, i)), W.push(Ra), o === null) {
      var te = B - w - b + 2 * is;
      W.push(Dl(c, te, a));
    } else {
      var ie = (B - w - b - E) / 2 + 2 * is;
      W.push(Dl(c, ie, a)), W.push(Ra), W.push(kl(o, p, i)), W.push(Ra), W.push(Dl(c, ie, a));
    }
    W.push(Ra), W.push(kl(s, p, i));
  }
  var me = a.havingBaseStyle(re.TEXT), Le = M.makeVList({
    positionType: "bottom",
    positionData: L,
    children: W
  }, me);
  return Is(M.makeSpan(["delimsizing", "mult"], [Le], me), re.TEXT, a, l);
}, Al = 80, El = 0.08, Sl = function(e, t, r, a, i) {
  var l = Z2(e, a, r), s = new Lr(e, l), o = new vr([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: G(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return M.makeSvgSpan(["hide-tail"], [o], i);
}, Vd = function(e, t) {
  var r = t.havingBaseSizing(), a = h4("\\surd", e * r.sizeMultiplier, c4, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, c = 0, h = 0, m;
  return a.type === "small" ? (h = 1e3 + 1e3 * l + Al, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + El) / i, c = (1 + l) / i, s = Sl("sqrtMain", o, h, l, t), s.style.minWidth = "0.853em", m = 0.833 / i) : a.type === "large" ? (h = (1e3 + Al) * Pn[a.size], c = (Pn[a.size] + l) / i, o = (Pn[a.size] + l + El) / i, s = Sl("sqrtSize" + a.size, o, h, l, t), s.style.minWidth = "1.02em", m = 1 / i) : (o = e + l + El, c = e + l, h = Math.floor(1e3 * e + l) + Al, s = Sl("sqrtTall", o, h, l, t), s.style.minWidth = "0.742em", m = 1.056), s.height = c, s.style.height = G(o), {
    span: s,
    advanceWidth: m,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, o4 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Ud = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], u4 = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Pn = [0, 1.2, 1.8, 2.4, 3], Gd = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ee.contains(o4, e) || ee.contains(u4, e))
    return l4(e, t, !1, r, a, i);
  if (ee.contains(Ud, e))
    return s4(e, Pn[t], !1, r, a, i);
  throw new J("Illegal delimiter: '" + e + "'");
}, jd = [{
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
}], Wd = [{
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
}], c4 = [{
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
}], Yd = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, h4 = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = On(e, Yd(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var c = a.havingBaseStyle(r[l].style);
      o *= c.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, f4 = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  ee.contains(u4, e) ? s = jd : ee.contains(o4, e) ? s = c4 : s = Wd;
  var o = h4(e, t, s, a);
  return o.type === "small" ? Od(e, o.style, r, a, i, l) : o.type === "large" ? l4(e, o.size, r, a, i, l) : s4(e, t, r, a, i, l);
}, Xd = function(e, t, r, a, i, l) {
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
  return f4(e, m, !0, a, i, l);
}, K0 = {
  sqrtImage: Vd,
  sizedDelim: Gd,
  sizeToMaxHeight: Pn,
  customSizedDelim: f4,
  leftRightDelim: Xd
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
}, Zd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Si(n, e) {
  var t = Ai(n);
  if (t && ee.contains(Zd, t.text))
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
    var t = Si(e[0], n);
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
    n.delim !== "." && e.push(t0(n.delim, n.mode));
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
      delim: Si(e[0], n).text,
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
    var t = Si(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = ue(r.parseFunction(), "leftright-right");
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
    var t = Wt(n.body, e);
    if (n.left !== ".") {
      var r = new P.MathNode("mo", [t0(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new P.MathNode("mo", [t0(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return Ts(t);
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
    var t = Si(e[0], n);
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
    var t = n.delim === "\\vert" || n.delim === "|" ? t0("|", "text") : t0(n.delim, n.mode), r = new P.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Ns = (n, e) => {
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
    var f = Math.floor(1e3 * m * a), p = Y2(f), v = new vr([new Lr("phase", p)], {
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
  var y;
  if (n.backgroundColor)
    y = M.makeVList({
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
    var b = /cancel|phase/.test(r) ? ["svg-align"] : [];
    y = M.makeVList({
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
          wrapperClasses: b
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (y.height = t.height, y.depth = t.depth), /cancel/.test(r) && !s ? M.makeSpan(["mord", "cancel-lap"], [y], e) : M.makeSpan(["mord"], [y], e);
}, Rs = (n, e) => {
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
    } = n, i = ue(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ns,
  mathmlBuilder: Rs
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
    } = n, i = ue(e[0], "color-token").color, l = ue(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Ns,
  mathmlBuilder: Rs
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
  htmlBuilder: Ns,
  mathmlBuilder: Rs
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
var d4 = {};
function z0(n) {
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
    d4[t[o]] = s;
  i && (ti[e] = i), l && (ri[e] = l);
}
var Kd = {};
function _(n, e) {
  Kd[n] = e;
}
function iu(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var Fi = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new J("{" + n.envName + "} can be used only in display mode.");
};
function Ls(n) {
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
  var v = [], w = [v], S = [], A = [], y = o != null ? [] : void 0;
  function b() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function E() {
    y && (n.gullet.macros.get("\\df@tag") ? (y.push(n.subparse([new Ss("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : y.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (b(), A.push(iu(n)); ; ) {
    var x = n.parseExpression(!1, c ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), x = {
      type: "ordgroup",
      mode: n.mode,
      body: x
    }, t && (x = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [x]
    }), v.push(x);
    var T = n.fetch().text;
    if (T === "&") {
      if (m && v.length === m) {
        if (c || s)
          throw new J("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      E(), v.length === 1 && x.type === "styling" && x.body[0].body.length === 0 && (w.length > 1 || !h) && w.pop(), A.length < w.length + 1 && A.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var z = void 0;
      n.gullet.future().text !== " " && (z = n.parseSizeGroup(!0)), S.push(z ? z.value : null), E(), A.push(iu(n)), v = [], w.push(v), b();
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
    tags: y,
    leqno: f
  };
}
function Os(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var I0 = function(e, t) {
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
  }, t) : 12 * m, w = 3 * m, S = e.arraystretch * v, A = 0.7 * S, y = 0.3 * S, b = 0;
  function E(N) {
    for (var ce = 0; ce < N.length; ++ce)
      ce > 0 && (b += 0.25), c.push({
        pos: b,
        isDashed: N[ce]
      });
  }
  for (E(l[0]), r = 0; r < e.body.length; ++r) {
    var x = e.body[r], T = A, z = y;
    s < x.length && (s = x.length);
    var I = new Array(x.length);
    for (a = 0; a < x.length; ++a) {
      var B = ye(x[a], t);
      z < B.depth && (z = B.depth), T < B.height && (T = B.height), I[a] = B;
    }
    var R = e.rowGaps[r], L = 0;
    R && (L = qe(R, t), L > 0 && (L += y, z < L && (z = L), L = 0)), e.addJot && (z += w), I.height = T, I.depth = z, b += T, I.pos = b, b += z + L, o[r] = I, E(l[r + 1]);
  }
  var W = b / 2 + t.fontMetrics().axisHeight, se = e.cols || [], q = [], oe, ae, we = [];
  if (e.tags && e.tags.some((N) => N))
    for (r = 0; r < i; ++r) {
      var de = o[r], ke = de.pos - W, De = e.tags[r], te = void 0;
      De === !0 ? te = M.makeSpan(["eqn-num"], [], t) : De === !1 ? te = M.makeSpan([], [], t) : te = M.makeSpan([], gt(De, t, !0), t), te.depth = de.depth, te.height = de.height, we.push({
        type: "elem",
        elem: te,
        shift: ke
      });
    }
  for (
    a = 0, ae = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || ae < se.length;
    ++a, ++ae
  ) {
    for (var ie = se[ae] || {}, me = !0; ie.type === "separator"; ) {
      if (me || (oe = M.makeSpan(["arraycolsep"], []), oe.style.width = G(t.fontMetrics().doubleRuleSep), q.push(oe)), ie.separator === "|" || ie.separator === ":") {
        var Le = ie.separator === "|" ? "solid" : "dashed", H = M.makeSpan(["vertical-separator"], [], t);
        H.style.height = G(b), H.style.borderRightWidth = G(h), H.style.borderRightStyle = Le, H.style.margin = "0 " + G(-h / 2);
        var U = b - W;
        U && (H.style.verticalAlign = G(-U)), q.push(H);
      } else
        throw new J("Invalid separator type: " + ie.separator);
      ae++, ie = se[ae] || {}, me = !1;
    }
    if (!(a >= s)) {
      var ve = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (ve = ee.deflt(ie.pregap, f), ve !== 0 && (oe = M.makeSpan(["arraycolsep"], []), oe.style.width = G(ve), q.push(oe)));
      var _e = [];
      for (r = 0; r < i; ++r) {
        var Se = o[r], Be = Se[a];
        if (Be) {
          var Ie = Se.pos - W;
          Be.depth = Se.depth, Be.height = Se.height, _e.push({
            type: "elem",
            elem: Be,
            shift: Ie
          });
        }
      }
      _e = M.makeVList({
        positionType: "individualShift",
        children: _e
      }, t), _e = M.makeSpan(["col-align-" + (ie.align || "c")], [_e]), q.push(_e), (a < s - 1 || e.hskipBeforeAndAfter) && (ve = ee.deflt(ie.postgap, f), ve !== 0 && (oe = M.makeSpan(["arraycolsep"], []), oe.style.width = G(ve), q.push(oe)));
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
}, Qd = {
  c: "center ",
  l: "left ",
  r: "right "
}, N0 = function(e, t) {
  for (var r = [], a = new P.MathNode("mtd", [], ["mtr-glue"]), i = new P.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], c = 0; c < s.length; c++)
      o.push(new P.MathNode("mtd", [Ce(s[c], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new P.MathNode("mtr", o));
  }
  var h = new P.MathNode("mtable", r), m = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", G(m));
  var f = "", p = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, w = "", S = !1, A = 0, y = v.length;
    v[0].type === "separator" && (f += "top ", A = 1), v[v.length - 1].type === "separator" && (f += "bottom ", y -= 1);
    for (var b = A; b < y; b++)
      v[b].type === "align" ? (p += Qd[v[b].align], S && (w += "none "), S = !0) : v[b].type === "separator" && S && (w += v[b].separator === "|" ? "solid " : "dashed ", S = !1);
    h.setAttribute("columnalign", p.trim()), /[sd]/.test(w) && h.setAttribute("columnlines", w.trim());
  }
  if (e.colSeparationType === "align") {
    for (var E = e.cols || [], x = "", T = 1; T < E.length; T++)
      x += T % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", x.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var z = "", I = e.hLinesBeforeRow;
  f += I[0].length > 0 ? "left " : "", f += I[I.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < I.length - 1; B++)
    z += I[B].length === 0 ? "none " : I[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(z) && h.setAttribute("rowlines", z.trim()), f !== "" && (h = new P.MathNode("menclose", [h]), h.setAttribute("notation", f.trim())), e.arraystretch && e.arraystretch < 1 && (h = new P.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, m4 = function(e, t) {
  e.envName.indexOf("ed") === -1 && Fi(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = yr(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : Ls(e.envName),
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
      var f = ue(t[0].body[m], "textord");
      h += f.text;
    }
    s = Number(h), o = s * 2;
  }
  var p = !o;
  l.body.forEach(function(A) {
    for (var y = 1; y < A.length; y += 2) {
      var b = ue(A[y], "styling"), E = ue(b.body[0], "ordgroup");
      E.body.unshift(c);
    }
    if (p)
      o < A.length && (o = A.length);
    else {
      var x = A.length / 2;
      if (s < x)
        throw new J("Too many math in a row: " + ("expected " + s + ", but got " + x), A[0]);
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
z0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Ai(e[0]), r = t ? [e[0]] : ue(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Bs(l), o = s.text;
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
    return yr(n.parser, i, Os(n.envName));
  },
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
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
    var i = yr(n.parser, r, Os(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
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
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
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
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Ai(e[0]), r = t ? [e[0]] : ue(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Bs(l), o = s.text;
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
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
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
    }, t = yr(n.parser, e, Os(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: m4,
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ee.contains(["gather", "gather*"], n.envName) && Fi(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Ls(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return yr(n.parser, e, "display");
  },
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: m4,
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    Fi(n);
    var e = {
      autoTag: Ls(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return yr(n.parser, e, "display");
  },
  htmlBuilder: I0,
  mathmlBuilder: N0
});
z0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return Fi(n), Rd(n.parser);
  },
  htmlBuilder: I0,
  mathmlBuilder: N0
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
var lu = d4;
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
      i += ue(a.body[l], "textord").text;
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
      var f = t.nextToken, p = ue(t.parseFunction(), "environment");
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
var p4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return ye(n.body, r);
}, g4 = (n, e) => {
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
    } = n, a = ni(e[0]), i = r;
    return i in su && (i = su[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: p4,
  mathmlBuilder: g4
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
      mclass: Ei(r),
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
  htmlBuilder: p4,
  mathmlBuilder: g4
});
var _4 = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : n === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : n === "script" ? t = re.SCRIPT : n === "scriptscript" && (t = re.SCRIPTSCRIPT), t;
}, qs = (n, e) => {
  var t = _4(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
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
    var y = e.fontMetrics().axisHeight;
    p - l.depth - (y + 0.5 * m) < v && (p += v - (p - l.depth - (y + 0.5 * m))), y - 0.5 * m - (c.height - w) < v && (w += v - (y - 0.5 * m - (c.height - w)));
    var b = -(y - 0.5 * m);
    S = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: w
      }, {
        type: "elem",
        elem: h,
        shift: b
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
  var x, T;
  return n.leftDelim == null ? x = Xn(e, ["mopen"]) : x = K0.customSizedDelim(n.leftDelim, E, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = M.makeSpan([]) : n.rightDelim == null ? T = Xn(e, ["mclose"]) : T = K0.customSizedDelim(n.rightDelim, E, !0, e.havingStyle(t), n.mode, ["mclose"]), M.makeSpan(["mord"].concat(i.sizingClasses(e)), [x, M.makeSpan(["mfrac"], [S]), T], e);
}, Ps = (n, e) => {
  var t = new P.MathNode("mfrac", [Ce(n.numer, e), Ce(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = qe(n.barSize, e);
    t.setAttribute("linethickness", G(r));
  }
  var a = _4(n.size, e.style);
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
    return Ts(l);
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
  htmlBuilder: qs,
  mathmlBuilder: Ps
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
    } = n, r = e[4], a = e[5], i = ni(e[0]), l = i.type === "atom" && i.family === "open" ? uu(i.text) : null, s = ni(e[1]), o = s.type === "atom" && s.family === "close" ? uu(s.text) : null, c = ue(e[2], "size"), h, m = null;
    c.isBlank ? h = !0 : (m = c.value, h = m.number > 0);
    var f = "auto", p = e[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var v = ue(p.body[0], "textord");
        f = ou[Number(v.text)];
      }
    } else
      p = ue(p, "textord"), f = ou[Number(p.text)];
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
  htmlBuilder: qs,
  mathmlBuilder: Ps
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
      size: ue(e[0], "size").value,
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
    } = n, a = e[0], i = B2(ue(e[1], "infix").size), l = e[2], s = i.number > 0;
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
  htmlBuilder: qs,
  mathmlBuilder: Ps
});
var v4 = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? ye(n.sup, e.havingStyle(t.sup()), e) : ye(n.sub, e.havingStyle(t.sub()), e), a = ue(n.base, "horizBrace")) : a = ue(n, "horizBrace");
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
}, Jd = (n, e) => {
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
  htmlBuilder: v4,
  mathmlBuilder: Jd
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
    } = n, r = e[1], a = ue(e[0], "url").url;
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
    return t instanceof f0 || (t = new f0("mrow", [t])), t.setAttribute("href", n.href), t;
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
    } = n, r = ue(e[0], "url").url;
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
    return new P.MathNode("mrow", Wt(n.body, e));
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
    } = n, i = ue(e[0], "raw").string, l = e[1];
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
var Fl = function(e) {
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
  if (!$2(r))
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
      for (var o = ue(t[0], "raw").string, c = o.split(","), h = 0; h < c.length; h++) {
        var m = c[h].split("=");
        if (m.length === 2) {
          var f = m[1].trim();
          switch (m[0].trim()) {
            case "alt":
              s = f;
              break;
            case "width":
              a = Fl(f);
              break;
            case "height":
              i = Fl(f);
              break;
            case "totalheight":
              l = Fl(f);
              break;
            default:
              throw new J("Invalid key: '" + m[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = ue(e[0], "url").url;
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
    var l = new ed(n.src, n.alt, i);
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
    } = n, a = ue(e[0], "size");
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
var b4 = (n, e, t, r, a, i, l) => {
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
}, y4 = ["\\smallint"], gn = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ue(n.base, "op"), a = !0) : i = ue(n, "op");
  var l = e.style, s = !1;
  l.size === re.DISPLAY.size && i.symbol && !ee.contains(y4, i.name) && (s = !0);
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
    p.length === 1 && p[0] instanceof B0 ? (o = p[0], o.classes[0] = "mop") : o = M.makeSpan(["mop"], p, e);
  } else {
    for (var v = [], w = 1; w < i.name.length; w++)
      v.push(M.mathsym(i.name[w], i.mode, e));
    o = M.makeSpan(["mop"], v, e);
  }
  var S = 0, A = 0;
  return (o instanceof B0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (S = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, A = o.italic), a ? b4(o, t, r, e, l, A, S) : (S && (o.style.position = "relative", o.style.top = G(S)), o);
}, ra = (n, e) => {
  var t;
  if (n.symbol)
    t = new f0("mo", [t0(n.name, n.mode)]), ee.contains(y4, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new f0("mo", Wt(n.body, e));
  else {
    t = new f0("mi", [new qn(n.name.slice(1))]);
    var r = new f0("mo", [t0("⁡", "text")]);
    n.parentIsSupSub ? t = new f0("mrow", [t, r]) : t = Qc([t, r]);
  }
  return t;
}, $d = {
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
    return a.length === 1 && (a = $d[a]), {
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
var em = {
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
    return r.length === 1 && (r = em[r]), {
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
var w4 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ue(n.base, "operatorname"), a = !0) : i = ue(n, "operatorname");
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
      h instanceof B0 && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = M.makeSpan(["mop"], o, e);
  } else
    l = M.makeSpan(["mop"], [], e);
  return a ? b4(l, t, r, e, e.style, 0, 0) : l;
}, tm = (n, e) => {
  for (var t = Wt(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
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
  var c = new P.MathNode("mo", [t0("⁡", "text")]);
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
  htmlBuilder: w4,
  mathmlBuilder: tm
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
    var t = Wt(n.body, e);
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
    var t = Wt(Ze(n.body), e), r = new P.MathNode("mphantom", t), a = new P.MathNode("mpadded", [r]);
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
    var t = Wt(Ze(n.body), e), r = new P.MathNode("mphantom", t), a = new P.MathNode("mpadded", [r]);
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
    } = n, r = ue(e[0], "size").value, a = e[1];
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
    } = n, a = t[0], i = ue(e[0], "size"), l = ue(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && ue(a, "size").value,
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
function k4(n, e, t) {
  for (var r = gt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return M.makeFragment(r);
}
var hu = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], rm = (n, e) => {
  var t = e.havingSize(n.size);
  return k4(n.body, t, e);
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
  htmlBuilder: rm,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = Wt(n.body, t), a = new P.MathNode("mstyle", r);
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
    } = n, a = !1, i = !1, l = t[0] && ue(t[0], "ordgroup");
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
      }, e), y = M.makeSpan(["root"], [A]);
      return M.makeSpan(["mord", "sqrt"], [y, p], e);
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
    return k4(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = fu[n.style], r = e.havingStyle(t), a = Wt(n.body, r), i = new P.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[n.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var nm = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === re.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? gn : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || r.limits);
      return i ? w4 : null;
    } else {
      if (r.type === "accent")
        return ee.isCharacterBox(r.base) ? zs : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? v4 : null;
      } else
        return null;
    }
  else return null;
};
Pr({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = nm(n, e);
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
    var S = e.sizeMultiplier, A = G(0.5 / c.ptPerEm / S), y = null;
    if (o) {
      var b = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof B0 || b) && (y = G(-l.italic));
    }
    var E;
    if (s && o) {
      h = Math.max(h, w, s.depth + 0.25 * c.xHeight), m = Math.max(m, c.sub2);
      var x = c.defaultRuleThickness, T = 4 * x;
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
        marginLeft: y
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
        marginLeft: y,
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
    var R = ns(l, "right") || "mord";
    return M.makeSpan([R], [l, M.makeSpan(["msupsub"], [E])], e);
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
    var t = new P.MathNode("mo", [t0(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Ms(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var D4 = {
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
    var t = new P.MathNode("mi", [t0(n.text, n.mode, e)]), r = Ms(n, e) || "italic";
    return r !== D4[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Pr({
  type: "textord",
  htmlBuilder(n, e) {
    return M.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = t0(n.text, n.mode, e), r = Ms(n, e) || "normal", a;
    return n.mode === "text" ? a = new P.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new P.MathNode("mn", [t]) : n.text === "\\prime" ? a = new P.MathNode("mo", [t]) : a = new P.MathNode("mi", [t]), r !== D4[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var xl = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Cl = {
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
    if (Cl.hasOwnProperty(n.text)) {
      var t = Cl[n.text].className || "";
      if (n.mode === "text") {
        var r = M.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return M.makeSpan(["mspace", t], [M.mathsym(n.text, n.mode, e)], e);
    } else {
      if (xl.hasOwnProperty(n.text))
        return M.makeSpan(["mspace", xl[n.text]], [], e);
      throw new J('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (Cl.hasOwnProperty(n.text))
      t = new P.MathNode("mtext", [new P.TextNode(" ")]);
    else {
      if (xl.hasOwnProperty(n.text))
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
}, am = {
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
  return e.withTextFontShape(am[t]);
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
var _u = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), im = Zc;
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
var Hs = (n, e, t) => {
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
_("\\newcommand", (n) => Hs(n, !1, !0));
_("\\renewcommand", (n) => Hs(n, !0, !1));
_("\\providecommand", (n) => Hs(n, !0, !0));
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
  return console.log(e, n.macros.get(t), im[t], Ke.math[t], Ke.text[t]), "";
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
var Vs = {
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
  return e in Vs ? "\\ldots\\," : "\\ldots";
});
_("\\dotsc", function(n) {
  var e = n.future().text;
  return e in Vs && e !== "," ? "\\ldots\\," : "\\ldots";
});
_("\\cdots", function(n) {
  var e = n.future().text;
  return e in Vs ? "\\@cdots\\," : "\\@cdots";
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
var A4 = G(G0["Main-Regular"][84][1] - 0.7 * G0["Main-Regular"][65][1]);
_("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + A4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
_("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + A4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var E4 = (n) => (e) => {
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
_("\\bra@ket", E4(!1));
_("\\bra@set", E4(!0));
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
function Us() {
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
let Hr = Us();
function S4(n) {
  Hr = n;
}
const F4 = /[&<>"']/, lm = new RegExp(F4.source, "g"), x4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, sm = new RegExp(x4.source, "g"), om = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, yu = (n) => om[n];
function Pt(n, e) {
  if (e) {
    if (F4.test(n))
      return n.replace(lm, yu);
  } else if (x4.test(n))
    return n.replace(sm, yu);
  return n;
}
const um = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function cm(n) {
  return n.replace(um, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const hm = /(^|[^\[])\^/g;
function xe(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(hm, "$1"), t = t.replace(a, l), r;
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
function La(n, e, t) {
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
function fm(n, e) {
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
  const a = e.href, i = e.title ? Pt(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: Pt(l)
  };
}
function dm(n, e) {
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
class ai {
  // set by the lexer
  constructor(e) {
    ze(this, "options");
    ze(this, "rules");
    // set by the lexer
    ze(this, "lexer");
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
        text: this.options.pedantic ? r : La(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = dm(r, t[3] || "");
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
        const a = La(r, "#");
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
      r = La(r.replace(/^ *>[ \t]?/gm, ""), `
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
          const A = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), b = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), E = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const x = e.split(`
`, 1)[0];
            if (f = x, this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), b.test(f) || E.test(f) || A.test(f) || y.test(e))
              break;
            if (f.search(/[^ ]/) >= p || !f.trim())
              o += `
` + f.slice(p);
            else {
              if (v || m.search(/[^ ]/) >= 4 || b.test(m) || E.test(m) || y.test(m))
                break;
              o += `
` + f;
            }
            !v && !f.trim() && (v = !0), s += x + `
`, e = e.substring(x.length + 1), m = f.slice(p);
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
        text: Pt(t[1])
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
        const l = La(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = fm(t[2], "()");
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
      return a && i && (r = r.substring(1, r.length - 1)), r = Pt(r, !0), {
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
      return t[2] === "@" ? (r = Pt(t[1]), a = "mailto:" + r) : (r = Pt(t[1]), a = r), {
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
        a = Pt(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = Pt(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
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
      return this.lexer.state.inRawBlock ? r = t[0] : r = Pt(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const mm = /^(?: *(?:\n|$))+/, pm = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, gm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, na = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, _m = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, C4 = /(?:[*+-]|\d{1,9}[.)])/, T4 = xe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, C4).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Gs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vm = /^[^\n]+/, js = /(?!\s*\])(?:\\.|[^\[\]\\])+/, bm = xe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", js).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ym = xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, C4).getRegex(), xi = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ws = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, wm = xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Ws).replace("tag", xi).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), M4 = xe(Gs).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xi).getRegex(), km = xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", M4).getRegex(), Ys = {
  blockquote: km,
  code: pm,
  def: bm,
  fences: gm,
  heading: _m,
  hr: na,
  html: wm,
  lheading: T4,
  list: ym,
  newline: mm,
  paragraph: M4,
  table: Hn,
  text: vm
}, Au = xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xi).getRegex(), Dm = {
  ...Ys,
  table: Au,
  paragraph: xe(Gs).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Au).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xi).getRegex()
}, Am = {
  ...Ys,
  html: xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ws).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Hn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: xe(Gs).replace("hr", na).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", T4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, B4 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Em = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, z4 = /^( {2,}|\\)\n(?!\s*$)/, Sm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, aa = "\\p{P}\\p{S}", Fm = xe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, aa).getRegex(), xm = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Cm = xe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, aa).getRegex(), Tm = xe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, aa).getRegex(), Mm = xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, aa).getRegex(), Bm = xe(/\\([punct])/, "gu").replace(/punct/g, aa).getRegex(), zm = xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Im = xe(Ws).replace("(?:-->|$)", "-->").getRegex(), Nm = xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Im).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ii = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Rm = xe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ii).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), I4 = xe(/^!?\[(label)\]\[(ref)\]/).replace("label", ii).replace("ref", js).getRegex(), N4 = xe(/^!?\[(ref)\](?:\[\])?/).replace("ref", js).getRegex(), Lm = xe("reflink|nolink(?!\\()", "g").replace("reflink", I4).replace("nolink", N4).getRegex(), Xs = {
  _backpedal: Hn,
  // only used for GFM url
  anyPunctuation: Bm,
  autolink: zm,
  blockSkip: xm,
  br: z4,
  code: Em,
  del: Hn,
  emStrongLDelim: Cm,
  emStrongRDelimAst: Tm,
  emStrongRDelimUnd: Mm,
  escape: B4,
  link: Rm,
  nolink: N4,
  punctuation: Fm,
  reflink: I4,
  reflinkSearch: Lm,
  tag: Nm,
  text: Sm,
  url: Hn
}, Om = {
  ...Xs,
  link: xe(/^!?\[(label)\]\((.*?)\)/).replace("label", ii).getRegex(),
  reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ii).getRegex()
}, ls = {
  ...Xs,
  escape: xe(B4).replace("])", "~|])").getRegex(),
  url: xe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, qm = {
  ...ls,
  br: xe(z4).replace("{2,}", "*").getRegex(),
  text: xe(ls.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Oa = {
  normal: Ys,
  gfm: Dm,
  pedantic: Am
}, Tn = {
  normal: Xs,
  gfm: ls,
  breaks: qm,
  pedantic: Om
};
class A0 {
  constructor(e) {
    ze(this, "tokens");
    ze(this, "options");
    ze(this, "state");
    ze(this, "tokenizer");
    ze(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Hr, this.options.tokenizer = this.options.tokenizer || new ai(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Oa.normal,
      inline: Tn.normal
    };
    this.options.pedantic ? (t.block = Oa.pedantic, t.inline = Tn.pedantic) : this.options.gfm && (t.block = Oa.gfm, this.options.breaks ? t.inline = Tn.breaks : t.inline = Tn.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Oa,
      inline: Tn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new A0(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new A0(t).inlineTokens(e);
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
class li {
  constructor(e) {
    ze(this, "options");
    this.options = e || Hr;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + Pt(a) + '">' + (r ? e : Pt(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Pt(e, !0)) + `</code></pre>
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
class Zs {
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
class E0 {
  constructor(e) {
    ze(this, "options");
    ze(this, "renderer");
    ze(this, "textRenderer");
    this.options = e || Hr, this.options.renderer = this.options.renderer || new li(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Zs();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new E0(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new E0(t).parseInline(e);
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
          r += this.renderer.heading(this.parseInline(l.tokens), l.depth, cm(this.parseInline(l.tokens, this.textRenderer)));
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
    ze(this, "options");
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
ze(Vn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var qr, ss, R4;
class Pm {
  constructor(...e) {
    Do(this, qr);
    ze(this, "defaults", Us());
    ze(this, "options", this.setOptions);
    ze(this, "parse", ga(this, qr, ss).call(this, A0.lex, E0.parse));
    ze(this, "parseInline", ga(this, qr, ss).call(this, A0.lexInline, E0.parseInline));
    ze(this, "Parser", E0);
    ze(this, "Renderer", li);
    ze(this, "TextRenderer", Zs);
    ze(this, "Lexer", A0);
    ze(this, "Tokenizer", ai);
    ze(this, "Hooks", Vn);
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
        const i = this.defaults.renderer || new li(this.defaults);
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
        const i = this.defaults.tokenizer || new ai(this.defaults);
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
    return A0.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return E0.parse(e, t ?? this.defaults);
  }
}
qr = new WeakSet(), ss = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = ga(this, qr, R4).call(this, !!l.silent, !!l.async);
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
}, R4 = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + Pt(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const Or = new Pm();
function Fe(n, e) {
  return Or.parse(n, e);
}
Fe.options = Fe.setOptions = function(n) {
  return Or.setOptions(n), Fe.defaults = Or.defaults, S4(Fe.defaults), Fe;
};
Fe.getDefaults = Us;
Fe.defaults = Hr;
Fe.use = function(...n) {
  return Or.use(...n), Fe.defaults = Or.defaults, S4(Fe.defaults), Fe;
};
Fe.walkTokens = function(n, e) {
  return Or.walkTokens(n, e);
};
Fe.parseInline = Or.parseInline;
Fe.Parser = E0;
Fe.parser = E0.parse;
Fe.Renderer = li;
Fe.TextRenderer = Zs;
Fe.Lexer = A0;
Fe.lexer = A0.lex;
Fe.Tokenizer = ai;
Fe.Hooks = Vn;
Fe.parse = Fe;
Fe.options;
Fe.setOptions;
Fe.use;
Fe.walkTokens;
Fe.parseInline;
E0.parse;
A0.lex;
const Hm = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Vm = Object.hasOwnProperty;
class L4 {
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
    let a = Um(e, t === !0);
    const i = a;
    for (; Vm.call(r.occurrences, a); )
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
function Um(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace(Hm, "").replace(/ /g, "-"));
}
new L4();
var Eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gm = { exports: {} };
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
        encode: function y(b) {
          return b instanceof o ? new o(b.type, y(b.content), b.alias) : Array.isArray(b) ? b.map(y) : b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(y) {
          return Object.prototype.toString.call(y).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(y) {
          return y.__id || Object.defineProperty(y, "__id", { value: ++i }), y.__id;
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
        clone: function y(b, E) {
          E = E || {};
          var x, T;
          switch (s.util.type(b)) {
            case "Object":
              if (T = s.util.objId(b), E[T])
                return E[T];
              x = /** @type {Record<string, any>} */
              {}, E[T] = x;
              for (var z in b)
                b.hasOwnProperty(z) && (x[z] = y(b[z], E));
              return (
                /** @type {any} */
                x
              );
            case "Array":
              return T = s.util.objId(b), E[T] ? E[T] : (x = [], E[T] = x, /** @type {Array} */
              /** @type {any} */
              b.forEach(function(I, B) {
                x[B] = y(I, E);
              }), /** @type {any} */
              x);
            default:
              return b;
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
        getLanguage: function(y) {
          for (; y; ) {
            var b = a.exec(y.className);
            if (b)
              return b[1].toLowerCase();
            y = y.parentElement;
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
        setLanguage: function(y, b) {
          y.className = y.className.replace(RegExp(a, "gi"), ""), y.classList.add("language-" + b);
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
          } catch (x) {
            var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack) || [])[1];
            if (y) {
              var b = document.getElementsByTagName("script");
              for (var E in b)
                if (b[E].src == y)
                  return b[E];
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
        isActive: function(y, b, E) {
          for (var x = "no-" + b; y; ) {
            var T = y.classList;
            if (T.contains(b))
              return !0;
            if (T.contains(x))
              return !1;
            y = y.parentElement;
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
        extend: function(y, b) {
          var E = s.util.clone(s.languages[y]);
          for (var x in b)
            E[x] = b[x];
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
        insertBefore: function(y, b, E, x) {
          x = x || /** @type {any} */
          s.languages;
          var T = x[y], z = {};
          for (var I in T)
            if (T.hasOwnProperty(I)) {
              if (I == b)
                for (var B in E)
                  E.hasOwnProperty(B) && (z[B] = E[B]);
              E.hasOwnProperty(I) || (z[I] = T[I]);
            }
          var R = x[y];
          return x[y] = z, s.languages.DFS(s.languages, function(L, W) {
            W === R && L != y && (this[L] = z);
          }), z;
        },
        // Traverse a language definition with Depth First Search
        DFS: function y(b, E, x, T) {
          T = T || {};
          var z = s.util.objId;
          for (var I in b)
            if (b.hasOwnProperty(I)) {
              E.call(b, I, b[I], x || I);
              var B = b[I], R = s.util.type(B);
              R === "Object" && !T[z(B)] ? (T[z(B)] = !0, y(B, E, null, T)) : R === "Array" && !T[z(B)] && (T[z(B)] = !0, y(B, E, I, T));
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
      highlightAll: function(y, b) {
        s.highlightAllUnder(document, y, b);
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
      highlightAllUnder: function(y, b, E) {
        var x = {
          callback: E,
          container: y,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", x), x.elements = Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)), s.hooks.run("before-all-elements-highlight", x);
        for (var T = 0, z; z = x.elements[T++]; )
          s.highlightElement(z, b === !0, x.callback);
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
      highlightElement: function(y, b, E) {
        var x = s.util.getLanguage(y), T = s.languages[x];
        s.util.setLanguage(y, x);
        var z = y.parentElement;
        z && z.nodeName.toLowerCase() === "pre" && s.util.setLanguage(z, x);
        var I = y.textContent, B = {
          element: y,
          language: x,
          grammar: T,
          code: I
        };
        function R(W) {
          B.highlightedCode = W, s.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, s.hooks.run("after-highlight", B), s.hooks.run("complete", B), E && E.call(B.element);
        }
        if (s.hooks.run("before-sanity-check", B), z = B.element.parentElement, z && z.nodeName.toLowerCase() === "pre" && !z.hasAttribute("tabindex") && z.setAttribute("tabindex", "0"), !B.code) {
          s.hooks.run("complete", B), E && E.call(B.element);
          return;
        }
        if (s.hooks.run("before-highlight", B), !B.grammar) {
          R(s.util.encode(B.code));
          return;
        }
        if (b && r.Worker) {
          var L = new Worker(s.filename);
          L.onmessage = function(W) {
            R(W.data);
          }, L.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          R(s.highlight(B.code, B.grammar, B.language));
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
      highlight: function(y, b, E) {
        var x = {
          code: y,
          grammar: b,
          language: E
        };
        if (s.hooks.run("before-tokenize", x), !x.grammar)
          throw new Error('The language "' + x.language + '" has no grammar.');
        return x.tokens = s.tokenize(x.code, x.grammar), s.hooks.run("after-tokenize", x), o.stringify(s.util.encode(x.tokens), x.language);
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
      tokenize: function(y, b) {
        var E = b.rest;
        if (E) {
          for (var x in E)
            b[x] = E[x];
          delete b.rest;
        }
        var T = new m();
        return f(T, T.head, y), h(y, T, b, T.head, 0), v(T);
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
        add: function(y, b) {
          var E = s.hooks.all;
          E[y] = E[y] || [], E[y].push(b);
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
        run: function(y, b) {
          var E = s.hooks.all[y];
          if (!(!E || !E.length))
            for (var x = 0, T; T = E[x++]; )
              T(b);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(y, b, E, x) {
      this.type = y, this.content = b, this.alias = E, this.length = (x || "").length | 0;
    }
    o.stringify = function y(b, E) {
      if (typeof b == "string")
        return b;
      if (Array.isArray(b)) {
        var x = "";
        return b.forEach(function(R) {
          x += y(R, E);
        }), x;
      }
      var T = {
        type: b.type,
        content: y(b.content, E),
        tag: "span",
        classes: ["token", b.type],
        attributes: {},
        language: E
      }, z = b.alias;
      z && (Array.isArray(z) ? Array.prototype.push.apply(T.classes, z) : T.classes.push(z)), s.hooks.run("wrap", T);
      var I = "";
      for (var B in T.attributes)
        I += " " + B + '="' + (T.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + I + ">" + T.content + "</" + T.tag + ">";
    };
    function c(y, b, E, x) {
      y.lastIndex = b;
      var T = y.exec(E);
      if (T && x && T[1]) {
        var z = T[1].length;
        T.index += z, T[0] = T[0].slice(z);
      }
      return T;
    }
    function h(y, b, E, x, T, z) {
      for (var I in E)
        if (!(!E.hasOwnProperty(I) || !E[I])) {
          var B = E[I];
          B = Array.isArray(B) ? B : [B];
          for (var R = 0; R < B.length; ++R) {
            if (z && z.cause == I + "," + R)
              return;
            var L = B[R], W = L.inside, se = !!L.lookbehind, q = !!L.greedy, oe = L.alias;
            if (q && !L.pattern.global) {
              var ae = L.pattern.toString().match(/[imsuy]*$/)[0];
              L.pattern = RegExp(L.pattern.source, ae + "g");
            }
            for (var we = L.pattern || L, de = x.next, ke = T; de !== b.tail && !(z && ke >= z.reach); ke += de.value.length, de = de.next) {
              var De = de.value;
              if (b.length > y.length)
                return;
              if (!(De instanceof o)) {
                var te = 1, ie;
                if (q) {
                  if (ie = c(we, ke, y, se), !ie || ie.index >= y.length)
                    break;
                  var U = ie.index, me = ie.index + ie[0].length, Le = ke;
                  for (Le += de.value.length; U >= Le; )
                    de = de.next, Le += de.value.length;
                  if (Le -= de.value.length, ke = Le, de.value instanceof o)
                    continue;
                  for (var H = de; H !== b.tail && (Le < me || typeof H.value == "string"); H = H.next)
                    te++, Le += H.value.length;
                  te--, De = y.slice(ke, Le), ie.index -= ke;
                } else if (ie = c(we, 0, De, se), !ie)
                  continue;
                var U = ie.index, ve = ie[0], _e = De.slice(0, U), Se = De.slice(U + ve.length), Be = ke + De.length;
                z && Be > z.reach && (z.reach = Be);
                var Ie = de.prev;
                _e && (Ie = f(b, Ie, _e), ke += _e.length), p(b, Ie, te);
                var Ye = new o(I, W ? s.tokenize(ve, W) : ve, oe, ve);
                if (de = f(b, Ie, Ye), Se && f(b, de, Se), te > 1) {
                  var ct = {
                    cause: I + "," + R,
                    reach: Be
                  };
                  h(y, b, E, de.prev, ke, ct), z && ct.reach > z.reach && (z.reach = ct.reach);
                }
              }
            }
          }
        }
    }
    function m() {
      var y = { value: null, prev: null, next: null }, b = { value: null, prev: y, next: null };
      y.next = b, this.head = y, this.tail = b, this.length = 0;
    }
    function f(y, b, E) {
      var x = b.next, T = { value: E, prev: b, next: x };
      return b.next = T, x.prev = T, y.length++, T;
    }
    function p(y, b, E) {
      for (var x = b.next, T = 0; T < E && x !== y.tail; T++)
        x = x.next;
      b.next = x, x.prev = b, y.length -= T;
    }
    function v(y) {
      for (var b = [], E = y.head.next; E !== y.tail; )
        b.push(E.value), E = E.next;
      return b;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(y) {
        var b = JSON.parse(y.data), E = b.language, x = b.code, T = b.immediateClose;
        r.postMessage(s.highlight(x, s.languages[E], E)), T && r.close();
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
      var y = new XMLHttpRequest();
      y.open("GET", w, !0), y.onreadystatechange = function() {
        y.readyState == 4 && (y.status < 400 && y.responseText ? S(y.responseText) : y.status >= 400 ? A(a(y.status, y.statusText)) : A(i));
      }, y.send(null);
    }
    function p(w) {
      var S = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w || "");
      if (S) {
        var A = Number(S[1]), y = S[2], b = S[3];
        return y ? b ? [A, Number(b)] : [A, void 0] : [A, A];
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
        var y = S.getAttribute("data-src"), b = w.language;
        if (b === "none") {
          var E = (/\.(\w+)$/.exec(y) || [, "none"])[1];
          b = l[E] || E;
        }
        t.util.setLanguage(A, b), t.util.setLanguage(S, b);
        var x = t.plugins.autoloader;
        x && x.loadLanguages(b), f(
          y,
          function(T) {
            S.setAttribute(s, c);
            var z = p(S.getAttribute("data-range"));
            if (z) {
              var I = T.split(/\r\n?|\n/g), B = z[0], R = z[1] == null ? I.length : z[1];
              B < 0 && (B += I.length), B = Math.max(0, Math.min(B - 1, I.length)), R < 0 && (R += I.length), R = Math.max(0, Math.min(R, I.length)), T = I.slice(B, R).join(`
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
        for (var A = (S || document).querySelectorAll(m), y = 0, b; b = A[y++]; )
          t.highlightElement(b);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Gm);
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
new L4();
const jm = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, Wm = [
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
], Ym = [
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
], Xm = [
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
], Zm = [
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
], Km = [
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
], Qm = [
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
  ...Wm,
  ...Ym.map((n) => `svg:${n}`),
  ...Xm.map((n) => `math:${n}`)
], jm([
  Object.fromEntries(Zm.map((n) => [n, ["*"]])),
  Object.fromEntries(Km.map((n) => [n, ["svg:*"]])),
  Object.fromEntries(Qm.map((n) => [n, ["math:*"]]))
]);
function on(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
function Ka() {
}
const Jm = (n) => n;
function $m(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const O4 = typeof window < "u";
let Su = O4 ? () => window.performance.now() : () => Date.now(), q4 = O4 ? (n) => requestAnimationFrame(n) : Ka;
const hn = /* @__PURE__ */ new Set();
function P4(n) {
  hn.forEach((e) => {
    e.c(n) || (hn.delete(e), e.f());
  }), hn.size !== 0 && q4(P4);
}
function e5(n) {
  let e;
  return hn.size === 0 && q4(P4), {
    promise: new Promise((t) => {
      hn.add(e = { c: n, f: t });
    }),
    abort() {
      hn.delete(e);
    }
  };
}
function H4(n, { delay: e = 0, duration: t = 400, easing: r = Jm } = {}) {
  const a = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (i) => `opacity: ${i * a}`
  };
}
const $r = [];
function t5(n, e = Ka) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if ($m(n, s) && (n = s, t)) {
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
  function l(s, o = Ka) {
    const c = [s, o];
    return r.add(c), r.size === 1 && (t = e(a, i) || Ka), s(n), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function Fu(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function os(n, e, t, r) {
  if (typeof t == "number" || Fu(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = n.opts.stiffness * a, s = n.opts.damping * i, o = (l - s) * n.inv_mass, c = (i + o) * n.dt;
    return Math.abs(c) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, Fu(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => os(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = os(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function xu(n, e = {}) {
  const t = t5(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, c = n, h = n, m = 1, f = 0, p = !1;
  function v(S, A = {}) {
    h = S;
    const y = o = {};
    return n == null || A.hard || w.stiffness >= 1 && w.damping >= 1 ? (p = !0, l = Su(), c = S, t.set(n = h), Promise.resolve()) : (A.soft && (f = 1 / ((A.soft === !0 ? 0.5 : +A.soft) * 60), m = 0), s || (l = Su(), p = !1, s = e5((b) => {
      if (p)
        return p = !1, s = null, !1;
      m = Math.min(m + f, 1);
      const E = {
        inv_mass: m,
        opts: w,
        settled: !0,
        dt: (b - l) * 60 / 1e3
      }, x = os(E, c, n, h);
      return l = b, c = n, t.set(n = x), E.settled && (s = null), !E.settled;
    })), new Promise((b) => {
      s.promise.then(() => {
        y === o && b();
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
  SvelteComponent: r5,
  append_hydration: s0,
  attr: be,
  children: Xt,
  claim_element: n5,
  claim_svg_element: o0,
  component_subscribe: Cu,
  detach: qt,
  element: a5,
  init: i5,
  insert_hydration: l5,
  noop: Tu,
  safe_not_equal: s5,
  set_style: qa,
  svg_element: u0,
  toggle_class: Mu
} = window.__gradio__svelte__internal, { onMount: o5 } = window.__gradio__svelte__internal;
function u5(n) {
  let e, t, r, a, i, l, s, o, c, h, m, f;
  return {
    c() {
      e = a5("div"), t = u0("svg"), r = u0("g"), a = u0("path"), i = u0("path"), l = u0("path"), s = u0("path"), o = u0("g"), c = u0("path"), h = u0("path"), m = u0("path"), f = u0("path"), this.h();
    },
    l(p) {
      e = n5(p, "DIV", { class: !0 });
      var v = Xt(e);
      t = o0(v, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var w = Xt(t);
      r = o0(w, "g", { style: !0 });
      var S = Xt(r);
      a = o0(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Xt(a).forEach(qt), i = o0(S, "path", { d: !0, fill: !0, class: !0 }), Xt(i).forEach(qt), l = o0(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Xt(l).forEach(qt), s = o0(S, "path", { d: !0, fill: !0, class: !0 }), Xt(s).forEach(qt), S.forEach(qt), o = o0(w, "g", { style: !0 });
      var A = Xt(o);
      c = o0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Xt(c).forEach(qt), h = o0(A, "path", { d: !0, fill: !0, class: !0 }), Xt(h).forEach(qt), m = o0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Xt(m).forEach(qt), f = o0(A, "path", { d: !0, fill: !0, class: !0 }), Xt(f).forEach(qt), A.forEach(qt), w.forEach(qt), v.forEach(qt), this.h();
    },
    h() {
      be(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), be(a, "fill", "#FF7C00"), be(a, "fill-opacity", "0.4"), be(a, "class", "svelte-43sxxs"), be(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), be(i, "fill", "#FF7C00"), be(i, "class", "svelte-43sxxs"), be(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), be(l, "fill", "#FF7C00"), be(l, "fill-opacity", "0.4"), be(l, "class", "svelte-43sxxs"), be(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), be(s, "fill", "#FF7C00"), be(s, "class", "svelte-43sxxs"), qa(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), be(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), be(c, "fill", "#FF7C00"), be(c, "fill-opacity", "0.4"), be(c, "class", "svelte-43sxxs"), be(h, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), be(h, "fill", "#FF7C00"), be(h, "class", "svelte-43sxxs"), be(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), be(m, "fill", "#FF7C00"), be(m, "fill-opacity", "0.4"), be(m, "class", "svelte-43sxxs"), be(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), be(f, "fill", "#FF7C00"), be(f, "class", "svelte-43sxxs"), qa(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), be(t, "viewBox", "-1200 -1200 3000 3000"), be(t, "fill", "none"), be(t, "xmlns", "http://www.w3.org/2000/svg"), be(t, "class", "svelte-43sxxs"), be(e, "class", "svelte-43sxxs"), Mu(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, v) {
      l5(p, e, v), s0(e, t), s0(t, r), s0(r, a), s0(r, i), s0(r, l), s0(r, s), s0(t, o), s0(o, c), s0(o, h), s0(o, m), s0(o, f);
    },
    p(p, [v]) {
      v & /*$top*/
      2 && qa(r, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), v & /*$bottom*/
      4 && qa(o, "transform", "translate(" + /*$bottom*/
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
      p && qt(e);
    }
  };
}
function c5(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(p, v, w, S) {
    function A(y) {
      return y instanceof w ? y : new w(function(b) {
        b(y);
      });
    }
    return new (w || (w = Promise))(function(y, b) {
      function E(z) {
        try {
          T(S.next(z));
        } catch (I) {
          b(I);
        }
      }
      function x(z) {
        try {
          T(S.throw(z));
        } catch (I) {
          b(I);
        }
      }
      function T(z) {
        z.done ? y(z.value) : A(z.value).then(E, x);
      }
      T((S = S.apply(p, v || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = xu([0, 0]);
  Cu(n, s, (p) => t(1, r = p));
  const o = xu([0, 0]);
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
  return o5(() => (f(), () => c = !0)), n.$$set = (p) => {
    "margin" in p && t(0, l = p.margin);
  }, [l, r, a, s, o];
}
class h5 extends r5 {
  constructor(e) {
    super(), i5(this, e, c5, u5, s5, { margin: 0 });
  }
}
const {
  SvelteComponent: f5,
  append_hydration: Mr,
  attr: m0,
  binding_callbacks: Bu,
  check_outros: us,
  children: S0,
  claim_component: V4,
  claim_element: F0,
  claim_space: Jt,
  claim_text: Pe,
  create_component: U4,
  create_slot: G4,
  destroy_component: j4,
  destroy_each: W4,
  detach: Q,
  element: x0,
  empty: r0,
  ensure_array_like: si,
  get_all_dirty_from_scope: Y4,
  get_slot_changes: X4,
  group_outros: cs,
  init: d5,
  insert_hydration: le,
  mount_component: Z4,
  noop: hs,
  safe_not_equal: m5,
  set_data: n0,
  set_style: pr,
  space: $t,
  text: He,
  toggle_class: Zt,
  transition_in: d0,
  transition_out: C0,
  update_slot_base: K4
} = window.__gradio__svelte__internal, { tick: p5 } = window.__gradio__svelte__internal, { onDestroy: g5 } = window.__gradio__svelte__internal, { createEventDispatcher: _5 } = window.__gradio__svelte__internal, v5 = (n) => ({}), zu = (n) => ({}), b5 = (n) => ({}), Iu = (n) => ({});
function Nu(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Ru(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function y5(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, o;
  t = new V3({
    props: {
      Icon: uf,
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
  ), h = G4(
    c,
    n,
    /*$$scope*/
    n[29],
    zu
  );
  return {
    c() {
      e = x0("div"), U4(t.$$.fragment), r = $t(), a = x0("span"), l = He(i), s = $t(), h && h.c(), this.h();
    },
    l(m) {
      e = F0(m, "DIV", { class: !0 });
      var f = S0(e);
      V4(t.$$.fragment, f), f.forEach(Q), r = Jt(m), a = F0(m, "SPAN", { class: !0 });
      var p = S0(a);
      l = Pe(p, i), p.forEach(Q), s = Jt(m), h && h.l(m), this.h();
    },
    h() {
      m0(e, "class", "clear-status svelte-17v219f"), m0(a, "class", "error svelte-17v219f");
    },
    m(m, f) {
      le(m, e, f), Z4(t, e, null), le(m, r, f), le(m, a, f), Mr(a, l), le(m, s, f), h && h.m(m, f), o = !0;
    },
    p(m, f) {
      const p = {};
      f[0] & /*i18n*/
      2 && (p.label = /*i18n*/
      m[1]("common.clear")), t.$set(p), (!o || f[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      m[1]("common.error") + "") && n0(l, i), h && h.p && (!o || f[0] & /*$$scope*/
      536870912) && K4(
        h,
        c,
        m,
        /*$$scope*/
        m[29],
        o ? X4(
          c,
          /*$$scope*/
          m[29],
          f,
          v5
        ) : Y4(
          /*$$scope*/
          m[29]
        ),
        zu
      );
    },
    i(m) {
      o || (d0(t.$$.fragment, m), d0(h, m), o = !0);
    },
    o(m) {
      C0(t.$$.fragment, m), C0(h, m), o = !1;
    },
    d(m) {
      m && (Q(e), Q(r), Q(a), Q(s)), j4(t), h && h.d(m);
    }
  };
}
function w5(n) {
  let e, t, r, a, i, l, s, o, c, h = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Lu(n)
  );
  function m(b, E) {
    if (
      /*progress*/
      b[7]
    ) return A5;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return D5;
    if (
      /*queue_position*/
      b[2] === 0
    ) return k5;
  }
  let f = m(n), p = f && f(n), v = (
    /*timer*/
    n[5] && Pu(n)
  );
  const w = [x5, F5], S = [];
  function A(b, E) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = A(n)) && (l = S[i] = w[i](n));
  let y = !/*timer*/
  n[5] && Yu(n);
  return {
    c() {
      h && h.c(), e = $t(), t = x0("div"), p && p.c(), r = $t(), v && v.c(), a = $t(), l && l.c(), s = $t(), y && y.c(), o = r0(), this.h();
    },
    l(b) {
      h && h.l(b), e = Jt(b), t = F0(b, "DIV", { class: !0 });
      var E = S0(t);
      p && p.l(E), r = Jt(E), v && v.l(E), E.forEach(Q), a = Jt(b), l && l.l(b), s = Jt(b), y && y.l(b), o = r0(), this.h();
    },
    h() {
      m0(t, "class", "progress-text svelte-17v219f"), Zt(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), Zt(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(b, E) {
      h && h.m(b, E), le(b, e, E), le(b, t, E), p && p.m(t, null), Mr(t, r), v && v.m(t, null), le(b, a, E), ~i && S[i].m(b, E), le(b, s, E), y && y.m(b, E), le(b, o, E), c = !0;
    },
    p(b, E) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? h ? h.p(b, E) : (h = Lu(b), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), f === (f = m(b)) && p ? p.p(b, E) : (p && p.d(1), p = f && f(b), p && (p.c(), p.m(t, r))), /*timer*/
      b[5] ? v ? v.p(b, E) : (v = Pu(b), v.c(), v.m(t, null)) : v && (v.d(1), v = null), (!c || E[0] & /*variant*/
      256) && Zt(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!c || E[0] & /*variant*/
      256) && Zt(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let x = i;
      i = A(b), i === x ? ~i && S[i].p(b, E) : (l && (cs(), C0(S[x], 1, 1, () => {
        S[x] = null;
      }), us()), ~i ? (l = S[i], l ? l.p(b, E) : (l = S[i] = w[i](b), l.c()), d0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      b[5] ? y && (cs(), C0(y, 1, 1, () => {
        y = null;
      }), us()) : y ? (y.p(b, E), E[0] & /*timer*/
      32 && d0(y, 1)) : (y = Yu(b), y.c(), d0(y, 1), y.m(o.parentNode, o));
    },
    i(b) {
      c || (d0(l), d0(y), c = !0);
    },
    o(b) {
      C0(l), C0(y), c = !1;
    },
    d(b) {
      b && (Q(e), Q(t), Q(a), Q(s), Q(o)), h && h.d(b), p && p.d(), v && v.d(), ~i && S[i].d(b), y && y.d(b);
    }
  };
}
function Lu(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = x0("div"), this.h();
    },
    l(r) {
      e = F0(r, "DIV", { class: !0 }), S0(e).forEach(Q), this.h();
    },
    h() {
      m0(e, "class", "eta-bar svelte-17v219f"), pr(e, "transform", t);
    },
    m(r, a) {
      le(r, e, a);
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
function k5(n) {
  let e;
  return {
    c() {
      e = He("processing |");
    },
    l(t) {
      e = Pe(t, "processing |");
    },
    m(t, r) {
      le(t, e, r);
    },
    p: hs,
    d(t) {
      t && Q(e);
    }
  };
}
function D5(n) {
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
      le(s, e, o), le(s, r, o), le(s, a, o), le(s, i, o), le(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && n0(r, t), o[0] & /*queue_size*/
      8 && n0(
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
function A5(n) {
  let e, t = si(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = qu(Ru(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = r0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = r0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      le(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = si(
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
      a && Q(e), W4(r, a);
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
      h[41].length != null ? S5 : E5
    );
  }
  let o = s(n), c = o(n);
  return {
    c() {
      c.c(), e = $t(), r = He(t), a = He(" | "), l = He(i);
    },
    l(h) {
      c.l(h), e = Jt(h), r = Pe(h, t), a = Pe(h, " | "), l = Pe(h, i);
    },
    m(h, m) {
      c.m(h, m), le(h, e, m), le(h, r, m), le(h, a, m), le(h, l, m);
    },
    p(h, m) {
      o === (o = s(h)) && c ? c.p(h, m) : (c.d(1), c = o(h), c && (c.c(), c.m(e.parentNode, e))), m[0] & /*progress*/
      128 && t !== (t = /*p*/
      h[41].unit + "") && n0(r, t);
    },
    d(h) {
      h && (Q(e), Q(r), Q(a), Q(l)), c.d(h);
    }
  };
}
function E5(n) {
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
      le(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = on(
        /*p*/
        r[41].index || 0
      ) + "") && n0(t, e);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function S5(n) {
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
      le(l, t, s), le(l, r, s), le(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = on(
        /*p*/
        l[41].index || 0
      ) + "") && n0(t, e), s[0] & /*progress*/
      128 && a !== (a = on(
        /*p*/
        l[41].length
      ) + "") && n0(i, a);
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
      t && t.c(), e = r0();
    },
    l(r) {
      t && t.l(r), e = r0();
    },
    m(r, a) {
      t && t.m(r, a), le(r, e, a);
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
      le(i, e, l), le(i, r, l), le(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && n0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && n0(r, t);
    },
    d(i) {
      i && (Q(e), Q(r), Q(a));
    }
  };
}
function F5(n) {
  let e, t;
  return e = new h5({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      U4(e.$$.fragment);
    },
    l(r) {
      V4(e.$$.fragment, r);
    },
    m(r, a) {
      Z4(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (d0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      C0(e.$$.fragment, r), t = !1;
    },
    d(r) {
      j4(e, r);
    }
  };
}
function x5(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && Hu(n)
  );
  return {
    c() {
      e = x0("div"), t = x0("div"), s && s.c(), r = $t(), a = x0("div"), i = x0("div"), this.h();
    },
    l(o) {
      e = F0(o, "DIV", { class: !0 });
      var c = S0(e);
      t = F0(c, "DIV", { class: !0 });
      var h = S0(t);
      s && s.l(h), h.forEach(Q), r = Jt(c), a = F0(c, "DIV", { class: !0 });
      var m = S0(a);
      i = F0(m, "DIV", { class: !0 }), S0(i).forEach(Q), m.forEach(Q), c.forEach(Q), this.h();
    },
    h() {
      m0(t, "class", "progress-level-inner svelte-17v219f"), m0(i, "class", "progress-bar svelte-17v219f"), pr(i, "width", l), m0(a, "class", "progress-bar-wrap svelte-17v219f"), m0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, c) {
      le(o, e, c), Mr(e, t), s && s.m(t, null), Mr(e, r), Mr(e, a), Mr(a, i), n[31](i);
    },
    p(o, c) {
      /*progress*/
      o[7] != null ? s ? s.p(o, c) : (s = Hu(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), c[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && pr(i, "width", l);
    },
    i: hs,
    o: hs,
    d(o) {
      o && Q(e), s && s.d(), n[31](null);
    }
  };
}
function Hu(n) {
  let e, t = si(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Wu(Nu(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = r0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = r0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      le(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = si(
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
      a && Q(e), W4(r, a);
    }
  };
}
function Vu(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && C5()
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
      i && i.c(), e = $t(), l && l.c(), t = $t(), s && s.c(), r = $t(), o && o.c(), a = r0();
    },
    l(c) {
      i && i.l(c), e = Jt(c), l && l.l(c), t = Jt(c), s && s.l(c), r = Jt(c), o && o.l(c), a = r0();
    },
    m(c, h) {
      i && i.m(c, h), le(c, e, h), l && l.m(c, h), le(c, t, h), s && s.m(c, h), le(c, r, h), o && o.m(c, h), le(c, a, h);
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
function C5(n) {
  let e;
  return {
    c() {
      e = He(" /");
    },
    l(t) {
      e = Pe(t, " /");
    },
    m(t, r) {
      le(t, e, r);
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
      le(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && n0(t, e);
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
      le(t, e, r);
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
      le(a, t, i), le(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && n0(t, e);
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
      t && t.c(), e = r0();
    },
    l(r) {
      t && t.l(r), e = r0();
    },
    m(r, a) {
      t && t.m(r, a), le(r, e, a);
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
  ), l = G4(
    i,
    n,
    /*$$scope*/
    n[29],
    Iu
  );
  return {
    c() {
      e = x0("p"), t = He(
        /*loading_text*/
        n[9]
      ), r = $t(), l && l.c(), this.h();
    },
    l(s) {
      e = F0(s, "P", { class: !0 });
      var o = S0(e);
      t = Pe(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(Q), r = Jt(s), l && l.l(s), this.h();
    },
    h() {
      m0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      le(s, e, o), Mr(e, t), le(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && n0(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && K4(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? X4(
          i,
          /*$$scope*/
          s[29],
          o,
          b5
        ) : Y4(
          /*$$scope*/
          s[29]
        ),
        Iu
      );
    },
    i(s) {
      a || (d0(l, s), a = !0);
    },
    o(s) {
      C0(l, s), a = !1;
    },
    d(s) {
      s && (Q(e), Q(r)), l && l.d(s);
    }
  };
}
function T5(n) {
  let e, t, r, a, i;
  const l = [w5, y5], s = [];
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
      e = x0("div"), r && r.c(), this.h();
    },
    l(c) {
      e = F0(c, "DIV", { class: !0 });
      var h = S0(e);
      r && r.l(h), h.forEach(Q), this.h();
    },
    h() {
      m0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), Zt(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), Zt(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), Zt(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), Zt(
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
      le(c, e, h), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(c, h) {
      let m = t;
      t = o(c), t === m ? ~t && s[t].p(c, h) : (r && (cs(), C0(s[m], 1, 1, () => {
        s[m] = null;
      }), us()), ~t ? (r = s[t], r ? r.p(c, h) : (r = s[t] = l[t](c), r.c()), d0(r, 1), r.m(e, null)) : r = null), (!i || h[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-17v219f")) && m0(e, "class", a), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Zt(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden" || /*status*/
      c[4] == "streaming"), (!i || h[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Zt(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Zt(
        e,
        "generating",
        /*status*/
        c[4] === "generating" && /*show_progress*/
        c[6] === "full"
      ), (!i || h[0] & /*variant, show_progress, border*/
      4416) && Zt(
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
      i || (d0(r), i = !0);
    },
    o(c) {
      C0(r), i = !1;
    },
    d(c) {
      c && Q(e), ~t && s[t].d(), n[33](null);
    }
  };
}
var M5 = function(n, e, t, r) {
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
let Pa = [], Tl = !1;
const B5 = typeof window < "u", Q4 = B5 ? window.requestAnimationFrame : (n) => {
};
function z5(n) {
  return M5(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Pa.push(e), !Tl) Tl = !0;
      else return;
      yield p5(), Q4(() => {
        let r = [0, 0];
        for (let a = 0; a < Pa.length; a++) {
          const l = Pa[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), Tl = !1, Pa = [];
      });
    }
  });
}
function I5(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = _5();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: c } = e, { queue_size: h } = e, { status: m } = e, { scroll_to_output: f = !1 } = e, { timer: p = !0 } = e, { show_progress: v = "full" } = e, { message: w = null } = e, { progress: S = null } = e, { variant: A = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: E = !1 } = e, { border: x = !1 } = e, { autoscroll: T } = e, z, I = !1, B = 0, R = 0, L = null, W = null, se = 0, q = null, oe, ae = null, we = !0;
  const de = () => {
    t(0, o = t(27, L = t(19, te = null))), t(25, B = performance.now()), t(26, R = 0), I = !0, ke();
  };
  function ke() {
    Q4(() => {
      t(26, R = (performance.now() - B) / 1e3), I && ke();
    });
  }
  function De() {
    t(26, R = 0), t(0, o = t(27, L = t(19, te = null))), I && (I = !1);
  }
  g5(() => {
    I && De();
  });
  let te = null;
  function ie(H) {
    Bu[H ? "unshift" : "push"](() => {
      ae = H, t(16, ae), t(7, S), t(14, q), t(15, oe);
    });
  }
  const me = () => {
    l("clear_status");
  };
  function Le(H) {
    Bu[H ? "unshift" : "push"](() => {
      z = H, t(13, z);
    });
  }
  return n.$$set = (H) => {
    "i18n" in H && t(1, s = H.i18n), "eta" in H && t(0, o = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, h = H.queue_size), "status" in H && t(4, m = H.status), "scroll_to_output" in H && t(22, f = H.scroll_to_output), "timer" in H && t(5, p = H.timer), "show_progress" in H && t(6, v = H.show_progress), "message" in H && t(23, w = H.message), "progress" in H && t(7, S = H.progress), "variant" in H && t(8, A = H.variant), "loading_text" in H && t(9, y = H.loading_text), "absolute" in H && t(10, b = H.absolute), "translucent" in H && t(11, E = H.translucent), "border" in H && t(12, x = H.border), "autoscroll" in H && t(24, T = H.autoscroll), "$$scope" in H && t(29, i = H.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = L), o != null && L !== o && (t(28, W = (performance.now() - B) / 1e3 + o), t(19, te = W.toFixed(1)), t(27, L = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, se = W === null || W <= 0 || !R ? null : Math.min(R / W, 1)), n.$$.dirty[0] & /*progress*/
    128 && S != null && t(18, we = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (S != null ? t(14, q = S.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, q = null), q ? (t(15, oe = q[q.length - 1]), ae && (oe === 0 ? t(16, ae.style.transition = "0", ae) : t(16, ae.style.transition = "150ms", ae))) : t(15, oe = void 0)), n.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? de() : De()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && f && (m === "pending" || m === "complete") && z5(z, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = R.toFixed(1));
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
    y,
    b,
    E,
    x,
    z,
    q,
    oe,
    ae,
    se,
    we,
    te,
    r,
    l,
    f,
    w,
    T,
    B,
    R,
    L,
    W,
    i,
    a,
    ie,
    me,
    Le
  ];
}
class N5 extends f5 {
  constructor(e) {
    super(), d5(
      this,
      e,
      I5,
      T5,
      m5,
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
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: J4,
  setPrototypeOf: Xu,
  isFrozen: R5,
  getPrototypeOf: L5,
  getOwnPropertyDescriptor: O5
} = Object;
let {
  freeze: Ft,
  seal: a0,
  create: $4
} = Object, {
  apply: fs,
  construct: ds
} = typeof Reflect < "u" && Reflect;
Ft || (Ft = function(e) {
  return e;
});
a0 || (a0 = function(e) {
  return e;
});
fs || (fs = function(e, t, r) {
  return e.apply(t, r);
});
ds || (ds = function(e, t) {
  return new e(...t);
});
const Ha = Gt(Array.prototype.forEach), Zu = Gt(Array.prototype.pop), Mn = Gt(Array.prototype.push), Qa = Gt(String.prototype.toLowerCase), Ml = Gt(String.prototype.toString), Ku = Gt(String.prototype.match), Bn = Gt(String.prototype.replace), q5 = Gt(String.prototype.indexOf), P5 = Gt(String.prototype.trim), c0 = Gt(Object.prototype.hasOwnProperty), Et = Gt(RegExp.prototype.test), zn = H5(TypeError);
function Gt(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return fs(n, e, r);
  };
}
function H5(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return ds(n, t);
  };
}
function pe(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qa;
  Xu && Xu(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (R5(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function V5(n) {
  for (let e = 0; e < n.length; e++)
    c0(n, e) || (n[e] = null);
  return n;
}
function Tr(n) {
  const e = $4(null);
  for (const [t, r] of J4(n))
    c0(n, t) && (Array.isArray(r) ? e[t] = V5(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = Tr(r) : e[t] = r);
  return e;
}
function In(n, e) {
  for (; n !== null; ) {
    const r = O5(n, e);
    if (r) {
      if (r.get)
        return Gt(r.get);
      if (typeof r.value == "function")
        return Gt(r.value);
    }
    n = L5(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Qu = Ft(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Bl = Ft(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), zl = Ft(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), U5 = Ft(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Il = Ft(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), G5 = Ft(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ju = Ft(["#text"]), $u = Ft(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Nl = Ft(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), e1 = Ft(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Va = Ft(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), j5 = a0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), W5 = a0(/<%[\w\W]*|[\w\W]*%>/gm), Y5 = a0(/\${[\w\W]*}/gm), X5 = a0(/^data-[\-\w.\u00B7-\uFFFF]/), Z5 = a0(/^aria-[\-\w]+$/), eh = a0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), K5 = a0(/^(?:\w+script|data):/i), Q5 = a0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), th = a0(/^html$/i), J5 = a0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var t1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: j5,
  ERB_EXPR: W5,
  TMPLIT_EXPR: Y5,
  DATA_ATTR: X5,
  ARIA_ATTR: Z5,
  IS_ALLOWED_URI: eh,
  IS_SCRIPT_OR_DATA: K5,
  ATTR_WHITESPACE: Q5,
  DOCTYPE_NAME: th,
  CUSTOM_ELEMENT: J5
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
}, $5 = function() {
  return typeof window > "u" ? null : window;
}, e3 = function(e, t) {
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
};
function rh() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $5();
  const e = (K) => rh(K);
  if (e.version = "3.1.7", e.removed = [], !n || !n.document || n.document.nodeType !== Nn.document)
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
  } = n, v = o.prototype, w = In(v, "cloneNode"), S = In(v, "remove"), A = In(v, "nextSibling"), y = In(v, "childNodes"), b = In(v, "parentNode");
  if (typeof l == "function") {
    const K = t.createElement("template");
    K.content && K.content.ownerDocument && (t = K.content.ownerDocument);
  }
  let E, x = "";
  const {
    implementation: T,
    createNodeIterator: z,
    createDocumentFragment: I,
    getElementsByTagName: B
  } = t, {
    importNode: R
  } = r;
  let L = {};
  e.isSupported = typeof J4 == "function" && typeof b == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: W,
    ERB_EXPR: se,
    TMPLIT_EXPR: q,
    DATA_ATTR: oe,
    ARIA_ATTR: ae,
    IS_SCRIPT_OR_DATA: we,
    ATTR_WHITESPACE: de,
    CUSTOM_ELEMENT: ke
  } = t1;
  let {
    IS_ALLOWED_URI: De
  } = t1, te = null;
  const ie = pe({}, [...Qu, ...Bl, ...zl, ...Il, ...Ju]);
  let me = null;
  const Le = pe({}, [...$u, ...Nl, ...e1, ...Va]);
  let H = Object.seal($4(null, {
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
  })), U = null, ve = null, _e = !0, Se = !0, Be = !1, Ie = !0, Ye = !1, ct = !0, Xe = !1, Ue = !1, Ge = !1, j = !1, N = !1, ce = !1, R0 = !0, fa = !1;
  const Er = "user-content-";
  let rr = !0, Sr = !1, nr = {}, g0 = null;
  const _0 = pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Wr = null;
  const ao = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Pi = null;
  const io = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), da = "http://www.w3.org/1998/Math/MathML", ma = "http://www.w3.org/2000/svg", L0 = "http://www.w3.org/1999/xhtml";
  let Yr = L0, Hi = !1, Vi = null;
  const Dh = pe({}, [da, ma, L0], Ml);
  let vn = null;
  const Ah = ["application/xhtml+xml", "text/html"], Eh = "text/html";
  let it = null, Xr = null;
  const Sh = t.createElement("form"), lo = function(C) {
    return C instanceof RegExp || C instanceof Function;
  }, Ui = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xr && Xr === C)) {
      if ((!C || typeof C != "object") && (C = {}), C = Tr(C), vn = // eslint-disable-next-line unicorn/prefer-includes
      Ah.indexOf(C.PARSER_MEDIA_TYPE) === -1 ? Eh : C.PARSER_MEDIA_TYPE, it = vn === "application/xhtml+xml" ? Ml : Qa, te = c0(C, "ALLOWED_TAGS") ? pe({}, C.ALLOWED_TAGS, it) : ie, me = c0(C, "ALLOWED_ATTR") ? pe({}, C.ALLOWED_ATTR, it) : Le, Vi = c0(C, "ALLOWED_NAMESPACES") ? pe({}, C.ALLOWED_NAMESPACES, Ml) : Dh, Pi = c0(C, "ADD_URI_SAFE_ATTR") ? pe(
        Tr(io),
        // eslint-disable-line indent
        C.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : io, Wr = c0(C, "ADD_DATA_URI_TAGS") ? pe(
        Tr(ao),
        // eslint-disable-line indent
        C.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : ao, g0 = c0(C, "FORBID_CONTENTS") ? pe({}, C.FORBID_CONTENTS, it) : _0, U = c0(C, "FORBID_TAGS") ? pe({}, C.FORBID_TAGS, it) : {}, ve = c0(C, "FORBID_ATTR") ? pe({}, C.FORBID_ATTR, it) : {}, nr = c0(C, "USE_PROFILES") ? C.USE_PROFILES : !1, _e = C.ALLOW_ARIA_ATTR !== !1, Se = C.ALLOW_DATA_ATTR !== !1, Be = C.ALLOW_UNKNOWN_PROTOCOLS || !1, Ie = C.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = C.SAFE_FOR_TEMPLATES || !1, ct = C.SAFE_FOR_XML !== !1, Xe = C.WHOLE_DOCUMENT || !1, j = C.RETURN_DOM || !1, N = C.RETURN_DOM_FRAGMENT || !1, ce = C.RETURN_TRUSTED_TYPE || !1, Ge = C.FORCE_BODY || !1, R0 = C.SANITIZE_DOM !== !1, fa = C.SANITIZE_NAMED_PROPS || !1, rr = C.KEEP_CONTENT !== !1, Sr = C.IN_PLACE || !1, De = C.ALLOWED_URI_REGEXP || eh, Yr = C.NAMESPACE || L0, H = C.CUSTOM_ELEMENT_HANDLING || {}, C.CUSTOM_ELEMENT_HANDLING && lo(C.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = C.CUSTOM_ELEMENT_HANDLING.tagNameCheck), C.CUSTOM_ELEMENT_HANDLING && lo(C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), C.CUSTOM_ELEMENT_HANDLING && typeof C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ye && (Se = !1), N && (j = !0), nr && (te = pe({}, Ju), me = [], nr.html === !0 && (pe(te, Qu), pe(me, $u)), nr.svg === !0 && (pe(te, Bl), pe(me, Nl), pe(me, Va)), nr.svgFilters === !0 && (pe(te, zl), pe(me, Nl), pe(me, Va)), nr.mathMl === !0 && (pe(te, Il), pe(me, e1), pe(me, Va))), C.ADD_TAGS && (te === ie && (te = Tr(te)), pe(te, C.ADD_TAGS, it)), C.ADD_ATTR && (me === Le && (me = Tr(me)), pe(me, C.ADD_ATTR, it)), C.ADD_URI_SAFE_ATTR && pe(Pi, C.ADD_URI_SAFE_ATTR, it), C.FORBID_CONTENTS && (g0 === _0 && (g0 = Tr(g0)), pe(g0, C.FORBID_CONTENTS, it)), rr && (te["#text"] = !0), Xe && pe(te, ["html", "head", "body"]), te.table && (pe(te, ["tbody"]), delete U.tbody), C.TRUSTED_TYPES_POLICY) {
        if (typeof C.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof C.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        E = C.TRUSTED_TYPES_POLICY, x = E.createHTML("");
      } else
        E === void 0 && (E = e3(p, a)), E !== null && typeof x == "string" && (x = E.createHTML(""));
      Ft && Ft(C), Xr = C;
    }
  }, so = pe({}, ["mi", "mo", "mn", "ms", "mtext"]), oo = pe({}, ["annotation-xml"]), Fh = pe({}, ["title", "style", "font", "a", "script"]), uo = pe({}, [...Bl, ...zl, ...U5]), co = pe({}, [...Il, ...G5]), xh = function(C) {
    let V = b(C);
    (!V || !V.tagName) && (V = {
      namespaceURI: Yr,
      tagName: "template"
    });
    const Z = Qa(C.tagName), Te = Qa(V.tagName);
    return Vi[C.namespaceURI] ? C.namespaceURI === ma ? V.namespaceURI === L0 ? Z === "svg" : V.namespaceURI === da ? Z === "svg" && (Te === "annotation-xml" || so[Te]) : !!uo[Z] : C.namespaceURI === da ? V.namespaceURI === L0 ? Z === "math" : V.namespaceURI === ma ? Z === "math" && oo[Te] : !!co[Z] : C.namespaceURI === L0 ? V.namespaceURI === ma && !oo[Te] || V.namespaceURI === da && !so[Te] ? !1 : !co[Z] && (Fh[Z] || !uo[Z]) : !!(vn === "application/xhtml+xml" && Vi[C.namespaceURI]) : !1;
  }, v0 = function(C) {
    Mn(e.removed, {
      element: C
    });
    try {
      b(C).removeChild(C);
    } catch {
      S(C);
    }
  }, pa = function(C, V) {
    try {
      Mn(e.removed, {
        attribute: V.getAttributeNode(C),
        from: V
      });
    } catch {
      Mn(e.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(C), C === "is" && !me[C])
      if (j || N)
        try {
          v0(V);
        } catch {
        }
      else
        try {
          V.setAttribute(C, "");
        } catch {
        }
  }, ho = function(C) {
    let V = null, Z = null;
    if (Ge)
      C = "<remove></remove>" + C;
    else {
      const ht = Ku(C, /^[\r\n\t ]+/);
      Z = ht && ht[0];
    }
    vn === "application/xhtml+xml" && Yr === L0 && (C = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + C + "</body></html>");
    const Te = E ? E.createHTML(C) : C;
    if (Yr === L0)
      try {
        V = new f().parseFromString(Te, vn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = T.createDocument(Yr, "template", null);
      try {
        V.documentElement.innerHTML = Hi ? x : Te;
      } catch {
      }
    }
    const yt = V.body || V.documentElement;
    return C && Z && yt.insertBefore(t.createTextNode(Z), yt.childNodes[0] || null), Yr === L0 ? B.call(V, Xe ? "html" : "body")[0] : Xe ? V.documentElement : yt;
  }, fo = function(C) {
    return z.call(
      C.ownerDocument || C,
      C,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, mo = function(C) {
    return C instanceof m && (typeof C.nodeName != "string" || typeof C.textContent != "string" || typeof C.removeChild != "function" || !(C.attributes instanceof h) || typeof C.removeAttribute != "function" || typeof C.setAttribute != "function" || typeof C.namespaceURI != "string" || typeof C.insertBefore != "function" || typeof C.hasChildNodes != "function");
  }, po = function(C) {
    return typeof s == "function" && C instanceof s;
  }, O0 = function(C, V, Z) {
    L[C] && Ha(L[C], (Te) => {
      Te.call(e, V, Z, Xr);
    });
  }, go = function(C) {
    let V = null;
    if (O0("beforeSanitizeElements", C, null), mo(C))
      return v0(C), !0;
    const Z = it(C.nodeName);
    if (O0("uponSanitizeElement", C, {
      tagName: Z,
      allowedTags: te
    }), C.hasChildNodes() && !po(C.firstElementChild) && Et(/<[/\w]/g, C.innerHTML) && Et(/<[/\w]/g, C.textContent) || C.nodeType === Nn.progressingInstruction || ct && C.nodeType === Nn.comment && Et(/<[/\w]/g, C.data))
      return v0(C), !0;
    if (!te[Z] || U[Z]) {
      if (!U[Z] && vo(Z) && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, Z) || H.tagNameCheck instanceof Function && H.tagNameCheck(Z)))
        return !1;
      if (rr && !g0[Z]) {
        const Te = b(C) || C.parentNode, yt = y(C) || C.childNodes;
        if (yt && Te) {
          const ht = yt.length;
          for (let Ct = ht - 1; Ct >= 0; --Ct) {
            const b0 = w(yt[Ct], !0);
            b0.__removalCount = (C.__removalCount || 0) + 1, Te.insertBefore(b0, A(C));
          }
        }
      }
      return v0(C), !0;
    }
    return C instanceof o && !xh(C) || (Z === "noscript" || Z === "noembed" || Z === "noframes") && Et(/<\/no(script|embed|frames)/i, C.innerHTML) ? (v0(C), !0) : (Ye && C.nodeType === Nn.text && (V = C.textContent, Ha([W, se, q], (Te) => {
      V = Bn(V, Te, " ");
    }), C.textContent !== V && (Mn(e.removed, {
      element: C.cloneNode()
    }), C.textContent = V)), O0("afterSanitizeElements", C, null), !1);
  }, _o = function(C, V, Z) {
    if (R0 && (V === "id" || V === "name") && (Z in t || Z in Sh))
      return !1;
    if (!(Se && !ve[V] && Et(oe, V))) {
      if (!(_e && Et(ae, V))) {
        if (!me[V] || ve[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vo(C) && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, C) || H.tagNameCheck instanceof Function && H.tagNameCheck(C)) && (H.attributeNameCheck instanceof RegExp && Et(H.attributeNameCheck, V) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(V)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, Z) || H.tagNameCheck instanceof Function && H.tagNameCheck(Z)))
          ) return !1;
        } else if (!Pi[V]) {
          if (!Et(De, Bn(Z, de, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && C !== "script" && q5(Z, "data:") === 0 && Wr[C])) {
              if (!(Be && !Et(we, Bn(Z, de, "")))) {
                if (Z)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vo = function(C) {
    return C !== "annotation-xml" && Ku(C, ke);
  }, bo = function(C) {
    O0("beforeSanitizeAttributes", C, null);
    const {
      attributes: V
    } = C;
    if (!V)
      return;
    const Z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me
    };
    let Te = V.length;
    for (; Te--; ) {
      const yt = V[Te], {
        name: ht,
        namespaceURI: Ct,
        value: b0
      } = yt, bn = it(ht);
      let Dt = ht === "value" ? b0 : P5(b0);
      if (Z.attrName = bn, Z.attrValue = Dt, Z.keepAttr = !0, Z.forceKeepAttr = void 0, O0("uponSanitizeAttribute", C, Z), Dt = Z.attrValue, Z.forceKeepAttr || (pa(ht, C), !Z.keepAttr))
        continue;
      if (!Ie && Et(/\/>/i, Dt)) {
        pa(ht, C);
        continue;
      }
      Ye && Ha([W, se, q], (wo) => {
        Dt = Bn(Dt, wo, " ");
      });
      const yo = it(C.nodeName);
      if (_o(yo, bn, Dt)) {
        if (fa && (bn === "id" || bn === "name") && (pa(ht, C), Dt = Er + Dt), ct && Et(/((--!?|])>)|<\/(style|title)/i, Dt)) {
          pa(ht, C);
          continue;
        }
        if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Ct)
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
          Ct ? C.setAttributeNS(Ct, ht, Dt) : C.setAttribute(ht, Dt), mo(C) ? v0(C) : Zu(e.removed);
        } catch {
        }
      }
    }
    O0("afterSanitizeAttributes", C, null);
  }, Ch = function K(C) {
    let V = null;
    const Z = fo(C);
    for (O0("beforeSanitizeShadowDOM", C, null); V = Z.nextNode(); )
      O0("uponSanitizeShadowNode", V, null), !go(V) && (V.content instanceof i && K(V.content), bo(V));
    O0("afterSanitizeShadowDOM", C, null);
  };
  return e.sanitize = function(K) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, Z = null, Te = null, yt = null;
    if (Hi = !K, Hi && (K = "<!-->"), typeof K != "string" && !po(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw zn("dirty is not a string, aborting");
      } else
        throw zn("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Ue || Ui(C), e.removed = [], typeof K == "string" && (Sr = !1), Sr) {
      if (K.nodeName) {
        const b0 = it(K.nodeName);
        if (!te[b0] || U[b0])
          throw zn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof s)
      V = ho("<!---->"), Z = V.ownerDocument.importNode(K, !0), Z.nodeType === Nn.element && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? V = Z : V.appendChild(Z);
    else {
      if (!j && !Ye && !Xe && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return E && ce ? E.createHTML(K) : K;
      if (V = ho(K), !V)
        return j ? null : ce ? x : "";
    }
    V && Ge && v0(V.firstChild);
    const ht = fo(Sr ? K : V);
    for (; Te = ht.nextNode(); )
      go(Te) || (Te.content instanceof i && Ch(Te.content), bo(Te));
    if (Sr)
      return K;
    if (j) {
      if (N)
        for (yt = I.call(V.ownerDocument); V.firstChild; )
          yt.appendChild(V.firstChild);
      else
        yt = V;
      return (me.shadowroot || me.shadowrootmode) && (yt = R.call(r, yt, !0)), yt;
    }
    let Ct = Xe ? V.outerHTML : V.innerHTML;
    return Xe && te["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Et(th, V.ownerDocument.doctype.name) && (Ct = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + Ct), Ye && Ha([W, se, q], (b0) => {
      Ct = Bn(Ct, b0, " ");
    }), E && ce ? E.createHTML(Ct) : Ct;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ui(K), Ue = !0;
  }, e.clearConfig = function() {
    Xr = null, Ue = !1;
  }, e.isValidAttribute = function(K, C, V) {
    Xr || Ui({});
    const Z = it(K), Te = it(C);
    return _o(Z, Te, V);
  }, e.addHook = function(K, C) {
    typeof C == "function" && (L[K] = L[K] || [], Mn(L[K], C));
  }, e.removeHook = function(K) {
    if (L[K])
      return Zu(L[K]);
  }, e.removeHooks = function(K) {
    L[K] && (L[K] = []);
  }, e.removeAllHooks = function() {
    L = {};
  }, e;
}
rh();
const {
  SvelteComponent: t3,
  attr: r3,
  children: n3,
  claim_element: a3,
  detach: ms,
  element: i3,
  empty: r1,
  init: l3,
  insert_hydration: nh,
  noop: n1,
  safe_not_equal: s3,
  set_style: a1
} = window.__gradio__svelte__internal;
function i1(n) {
  let e, t = `${/*time_limit*/
  n[0]}s`;
  return {
    c() {
      e = i3("div"), this.h();
    },
    l(r) {
      e = a3(r, "DIV", { class: !0 }), n3(e).forEach(ms), this.h();
    },
    h() {
      r3(e, "class", "streaming-bar svelte-ga0jj6"), a1(e, "animation-duration", t);
    },
    m(r, a) {
      nh(r, e, a);
    },
    p(r, a) {
      a & /*time_limit*/
      1 && t !== (t = `${/*time_limit*/
      r[0]}s`) && a1(e, "animation-duration", t);
    },
    d(r) {
      r && ms(e);
    }
  };
}
function o3(n) {
  let e, t = (
    /*time_limit*/
    n[0] && i1(n)
  );
  return {
    c() {
      t && t.c(), e = r1();
    },
    l(r) {
      t && t.l(r), e = r1();
    },
    m(r, a) {
      t && t.m(r, a), nh(r, e, a);
    },
    p(r, [a]) {
      /*time_limit*/
      r[0] ? t ? t.p(r, a) : (t = i1(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: n1,
    o: n1,
    d(r) {
      r && ms(e), t && t.d(r);
    }
  };
}
function u3(n, e, t) {
  let { time_limit: r } = e;
  return n.$$set = (a) => {
    "time_limit" in a && t(0, r = a.time_limit);
  }, [r];
}
class ah extends t3 {
  constructor(e) {
    super(), l3(this, e, u3, o3, s3, { time_limit: 0 });
  }
}
const {
  SvelteComponent: c3,
  append_hydration: Rl,
  attr: Ua,
  children: l1,
  claim_component: h3,
  claim_element: s1,
  claim_space: f3,
  claim_text: d3,
  create_component: m3,
  destroy_component: p3,
  detach: Ll,
  element: o1,
  init: g3,
  insert_hydration: _3,
  mount_component: v3,
  safe_not_equal: b3,
  set_data: y3,
  space: w3,
  text: k3,
  toggle_class: hr,
  transition_in: D3,
  transition_out: A3
} = window.__gradio__svelte__internal;
function E3(n) {
  let e, t, r, a, i, l;
  return r = new /*Icon*/
  n[1]({}), {
    c() {
      e = o1("label"), t = o1("span"), m3(r.$$.fragment), a = w3(), i = k3(
        /*label*/
        n[0]
      ), this.h();
    },
    l(s) {
      e = s1(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = l1(e);
      t = s1(o, "SPAN", { class: !0 });
      var c = l1(t);
      h3(r.$$.fragment, c), c.forEach(Ll), a = f3(o), i = d3(
        o,
        /*label*/
        n[0]
      ), o.forEach(Ll), this.h();
    },
    h() {
      Ua(t, "class", "svelte-168uj4v"), Ua(e, "for", ""), Ua(e, "data-testid", "block-label"), Ua(e, "class", "svelte-168uj4v"), hr(e, "hide", !/*show_label*/
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
      _3(s, e, o), Rl(e, t), v3(r, t, null), Rl(e, a), Rl(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && y3(
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
      l || (D3(r.$$.fragment, s), l = !0);
    },
    o(s) {
      A3(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Ll(e), p3(r);
    }
  };
}
function S3(n, e, t) {
  let { label: r = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return n.$$set = (o) => {
    "label" in o && t(0, r = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [r, a, i, l, s];
}
class Ci extends c3 {
  constructor(e) {
    super(), g3(this, e, S3, E3, b3, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: F3,
  append_hydration: ps,
  attr: H0,
  bubble: x3,
  check_outros: C3,
  children: gs,
  claim_component: T3,
  claim_element: _s,
  claim_space: M3,
  claim_text: B3,
  construct_svelte_component: u1,
  create_component: c1,
  destroy_component: h1,
  detach: Un,
  element: vs,
  group_outros: z3,
  init: I3,
  insert_hydration: ih,
  listen: N3,
  mount_component: f1,
  safe_not_equal: R3,
  set_data: L3,
  set_style: Ga,
  space: O3,
  text: q3,
  toggle_class: Tt,
  transition_in: d1,
  transition_out: m1
} = window.__gradio__svelte__internal;
function p1(n) {
  let e, t;
  return {
    c() {
      e = vs("span"), t = q3(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = _s(r, "SPAN", { class: !0 });
      var a = gs(e);
      t = B3(
        a,
        /*label*/
        n[1]
      ), a.forEach(Un), this.h();
    },
    h() {
      H0(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      ih(r, e, a), ps(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && L3(
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
function P3(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && p1(n)
  );
  var c = (
    /*Icon*/
    n[0]
  );
  function h(m, f) {
    return {};
  }
  return c && (a = u1(c, h())), {
    c() {
      e = vs("button"), o && o.c(), t = O3(), r = vs("div"), a && c1(a.$$.fragment), this.h();
    },
    l(m) {
      e = _s(m, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var f = gs(e);
      o && o.l(f), t = M3(f), r = _s(f, "DIV", { class: !0 });
      var p = gs(r);
      a && T3(a.$$.fragment, p), p.forEach(Un), f.forEach(Un), this.h();
    },
    h() {
      H0(r, "class", "svelte-vk34kx"), Tt(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), Tt(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), Tt(
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
      ), H0(e, "class", "svelte-vk34kx"), Tt(
        e,
        "pending",
        /*pending*/
        n[3]
      ), Tt(
        e,
        "padded",
        /*padded*/
        n[5]
      ), Tt(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), Tt(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), Ga(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), Ga(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(m, f) {
      ih(m, e, f), o && o.m(e, null), ps(e, t), ps(e, r), a && f1(a, r, null), i = !0, l || (s = N3(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(m, [f]) {
      if (/*show_label*/
      m[2] ? o ? o.p(m, f) : (o = p1(m), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f & /*Icon*/
      1 && c !== (c = /*Icon*/
      m[0])) {
        if (a) {
          z3();
          const p = a;
          m1(p.$$.fragment, 1, 0, () => {
            h1(p, 1);
          }), C3();
        }
        c ? (a = u1(c, h()), c1(a.$$.fragment), d1(a.$$.fragment, 1), f1(a, r, null)) : a = null;
      }
      (!i || f & /*size*/
      16) && Tt(
        r,
        "small",
        /*size*/
        m[4] === "small"
      ), (!i || f & /*size*/
      16) && Tt(
        r,
        "large",
        /*size*/
        m[4] === "large"
      ), (!i || f & /*size*/
      16) && Tt(
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
      8) && Tt(
        e,
        "pending",
        /*pending*/
        m[3]
      ), (!i || f & /*padded*/
      32) && Tt(
        e,
        "padded",
        /*padded*/
        m[5]
      ), (!i || f & /*highlight*/
      64) && Tt(
        e,
        "highlight",
        /*highlight*/
        m[6]
      ), (!i || f & /*transparent*/
      512) && Tt(
        e,
        "transparent",
        /*transparent*/
        m[9]
      ), f & /*disabled, _color*/
      2176 && Ga(e, "color", !/*disabled*/
      m[7] && /*_color*/
      m[11] ? (
        /*_color*/
        m[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Ga(e, "--bg-color", /*disabled*/
      m[7] ? "auto" : (
        /*background*/
        m[10]
      ));
    },
    i(m) {
      i || (a && d1(a.$$.fragment, m), i = !0);
    },
    o(m) {
      a && m1(a.$$.fragment, m), i = !1;
    },
    d(m) {
      m && Un(e), o && o.d(), a && h1(a), l = !1, s();
    }
  };
}
function H3(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: s = !1 } = e, { size: o = "small" } = e, { padded: c = !0 } = e, { highlight: h = !1 } = e, { disabled: m = !1 } = e, { hasPopup: f = !1 } = e, { color: p = "var(--block-label-text-color)" } = e, { transparent: v = !1 } = e, { background: w = "var(--block-background-fill)" } = e;
  function S(A) {
    x3.call(this, n, A);
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
class V3 extends F3 {
  constructor(e) {
    super(), I3(this, e, H3, P3, R3, {
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
  SvelteComponent: U3,
  append_hydration: G3,
  attr: Ol,
  binding_callbacks: j3,
  children: g1,
  claim_element: _1,
  create_slot: W3,
  detach: ql,
  element: v1,
  get_all_dirty_from_scope: Y3,
  get_slot_changes: X3,
  init: Z3,
  insert_hydration: K3,
  safe_not_equal: Q3,
  toggle_class: fr,
  transition_in: J3,
  transition_out: $3,
  update_slot_base: e6
} = window.__gradio__svelte__internal;
function t6(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[5].default
  ), i = W3(
    a,
    n,
    /*$$scope*/
    n[4],
    null
  );
  return {
    c() {
      e = v1("div"), t = v1("div"), i && i.c(), this.h();
    },
    l(l) {
      e = _1(l, "DIV", { class: !0, "aria-label": !0 });
      var s = g1(e);
      t = _1(s, "DIV", { class: !0 });
      var o = g1(t);
      i && i.l(o), o.forEach(ql), s.forEach(ql), this.h();
    },
    h() {
      Ol(t, "class", "icon svelte-3w3rth"), Ol(e, "class", "empty svelte-3w3rth"), Ol(e, "aria-label", "Empty value"), fr(
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
      K3(l, e, s), G3(e, t), i && i.m(t, null), n[6](e), r = !0;
    },
    p(l, [s]) {
      i && i.p && (!r || s & /*$$scope*/
      16) && e6(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        r ? X3(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : Y3(
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
      r || (J3(i, l), r = !0);
    },
    o(l) {
      $3(i, l), r = !1;
    },
    d(l) {
      l && ql(e), i && i.d(l), n[6](null);
    }
  };
}
function r6(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function c(m) {
    var f;
    if (!m) return !1;
    const { height: p } = m.getBoundingClientRect(), { height: v } = ((f = m.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: p };
    return p > v + 2;
  }
  function h(m) {
    j3[m ? "unshift" : "push"](() => {
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
class lh extends U3 {
  constructor(e) {
    super(), Z3(this, e, r6, t6, Q3, { size: 0, unpadded_box: 1 });
  }
}
const n6 = /^(#\s*)(.+)$/m;
function a6(n) {
  const e = n.trim(), t = e.match(n6);
  if (!t)
    return [!1, e || !1];
  const [r, , a] = t, i = a.trim();
  if (e === r)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + r.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: i6,
  append_hydration: Ir,
  attr: Zn,
  check_outros: l6,
  children: Kn,
  claim_component: sh,
  claim_element: Qn,
  claim_space: Ti,
  claim_text: Br,
  create_component: oh,
  destroy_component: uh,
  detach: kt,
  element: Jn,
  empty: oi,
  group_outros: s6,
  init: o6,
  insert_hydration: p0,
  mount_component: ch,
  safe_not_equal: u6,
  set_data: $n,
  space: Mi,
  text: zr,
  toggle_class: b1,
  transition_in: ui,
  transition_out: ci
} = window.__gradio__svelte__internal;
function c6(n) {
  let e, t;
  return e = new Wf({}), {
    c() {
      oh(e.$$.fragment);
    },
    l(r) {
      sh(e.$$.fragment, r);
    },
    m(r, a) {
      ch(e, r, a), t = !0;
    },
    i(r) {
      t || (ui(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ci(e.$$.fragment, r), t = !1;
    },
    d(r) {
      uh(e, r);
    }
  };
}
function h6(n) {
  let e, t;
  return e = new kf({}), {
    c() {
      oh(e.$$.fragment);
    },
    l(r) {
      sh(e.$$.fragment, r);
    },
    m(r, a) {
      ch(e, r, a), t = !0;
    },
    i(r) {
      t || (ui(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ci(e.$$.fragment, r), t = !1;
    },
    d(r) {
      uh(e, r);
    }
  };
}
function f6(n) {
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
    n[3] !== "short" && y1(n)
  );
  return {
    c() {
      t = zr(e), r = Mi(), i && i.c(), a = oi();
    },
    l(l) {
      t = Br(l, e), r = Ti(l), i && i.l(l), a = oi();
    },
    m(l, s) {
      p0(l, t, s), p0(l, r, s), i && i.m(l, s), p0(l, a, s);
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
      l[3] !== "short" ? i ? i.p(l, s) : (i = y1(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (kt(t), kt(r), kt(a)), i && i.d(l);
    }
  };
}
function d6(n) {
  let e, t, r = (
    /*heading*/
    n[6] && w1(n)
  ), a = (
    /*paragraph*/
    n[5] && k1(n)
  );
  return {
    c() {
      r && r.c(), e = Mi(), a && a.c(), t = oi();
    },
    l(i) {
      r && r.l(i), e = Ti(i), a && a.l(i), t = oi();
    },
    m(i, l) {
      r && r.m(i, l), p0(i, e, l), a && a.m(i, l), p0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? r ? r.p(i, l) : (r = w1(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = k1(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (kt(e), kt(t)), r && r.d(i), a && a.d(i);
    }
  };
}
function y1(n) {
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
      e = Jn("span"), t = zr("- "), a = zr(r), i = zr(" -"), l = Mi(), o = zr(s), this.h();
    },
    l(c) {
      e = Qn(c, "SPAN", { class: !0 });
      var h = Kn(e);
      t = Br(h, "- "), a = Br(h, r), i = Br(h, " -"), h.forEach(kt), l = Ti(c), o = Br(c, s), this.h();
    },
    h() {
      Zn(e, "class", "or svelte-1xg7h5n");
    },
    m(c, h) {
      p0(c, e, h), Ir(e, t), Ir(e, a), Ir(e, i), p0(c, l, h), p0(c, o, h);
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
function w1(n) {
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
      p0(r, e, a), Ir(e, t);
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
function k1(n) {
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
      p0(r, e, a), Ir(e, t);
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
function m6(n) {
  let e, t, r, a, i, l;
  const s = [h6, c6], o = [];
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
      p[5] ? d6 : f6
    );
  }
  let m = h(n), f = m(n);
  return {
    c() {
      e = Jn("div"), t = Jn("span"), a.c(), i = Mi(), f.c(), this.h();
    },
    l(p) {
      e = Qn(p, "DIV", { class: !0 });
      var v = Kn(e);
      t = Qn(v, "SPAN", { class: !0 });
      var w = Kn(t);
      a.l(w), w.forEach(kt), i = Ti(v), f.l(v), v.forEach(kt), this.h();
    },
    h() {
      Zn(t, "class", "icon-wrap svelte-1xg7h5n"), b1(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), Zn(e, "class", "wrap svelte-1xg7h5n");
    },
    m(p, v) {
      p0(p, e, v), Ir(e, t), o[r].m(t, null), Ir(e, i), f.m(e, null), l = !0;
    },
    p(p, [v]) {
      let w = r;
      r = c(p), r !== w && (s6(), ci(o[w], 1, 1, () => {
        o[w] = null;
      }), l6(), a = o[r], a || (a = o[r] = s[r](p), a.c()), ui(a, 1), a.m(t, null)), (!l || v & /*hovered*/
      16) && b1(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), m === (m = h(p)) && f ? f.p(p, v) : (f.d(1), f = m(p), f && (f.c(), f.m(e, null)));
    },
    i(p) {
      l || (ui(a), l = !0);
    },
    o(p) {
      ci(a), l = !1;
    },
    d(p) {
      p && kt(e), o[r].d(), f.d();
    }
  };
}
function p6(n, e, t) {
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
    256 && t(6, [r, a] = h ? a6(h) : [!1, !1], r, (t(5, a), t(8, h)));
  }, [i, l, s, o, c, a, r, m, h];
}
class g6 extends i6 {
  constructor(e) {
    super(), o6(this, e, p6, m6, u6, {
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
  SvelteComponent: _6,
  append_hydration: ja,
  attr: Pl,
  check_outros: v6,
  children: Hl,
  claim_component: b6,
  claim_element: Vl,
  claim_space: y6,
  claim_text: w6,
  construct_svelte_component: D1,
  create_component: A1,
  destroy_component: E1,
  detach: Wa,
  element: Ul,
  group_outros: k6,
  init: D6,
  insert_hydration: A6,
  listen: E6,
  mount_component: S1,
  safe_not_equal: S6,
  set_data: F6,
  set_style: x6,
  space: C6,
  text: T6,
  transition_in: F1,
  transition_out: x1
} = window.__gradio__svelte__internal, { createEventDispatcher: M6 } = window.__gradio__svelte__internal;
function B6(n) {
  let e, t, r, a, i, l, s, o, c;
  var h = (
    /*icon*/
    n[0]
  );
  function m(f, p) {
    return {};
  }
  return h && (a = D1(h, m())), {
    c() {
      e = Ul("button"), t = Ul("div"), r = Ul("span"), a && A1(a.$$.fragment), i = C6(), l = T6(
        /*text*/
        n[1]
      ), this.h();
    },
    l(f) {
      e = Vl(f, "BUTTON", { class: !0 });
      var p = Hl(e);
      t = Vl(p, "DIV", { class: !0 });
      var v = Hl(t);
      r = Vl(v, "SPAN", { class: !0 });
      var w = Hl(r);
      a && b6(a.$$.fragment, w), w.forEach(Wa), i = y6(v), l = w6(
        v,
        /*text*/
        n[1]
      ), v.forEach(Wa), p.forEach(Wa), this.h();
    },
    h() {
      Pl(r, "class", "icon-wrap svelte-1kt44zd"), Pl(t, "class", "wrap svelte-1kt44zd"), Pl(e, "class", "svelte-1kt44zd"), x6(e, "height", "100%");
    },
    m(f, p) {
      A6(f, e, p), ja(e, t), ja(t, r), a && S1(a, r, null), ja(t, i), ja(t, l), s = !0, o || (c = E6(
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
          k6();
          const v = a;
          x1(v.$$.fragment, 1, 0, () => {
            E1(v, 1);
          }), v6();
        }
        h ? (a = D1(h, m()), A1(a.$$.fragment), F1(a.$$.fragment, 1), S1(a, r, null)) : a = null;
      }
      (!s || p & /*text*/
      2) && F6(
        l,
        /*text*/
        f[1]
      );
    },
    i(f) {
      s || (a && F1(a.$$.fragment, f), s = !0);
    },
    o(f) {
      a && x1(a.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Wa(e), a && E1(a), o = !1, c();
    }
  };
}
function z6(n, e, t) {
  let r, { icon: a = Vo } = e;
  const i = M6(), l = () => i("click");
  return n.$$set = (s) => {
    "icon" in s && t(0, a = s.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    1 && t(1, r = a === Vo ? "Click to Access Webcam" : "Click to Access Microphone");
  }, [a, r, i, l];
}
class hh extends _6 {
  constructor(e) {
    super(), D6(this, e, z6, B6, S6, { icon: 0 });
  }
}
function fh() {
  return navigator.mediaDevices.enumerateDevices();
}
function I6(n, e) {
  e.srcObject = n, e.muted = !0, e.play();
}
async function C1(n, e, t, r) {
  const a = r || {
    width: { ideal: 500 },
    height: { ideal: 500 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...a } : a,
    audio: n
  };
  return navigator.mediaDevices.getUserMedia(i).then((l) => (I6(l, e), l));
}
function dh(n, e = "videoinput") {
  return n.filter(
    (r) => r.kind === e
  );
}
function N6(n, e) {
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
async function Bi(n, e, t, r, a, i = "video", l = () => {
}, s = {}, o = () => {
}, c = () => {
}) {
  e = N6(e, t);
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
  }) : (console.debug("Creating transceiver!"), e.addTransceiver(i, { direction: "recvonly" })), await L6(e, r, a, c), e;
}
function R6(n, e, t = () => {
}) {
  return new Promise((r, a) => {
    n(e).then((i) => {
      console.debug("data", i), (i == null ? void 0 : i.status) === "failed" && (t(i), console.debug("rejecting"), a("error")), r(i);
    });
  });
}
async function L6(n, e, t, r = () => {
}) {
  return n.onicecandidate = ({ candidate: a }) => {
    a && (console.debug("Sending ICE candidate", a), e({
      candidate: a.toJSON(),
      webrtc_id: t,
      type: "ice-candidate"
    }).catch((i) => console.error("Error sending ICE candidate:", i)));
  }, n.createOffer().then((a) => n.setLocalDescription(a)).then(() => {
    var a = n.localDescription;
    return R6(
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
function zt(n) {
  console.debug("Stopping peer connection"), n.getTransceivers && n.getTransceivers().forEach((e) => {
    e.stop && e.stop();
  }), n.getSenders() && n.getSenders().forEach((e) => {
    console.log("sender", e), e.track && e.track.stop && e.track.stop();
  }), setTimeout(() => {
    n.close();
  }, 500);
}
const {
  SvelteComponent: O6,
  append_hydration: Gl,
  attr: gr,
  check_outros: mh,
  children: fn,
  claim_component: q6,
  claim_element: Nr,
  claim_space: P6,
  construct_svelte_component: T1,
  create_component: M1,
  destroy_component: B1,
  destroy_each: H6,
  detach: e0,
  element: Rr,
  empty: z1,
  ensure_array_like: I1,
  group_outros: ph,
  init: V6,
  insert_hydration: _n,
  mount_component: N1,
  noop: Gn,
  safe_not_equal: U6,
  set_style: Ht,
  space: G6,
  src_url_equal: R1,
  transition_in: hi,
  transition_out: fi
} = window.__gradio__svelte__internal, { onDestroy: j6 } = window.__gradio__svelte__internal;
function L1(n, e, t) {
  const r = n.slice();
  return r[15] = e[t], r[17] = t, r;
}
function O1(n) {
  let e, t = I1(Array(3)), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = q1(L1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = z1();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = z1();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      _n(a, e, i);
    },
    p(a, i) {
      if (i & /*pulse_color, maxPulseScale, pulseIntensity*/
      84) {
        t = I1(Array(3));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = L1(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = q1(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && e0(e), H6(r, a);
    }
  };
}
function q1(n) {
  let e;
  return {
    c() {
      e = Rr("div"), this.h();
    },
    l(t) {
      e = Nr(t, "DIV", { class: !0 }), fn(e).forEach(e0), this.h();
    },
    h() {
      gr(e, "class", "pulse-ring svelte-126lrgf"), Ht(
        e,
        "background",
        /*pulse_color*/
        n[2]
      ), Ht(e, "animation-delay", `${/*i*/
      n[17] * 0.4}s`), Ht(
        e,
        "--max-scale",
        /*maxPulseScale*/
        n[6]
      ), Ht(e, "opacity", 0.5 * /*pulseIntensity*/
      n[4]);
    },
    m(t, r) {
      _n(t, e, r);
    },
    p(t, r) {
      r & /*pulse_color*/
      4 && Ht(
        e,
        "background",
        /*pulse_color*/
        t[2]
      ), r & /*maxPulseScale*/
      64 && Ht(
        e,
        "--max-scale",
        /*maxPulseScale*/
        t[6]
      ), r & /*pulseIntensity*/
      16 && Ht(e, "opacity", 0.5 * /*pulseIntensity*/
      t[4]);
    },
    d(t) {
      t && e0(e);
    }
  };
}
function W6(n) {
  let e, t, r;
  var a = (
    /*icon*/
    n[0]
  );
  function i(l, s) {
    return {};
  }
  return a && (t = T1(a, i())), {
    c() {
      e = Rr("div"), t && M1(t.$$.fragment);
    },
    l(l) {
      e = Nr(l, "DIV", {});
      var s = fn(e);
      t && q6(t.$$.fragment, s), s.forEach(e0);
    },
    m(l, s) {
      _n(l, e, s), t && N1(t, e, null), r = !0;
    },
    p(l, s) {
      if (s & /*icon*/
      1 && a !== (a = /*icon*/
      l[0])) {
        if (t) {
          ph();
          const o = t;
          fi(o.$$.fragment, 1, 0, () => {
            B1(o, 1);
          }), mh();
        }
        a ? (t = T1(a, i()), M1(t.$$.fragment), hi(t.$$.fragment, 1), N1(t, e, null)) : t = null;
      }
    },
    i(l) {
      r || (t && hi(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && fi(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && e0(e), t && B1(t);
    }
  };
}
function Y6(n) {
  let e;
  return {
    c() {
      e = Rr("div");
    },
    l(t) {
      e = Nr(t, "DIV", {}), fn(e).forEach(e0);
    },
    m(t, r) {
      _n(t, e, r);
    },
    p: Gn,
    i: Gn,
    o: Gn,
    d(t) {
      t && e0(e);
    }
  };
}
function X6(n) {
  let e, t;
  return {
    c() {
      e = Rr("img"), this.h();
    },
    l(r) {
      e = Nr(r, "IMG", { src: !0, alt: !0, class: !0 }), this.h();
    },
    h() {
      R1(e.src, t = /*icon*/
      n[0]) || gr(e, "src", t), gr(e, "alt", "Audio visualization icon"), gr(e, "class", "icon-image svelte-126lrgf"), Ht(e, "border-radius", `${/*icon_radius*/
      n[3]}%`);
    },
    m(r, a) {
      _n(r, e, a);
    },
    p(r, a) {
      a & /*icon*/
      1 && !R1(e.src, t = /*icon*/
      r[0]) && gr(e, "src", t), a & /*icon_radius*/
      8 && Ht(e, "border-radius", `${/*icon_radius*/
      r[3]}%`);
    },
    i: Gn,
    o: Gn,
    d(r) {
      r && e0(e);
    }
  };
}
function Z6(n) {
  let e, t, r, a, i, l, s, o = (
    /*pulseIntensity*/
    n[4] > 0 && O1(n)
  );
  const c = [X6, Y6, W6], h = [];
  function m(f, p) {
    return typeof /*icon*/
    f[0] == "string" ? 0 : (
      /*icon*/
      f[0] === void 0 ? 1 : 2
    );
  }
  return i = m(n), l = h[i] = c[i](n), {
    c() {
      e = Rr("div"), t = Rr("div"), o && o.c(), r = G6(), a = Rr("div"), l.c(), this.h();
    },
    l(f) {
      e = Nr(f, "DIV", { class: !0 });
      var p = fn(e);
      t = Nr(p, "DIV", { class: !0 });
      var v = fn(t);
      o && o.l(v), r = P6(v), a = Nr(v, "DIV", { class: !0 });
      var w = fn(a);
      l.l(w), w.forEach(e0), v.forEach(e0), p.forEach(e0), this.h();
    },
    h() {
      gr(a, "class", "gradio-webrtc-pulsing-icon svelte-126lrgf"), Ht(a, "transform", `scale(${/*pulseScale*/
      n[5]})`), Ht(
        a,
        "background",
        /*icon_button_color*/
        n[1]
      ), gr(t, "class", "gradio-webrtc-pulsing-icon-container svelte-126lrgf"), gr(e, "class", "gradio-webrtc-icon-wrapper svelte-126lrgf");
    },
    m(f, p) {
      _n(f, e, p), Gl(e, t), o && o.m(t, null), Gl(t, r), Gl(t, a), h[i].m(a, null), s = !0;
    },
    p(f, [p]) {
      /*pulseIntensity*/
      f[4] > 0 ? o ? o.p(f, p) : (o = O1(f), o.c(), o.m(t, r)) : o && (o.d(1), o = null);
      let v = i;
      i = m(f), i === v ? h[i].p(f, p) : (ph(), fi(h[v], 1, 1, () => {
        h[v] = null;
      }), mh(), l = h[i], l ? l.p(f, p) : (l = h[i] = c[i](f), l.c()), hi(l, 1), l.m(a, null)), p & /*pulseScale*/
      32 && Ht(a, "transform", `scale(${/*pulseScale*/
      f[5]})`), p & /*icon_button_color*/
      2 && Ht(
        a,
        "background",
        /*icon_button_color*/
        f[1]
      );
    },
    i(f) {
      s || (hi(l), s = !0);
    },
    o(f) {
      fi(l), s = !1;
    },
    d(f) {
      f && e0(e), o && o.d(), h[i].d();
    }
  };
}
function K6(n, e, t) {
  let r, { stream_state: a = "closed" } = e, { audio_source_callback: i } = e, { icon: l = void 0 } = e, { icon_button_color: s = "var(--color-accent)" } = e, { pulse_color: o = "var(--color-accent)" } = e, { icon_radius: c = 50 } = e, h, m, f, p, v = 1, w = 0;
  j6(() => {
    p && cancelAnimationFrame(p), h && h.close();
  });
  function S() {
    h = new (window.AudioContext || window.webkitAudioContext)(), m = h.createAnalyser(), h.createMediaStreamSource(i()).connect(m), m.fftSize = 64, m.smoothingTimeConstant = 0.8, f = new Uint8Array(m.frequencyBinCount), A();
  }
  function A() {
    m.getByteFrequencyData(f);
    const b = Array.from(f).reduce((E, x) => E + x, 0) / f.length / 255;
    t(5, v = 1 + b * 0.15), t(4, w = b), p = requestAnimationFrame(A);
  }
  return n.$$set = (y) => {
    "stream_state" in y && t(7, a = y.stream_state), "audio_source_callback" in y && t(8, i = y.audio_source_callback), "icon" in y && t(0, l = y.icon), "icon_button_color" in y && t(1, s = y.icon_button_color), "pulse_color" in y && t(2, o = y.pulse_color), "icon_radius" in y && t(3, c = y.icon_radius);
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
class Ks extends O6 {
  constructor(e) {
    super(), V6(this, e, K6, Z6, U6, {
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
  SvelteComponent: Q6,
  action_destroyer: J6,
  add_render_callback: $6,
  append_hydration: tt,
  attr: Ve,
  binding_callbacks: e7,
  check_outros: di,
  children: _t,
  claim_component: wr,
  claim_element: vt,
  claim_space: T0,
  claim_text: ia,
  create_component: kr,
  create_in_transition: t7,
  destroy_component: Dr,
  destroy_each: r7,
  detach: Ee,
  element: bt,
  empty: mi,
  ensure_array_like: P1,
  group_outros: pi,
  init: n7,
  insert_hydration: It,
  listen: gi,
  mount_component: Ar,
  noop: gh,
  run_all: a7,
  safe_not_equal: i7,
  set_data: la,
  set_input_value: bs,
  set_style: l7,
  space: M0,
  stop_propagation: s7,
  text: sa,
  toggle_class: Ya,
  transition_in: at,
  transition_out: pt
} = window.__gradio__svelte__internal, { createEventDispatcher: o7, onMount: u7 } = window.__gradio__svelte__internal;
function H1(n, e, t) {
  const r = n.slice();
  return r[42] = e[t], r;
}
function V1(n) {
  let e, t, r;
  return t = new Ks({
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
        n[0] || Ja
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
      It(a, e, i), Ar(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i[0] & /*stream_state*/
      4096 && (l.stream_state = /*stream_state*/
      a[12]), i[0] & /*icon*/
      1 && (l.icon = /*icon*/
      a[0] || Ja), i[0] & /*icon_button_color*/
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
function c7(n) {
  let e, t, r, a, i, l, s, o, c, h;
  const m = [m7, d7, f7], f = [];
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
  let v = p7(n), w = (
    /*options_open*/
    n[14] && /*selected_device*/
    n[10] && U1(n)
  );
  return {
    c() {
      e = bt("div"), t = bt("button"), a.c(), i = M0(), v && v.c(), l = M0(), w && w.c(), s = mi(), this.h();
    },
    l(S) {
      e = vt(S, "DIV", { class: !0 });
      var A = _t(e);
      t = vt(A, "BUTTON", { "aria-label": !0, class: !0 });
      var y = _t(t);
      a.l(y), y.forEach(Ee), i = T0(A), v && v.l(A), A.forEach(Ee), l = T0(S), w && w.l(S), s = mi(), this.h();
    },
    h() {
      Ve(t, "aria-label", "start stream"), Ve(t, "class", "svelte-1y5s2o2"), Ve(e, "class", "button-wrap svelte-1y5s2o2");
    },
    m(S, A) {
      It(S, e, A), tt(e, t), f[r].m(t, null), tt(e, i), v && v.m(e, null), It(S, l, A), w && w.m(S, A), It(S, s, A), o = !0, c || (h = gi(
        t,
        "click",
        /*start_webrtc*/
        n[17]
      ), c = !0);
    },
    p(S, A) {
      let y = r;
      r = p(S), r === y ? f[r].p(S, A) : (pi(), pt(f[y], 1, 1, () => {
        f[y] = null;
      }), di(), a = f[r], a ? a.p(S, A) : (a = f[r] = m[r](S), a.c()), at(a, 1), a.m(t, null)), v.p(S, A), /*options_open*/
      S[14] && /*selected_device*/
      S[10] ? w ? (w.p(S, A), A[0] & /*options_open, selected_device*/
      17408 && at(w, 1)) : (w = U1(S), w.c(), at(w, 1), w.m(s.parentNode, s)) : w && (pi(), pt(w, 1, 1, () => {
        w = null;
      }), di());
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
function h7(n) {
  let e, t, r, a;
  return t = new hh({}), t.$on(
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
      Ve(e, "title", "grant webcam access"), l7(e, "height", "100%");
    },
    m(i, l) {
      It(i, e, l), Ar(t, e, null), a = !0;
    },
    p: gh,
    i(i) {
      a || (at(t.$$.fragment, i), i && (r || $6(() => {
        r = t7(e, H4, { delay: 100, duration: 200 }), r.start();
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
function f7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].start || /*i18n*/
    n[6]("audio.record")) + ""
  ), l, s;
  return r = new bi({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = M0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = T0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "start recording"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      It(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
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
function d7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].stop || /*i18n*/
    n[6]("audio.stop")) + ""
  ), l, s;
  return r = new Pf({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = M0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = T0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "stop recording"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      It(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
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
function m7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].waiting || /*i18n*/
    n[6]("audio.waiting")) + ""
  ), l, s;
  return r = new Oc({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = M0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = T0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "spinner"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      It(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
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
function p7(n) {
  let e, t, r, a, i;
  return t = new yi({}), {
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
      It(l, e, s), Ar(t, e, null), r = !0, a || (i = gi(
        e,
        "click",
        /*click_handler_1*/
        n[33]
      ), a = !0);
    },
    p: gh,
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
function U1(n) {
  let e, t, r, a, i, l, s;
  r = new yi({});
  function o(m, f) {
    return (
      /*available_video_devices*/
      m[9].length === 0 ? _7 : g7
    );
  }
  let c = o(n), h = c(n);
  return {
    c() {
      e = bt("select"), t = bt("button"), kr(r.$$.fragment), a = M0(), h.c(), this.h();
    },
    l(m) {
      e = vt(m, "SELECT", { class: !0, "aria-label": !0 });
      var f = _t(e);
      t = vt(f, "BUTTON", { class: !0 });
      var p = _t(t);
      wr(r.$$.fragment, p), a = T0(p), p.forEach(Ee), h.l(f), f.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "inset-icon svelte-1y5s2o2"), Ve(e, "class", "select-wrap svelte-1y5s2o2"), Ve(e, "aria-label", "select source");
    },
    m(m, f) {
      It(m, e, f), tt(e, t), Ar(r, t, null), tt(t, a), h.m(e, null), i = !0, l || (s = [
        gi(t, "click", s7(
          /*click_handler_2*/
          n[34]
        )),
        J6(Qs.call(
          null,
          e,
          /*handle_click_outside*/
          n[18]
        )),
        gi(
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
      m && Ee(e), Dr(r), h.d(), l = !1, a7(s);
    }
  };
}
function g7(n) {
  let e, t = P1(
    /*available_video_devices*/
    n[9]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = G1(H1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = mi();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = mi();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      It(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_video_devices, selected_device*/
      1536) {
        t = P1(
          /*available_video_devices*/
          a[9]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = H1(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = G1(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Ee(e), r7(r, a);
    }
  };
}
function _7(n) {
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
      e.__value = "", bs(e, e.__value), Ve(e, "class", "svelte-1y5s2o2");
    },
    m(a, i) {
      It(a, e, i), tt(e, r);
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
function G1(n) {
  let e, t = (
    /*device*/
    n[42].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = bt("option"), r = sa(t), a = M0(), this.h();
    },
    l(s) {
      e = vt(s, "OPTION", { class: !0 });
      var o = _t(e);
      r = ia(o, t), a = T0(o), o.forEach(Ee), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[42].deviceId, bs(e, e.__value), e.selected = l = /*selected_device*/
      n[10].deviceId === /*device*/
      n[42].deviceId, Ve(e, "class", "svelte-1y5s2o2");
    },
    m(s, o) {
      It(s, e, o), tt(e, r), tt(e, a);
    },
    p(s, o) {
      o[0] & /*available_video_devices*/
      512 && t !== (t = /*device*/
      s[42].label + "") && la(r, t), o[0] & /*available_video_devices*/
      512 && i !== (i = /*device*/
      s[42].deviceId) && (e.__value = i, bs(e, e.__value)), o[0] & /*selected_device, available_video_devices*/
      1536 && l !== (l = /*selected_device*/
      s[10].deviceId === /*device*/
      s[42].deviceId) && (e.selected = l);
    },
    d(s) {
      s && Ee(e);
    }
  };
}
function v7(n) {
  let e, t, r, a, i, l, s, o, c;
  t = new ah({
    props: { time_limit: (
      /*_time_limit*/
      n[11]
    ) }
  });
  let h = (
    /*stream_state*/
    n[12] === "open" && /*include_audio*/
    n[5] && V1(n)
  );
  const m = [h7, c7], f = [];
  function p(v, w) {
    return (
      /*webcam_accessed*/
      v[13] ? 1 : 0
    );
  }
  return s = p(n), o = f[s] = m[s](n), {
    c() {
      e = bt("div"), kr(t.$$.fragment), r = M0(), h && h.c(), a = M0(), i = bt("video"), l = M0(), o.c(), this.h();
    },
    l(v) {
      e = vt(v, "DIV", { class: !0 });
      var w = _t(e);
      wr(t.$$.fragment, w), r = T0(w), h && h.l(w), a = T0(w), i = vt(w, "VIDEO", { class: !0 }), _t(i).forEach(Ee), l = T0(w), o.l(w), w.forEach(Ee), this.h();
    },
    h() {
      i.autoplay = !0, i.playsInline = !0, Ve(i, "class", "svelte-1y5s2o2"), Ya(i, "hide", !/*webcam_accessed*/
      n[13]), Ya(
        i,
        "flip",
        /*stream_state*/
        n[12] != "open" || /*stream_state*/
        n[12] === "open" && /*include_audio*/
        n[5]
      ), Ve(e, "class", "wrap svelte-1y5s2o2");
    },
    m(v, w) {
      It(v, e, w), Ar(t, e, null), tt(e, r), h && h.m(e, null), tt(e, a), tt(e, i), n[31](i), tt(e, l), f[s].m(e, null), c = !0;
    },
    p(v, w) {
      const S = {};
      w[0] & /*_time_limit*/
      2048 && (S.time_limit = /*_time_limit*/
      v[11]), t.$set(S), /*stream_state*/
      v[12] === "open" && /*include_audio*/
      v[5] ? h ? (h.p(v, w), w[0] & /*stream_state, include_audio*/
      4128 && at(h, 1)) : (h = V1(v), h.c(), at(h, 1), h.m(e, a)) : h && (pi(), pt(h, 1, 1, () => {
        h = null;
      }), di()), (!c || w[0] & /*webcam_accessed*/
      8192) && Ya(i, "hide", !/*webcam_accessed*/
      v[13]), (!c || w[0] & /*stream_state, include_audio*/
      4128) && Ya(
        i,
        "flip",
        /*stream_state*/
        v[12] != "open" || /*stream_state*/
        v[12] === "open" && /*include_audio*/
        v[5]
      );
      let A = s;
      s = p(v), s === A ? f[s].p(v, w) : (pi(), pt(f[A], 1, 1, () => {
        f[A] = null;
      }), di(), o = f[s], o ? o.p(v, w) : (o = f[s] = m[s](v), o.c()), at(o, 1), o.m(e, null));
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
function Qs(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function b7(n, e, t) {
  var r = this && this.__awaiter || function(U, ve, _e, Se) {
    function Be(Ie) {
      return Ie instanceof _e ? Ie : new _e(function(Ye) {
        Ye(Ie);
      });
    }
    return new (_e || (_e = Promise))(function(Ie, Ye) {
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
        Ge.done ? Ie(Ge.value) : Be(Ge.value).then(ct, Xe);
      }
      Ue((Se = Se.apply(U, ve || [])).next());
    });
  };
  let a, i = [], l = null, s = null, { time_limit: o = null } = e, c = "closed", { on_change_cb: h } = e, { reject_cb: m } = e, { mode: f } = e;
  Math.random().toString(36).substring(2);
  let { rtp_params: p = {} } = e, { icon: v = void 0 } = e, { icon_button_color: w = "var(--color-accent)" } = e, { icon_radius: S = 50 } = e, { pulse_color: A = "var(--color-accent)" } = e, { button_labels: y } = e;
  const b = (U) => {
    U === "closed" ? (t(11, s = null), t(12, c = "closed")) : U === "waiting" ? t(12, c = "waiting") : t(12, c = "open");
  };
  let { track_constraints: E = null } = e, { rtc_configuration: x } = e, { stream_every: T = 1 } = e, { server: z } = e, { include_audio: I } = e, { i18n: B } = e;
  const R = o7();
  u7(() => document.createElement("canvas"));
  const L = (U) => r(void 0, void 0, void 0, function* () {
    const _e = U.target.value;
    yield C1(I, a, _e, E).then((Se) => r(void 0, void 0, void 0, function* () {
      q = Se, t(10, l = i.find((Be) => Be.deviceId === _e) || null), t(14, ke = !1);
    }));
  });
  function W() {
    return r(this, void 0, void 0, function* () {
      try {
        C1(I, a, null, E).then((U) => r(this, void 0, void 0, function* () {
          t(13, oe = !0), t(9, i = yield fh()), q = U;
        })).then(() => dh(i)).then((U) => {
          t(9, i = U);
          const ve = q.getTracks().map((_e) => {
            var Se;
            return (Se = _e.getSettings()) === null || Se === void 0 ? void 0 : Se.deviceId;
          })[0];
          t(10, l = ve && U.find((_e) => _e.deviceId === ve) || i[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && R("error", B("image.no_webcam_support"));
      } catch (U) {
        if (U instanceof DOMException && U.name == "NotAllowedError")
          R("error", B("image.allow_webcam_access"));
        else
          throw U;
      }
    });
  }
  let se = (U) => {
    U.type === "end_stream" ? (h(U), t(12, c = "closed"), zt(ae), W()) : (console.debug("calling on_change_cb with msg", U), h(U));
  }, q, oe = !1, ae, { webrtc_id: we } = e;
  function de() {
    return r(this, void 0, void 0, function* () {
      if (c === "closed") {
        ae = new RTCPeerConnection(x), ae.addEventListener("connectionstatechange", (ve) => r(this, void 0, void 0, function* () {
          switch (ae.connectionState) {
            case "connected":
              t(12, c = "open"), t(11, s = o), R("tick");
              break;
            case "disconnected":
              t(12, c = "closed"), t(11, s = null), zt(ae), yield W();
              break;
            case "failed":
              t(12, c = "closed"), t(11, s = null), R("error", "Connection failed!"), zt(ae);
              break;
          }
        })), t(12, c = "waiting"), t(20, we = Math.random().toString(36).substring(2));
        const U = setTimeout(
          () => {
            h({ type: "connection_timeout" });
          },
          5e3
        );
        Bi(q, ae, f === "send" ? null : a, z.offer, we, "video", se, p, void 0, m).then((ve) => {
          clearTimeout(U), ae = ve;
        }).catch(() => {
          clearTimeout(U), console.info("catching"), t(12, c = "closed");
        });
      } else
        zt(ae), t(12, c = "closed"), t(11, s = null), yield W();
    });
  }
  let ke = !1;
  function De(U) {
    U.preventDefault(), U.stopPropagation(), t(14, ke = !1);
  }
  const te = () => a.srcObject;
  function ie(U) {
    e7[U ? "unshift" : "push"](() => {
      a = U, t(8, a);
    });
  }
  const me = async () => W(), Le = () => t(14, ke = !0), H = () => t(14, ke = !1);
  return n.$$set = (U) => {
    "time_limit" in U && t(21, o = U.time_limit), "on_change_cb" in U && t(22, h = U.on_change_cb), "reject_cb" in U && t(23, m = U.reject_cb), "mode" in U && t(24, f = U.mode), "rtp_params" in U && t(25, p = U.rtp_params), "icon" in U && t(0, v = U.icon), "icon_button_color" in U && t(1, w = U.icon_button_color), "icon_radius" in U && t(2, S = U.icon_radius), "pulse_color" in U && t(3, A = U.pulse_color), "button_labels" in U && t(4, y = U.button_labels), "track_constraints" in U && t(27, E = U.track_constraints), "rtc_configuration" in U && t(28, x = U.rtc_configuration), "stream_every" in U && t(29, T = U.stream_every), "server" in U && t(30, z = U.server), "include_audio" in U && t(5, I = U.include_audio), "i18n" in U && t(6, B = U.i18n), "webrtc_id" in U && t(20, we = U.webrtc_id);
  }, [
    v,
    w,
    S,
    A,
    y,
    I,
    B,
    Qs,
    a,
    i,
    l,
    s,
    c,
    oe,
    ke,
    L,
    W,
    de,
    De,
    te,
    we,
    o,
    h,
    m,
    f,
    p,
    b,
    E,
    x,
    T,
    z,
    ie,
    me,
    Le,
    H
  ];
}
class y7 extends Q6 {
  constructor(e) {
    super(), n7(
      this,
      e,
      b7,
      v7,
      i7,
      {
        time_limit: 21,
        on_change_cb: 22,
        reject_cb: 23,
        mode: 24,
        rtp_params: 25,
        icon: 0,
        icon_button_color: 1,
        icon_radius: 2,
        pulse_color: 3,
        button_labels: 4,
        modify_stream: 26,
        track_constraints: 27,
        rtc_configuration: 28,
        stream_every: 29,
        server: 30,
        include_audio: 5,
        i18n: 6,
        webrtc_id: 20,
        click_outside: 7
      },
      null,
      [-1, -1]
    );
  }
  get modify_stream() {
    return this.$$.ctx[26];
  }
  get click_outside() {
    return Qs;
  }
}
const {
  SvelteComponent: w7,
  add_flush_callback: k7,
  attr: j1,
  bind: D7,
  binding_callbacks: A7,
  bubble: Xa,
  children: E7,
  claim_component: W1,
  claim_element: S7,
  claim_space: F7,
  create_component: Y1,
  destroy_component: X1,
  detach: jl,
  element: x7,
  init: C7,
  insert_hydration: Z1,
  mount_component: K1,
  safe_not_equal: T7,
  space: M7,
  transition_in: Q1,
  transition_out: J1
} = window.__gradio__svelte__internal, { createEventDispatcher: B7 } = window.__gradio__svelte__internal;
function z7(n) {
  let e, t, r, a, i, l;
  e = new Ci({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: As,
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
    n[0]), a = new y7({ props: o }), A7.push(() => D7(a, "webrtc_id", s)), a.$on(
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
        Y1(e.$$.fragment), t = M7(), r = x7("div"), Y1(a.$$.fragment), this.h();
      },
      l(c) {
        W1(e.$$.fragment, c), t = F7(c), r = S7(c, "DIV", { "data-testid": !0, class: !0 });
        var h = E7(r);
        W1(a.$$.fragment, h), h.forEach(jl), this.h();
      },
      h() {
        j1(r, "data-testid", "video"), j1(r, "class", "video-container svelte-dn5v7y");
      },
      m(c, h) {
        K1(e, c, h), Z1(c, t, h), Z1(c, r, h), K1(a, r, null), l = !0;
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
        c[0], k7(() => i = !1)), a.$set(f);
      },
      i(c) {
        l || (Q1(e.$$.fragment, c), Q1(a.$$.fragment, c), l = !0);
      },
      o(c) {
        J1(e.$$.fragment, c), J1(a.$$.fragment, c), l = !1;
      },
      d(c) {
        c && (jl(t), jl(r)), X1(e, c), X1(a);
      }
    }
  );
}
let I7 = !1;
function N7(n, e, t) {
  let { value: r = null } = e, { label: a = void 0 } = e, { show_label: i = !0 } = e, { include_audio: l } = e, { i18n: s } = e, { active_source: o = "webcam" } = e, { handle_reset_value: c = () => {
  } } = e, { stream_handler: h } = e, { time_limit: m = null } = e, { button_labels: f } = e, { server: p } = e, { rtc_configuration: v } = e, { track_constraints: w = {} } = e, { mode: S } = e, { on_change_cb: A } = e, { reject_cb: y } = e, { rtp_params: b = {} } = e, { icon: E = void 0 } = e, { icon_button_color: x = "var(--color-accent)" } = e, { pulse_color: T = "var(--color-accent)" } = e, { icon_radius: z = 50 } = e;
  const I = B7();
  function B(q) {
    r = q, t(0, r);
  }
  function R(q) {
    Xa.call(this, n, q);
  }
  function L(q) {
    Xa.call(this, n, q);
  }
  function W(q) {
    Xa.call(this, n, q);
  }
  function se(q) {
    Xa.call(this, n, q);
  }
  return n.$$set = (q) => {
    "value" in q && t(0, r = q.value), "label" in q && t(1, a = q.label), "show_label" in q && t(2, i = q.show_label), "include_audio" in q && t(3, l = q.include_audio), "i18n" in q && t(4, s = q.i18n), "active_source" in q && t(18, o = q.active_source), "handle_reset_value" in q && t(19, c = q.handle_reset_value), "stream_handler" in q && t(20, h = q.stream_handler), "time_limit" in q && t(5, m = q.time_limit), "button_labels" in q && t(6, f = q.button_labels), "server" in q && t(7, p = q.server), "rtc_configuration" in q && t(8, v = q.rtc_configuration), "track_constraints" in q && t(9, w = q.track_constraints), "mode" in q && t(10, S = q.mode), "on_change_cb" in q && t(11, A = q.on_change_cb), "reject_cb" in q && t(12, y = q.reject_cb), "rtp_params" in q && t(13, b = q.rtp_params), "icon" in q && t(14, E = q.icon), "icon_button_color" in q && t(15, x = q.icon_button_color), "pulse_color" in q && t(16, T = q.pulse_color), "icon_radius" in q && t(17, z = q.icon_radius);
  }, I("drag", I7), [
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
    y,
    b,
    E,
    x,
    T,
    z,
    o,
    c,
    h,
    B,
    R,
    L,
    W,
    se
  ];
}
class R7 extends w7 {
  constructor(e) {
    super(), C7(this, e, N7, z7, T7, {
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
var $1;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})($1 || ($1 = {}));
const Np = (n) => {
  let e = ["B", "KB", "MB", "GB", "PB"], t = 0;
  for (; n > 1024; )
    n /= 1024, t++;
  let r = e[t];
  return n.toFixed(1) + " " + r;
}, Rp = () => !0;
function Lp(n, { autoplay: e }) {
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
  SvelteComponent: L7,
  append_hydration: O7,
  attr: Wl,
  binding_callbacks: q7,
  children: ec,
  claim_element: tc,
  claim_text: Op,
  detach: jn,
  element: rc,
  empty: _i,
  init: P7,
  insert_hydration: Js,
  is_function: nc,
  listen: Yl,
  noop: ac,
  run_all: H7,
  safe_not_equal: V7,
  set_data: qp,
  src_url_equal: ic,
  text: Pp,
  toggle_class: en
} = window.__gradio__svelte__internal;
function lc(n) {
  let e;
  function t(i, l) {
    return U7;
  }
  let a = t()(n);
  return {
    c() {
      a.c(), e = _i();
    },
    l(i) {
      a.l(i), e = _i();
    },
    m(i, l) {
      a.m(i, l), Js(i, e, l);
    },
    p(i, l) {
      a.p(i, l);
    },
    d(i) {
      i && jn(e), a.d(i);
    }
  };
}
function U7(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = rc("div"), t = rc("video"), this.h();
    },
    l(l) {
      e = tc(l, "DIV", { class: !0 });
      var s = ec(e);
      t = tc(s, "VIDEO", { src: !0 }), ec(t).forEach(jn), s.forEach(jn), this.h();
    },
    h() {
      var l;
      ic(t.src, r = /*value*/
      (l = n[2]) == null ? void 0 : l.video.url) || Wl(t, "src", r), Wl(e, "class", "container svelte-1uoo7dd"), en(
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
      Js(l, e, s), O7(e, t), n[6](t), a || (i = [
        Yl(
          t,
          "loadeddata",
          /*init*/
          n[4]
        ),
        Yl(t, "mouseover", function() {
          nc(
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
        Yl(t, "mouseout", function() {
          nc(
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
      4 && !ic(t.src, r = /*value*/
      (o = n[2]) == null ? void 0 : o.video.url) && Wl(t, "src", r), s & /*type*/
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
      l && jn(e), n[6](null), a = !1, H7(i);
    }
  };
}
function G7(n) {
  let e, t = (
    /*value*/
    n[2] && lc(n)
  );
  return {
    c() {
      t && t.c(), e = _i();
    },
    l(r) {
      t && t.l(r), e = _i();
    },
    m(r, a) {
      t && t.m(r, a), Js(r, e, a);
    },
    p(r, [a]) {
      /*value*/
      r[2] ? t ? t.p(r, a) : (t = lc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: ac,
    o: ac,
    d(r) {
      r && jn(e), t && t.d(r);
    }
  };
}
function j7(n, e, t) {
  var r = this && this.__awaiter || function(m, f, p, v) {
    function w(S) {
      return S instanceof p ? S : new p(function(A) {
        A(S);
      });
    }
    return new (p || (p = Promise))(function(S, A) {
      function y(x) {
        try {
          E(v.next(x));
        } catch (T) {
          A(T);
        }
      }
      function b(x) {
        try {
          E(v.throw(x));
        } catch (T) {
          A(T);
        }
      }
      function E(x) {
        x.done ? S(x.value) : w(x.value).then(y, b);
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
    q7[m ? "unshift" : "push"](() => {
      o = m, t(3, o);
    });
  }
  return n.$$set = (m) => {
    "type" in m && t(0, a = m.type), "selected" in m && t(1, i = m.selected), "value" in m && t(2, l = m.value), "loop" in m && t(5, s = m.loop);
  }, [a, i, l, o, c, s, h];
}
class Hp extends L7 {
  constructor(e) {
    super(), P7(this, e, j7, G7, V7, { type: 0, selected: 1, value: 2, loop: 5 });
  }
}
const {
  SvelteComponent: W7,
  append_hydration: sc,
  assign: oc,
  attr: tn,
  binding_callbacks: Y7,
  bubble: X7,
  check_outros: Z7,
  children: uc,
  claim_component: $s,
  claim_element: Xl,
  claim_space: cc,
  create_component: eo,
  destroy_component: to,
  detach: Rn,
  element: Zl,
  exclude_internal_props: hc,
  group_outros: K7,
  init: Q7,
  insert_hydration: Kl,
  listen: w0,
  mount_component: ro,
  run_all: J7,
  safe_not_equal: $7,
  space: fc,
  toggle_class: dc,
  transition_in: un,
  transition_out: Wn
} = window.__gradio__svelte__internal, { createEventDispatcher: e8 } = window.__gradio__svelte__internal;
function mc(n) {
  let e, t;
  return e = new lh({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [t8] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      eo(e.$$.fragment);
    },
    l(r) {
      $s(e.$$.fragment, r);
    },
    m(r, a) {
      ro(e, r, a), t = !0;
    },
    i(r) {
      t || (un(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Wn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      to(e, r);
    }
  };
}
function t8(n) {
  let e, t;
  return e = new As({}), {
    c() {
      eo(e.$$.fragment);
    },
    l(r) {
      $s(e.$$.fragment, r);
    },
    m(r, a) {
      ro(e, r, a), t = !0;
    },
    i(r) {
      t || (un(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Wn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      to(e, r);
    }
  };
}
function r8(n) {
  let e, t, r, a, i, l, s, o, c, h;
  e = new Ci({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: As,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  let m = (
    /*value*/
    n[0] === "__webrtc_value__" && mc(n)
  );
  return {
    c() {
      eo(e.$$.fragment), t = fc(), m && m.c(), r = fc(), a = Zl("div"), i = Zl("video"), l = Zl("track"), this.h();
    },
    l(f) {
      $s(e.$$.fragment, f), t = cc(f), m && m.l(f), r = cc(f), a = Xl(f, "DIV", { class: !0 });
      var p = uc(a);
      i = Xl(p, "VIDEO", {
        "data-testid": !0,
        crossorigin: !0,
        class: !0
      });
      var v = uc(i);
      l = Xl(v, "TRACK", { kind: !0 }), v.forEach(Rn), p.forEach(Rn), this.h();
    },
    h() {
      tn(l, "kind", "captions"), i.autoplay = !0, tn(i, "data-testid", s = /*$$props*/
      n[5]["data-testid"]), tn(i, "crossorigin", "anonymous"), tn(i, "class", "svelte-1yzqfy6"), dc(
        i,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), tn(a, "class", "wrap svelte-1yzqfy6");
    },
    m(f, p) {
      ro(e, f, p), Kl(f, t, p), m && m.m(f, p), Kl(f, r, p), Kl(f, a, p), sc(a, i), sc(i, l), n[12](i), o = !0, c || (h = [
        w0(
          i,
          "loadeddata",
          /*dispatch*/
          n[4].bind(null, "loadeddata")
        ),
        w0(
          i,
          "click",
          /*dispatch*/
          n[4].bind(null, "click")
        ),
        w0(
          i,
          "play",
          /*dispatch*/
          n[4].bind(null, "play")
        ),
        w0(
          i,
          "pause",
          /*dispatch*/
          n[4].bind(null, "pause")
        ),
        w0(
          i,
          "ended",
          /*dispatch*/
          n[4].bind(null, "ended")
        ),
        w0(
          i,
          "mouseover",
          /*dispatch*/
          n[4].bind(null, "mouseover")
        ),
        w0(
          i,
          "mouseout",
          /*dispatch*/
          n[4].bind(null, "mouseout")
        ),
        w0(
          i,
          "focus",
          /*dispatch*/
          n[4].bind(null, "focus")
        ),
        w0(
          i,
          "blur",
          /*dispatch*/
          n[4].bind(null, "blur")
        ),
        w0(
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
      1 && un(m, 1) : (m = mc(f), m.c(), un(m, 1), m.m(r.parentNode, r)) : m && (K7(), Wn(m, 1, 1, () => {
        m = null;
      }), Z7()), (!o || p & /*$$props*/
      32 && s !== (s = /*$$props*/
      f[5]["data-testid"])) && tn(i, "data-testid", s), (!o || p & /*value*/
      1) && dc(
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
      f && (Rn(t), Rn(r), Rn(a)), to(e, f), m && m.d(f), n[12](null), c = !1, J7(h);
    }
  };
}
function n8(n, e, t) {
  var r = this && this.__awaiter || function(A, y, b, E) {
    function x(T) {
      return T instanceof b ? T : new b(function(z) {
        z(T);
      });
    }
    return new (b || (b = Promise))(function(T, z) {
      function I(L) {
        try {
          R(E.next(L));
        } catch (W) {
          z(W);
        }
      }
      function B(L) {
        try {
          R(E.throw(L));
        } catch (W) {
          z(W);
        }
      }
      function R(L) {
        L.done ? T(L.value) : x(L.value).then(I, B);
      }
      R((E = E.apply(A, y || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { on_change_cb: o } = e, { server: c } = e, h, m = Math.random().toString(36).substring(2), f;
  const p = e8();
  let v = (A) => {
    A.type === "end_stream" ? (o(A), zt(f)) : (console.debug("calling on_change_cb with msg", A), o(A));
  };
  function w(A) {
    X7.call(this, n, A);
  }
  function S(A) {
    Y7[A ? "unshift" : "push"](() => {
      h = A, t(3, h);
    });
  }
  return n.$$set = (A) => {
    t(5, e = oc(oc({}, e), hc(A))), "value" in A && t(0, a = A.value), "label" in A && t(1, i = A.label), "show_label" in A && t(2, l = A.show_label), "rtc_configuration" in A && t(6, s = A.rtc_configuration), "on_change_cb" in A && t(7, o = A.on_change_cb), "server" in A && t(8, c = A.server);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*value, _webrtc_id, rtc_configuration, pc, on_change_cb, video_element, server*/
    1993 && a === "start_webrtc_stream") {
      t(9, m = Math.random().toString(36).substring(2)), t(0, a = m), t(10, f = new RTCPeerConnection(s)), f.addEventListener("connectionstatechange", (y) => r(void 0, void 0, void 0, function* () {
        switch (f.connectionState) {
          case "connected":
            p("tick");
            break;
          case "disconnected":
            zt(f);
            break;
          case "failed":
            p("error", "Connection failed!"), zt(f);
            break;
        }
      }));
      const A = setTimeout(
        () => {
          o({ type: "connection_timeout" });
        },
        5e3
      );
      Bi(null, f, h, c.offer, m, "video", v).then((y) => {
        clearTimeout(A), t(10, f = y);
      }).catch(() => {
        clearTimeout(A), p("error", "Too many concurrent users. Come back later!");
      });
    }
  }, e = hc(e), [
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
class a8 extends W7 {
  constructor(e) {
    super(), Q7(this, e, n8, r8, $7, {
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
  SvelteComponent: i8,
  append_hydration: ln,
  attr: j0,
  check_outros: l8,
  children: W0,
  claim_component: s8,
  claim_element: Y0,
  claim_space: pc,
  create_component: o8,
  destroy_component: u8,
  destroy_each: c8,
  detach: Bt,
  element: X0,
  ensure_array_like: gc,
  group_outros: h8,
  init: f8,
  insert_hydration: oa,
  mount_component: d8,
  noop: ea,
  safe_not_equal: m8,
  set_style: Kt,
  space: _c,
  transition_in: ys,
  transition_out: ws
} = window.__gradio__svelte__internal, { onDestroy: p8 } = window.__gradio__svelte__internal;
function vc(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function g8(n) {
  let e, t = gc(Array(
    /*numBars*/
    n[0]
  )), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = bc(vc(n, t, a));
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
      i.forEach(Bt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-boxContainer svelte-1x8be7j"), Kt(
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
        t = gc(Array(
          /*numBars*/
          a[0]
        ));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = vc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = bc(), r[l].c(), r[l].m(e, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
      i & /*containerWidth*/
      512 && Kt(
        e,
        "width",
        /*containerWidth*/
        a[9]
      );
    },
    i: ea,
    o: ea,
    d(a) {
      a && Bt(e), c8(r, a);
    }
  };
}
function _8(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = X0("div"), t = X0("div"), r = _c(), a = X0("div"), i = _c(), l = X0("div"), this.h();
    },
    l(s) {
      e = Y0(s, "DIV", { class: !0 });
      var o = W0(e);
      t = Y0(o, "DIV", { class: !0 }), W0(t).forEach(Bt), r = pc(o), a = Y0(o, "DIV", { class: !0 }), W0(a).forEach(Bt), i = pc(o), l = Y0(o, "DIV", { class: !0 }), W0(l).forEach(Bt), o.forEach(Bt), this.h();
    },
    h() {
      j0(t, "class", "dot svelte-1x8be7j"), Kt(
        t,
        "background-color",
        /*pulse_color*/
        n[5]
      ), j0(a, "class", "dot svelte-1x8be7j"), Kt(
        a,
        "background-color",
        /*pulse_color*/
        n[5]
      ), j0(l, "class", "dot svelte-1x8be7j"), Kt(
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
      32 && Kt(
        t,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && Kt(
        a,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && Kt(
        l,
        "background-color",
        /*pulse_color*/
        s[5]
      );
    },
    i: ea,
    o: ea,
    d(s) {
      s && Bt(e);
    }
  };
}
function v8(n) {
  let e, t, r, a;
  return r = new Ks({
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
      e = X0("div"), t = X0("div"), o8(r.$$.fragment), this.h();
    },
    l(i) {
      e = Y0(i, "DIV", { class: !0 });
      var l = W0(e);
      t = Y0(l, "DIV", { class: !0 });
      var s = W0(t);
      s8(r.$$.fragment, s), s.forEach(Bt), l.forEach(Bt), this.h();
    },
    h() {
      j0(t, "class", "gradio-webrtc-icon svelte-1x8be7j"), Kt(t, "transform", `scale(${/*pulseScale*/
      n[8]})`), Kt(
        t,
        "background",
        /*icon_button_color*/
        n[4]
      ), j0(e, "class", "gradio-webrtc-icon-container svelte-1x8be7j");
    },
    m(i, l) {
      oa(i, e, l), ln(e, t), d8(r, t, null), a = !0;
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
      256 && Kt(t, "transform", `scale(${/*pulseScale*/
      i[8]})`), l & /*icon_button_color*/
      16 && Kt(
        t,
        "background",
        /*icon_button_color*/
        i[4]
      );
    },
    i(i) {
      a || (ys(r.$$.fragment, i), a = !0);
    },
    o(i) {
      ws(r.$$.fragment, i), a = !1;
    },
    d(i) {
      i && Bt(e), u8(r);
    }
  };
}
function bc(n) {
  let e;
  return {
    c() {
      e = X0("div"), this.h();
    },
    l(t) {
      e = Y0(t, "DIV", { class: !0 }), W0(e).forEach(Bt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-box svelte-1x8be7j");
    },
    m(t, r) {
      oa(t, e, r);
    },
    p: ea,
    d(t) {
      t && Bt(e);
    }
  };
}
function b8(n) {
  let e, t, r, a;
  const i = [v8, _8, g8], l = [];
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
      r.l(c), c.forEach(Bt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-waveContainer svelte-1x8be7j");
    },
    m(o, c) {
      oa(o, e, c), l[t].m(e, null), a = !0;
    },
    p(o, [c]) {
      let h = t;
      t = s(o), t === h ? l[t].p(o, c) : (h8(), ws(l[h], 1, 1, () => {
        l[h] = null;
      }), l8(), r = l[t], r ? r.p(o, c) : (r = l[t] = i[t](o), r.c()), ys(r, 1), r.m(e, null));
    },
    i(o) {
      a || (ys(r), a = !0);
    },
    o(o) {
      ws(r), a = !1;
    },
    d(o) {
      o && Bt(e), l[t].d();
    }
  };
}
function y8(n, e, t) {
  let r, { numBars: a = 16 } = e, { stream_state: i = "closed" } = e, { audio_source_callback: l } = e, { icon: s = void 0 } = e, { icon_button_color: o = "var(--color-accent)" } = e, { pulse_color: c = "var(--color-accent)" } = e, { pending: h = !1 } = e, { icon_radius: m = 50 } = e, f, p, v, w, { pulseScale: S = 1 } = e;
  p8(() => {
    w && cancelAnimationFrame(w), f && f.close();
  });
  function A() {
    f = new (window.AudioContext || window.webkitAudioContext)(), p = f.createAnalyser(), f.createMediaStreamSource(l()).connect(p), p.fftSize = 64, p.smoothingTimeConstant = 0.8, v = new Uint8Array(p.frequencyBinCount), y();
  }
  function y() {
    p.getByteFrequencyData(v);
    const b = document.querySelectorAll(".gradio-webrtc-waveContainer .gradio-webrtc-box");
    for (let E = 0; E < b.length; E++) {
      const x = v[E] / 255 * 2;
      b[E].style.transform = `scaleY(${Math.max(0.1, x)})`;
    }
    w = requestAnimationFrame(y);
  }
  return n.$$set = (b) => {
    "numBars" in b && t(0, a = b.numBars), "stream_state" in b && t(1, i = b.stream_state), "audio_source_callback" in b && t(2, l = b.audio_source_callback), "icon" in b && t(3, s = b.icon), "icon_button_color" in b && t(4, o = b.icon_button_color), "pulse_color" in b && t(5, c = b.pulse_color), "pending" in b && t(6, h = b.pending), "icon_radius" in b && t(7, m = b.icon_radius), "pulseScale" in b && t(8, S = b.pulseScale);
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
class _h extends i8 {
  constructor(e) {
    super(), f8(this, e, y8, b8, m8, {
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
  SvelteComponent: w8,
  attr: vh,
  binding_callbacks: k8,
  bubble: D8,
  check_outros: yc,
  children: bh,
  claim_component: zi,
  claim_element: yh,
  claim_space: Ql,
  create_component: Ii,
  destroy_component: Ni,
  detach: dr,
  element: wh,
  empty: wc,
  group_outros: kc,
  init: A8,
  insert_hydration: sn,
  listen: Jl,
  mount_component: Ri,
  run_all: E8,
  safe_not_equal: S8,
  space: $l,
  toggle_class: F8,
  transition_in: k0,
  transition_out: mr
} = window.__gradio__svelte__internal, { createEventDispatcher: x8 } = window.__gradio__svelte__internal;
function Dc(n) {
  let e, t, r;
  return t = new _h({
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
      e = wh("div"), Ii(t.$$.fragment), this.h();
    },
    l(a) {
      e = yh(a, "DIV", { class: !0 });
      var i = bh(e);
      zi(t.$$.fragment, i), i.forEach(dr), this.h();
    },
    h() {
      vh(e, "class", "audio-container svelte-js69uk");
    },
    m(a, i) {
      sn(a, e, i), Ri(t, e, null), r = !0;
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
      r || (k0(t.$$.fragment, a), r = !0);
    },
    o(a) {
      mr(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && dr(e), Ni(t);
    }
  };
}
function Ac(n) {
  let e, t;
  return e = new lh({
    props: {
      size: "small",
      $$slots: { default: [C8] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ii(e.$$.fragment);
    },
    l(r) {
      zi(e.$$.fragment, r);
    },
    m(r, a) {
      Ri(e, r, a), t = !0;
    },
    i(r) {
      t || (k0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      mr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ni(e, r);
    }
  };
}
function C8(n) {
  let e, t;
  return e = new Ds({}), {
    c() {
      Ii(e.$$.fragment);
    },
    l(r) {
      zi(e.$$.fragment, r);
    },
    m(r, a) {
      Ri(e, r, a), t = !0;
    },
    i(r) {
      t || (k0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      mr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ni(e, r);
    }
  };
}
function T8(n) {
  let e, t, r, a, i, l, s, o, c;
  e = new Ci({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Ds,
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
    n[0] !== "__webrtc_value__" && Dc(n)
  ), m = (
    /*value*/
    n[0] === "__webrtc_value__" && Ac(n)
  );
  return {
    c() {
      Ii(e.$$.fragment), t = $l(), r = wh("audio"), a = $l(), h && h.c(), i = $l(), m && m.c(), l = wc(), this.h();
    },
    l(f) {
      zi(e.$$.fragment, f), t = Ql(f), r = yh(f, "AUDIO", { class: !0 }), bh(r).forEach(dr), a = Ql(f), h && h.l(f), i = Ql(f), m && m.l(f), l = wc(), this.h();
    },
    h() {
      vh(r, "class", "standard-player svelte-js69uk"), F8(r, "hidden", !0);
    },
    m(f, p) {
      Ri(e, f, p), sn(f, t, p), sn(f, r, p), n[15](r), sn(f, a, p), h && h.m(f, p), sn(f, i, p), m && m.m(f, p), sn(f, l, p), s = !0, o || (c = [
        Jl(
          r,
          "load",
          /*load_handler*/
          n[14]
        ),
        Jl(
          r,
          "ended",
          /*ended_handler*/
          n[16]
        ),
        Jl(
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
      1 && k0(h, 1)) : (h = Dc(f), h.c(), k0(h, 1), h.m(i.parentNode, i)) : h && (kc(), mr(h, 1, 1, () => {
        h = null;
      }), yc()), /*value*/
      f[0] === "__webrtc_value__" ? m ? p & /*value*/
      1 && k0(m, 1) : (m = Ac(f), m.c(), k0(m, 1), m.m(l.parentNode, l)) : m && (kc(), mr(m, 1, 1, () => {
        m = null;
      }), yc());
    },
    i(f) {
      s || (k0(e.$$.fragment, f), k0(h), k0(m), s = !0);
    },
    o(f) {
      mr(e.$$.fragment, f), mr(h), mr(m), s = !1;
    },
    d(f) {
      f && (dr(t), dr(r), dr(a), dr(i), dr(l)), Ni(e, f), n[15](null), h && h.d(f), m && m.d(f), o = !1, E8(c);
    }
  };
}
function M8(n, e, t) {
  var r = this && this.__awaiter || function(L, W, se, q) {
    function oe(ae) {
      return ae instanceof se ? ae : new se(function(we) {
        we(ae);
      });
    }
    return new (se || (se = Promise))(function(ae, we) {
      function de(te) {
        try {
          De(q.next(te));
        } catch (ie) {
          we(ie);
        }
      }
      function ke(te) {
        try {
          De(q.throw(te));
        } catch (ie) {
          we(ie);
        }
      }
      function De(te) {
        te.done ? ae(te.value) : oe(te.value).then(de, ke);
      }
      De((q = q.apply(L, W || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { i18n: o } = e, { on_change_cb: c } = e, { icon: h = void 0 } = e, { icon_button_color: m = "var(--color-accent)" } = e, { pulse_color: f = "var(--color-accent)" } = e, { icon_radius: p = 50 } = e, { server: v } = e, w = "closed", S, A, y = Math.random().toString(36).substring(2), b = (L) => {
    L.type === "end_stream" ? (c(L), t(8, w = "closed"), zt(A)) : (console.debug("calling on_change_cb with msg", L), c(L));
  };
  const E = x8();
  function x(L) {
    return r(this, void 0, void 0, function* () {
      if (L === "start_webrtc_stream") {
        t(8, w = "waiting"), y = Math.random().toString(36).substring(2), L = y, A = new RTCPeerConnection(s), A.addEventListener("connectionstatechange", (q) => r(this, void 0, void 0, function* () {
          switch (A.connectionState) {
            case "connected":
              console.info("connected"), t(8, w = "open"), E("tick");
              break;
            case "disconnected":
              console.info("closed"), zt(A);
              break;
            case "failed":
              t(8, w = "closed"), E("error", "Connection failed!"), zt(A);
              break;
          }
        }));
        let W = null;
        const se = setTimeout(
          () => {
            c({ type: "connection_timeout" });
          },
          5e3
        );
        Bi(W, A, S, v.offer, y, "audio", b).then((q) => {
          clearTimeout(se), A = q;
        }).catch(() => {
          clearTimeout(se), console.info("catching"), E("error", "Too many concurrent users. Come back later!");
        });
      }
      return L;
    });
  }
  function T(L) {
    D8.call(this, n, L);
  }
  function z(L) {
    k8[L ? "unshift" : "push"](() => {
      S = L, t(9, S);
    });
  }
  const I = () => E("stop"), B = () => E("play"), R = () => S.srcObject;
  return n.$$set = (L) => {
    "value" in L && t(0, a = L.value), "label" in L && t(1, i = L.label), "show_label" in L && t(2, l = L.show_label), "rtc_configuration" in L && t(11, s = L.rtc_configuration), "i18n" in L && t(3, o = L.i18n), "on_change_cb" in L && t(12, c = L.on_change_cb), "icon" in L && t(4, h = L.icon), "icon_button_color" in L && t(5, m = L.icon_button_color), "pulse_color" in L && t(6, f = L.pulse_color), "icon_radius" in L && t(7, p = L.icon_radius), "server" in L && t(13, v = L.server);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && x(a).then((L) => {
      t(0, a = L);
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
    R
  ];
}
class B8 extends w8 {
  constructor(e) {
    super(), A8(this, e, M8, T8, S8, {
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
  SvelteComponent: z8,
  append_hydration: Ln,
  attr: Ne,
  children: rn,
  claim_svg_element: nn,
  detach: Cr,
  init: I8,
  insert_hydration: N8,
  noop: es,
  safe_not_equal: R8,
  svg_element: an
} = window.__gradio__svelte__internal;
function L8(n) {
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
      N8(s, e, o), Ln(e, t), Ln(e, r), Ln(e, a), Ln(e, i), Ln(e, l);
    },
    p: es,
    i: es,
    o: es,
    d(s) {
      s && Cr(e);
    }
  };
}
class O8 extends z8 {
  constructor(e) {
    super(), I8(this, e, null, L8, R8, {});
  }
}
const {
  SvelteComponent: q8,
  action_destroyer: P8,
  add_render_callback: H8,
  append_hydration: We,
  attr: fe,
  binding_callbacks: V8,
  bubble: U8,
  check_outros: V0,
  children: Qe,
  claim_component: Nt,
  claim_element: Je,
  claim_space: Vt,
  claim_text: ua,
  create_component: Rt,
  create_in_transition: G8,
  destroy_component: Lt,
  destroy_each: j8,
  detach: he,
  element: $e,
  empty: Ec,
  ensure_array_like: Sc,
  group_outros: U0,
  init: W8,
  insert_hydration: ut,
  listen: Q0,
  mount_component: Ot,
  noop: no,
  run_all: kh,
  safe_not_equal: Y8,
  set_data: ca,
  set_input_value: ks,
  set_style: X8,
  space: Ut,
  stop_propagation: Z8,
  text: ha,
  toggle_class: vi,
  transition_in: ge,
  transition_out: Ae
} = window.__gradio__svelte__internal, { createEventDispatcher: K8 } = window.__gradio__svelte__internal, { onMount: Q8 } = window.__gradio__svelte__internal;
function Fc(n, e, t) {
  const r = n.slice();
  return r[50] = e[t], r;
}
function J8(n) {
  let e, t, r, a, i, l, s, o, c, h, m, f = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1].includes("send")
  ), p, v, w, S;
  e = new _h({
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
  }), r = new ah({
    props: { time_limit: (
      /*_time_limit*/
      n[13]
    ) }
  });
  const A = [rp, tp, ep], y = [];
  function b(I, B) {
    return (
      /*stream_state*/
      I[14] === "waiting" ? 0 : (
        /*stream_state*/
        I[14] === "open" ? 1 : 2
      )
    );
  }
  s = b(n), o = y[s] = A[s](n);
  let E = (
    /*stream_state*/
    n[14] === "closed" && xc(n)
  ), x = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1] === "send-receive" && Cc(n)
  ), T = f && Tc(n), z = (
    /*options_open*/
    n[12] && /*selected_device*/
    n[18] && Mc(n)
  );
  return {
    c() {
      Rt(e.$$.fragment), t = Ut(), Rt(r.$$.fragment), a = Ut(), i = $e("div"), l = $e("button"), o.c(), c = Ut(), E && E.c(), h = Ut(), x && x.c(), m = Ut(), T && T.c(), p = Ut(), z && z.c(), this.h();
    },
    l(I) {
      Nt(e.$$.fragment, I), t = Vt(I), Nt(r.$$.fragment, I), a = Vt(I), i = Je(I, "DIV", { class: !0 });
      var B = Qe(i);
      l = Je(B, "BUTTON", { "aria-label": !0, class: !0 });
      var R = Qe(l);
      o.l(R), R.forEach(he), c = Vt(B), E && E.l(B), h = Vt(B), x && x.l(B), m = Vt(B), T && T.l(B), p = Vt(B), z && z.l(B), B.forEach(he), this.h();
    },
    h() {
      fe(l, "aria-label", "start stream"), fe(l, "class", "svelte-k2wuss"), fe(i, "class", "button-wrap svelte-k2wuss"), vi(
        i,
        "pulse",
        /*stopword_recognized*/
        n[10]
      );
    },
    m(I, B) {
      Ot(e, I, B), ut(I, t, B), Ot(r, I, B), ut(I, a, B), ut(I, i, B), We(i, l), y[s].m(l, null), We(i, c), E && E.m(i, null), We(i, h), x && x.m(i, null), We(i, m), T && T.m(i, null), We(i, p), z && z.m(i, null), v = !0, w || (S = Q0(
        l,
        "click",
        /*start_stream*/
        n[25]
      ), w = !0);
    },
    p(I, B) {
      const R = {};
      B[0] & /*stream_state*/
      16384 && (R.stream_state = /*stream_state*/
      I[14]), B[0] & /*icon*/
      32 && (R.icon = /*icon*/
      I[5]), B[0] & /*icon_button_color*/
      64 && (R.icon_button_color = /*icon_button_color*/
      I[6]), B[0] & /*pulse_color*/
      128 && (R.pulse_color = /*pulse_color*/
      I[7]), B[0] & /*pending*/
      2048 && (R.pending = /*pending*/
      I[11]), B[0] & /*icon_radius*/
      256 && (R.icon_radius = /*icon_radius*/
      I[8]), e.$set(R);
      const L = {};
      B[0] & /*_time_limit*/
      8192 && (L.time_limit = /*_time_limit*/
      I[13]), r.$set(L);
      let W = s;
      s = b(I), s === W ? y[s].p(I, B) : (U0(), Ae(y[W], 1, 1, () => {
        y[W] = null;
      }), V0(), o = y[s], o ? o.p(I, B) : (o = y[s] = A[s](I), o.c()), ge(o, 1), o.m(l, null)), /*stream_state*/
      I[14] === "closed" ? E ? (E.p(I, B), B[0] & /*stream_state*/
      16384 && ge(E, 1)) : (E = xc(I), E.c(), ge(E, 1), E.m(i, h)) : E && (U0(), Ae(E, 1, 1, () => {
        E = null;
      }), V0()), /*stream_state*/
      I[14] === "open" && /*mode*/
      I[1] === "send-receive" ? x ? (x.p(I, B), B[0] & /*stream_state, mode*/
      16386 && ge(x, 1)) : (x = Cc(I), x.c(), ge(x, 1), x.m(i, m)) : x && (U0(), Ae(x, 1, 1, () => {
        x = null;
      }), V0()), B[0] & /*stream_state, mode*/
      16386 && (f = /*stream_state*/
      I[14] === "open" && /*mode*/
      I[1].includes("send")), f ? T ? (T.p(I, B), B[0] & /*stream_state, mode*/
      16386 && ge(T, 1)) : (T = Tc(I), T.c(), ge(T, 1), T.m(i, p)) : T && (U0(), Ae(T, 1, 1, () => {
        T = null;
      }), V0()), /*options_open*/
      I[12] && /*selected_device*/
      I[18] ? z ? (z.p(I, B), B[0] & /*options_open, selected_device*/
      266240 && ge(z, 1)) : (z = Mc(I), z.c(), ge(z, 1), z.m(i, null)) : z && (U0(), Ae(z, 1, 1, () => {
        z = null;
      }), V0()), (!v || B[0] & /*stopword_recognized*/
      1024) && vi(
        i,
        "pulse",
        /*stopword_recognized*/
        I[10]
      );
    },
    i(I) {
      v || (ge(e.$$.fragment, I), ge(r.$$.fragment, I), ge(o), ge(E), ge(x), ge(T), ge(z), v = !0);
    },
    o(I) {
      Ae(e.$$.fragment, I), Ae(r.$$.fragment, I), Ae(o), Ae(E), Ae(x), Ae(T), Ae(z), v = !1;
    },
    d(I) {
      I && (he(t), he(a), he(i)), Lt(e, I), Lt(r, I), y[s].d(), E && E.d(), x && x.d(), T && T.d(), z && z.d(), w = !1, S();
    }
  };
}
function $8(n) {
  let e, t, r, a;
  return t = new hh({ props: { icon: Ja } }), t.$on(
    "click",
    /*click_handler*/
    n[42]
  ), {
    c() {
      e = $e("div"), Rt(t.$$.fragment), this.h();
    },
    l(i) {
      e = Je(i, "DIV", { title: !0, style: !0 });
      var l = Qe(e);
      Nt(t.$$.fragment, l), l.forEach(he), this.h();
    },
    h() {
      fe(e, "title", "grant webcam access"), X8(e, "height", "100%");
    },
    m(i, l) {
      ut(i, e, l), Ot(t, e, null), a = !0;
    },
    p: no,
    i(i) {
      a || (ge(t.$$.fragment, i), i && (r || H8(() => {
        r = G8(e, H4, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      Ae(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && he(e), Lt(t);
    }
  };
}
function ep(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].start || /*i18n*/
    n[4]("audio.record")) + ""
  ), l, s;
  return r = new bi({}), {
    c() {
      e = $e("div"), t = $e("div"), Rt(r.$$.fragment), a = Ut(), l = ha(i), this.h();
    },
    l(o) {
      e = Je(o, "DIV", { class: !0 });
      var c = Qe(e);
      t = Je(c, "DIV", { class: !0, title: !0 });
      var h = Qe(t);
      Nt(r.$$.fragment, h), h.forEach(he), a = Vt(c), l = ua(c, i), c.forEach(he), this.h();
    },
    h() {
      fe(t, "class", "icon color-primary svelte-k2wuss"), fe(t, "title", "start recording"), fe(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, c) {
      ut(o, e, c), We(e, t), Ot(r, t, null), We(e, a), We(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels, i18n*/
      528) && i !== (i = /*button_labels*/
      (o[9].start || /*i18n*/
      o[4]("audio.record")) + "") && ca(l, i);
    },
    i(o) {
      s || (ge(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Ae(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && he(e), Lt(r);
    }
  };
}
function tp(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].stop || /*i18n*/
    n[4]("audio.stop")) + ""
  ), l, s;
  const o = [ap, np], c = [];
  function h(m, f) {
    return (
      /*mode*/
      m[1] === "send-receive" ? 0 : 1
    );
  }
  return t = h(n), r = c[t] = o[t](n), {
    c() {
      e = $e("div"), r.c(), a = Ut(), l = ha(i), this.h();
    },
    l(m) {
      e = Je(m, "DIV", { class: !0 });
      var f = Qe(e);
      r.l(f), a = Vt(f), l = ua(f, i), f.forEach(he), this.h();
    },
    h() {
      fe(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(m, f) {
      ut(m, e, f), c[t].m(e, null), We(e, a), We(e, l), s = !0;
    },
    p(m, f) {
      let p = t;
      t = h(m), t === p ? c[t].p(m, f) : (U0(), Ae(c[p], 1, 1, () => {
        c[p] = null;
      }), V0(), r = c[t], r ? r.p(m, f) : (r = c[t] = o[t](m), r.c()), ge(r, 1), r.m(e, a)), (!s || f[0] & /*button_labels, i18n*/
      528) && i !== (i = /*button_labels*/
      (m[9].stop || /*i18n*/
      m[4]("audio.stop")) + "") && ca(l, i);
    },
    i(m) {
      s || (ge(r), s = !0);
    },
    o(m) {
      Ae(r), s = !1;
    },
    d(m) {
      m && he(e), c[t].d();
    }
  };
}
function rp(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].waiting || "Connecting...") + ""
  ), l, s;
  return r = new Oc({}), {
    c() {
      e = $e("div"), t = $e("div"), Rt(r.$$.fragment), a = Ut(), l = ha(i), this.h();
    },
    l(o) {
      e = Je(o, "DIV", { class: !0 });
      var c = Qe(e);
      t = Je(c, "DIV", { class: !0, title: !0 });
      var h = Qe(t);
      Nt(r.$$.fragment, h), h.forEach(he), a = Vt(c), l = ua(c, i), c.forEach(he), this.h();
    },
    h() {
      fe(t, "class", "icon color-primary svelte-k2wuss"), fe(t, "title", "spinner"), fe(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, c) {
      ut(o, e, c), We(e, t), Ot(r, t, null), We(e, a), We(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels*/
      512) && i !== (i = /*button_labels*/
      (o[9].waiting || "Connecting...") + "") && ca(l, i);
    },
    i(o) {
      s || (ge(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Ae(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && he(e), Lt(r);
    }
  };
}
function np(n) {
  let e, t, r;
  return t = new bi({}), {
    c() {
      e = $e("div"), Rt(t.$$.fragment), this.h();
    },
    l(a) {
      e = Je(a, "DIV", { class: !0, title: !0 });
      var i = Qe(e);
      Nt(t.$$.fragment, i), i.forEach(he), this.h();
    },
    h() {
      fe(e, "class", "icon color-primary svelte-k2wuss"), fe(e, "title", "start recording");
    },
    m(a, i) {
      ut(a, e, i), Ot(t, e, null), r = !0;
    },
    p: no,
    i(a) {
      r || (ge(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Ae(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && he(e), Lt(t);
    }
  };
}
function ap(n) {
  let e, t, r, a;
  return t = new Ks({
    props: {
      audio_source_callback: (
        /*func*/
        n[43]
      ),
      stream_state: "open",
      icon: bi,
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
      e = $e("div"), Rt(t.$$.fragment), this.h();
    },
    l(i) {
      e = Je(i, "DIV", { class: !0, title: !0, style: !0 });
      var l = Qe(e);
      Nt(t.$$.fragment, l), l.forEach(he), this.h();
    },
    h() {
      fe(e, "class", "icon svelte-k2wuss"), fe(e, "title", "stop recording"), fe(e, "style", r = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`);
    },
    m(i, l) {
      ut(i, e, l), Ot(t, e, null), a = !0;
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
      i[6]};`)) && fe(e, "style", r);
    },
    i(i) {
      a || (ge(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Ae(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && he(e), Lt(t);
    }
  };
}
function xc(n) {
  let e, t, r, a, i;
  return t = new yi({}), {
    c() {
      e = $e("button"), Rt(t.$$.fragment), this.h();
    },
    l(l) {
      e = Je(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = Qe(e);
      Nt(t.$$.fragment, s), s.forEach(he), this.h();
    },
    h() {
      fe(e, "class", "icon svelte-k2wuss"), fe(e, "aria-label", "select input source");
    },
    m(l, s) {
      ut(l, e, s), Ot(t, e, null), r = !0, a || (i = Q0(
        e,
        "click",
        /*click_handler_1*/
        n[44]
      ), a = !0);
    },
    p: no,
    i(l) {
      r || (ge(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Ae(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && he(e), Lt(t), a = !1, i();
    }
  };
}
function Cc(n) {
  let e, t, r, a, i, l, s, o, c;
  const h = [lp, ip], m = [];
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
      fe(t, "class", "icon svelte-k2wuss"), fe(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), fe(e, "class", "mute-button svelte-k2wuss"), fe(e, "aria-label", l = /*is_muted*/
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
      }), V0(), a = m[r], a || (a = m[r] = h[r](p), a.c()), ge(a, 1), a.m(t, null)), (!s || v[0] & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      p[6]}; stroke: ${/*icon_button_color*/
      p[6]}; color: ${/*icon_button_color*/
      p[6]};`)) && fe(t, "style", i), (!s || v[0] & /*is_muted*/
      1048576 && l !== (l = /*is_muted*/
      p[20] ? "unmute audio" : "mute audio")) && fe(e, "aria-label", l);
    },
    i(p) {
      s || (ge(a), s = !0);
    },
    o(p) {
      Ae(a), s = !1;
    },
    d(p) {
      p && he(e), m[r].d(), o = !1, c();
    }
  };
}
function ip(n) {
  let e, t;
  return e = new i2({}), {
    c() {
      Rt(e.$$.fragment);
    },
    l(r) {
      Nt(e.$$.fragment, r);
    },
    m(r, a) {
      Ot(e, r, a), t = !0;
    },
    i(r) {
      t || (ge(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Lt(e, r);
    }
  };
}
function lp(n) {
  let e, t;
  return e = new d2({}), {
    c() {
      Rt(e.$$.fragment);
    },
    l(r) {
      Nt(e.$$.fragment, r);
    },
    m(r, a) {
      Ot(e, r, a), t = !0;
    },
    i(r) {
      t || (ge(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Lt(e, r);
    }
  };
}
function Tc(n) {
  let e, t, r, a, i, l, s, o, c;
  const h = [op, sp], m = [];
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
      fe(t, "class", "icon svelte-k2wuss"), fe(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), fe(e, "class", "mute-button svelte-k2wuss"), fe(e, "aria-label", l = /*is_mic_muted*/
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
      }), V0(), a = m[r], a || (a = m[r] = h[r](p), a.c()), ge(a, 1), a.m(t, null)), (!s || v[0] & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      p[6]}; stroke: ${/*icon_button_color*/
      p[6]}; color: ${/*icon_button_color*/
      p[6]};`)) && fe(t, "style", i), (!s || v[0] & /*is_mic_muted*/
      2097152 && l !== (l = /*is_mic_muted*/
      p[21] ? "unmute mic" : "mute mic")) && fe(e, "aria-label", l);
    },
    i(p) {
      s || (ge(a), s = !0);
    },
    o(p) {
      Ae(a), s = !1;
    },
    d(p) {
      p && he(e), m[r].d(), o = !1, c();
    }
  };
}
function sp(n) {
  let e, t;
  return e = new Ja({}), {
    c() {
      Rt(e.$$.fragment);
    },
    l(r) {
      Nt(e.$$.fragment, r);
    },
    m(r, a) {
      Ot(e, r, a), t = !0;
    },
    i(r) {
      t || (ge(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Lt(e, r);
    }
  };
}
function op(n) {
  let e, t;
  return e = new O8({}), {
    c() {
      Rt(e.$$.fragment);
    },
    l(r) {
      Nt(e.$$.fragment, r);
    },
    m(r, a) {
      Ot(e, r, a), t = !0;
    },
    i(r) {
      t || (ge(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Lt(e, r);
    }
  };
}
function Mc(n) {
  let e, t, r, a, i, l, s;
  r = new yi({});
  function o(m, f) {
    return (
      /*available_audio_devices*/
      m[17].length === 0 ? cp : up
    );
  }
  let c = o(n), h = c(n);
  return {
    c() {
      e = $e("select"), t = $e("button"), Rt(r.$$.fragment), a = Ut(), h.c(), this.h();
    },
    l(m) {
      e = Je(m, "SELECT", { class: !0, "aria-label": !0 });
      var f = Qe(e);
      t = Je(f, "BUTTON", { class: !0 });
      var p = Qe(t);
      Nt(r.$$.fragment, p), a = Vt(p), p.forEach(he), h.l(f), f.forEach(he), this.h();
    },
    h() {
      fe(t, "class", "inset-icon svelte-k2wuss"), fe(e, "class", "select-wrap svelte-k2wuss"), fe(e, "aria-label", "select source");
    },
    m(m, f) {
      ut(m, e, f), We(e, t), Ot(r, t, null), We(t, a), h.m(e, null), i = !0, l || (s = [
        Q0(t, "click", Z8(
          /*click_handler_2*/
          n[45]
        )),
        P8(fp.call(
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
      i || (ge(r.$$.fragment, m), i = !0);
    },
    o(m) {
      Ae(r.$$.fragment, m), i = !1;
    },
    d(m) {
      m && he(e), Lt(r), h.d(), l = !1, kh(s);
    }
  };
}
function up(n) {
  let e, t = Sc(
    /*available_audio_devices*/
    n[17]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Bc(Fc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ec();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Ec();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      ut(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_audio_devices, selected_device*/
      393216) {
        t = Sc(
          /*available_audio_devices*/
          a[17]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Fc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Bc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && he(e), j8(r, a);
    }
  };
}
function cp(n) {
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
      e.__value = "", ks(e, e.__value), fe(e, "class", "svelte-k2wuss");
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
function Bc(n) {
  let e, t = (
    /*device*/
    n[50].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = $e("option"), r = ha(t), a = Ut(), this.h();
    },
    l(s) {
      e = Je(s, "OPTION", { class: !0 });
      var o = Qe(e);
      r = ua(o, t), a = Vt(o), o.forEach(he), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[50].deviceId, ks(e, e.__value), e.selected = l = /*selected_device*/
      n[18].deviceId === /*device*/
      n[50].deviceId, fe(e, "class", "svelte-k2wuss");
    },
    m(s, o) {
      ut(s, e, o), We(e, r), We(e, a);
    },
    p(s, o) {
      o[0] & /*available_audio_devices*/
      131072 && t !== (t = /*device*/
      s[50].label + "") && ca(r, t), o[0] & /*available_audio_devices*/
      131072 && i !== (i = /*device*/
      s[50].deviceId) && (e.__value = i, ks(e, e.__value)), o[0] & /*selected_device, available_audio_devices*/
      393216 && l !== (l = /*selected_device*/
      s[18].deviceId === /*device*/
      s[50].deviceId) && (e.selected = l);
    },
    d(s) {
      s && he(e);
    }
  };
}
function hp(n) {
  let e, t, r, a, i, l, s, o, c, h;
  e = new Ci({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      Icon: Ds,
      float: !1,
      label: (
        /*label*/
        n[2] || /*i18n*/
        n[4]("audio.audio")
      )
    }
  });
  const m = [$8, J8], f = [];
  function p(v, w) {
    return (
      /*mic_accessed*/
      v[19] ? 1 : 0
    );
  }
  return l = p(n), s = f[l] = m[l](n), {
    c() {
      Rt(e.$$.fragment), t = Ut(), r = $e("div"), a = $e("audio"), i = Ut(), s.c(), this.h();
    },
    l(v) {
      Nt(e.$$.fragment, v), t = Vt(v), r = Je(v, "DIV", { class: !0 });
      var w = Qe(r);
      a = Je(w, "AUDIO", { class: !0 }), Qe(a).forEach(he), i = Vt(w), s.l(w), w.forEach(he), this.h();
    },
    h() {
      fe(a, "class", "standard-player svelte-k2wuss"), vi(
        a,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), fe(r, "class", "audio-container svelte-k2wuss");
    },
    m(v, w) {
      Ot(e, v, w), ut(v, t, w), ut(v, r, w), We(r, a), n[39](a), We(r, i), f[l].m(r, null), o = !0, c || (h = [
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
      1) && vi(
        a,
        "hidden",
        /*value*/
        v[0] === "__webrtc_value__"
      );
      let A = l;
      l = p(v), l === A ? f[l].p(v, w) : (U0(), Ae(f[A], 1, 1, () => {
        f[A] = null;
      }), V0(), s = f[l], s ? s.p(v, w) : (s = f[l] = m[l](v), s.c()), ge(s, 1), s.m(r, null));
    },
    i(v) {
      o || (ge(e.$$.fragment, v), ge(s), o = !0);
    },
    o(v) {
      Ae(e.$$.fragment, v), Ae(s), o = !1;
    },
    d(v) {
      v && (he(t), he(r)), Lt(e, v), n[39](null), f[l].d(), c = !1, kh(h);
    }
  };
}
function fp(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function dp(n, e, t) {
  var r = this && this.__awaiter || function(j, N, ce, R0) {
    function fa(Er) {
      return Er instanceof ce ? Er : new ce(function(rr) {
        rr(Er);
      });
    }
    return new (ce || (ce = Promise))(function(Er, rr) {
      function Sr(_0) {
        try {
          g0(R0.next(_0));
        } catch (Wr) {
          rr(Wr);
        }
      }
      function nr(_0) {
        try {
          g0(R0.throw(_0));
        } catch (Wr) {
          rr(Wr);
        }
      }
      function g0(_0) {
        _0.done ? Er(_0.value) : fa(_0.value).then(Sr, nr);
      }
      g0((R0 = R0.apply(j, N || [])).next());
    });
  };
  let { mode: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s = !0 } = e, { rtc_configuration: o = null } = e, { i18n: c } = e, { time_limit: h = null } = e, { track_constraints: m = {} } = e, { rtp_params: f = {} } = e, { on_change_cb: p } = e, { reject_cb: v } = e, { icon: w = void 0 } = e, { icon_button_color: S = "var(--color-accent)" } = e, { pulse_color: A = "var(--color-accent)" } = e, { icon_radius: y = 50 } = e, { button_labels: b } = e, E = !1, x = !1, T;
  Q8(() => {
    i === "__webrtc_value__" && t(37, T = new Audio("https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/pop-sounds.mp3"));
  });
  let z = (j) => {
    j === "stopword" ? (t(10, x = !0), setTimeout(
      () => {
        t(10, x = !1);
      },
      3e3
    )) : j.type === "end_stream" ? (t(14, L = "closed"), zt(se), p(j)) : (console.debug("calling on_change_cb with msg", j), p(j));
  }, I = !1, B = null, { server: R } = e, L = "closed", W, se, q = null, oe, ae, we = null, de = !1, ke = !1, De = !1;
  const te = () => a === "send" ? oe : W.srcObject, ie = K8();
  function me() {
    return r(this, void 0, void 0, function* () {
      try {
        const N = we ? Object.assign(
          {
            deviceId: { exact: we.deviceId }
          },
          m
        ) : m, ce = yield navigator.mediaDevices.getUserMedia({ audio: N });
        t(16, oe = ce);
      } catch (N) {
        if (!navigator.mediaDevices) {
          ie("error", c("audio.no_device_support"));
          return;
        }
        if (N instanceof DOMException && N.name == "NotAllowedError") {
          ie("error", c("audio.allow_recording_access"));
          return;
        }
        throw N;
      }
      t(17, ae = dh(yield fh(), "audioinput")), t(19, de = !0);
      const j = oe.getTracks().map((N) => {
        var ce;
        return (ce = N.getSettings()) === null || ce === void 0 ? void 0 : ce.deviceId;
      })[0];
      t(18, we = j && ae.find((N) => N.deviceId === j) || ae[0]);
    });
  }
  function Le() {
    return r(this, void 0, void 0, function* () {
      if (L === "open") {
        zt(se), t(14, L = "closed"), t(13, B = null), yield me();
        return;
      }
      q = Math.random().toString(36).substring(2), t(0, i = q), se = new RTCPeerConnection(o), se.addEventListener("connectionstatechange", (ce) => r(this, void 0, void 0, function* () {
        switch (se.connectionState) {
          case "connected":
            console.info("connected"), t(14, L = "open"), t(13, B = h);
            break;
          case "disconnected":
            console.info("closed"), t(14, L = "closed"), t(13, B = null), zt(se);
            break;
          case "failed":
            console.info("failed"), t(14, L = "closed"), t(13, B = null), ie("error", "Connection failed!"), zt(se);
            break;
        }
      })), t(14, L = "waiting"), t(16, oe = null);
      try {
        yield me();
      } catch (ce) {
        if (!navigator.mediaDevices) {
          ie("error", c("audio.no_device_support"));
          return;
        }
        if (ce instanceof DOMException && ce.name == "NotAllowedError") {
          ie("error", c("audio.allow_recording_access"));
          return;
        }
        throw ce;
      }
      if (oe == null) return;
      const j = (ce) => {
        ce.type === "log" && ce.data === "pause_detected" ? t(11, E = !0) : ce.type === "log" && ce.data === "response_starting" && t(
          11,
          E = !1
        );
      }, N = setTimeout(
        () => {
          z({ type: "connection_timeout" });
        },
        5e3
      );
      Bi(oe, se, a === "send" ? null : W, R.offer, q, "audio", z, f, j, v).then((ce) => {
        clearTimeout(N), se = ce;
      }).catch(() => {
        console.info("catching"), clearTimeout(N), t(14, L = "closed");
      });
    });
  }
  function H(j) {
    j.preventDefault(), j.stopPropagation(), t(12, I = !1);
  }
  const U = (j) => r(void 0, void 0, void 0, function* () {
    const ce = j.target.value;
    t(16, oe = yield navigator.mediaDevices.getUserMedia({
      audio: Object.assign({ deviceId: { exact: ce } }, m)
    })), t(18, we = ae.find((R0) => R0.deviceId === ce) || null), t(12, I = !1);
  });
  function ve() {
    W && (t(15, W.muted = !W.muted, W), t(20, ke = W.muted));
  }
  function _e() {
    if (oe && oe.getAudioTracks().length > 0) {
      const j = oe.getAudioTracks()[0];
      j.enabled = !j.enabled, t(21, De = !j.enabled);
    }
  }
  function Se(j) {
    U8.call(this, n, j);
  }
  function Be(j) {
    V8[j ? "unshift" : "push"](() => {
      W = j, t(15, W);
    });
  }
  const Ie = () => ie("stop"), Ye = () => ie("play"), ct = async () => me(), Xe = () => oe, Ue = () => t(12, I = !0), Ge = () => t(12, I = !1);
  return n.$$set = (j) => {
    "mode" in j && t(1, a = j.mode), "value" in j && t(0, i = j.value), "label" in j && t(2, l = j.label), "show_label" in j && t(3, s = j.show_label), "rtc_configuration" in j && t(30, o = j.rtc_configuration), "i18n" in j && t(4, c = j.i18n), "time_limit" in j && t(31, h = j.time_limit), "track_constraints" in j && t(32, m = j.track_constraints), "rtp_params" in j && t(33, f = j.rtp_params), "on_change_cb" in j && t(34, p = j.on_change_cb), "reject_cb" in j && t(35, v = j.reject_cb), "icon" in j && t(5, w = j.icon), "icon_button_color" in j && t(6, S = j.icon_button_color), "pulse_color" in j && t(7, A = j.pulse_color), "icon_radius" in j && t(8, y = j.icon_radius), "button_labels" in j && t(9, b = j.button_labels), "server" in j && t(36, R = j.server);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*stopword_recognized*/
    1024 | n.$$.dirty[1] & /*notification_sound*/
    64 && x && T.play();
  }, [
    i,
    a,
    l,
    s,
    c,
    w,
    S,
    A,
    y,
    b,
    x,
    E,
    I,
    B,
    L,
    W,
    oe,
    ae,
    we,
    de,
    ke,
    De,
    te,
    ie,
    me,
    Le,
    H,
    U,
    ve,
    _e,
    o,
    h,
    m,
    f,
    p,
    v,
    R,
    T,
    Se,
    Be,
    Ie,
    Ye,
    ct,
    Xe,
    Ue,
    Ge
  ];
}
class mp extends q8 {
  constructor(e) {
    super(), W8(
      this,
      e,
      dp,
      hp,
      Y8,
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
  SvelteComponent: pp,
  add_flush_callback: Li,
  assign: gp,
  bind: Oi,
  binding_callbacks: qi,
  check_outros: _p,
  claim_component: Vr,
  claim_space: vp,
  create_component: Ur,
  destroy_component: Gr,
  detach: zc,
  empty: Ic,
  flush: Me,
  get_spread_object: bp,
  get_spread_update: yp,
  group_outros: wp,
  init: kp,
  insert_hydration: Nc,
  mount_component: jr,
  safe_not_equal: Dp,
  space: Ap,
  transition_in: J0,
  transition_out: $0
} = window.__gradio__svelte__internal;
function Ep(n) {
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
    n[0]), e = new mp({ props: i }), qi.push(() => Oi(e, "value", a)), e.$on(
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
        l[0], Li(() => t = !1)), e.$set(o);
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
function Sp(n) {
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
    $$slots: { default: [Cp] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new R7({ props: i }), qi.push(() => Oi(e, "value", a)), e.$on(
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
        l[0], Li(() => t = !1)), e.$set(o);
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
function Fp(n) {
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
    n[0]), e = new B8({ props: i }), qi.push(() => Oi(e, "value", a)), e.$on(
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
        l[0], Li(() => t = !1)), e.$set(o);
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
function xp(n) {
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
    n[0]), e = new a8({ props: i }), qi.push(() => Oi(e, "value", a)), e.$on(
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
        l[0], Li(() => t = !1)), e.$set(o);
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
  let e, t;
  return e = new g6({
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
function Tp(n) {
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
    o = gp(o, s[f]);
  e = new N5({ props: o }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[28]
  );
  const c = [xp, Fp, Sp, Ep], h = [];
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
      Ur(e.$$.fragment), t = Ap(), a && a.c(), i = Ic();
    },
    l(f) {
      Vr(e.$$.fragment, f), t = vp(f), a && a.l(f), i = Ic();
    },
    m(f, p) {
      jr(e, f, p), Nc(f, t, p), ~r && h[r].m(f, p), Nc(f, i, p), l = !0;
    },
    p(f, p) {
      const v = p[0] & /*gradio, loading_status*/
      16512 ? yp(s, [
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
        128 && bp(
          /*loading_status*/
          f[7]
        )
      ]) : {};
      e.$set(v);
      let w = r;
      r = m(f), r === w ? ~r && h[r].p(f, p) : (a && (wp(), $0(h[w], 1, 1, () => {
        h[w] = null;
      }), _p()), ~r ? (a = h[r], a ? a.p(f, p) : (a = h[r] = c[r](f), a.c()), J0(a, 1), a.m(i.parentNode, i)) : a = null);
    },
    i(f) {
      l || (J0(e.$$.fragment, f), J0(a), l = !0);
    },
    o(f) {
      $0(e.$$.fragment, f), $0(a), l = !1;
    },
    d(f) {
      f && (zc(t), zc(i)), Gr(e, f), ~r && h[r].d(f);
    }
  };
}
function Mp(n) {
  let e, t;
  return e = new Zh({
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
      $$slots: { default: [Tp] },
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
function Bp(n, e, t) {
  let { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { value: l = "__webrtc_value__" } = e, { button_labels: s } = e, { label: o } = e, { root: c } = e, { show_label: h } = e, { loading_status: m } = e, { height: f } = e, { width: p } = e, { server: v } = e, { container: w = !1 } = e, { scale: S = null } = e, { min_width: A = void 0 } = e, { gradio: y } = e, { rtc_configuration: b } = e, { time_limit: E = null } = e, { modality: x = "video" } = e, { mode: T = "send-receive" } = e, { rtp_params: z = {} } = e, { track_constraints: I = {} } = e, { icon: B = void 0 } = e, { icon_button_color: R = "var(--color-accent)" } = e, { pulse_color: L = "var(--color-accent)" } = e, { icon_radius: W = 50 } = e;
  const se = (N) => {
    (N == null ? void 0 : N.type) === "info" || (N == null ? void 0 : N.type) === "warning" || (N == null ? void 0 : N.type) === "error" ? y.dispatch(
      (N == null ? void 0 : N.type) === "error" ? "error" : "warning",
      N.message
    ) : (N == null ? void 0 : N.type) === "end_stream" ? y.dispatch("warning", N.data) : (N == null ? void 0 : N.type) === "fetch_output" ? y.dispatch("state_change") : (N == null ? void 0 : N.type) === "send_input" ? y.dispatch("tick") : (N == null ? void 0 : N.type) === "connection_timeout" && y.dispatch("warning", "Taking a while to connect. Are you on a VPN?"), N.type === "state_change" && y.dispatch(N === "change" ? "state_change" : "tick");
  }, q = (N) => {
    var ce;
    N.status === "failed" && ((ce = N.meta) === null || ce === void 0 ? void 0 : ce.error) === "concurrency_limit_reached" ? y.dispatch("error", "Too many concurrent connections. Please try again later!") : y.dispatch("error", "Unexpected server error");
  }, oe = () => y.dispatch("clear_status", m);
  function ae(N) {
    l = N, t(0, l);
  }
  const we = () => y.dispatch("tick"), de = ({ detail: N }) => y.dispatch("error", N);
  function ke(N) {
    l = N, t(0, l);
  }
  const De = () => y.dispatch("tick"), te = ({ detail: N }) => y.dispatch("error", N), ie = (...N) => y.client.stream(...N);
  function me(N) {
    l = N, t(0, l);
  }
  const Le = () => y.dispatch("clear"), H = () => y.dispatch("play"), U = () => y.dispatch("pause"), ve = () => y.dispatch("upload"), _e = () => y.dispatch("stop"), Se = () => y.dispatch("end"), Be = () => y.dispatch("start_recording"), Ie = () => y.dispatch("stop_recording"), Ye = () => y.dispatch("tick"), ct = ({ detail: N }) => y.dispatch("error", N);
  function Xe(N) {
    l = N, t(0, l);
  }
  const Ue = () => y.dispatch("tick"), Ge = ({ detail: N }) => y.dispatch("error", N), j = ({ detail: N }) => y.dispatch("warning", N);
  return n.$$set = (N) => {
    "elem_id" in N && t(1, r = N.elem_id), "elem_classes" in N && t(2, a = N.elem_classes), "visible" in N && t(3, i = N.visible), "value" in N && t(0, l = N.value), "button_labels" in N && t(4, s = N.button_labels), "label" in N && t(5, o = N.label), "root" in N && t(27, c = N.root), "show_label" in N && t(6, h = N.show_label), "loading_status" in N && t(7, m = N.loading_status), "height" in N && t(8, f = N.height), "width" in N && t(9, p = N.width), "server" in N && t(10, v = N.server), "container" in N && t(11, w = N.container), "scale" in N && t(12, S = N.scale), "min_width" in N && t(13, A = N.min_width), "gradio" in N && t(14, y = N.gradio), "rtc_configuration" in N && t(15, b = N.rtc_configuration), "time_limit" in N && t(16, E = N.time_limit), "modality" in N && t(17, x = N.modality), "mode" in N && t(18, T = N.mode), "rtp_params" in N && t(19, z = N.rtp_params), "track_constraints" in N && t(20, I = N.track_constraints), "icon" in N && t(21, B = N.icon), "icon_button_color" in N && t(22, R = N.icon_button_color), "pulse_color" in N && t(23, L = N.pulse_color), "icon_radius" in N && t(24, W = N.icon_radius);
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
    y,
    b,
    E,
    x,
    T,
    z,
    I,
    B,
    R,
    L,
    W,
    se,
    q,
    c,
    oe,
    ae,
    we,
    de,
    ke,
    De,
    te,
    ie,
    me,
    Le,
    H,
    U,
    ve,
    _e,
    Se,
    Be,
    Ie,
    Ye,
    ct,
    Xe,
    Ue,
    Ge,
    j
  ];
}
class Vp extends pp {
  constructor(e) {
    super(), kp(
      this,
      e,
      Bp,
      Mp,
      Dp,
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
    this.$$set({ elem_id: e }), Me();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Me();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(e) {
    this.$$set({ visible: e }), Me();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Me();
  }
  get button_labels() {
    return this.$$.ctx[4];
  }
  set button_labels(e) {
    this.$$set({ button_labels: e }), Me();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Me();
  }
  get root() {
    return this.$$.ctx[27];
  }
  set root(e) {
    this.$$set({ root: e }), Me();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Me();
  }
  get loading_status() {
    return this.$$.ctx[7];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Me();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Me();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Me();
  }
  get server() {
    return this.$$.ctx[10];
  }
  set server(e) {
    this.$$set({ server: e }), Me();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Me();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Me();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Me();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Me();
  }
  get rtc_configuration() {
    return this.$$.ctx[15];
  }
  set rtc_configuration(e) {
    this.$$set({ rtc_configuration: e }), Me();
  }
  get time_limit() {
    return this.$$.ctx[16];
  }
  set time_limit(e) {
    this.$$set({ time_limit: e }), Me();
  }
  get modality() {
    return this.$$.ctx[17];
  }
  set modality(e) {
    this.$$set({ modality: e }), Me();
  }
  get mode() {
    return this.$$.ctx[18];
  }
  set mode(e) {
    this.$$set({ mode: e }), Me();
  }
  get rtp_params() {
    return this.$$.ctx[19];
  }
  set rtp_params(e) {
    this.$$set({ rtp_params: e }), Me();
  }
  get track_constraints() {
    return this.$$.ctx[20];
  }
  set track_constraints(e) {
    this.$$set({ track_constraints: e }), Me();
  }
  get icon() {
    return this.$$.ctx[21];
  }
  set icon(e) {
    this.$$set({ icon: e }), Me();
  }
  get icon_button_color() {
    return this.$$.ctx[22];
  }
  set icon_button_color(e) {
    this.$$set({ icon_button_color: e }), Me();
  }
  get pulse_color() {
    return this.$$.ctx[23];
  }
  set pulse_color(e) {
    this.$$set({ pulse_color: e }), Me();
  }
  get icon_radius() {
    return this.$$.ctx[24];
  }
  set icon_radius(e) {
    this.$$set({ icon_radius: e }), Me();
  }
}
export {
  Hp as BaseExample,
  R7 as BaseInteractiveVideo,
  Vp as default,
  Lp as loaded,
  Rp as playable,
  Np as prettyBytes
};
