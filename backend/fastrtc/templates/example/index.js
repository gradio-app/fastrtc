var v;
(function(e) {
  e.LOAD = "LOAD", e.EXEC = "EXEC", e.WRITE_FILE = "WRITE_FILE", e.READ_FILE = "READ_FILE", e.DELETE_FILE = "DELETE_FILE", e.RENAME = "RENAME", e.CREATE_DIR = "CREATE_DIR", e.LIST_DIR = "LIST_DIR", e.DELETE_DIR = "DELETE_DIR", e.ERROR = "ERROR", e.DOWNLOAD = "DOWNLOAD", e.PROGRESS = "PROGRESS", e.LOG = "LOG", e.MOUNT = "MOUNT", e.UNMOUNT = "UNMOUNT";
})(v || (v = {}));
const {
  SvelteComponent: X,
  append_hydration: T,
  attr: I,
  binding_callbacks: j,
  children: A,
  claim_element: N,
  claim_text: Q,
  detach: a,
  element: k,
  empty: b,
  init: z,
  insert_hydration: O,
  is_function: p,
  listen: L,
  noop: y,
  run_all: B,
  safe_not_equal: H,
  set_data: Y,
  src_url_equal: w,
  text: Z,
  toggle_class: d
} = window.__gradio__svelte__internal;
function S(e) {
  let l;
  function t(u, i) {
    return J;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), l = b();
    },
    l(u) {
      o.l(u), l = b();
    },
    m(u, i) {
      o.m(u, i), O(u, l, i);
    },
    p(u, i) {
      o.p(u, i);
    },
    d(u) {
      u && a(l), o.d(u);
    }
  };
}
function J(e) {
  let l, t, n, o, u;
  return {
    c() {
      l = k("div"), t = k("video"), this.h();
    },
    l(i) {
      l = N(i, "DIV", { class: !0 });
      var c = A(l);
      t = N(c, "VIDEO", { src: !0 }), A(t).forEach(a), c.forEach(a), this.h();
    },
    h() {
      var i;
      w(t.src, n = /*value*/
      (i = e[2]) == null ? void 0 : i.video.url) || I(t, "src", n), I(l, "class", "container svelte-1uoo7dd"), d(
        l,
        "table",
        /*type*/
        e[0] === "table"
      ), d(
        l,
        "gallery",
        /*type*/
        e[0] === "gallery"
      ), d(
        l,
        "selected",
        /*selected*/
        e[1]
      );
    },
    m(i, c) {
      O(i, l, c), T(l, t), e[6](t), o || (u = [
        L(
          t,
          "loadeddata",
          /*init*/
          e[4]
        ),
        L(t, "mouseover", function() {
          p(
            /*video*/
            e[3].play.bind(
              /*video*/
              e[3]
            )
          ) && e[3].play.bind(
            /*video*/
            e[3]
          ).apply(this, arguments);
        }),
        L(t, "mouseout", function() {
          p(
            /*video*/
            e[3].pause.bind(
              /*video*/
              e[3]
            )
          ) && e[3].pause.bind(
            /*video*/
            e[3]
          ).apply(this, arguments);
        })
      ], o = !0);
    },
    p(i, c) {
      var _;
      e = i, c & /*value*/
      4 && !w(t.src, n = /*value*/
      (_ = e[2]) == null ? void 0 : _.video.url) && I(t, "src", n), c & /*type*/
      1 && d(
        l,
        "table",
        /*type*/
        e[0] === "table"
      ), c & /*type*/
      1 && d(
        l,
        "gallery",
        /*type*/
        e[0] === "gallery"
      ), c & /*selected*/
      2 && d(
        l,
        "selected",
        /*selected*/
        e[1]
      );
    },
    d(i) {
      i && a(l), e[6](null), o = !1, B(u);
    }
  };
}
function K(e) {
  let l, t = (
    /*value*/
    e[2] && S(e)
  );
  return {
    c() {
      t && t.c(), l = b();
    },
    l(n) {
      t && t.l(n), l = b();
    },
    m(n, o) {
      t && t.m(n, o), O(n, l, o);
    },
    p(n, [o]) {
      /*value*/
      n[2] ? t ? t.p(n, o) : (t = S(n), t.c(), t.m(l.parentNode, l)) : t && (t.d(1), t = null);
    },
    i: y,
    o: y,
    d(n) {
      n && a(l), t && t.d(n);
    }
  };
}
function P(e, l, t) {
  var n = this && this.__awaiter || function(f, G, s, R) {
    function W(E) {
      return E instanceof s ? E : new s(function(m) {
        m(E);
      });
    }
    return new (s || (s = Promise))(function(E, m) {
      function q(r) {
        try {
          h(R.next(r));
        } catch (D) {
          m(D);
        }
      }
      function V(r) {
        try {
          h(R.throw(r));
        } catch (D) {
          m(D);
        }
      }
      function h(r) {
        r.done ? E(r.value) : W(r.value).then(q, V);
      }
      h((R = R.apply(f, G || [])).next());
    });
  };
  let { type: o } = l, { selected: u = !1 } = l, { value: i } = l, { loop: c } = l, _;
  function U() {
    return n(this, void 0, void 0, function* () {
      t(3, _.muted = !0, _), t(3, _.playsInline = !0, _), t(3, _.controls = !1, _), _.setAttribute("muted", ""), yield _.play(), _.pause();
    });
  }
  function C(f) {
    j[f ? "unshift" : "push"](() => {
      _ = f, t(3, _);
    });
  }
  return e.$$set = (f) => {
    "type" in f && t(0, o = f.type), "selected" in f && t(1, u = f.selected), "value" in f && t(2, i = f.value), "loop" in f && t(5, c = f.loop);
  }, [o, u, i, _, U, c, C];
}
class M extends X {
  constructor(l) {
    super(), z(this, l, P, K, H, { type: 0, selected: 1, value: 2, loop: 5 });
  }
}
export {
  M as default
};
