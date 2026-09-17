// figma node: 7:11282 .slot__component
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function SlotComponent(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(0,0,0,0.02)",
      outline: "1px dashed var(--color-neutral-borders-colorborder)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-padding) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-padding) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Slot component"}</span>
    </div>
  );
}
export default SlotComponent;
