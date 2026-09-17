// figma node: 44:6188 Components/Table-Cell/Text (3 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ComponentsTableCellText(_p = {}) {
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
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
      }}>{props.text1 ?? "text"}</span>
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
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
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
      }}>{props.text1 ?? "text"}</span>
    </div>
  );
  const __body2 = () => (
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
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
      }}>{props.text1 ?? "text"}</span>
    </div>
  );
  const __impls = {
    // figma: Size=medium
    "size=md": __body0,
    // figma: Size=large
    "size=lg": __body1,
    // figma: Size=small
    "size=sm": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ComponentsTableCellText;
