// figma node: 49:12817 Components/Table-Cell/Serial (2 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ComponentsTableCellSerial(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 20,
          overflow: "hidden",
          borderRadius: 100,
          backgroundColor: "rgb(255,77,79)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "1"}</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 20,
          overflow: "hidden",
          borderRadius: 100,
          backgroundColor: "rgb(255,77,79)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "1"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=small
    "size=sm": __body0,
    // figma: Size=medium
    "size=md": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellSerial;
