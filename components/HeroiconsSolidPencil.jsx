// figma node: 6:979 heroicons-solid/pencil
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function HeroiconsSolidPencil(_p = {}) {
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
        <path d={"M 12.586 0.586 C 13.367 -0.195 14.633 -0.195 15.414 0.586 M 11.704 1.467 L 12.586 0.586 M 11.704 1.467 L 14.533 4.296 L 15.414 3.414 C 16.195 2.633 16.195 1.367 15.414 0.586 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 13.724 5.104 L 10.896 2.276 L 1.638 11.533 C 1.168 12.003 0.823 12.583 0.633 13.22 L 0.024 15.265 C -0.036 15.467 0.019 15.684 0.167 15.833 C 0.316 15.981 0.533 16.036 0.735 15.976 L 2.78 15.367 C 3.417 15.177 3.997 14.832 4.467 14.362 L 13.724 5.104 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default HeroiconsSolidPencil;
