// figma node: 6:947 heroicons-outline/Filter
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlineFilter(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(15,23,41)",
      ...props.style,
    }}>
      <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 3,
        width: 20,
        height: 18,
      }}>
        <path d={"M 20 0 L 0 0 L 8 9.46 L 8 16 L 12 18 L 12 9.46 L 20 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default HeroiconsOutlineFilter;
