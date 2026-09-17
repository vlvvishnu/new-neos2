// figma node: 46:24933 Components/Table-Cell/Status (3 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status) + '|' + "size=" + __venc(p.size);

export function ComponentsTableCellStatus(_p = {}) {
  const props = { ..._p, status: _p.status ?? "default", size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
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
      <div style={{
        position: "relative",
        height: 22,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "13px 0px 13px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderRadius: 100,
          backgroundColor: "rgba(255,255,255,0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 6.003,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,-1,1,0,0,6.002)",
              transformOrigin: "0 0",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 0.001,
                height: 0.001,
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 0.001,
                height: 0.001,
                flexShrink: 0,
              }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 0.001,
                height: 0.001,
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 0.001,
                height: 0.001,
                flexShrink: 0,
              }} />
            </div>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>Status</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Status=success, Size=medium
    "status=success|size=md": __body0,
    // figma: Status=default, Size=medium
    "status=default|size=md": __body0,
    // figma: Status=error, Size=medium
    "status=error|size=md": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellStatus;
