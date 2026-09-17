// @dsKitComponent — materialized from Figma layer "CheckboxEmpty"
// figma node: 6:955 checkbox-empty
export function CheckboxEmpty(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(47,52,55)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Vector</div>
    </div>
  );
}
export default CheckboxEmpty;
