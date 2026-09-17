// figma node: 6:1011 heroicons-outline/check
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlineCheck(_p = {}) {
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
        left: 4.5,
        top: 5.25,
        width: 15,
        height: 13.5,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Vector 616</div>
    </div>
  );
}
export default HeroiconsOutlineCheck;
