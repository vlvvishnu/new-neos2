// figma node: 6:965 heroicons-outline/pencil
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlinePencil(_p = {}) {
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
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 16,
        height: 16,
      }}>
        <path d={"M 13.374 0.451 C 13.974 -0.15 14.949 -0.15 15.549 0.451 M 13.374 0.451 L 11.989 1.835 L 1.584 12.24 C 1.15 12.674 0.831 13.209 0.656 13.797 L 0 16 L 2.203 15.344 C 2.791 15.169 3.326 14.85 3.76 14.416 L 15.549 2.626 C 16.15 2.026 16.15 1.051 15.549 0.451 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default HeroiconsOutlinePencil;
