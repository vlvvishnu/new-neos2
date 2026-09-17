// figma node: 44:5583 caret-down
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function CaretDown2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style,
    }}>
      <svg width={24.750} height={14.905} viewBox="0 0 24.750 14.905" fill="none" style={{
        position: "absolute",
        left: 3.625,
        top: 8.548,
        width: 24.75,
        height: 14.905,
      }}>
        <path d={"M 23.92 0 L 0.83 0 C 0.138 0 -0.249 0.731 0.18 1.23 L 11.725 14.617 C 12.055 15.001 12.691 15.001 13.025 14.617 L 24.57 1.23 C 24.999 0.731 24.612 0 23.92 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CaretDown2;
