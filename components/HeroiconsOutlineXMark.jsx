// figma node: 6:959 heroicons-outline/x-mark
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlineXMark(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(15,23,42)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
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
export default HeroiconsOutlineXMark;
