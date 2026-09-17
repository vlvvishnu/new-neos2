// figma node: 44:4390 LayoutBlocks/base
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function LayoutBlocksBase(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(230,247,255)",
      outline: "1px dashed rgb(145,213,255)",
      outlineOffset: "-0.500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        textAlign: "center",
        lineHeight: 1,
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
      }}>{props.text1 ?? "◇\nSwap"}</span>
    </div>
  );
}
export default LayoutBlocksBase;
