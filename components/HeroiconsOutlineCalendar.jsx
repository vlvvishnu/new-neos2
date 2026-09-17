// figma node: 49:5451 heroicons-outline/calendar
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsOutlineCalendar(_p = {}) {
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
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 2.25 2.25 C 1.007 2.25 0 3.257 0 4.5 M 2.25 2.25 L 15.75 2.25 C 16.993 2.25 18 3.257 18 4.5 L 18 15.75 C 18 16.993 16.993 18 15.75 18 L 2.25 18 C 1.007 18 0 16.993 0 15.75 L 0 4.5 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 2.25 6 C 1.007 6 0 7.007 0 8.25 M 2.25 6 L 15.75 6 C 16.993 6 18 7.007 18 8.25 L 18 15.75 C 18 16.993 16.993 18 15.75 18 L 2.25 18 C 1.007 18 0 16.993 0 15.75 L 0 8.25 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default HeroiconsOutlineCalendar;
