import { _ as e, l as s, H as o, k as i, I as g } from "./mermaid.core-B0aNlTYs.js";
import { p } from "./radar-MK3ICKWK-CbTD4Hmd.js";
var v = {
  parse: /* @__PURE__ */ e(async (r) => {
    const a = await p("info", r);
    s.debug(a);
  }, "parse")
}, d = { version: g.version }, c = /* @__PURE__ */ e(() => d.version, "getVersion"), m = {
  getVersion: c
}, l = /* @__PURE__ */ e((r, a, n) => {
  s.debug(`rendering info diagram
` + r);
  const t = o(a);
  i(t, 100, 400, !0), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw"), f = { draw: l }, b = {
  parser: v,
  db: m,
  renderer: f
};
export {
  b as diagram
};
