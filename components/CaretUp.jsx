// figma node: 44:5585 caret-up
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function CaretUp(_p = {}) {
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
        <path d={"M 24.57 13.674 L 13.025 0.287 C 12.695 -0.096 12.059 -0.096 11.725 0.287 L 0.18 13.674 C -0.249 14.174 0.138 14.905 0.83 14.905 L 23.92 14.905 C 24.612 14.905 24.999 14.174 24.57 13.674 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CaretUp;
