import { p as w } from "./chunk-4BMEZGHF-skpIwyQ5.js";
import { C as B, s as S, g as F, n as z, o as P, b as W, c as D, _ as n, l as x, D as m, E as T, t as E, H as _, k as A } from "./mermaid.core-Cmyps_S7.js";
import { p as N } from "./radar-MK3ICKWK-Bw4p6KaX.js";
var C = {
  packet: []
}, v = structuredClone(C), L = B.packet, Y = /* @__PURE__ */ n(() => {
  const t = m({
    ...L,
    ...T().packet
  });
  return t.showBits && (t.paddingY += 10), t;
}, "getConfig"), H = /* @__PURE__ */ n(() => v.packet, "getPacket"), I = /* @__PURE__ */ n((t) => {
  t.length > 0 && v.packet.push(t);
}, "pushWord"), M = /* @__PURE__ */ n(() => {
  E(), v = structuredClone(C);
}, "clear"), h = {
  pushWord: I,
  getPacket: H,
  getConfig: Y,
  clear: M,
  setAccTitle: S,
  getAccTitle: F,
  setDiagramTitle: z,
  getDiagramTitle: P,
  getAccDescription: W,
  setAccDescription: D
}, O = 1e4, G = /* @__PURE__ */ n((t) => {
  w(t, h);
  let e = -1, o = [], s = 1;
  const { bitsPerRow: i } = h.getConfig();
  for (let { start: a, end: r, label: p } of t.blocks) {
    if (r && r < a)
      throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);
    if (a !== e + 1)
      throw new Error(
        `Packet block ${a} - ${r ?? a} is not contiguous. It should start from ${e + 1}.`
      );
    for (e = r ?? a, x.debug(`Packet block ${a} - ${e} with label ${p}`); o.length <= i + 1 && h.getPacket().length < O; ) {
      const [b, c] = K({ start: a, end: r, label: p }, s, i);
      if (o.push(b), b.end + 1 === s * i && (h.pushWord(o), o = [], s++), !c)
        break;
      ({ start: a, end: r, label: p } = c);
    }
  }
  h.pushWord(o);
}, "populate"), K = /* @__PURE__ */ n((t, e, o) => {
  if (t.end === void 0 && (t.end = t.start), t.start > t.end)
    throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  return t.end + 1 <= e * o ? [t, void 0] : [
    {
      start: t.start,
      end: e * o - 1,
      label: t.label
    },
    {
      start: e * o,
      end: t.end,
      label: t.label
    }
  ];
}, "getNextFittingBlock"), R = {
  parse: /* @__PURE__ */ n(async (t) => {
    const e = await N("packet", t);
    x.debug(e), G(e);
  }, "parse")
}, U = /* @__PURE__ */ n((t, e, o, s) => {
  const i = s.db, a = i.getConfig(), { rowHeight: r, paddingY: p, bitWidth: b, bitsPerRow: c } = a, u = i.getPacket(), l = i.getDiagramTitle(), g = r + p, d = g * (u.length + 1) - (l ? 0 : r), k = b * c + 2, f = _(e);
  f.attr("viewbox", `0 0 ${k} ${d}`), A(f, d, k, a.useMaxWidth);
  for (const [$, y] of u.entries())
    X(f, y, $, a);
  f.append("text").text(l).attr("x", k / 2).attr("y", d - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), X = /* @__PURE__ */ n((t, e, o, { rowHeight: s, paddingX: i, paddingY: a, bitWidth: r, bitsPerRow: p, showBits: b }) => {
  const c = t.append("g"), u = o * (s + a) + a;
  for (const l of e) {
    const g = l.start % p * r + 1, d = (l.end - l.start + 1) * r - i;
    if (c.append("rect").attr("x", g).attr("y", u).attr("width", d).attr("height", s).attr("class", "packetBlock"), c.append("text").attr("x", g + d / 2).attr("y", u + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(l.label), !b)
      continue;
    const k = l.end === l.start, f = u - 2;
    c.append("text").attr("x", g + (k ? d / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(l.start), k || c.append("text").attr("x", g + d).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(l.end);
  }
}, "drawWord"), j = { draw: U }, q = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
}, J = /* @__PURE__ */ n(({ packet: t } = {}) => {
  const e = m(q, t);
  return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
}, "styles"), tt = {
  parser: R,
  db: h,
  renderer: j,
  styles: J
};
export {
  tt as diagram
};
