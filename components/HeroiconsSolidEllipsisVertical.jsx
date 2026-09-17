// figma node: 6:985 heroicons-solid/ellipsis-vertical
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsSolidEllipsisVertical(_p = {}) {
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
      <svg width={3} height={15} viewBox="0 0 3 15" fill="none" style={{
        position: "absolute",
        left: 10.5,
        top: 4.5,
        width: 3,
        height: 15,
      }}>
        <path d={"M 1.5 0 C 0.672 0 0 0.672 0 1.5 M 3 1.5 C 3 0.672 2.328 0 1.5 0 M 1.5 3 C 2.328 3 3 2.328 3 1.5 M 0 1.5 C 0 2.328 0.672 3 1.5 3 Z M 1.5 6 C 0.672 6 0 6.672 0 7.5 M 3 7.5 C 3 6.672 2.328 6 1.5 6 M 1.5 9 C 2.328 9 3 8.328 3 7.5 M 0 7.5 C 0 8.328 0.672 9 1.5 9 Z M 1.5 12 C 0.672 12 0 12.672 0 13.5 M 3 13.5 C 3 12.672 2.328 12 1.5 12 M 1.5 15 C 2.328 15 3 14.328 3 13.5 M 0 13.5 C 0 14.328 0.672 15 1.5 15 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default HeroiconsSolidEllipsisVertical;
