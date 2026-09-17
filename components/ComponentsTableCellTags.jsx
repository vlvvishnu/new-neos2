import { LayoutBlocksHorizontal3 } from './LayoutBlocksHorizontal3.jsx';

// figma node: 44:6697 Components/Table-Cell/Tags (2 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ComponentsTableCellTags(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          width: 216,
          flexShrink: 0,
        }}>{props.count ?? <LayoutBlocksHorizontal3 />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          width: 216,
          flexShrink: 0,
        }}>{props.count ?? <LayoutBlocksHorizontal3 />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=medium
    "size=md": __body0,
    // figma: Size=large
    "size=lg": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ComponentsTableCellTags;
