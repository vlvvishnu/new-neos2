// figma node: 6:969 heroicons-outline/arrow-up-on-square-stack
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlineArrowUpOn(_p = {}) {
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
        top: 1.5,
        width: 15,
        height: 21,
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
export default HeroiconsOutlineArrowUpOn;
