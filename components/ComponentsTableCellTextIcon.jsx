import { FileText } from './FileText.jsx';

// figma node: 44:24572 Components/Table-Cell/Text+Icon (1 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ComponentsTableCellTextIcon(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 215,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "New York No. 1 Lake Park"}</span>
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <FileText style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=medium
    "size=md": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellTextIcon;
