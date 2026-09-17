// figma node: 44:6956 Components/Table-Cell/Action (1 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "separator=" + __venc(p.separator) + '|' + "items=" + __venc(p.items);

export function ComponentsTableCellAction(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg", separator: _p.separator ?? true, items: _p.items ?? "1" };
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
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Invite"}</span>
    </div>
  );
  const __impls = {
    // figma: Size=medium, Separator=true, Items=1
    "size=md|separator=true|items=1": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellAction;
