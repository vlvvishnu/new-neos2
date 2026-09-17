// figma node: 44:24596 Copy icon
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function CopyIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(159,109,171)",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
      }}>
        <path d={"M 17.143 21 L 17.143 22.875 C 17.143 23.496 16.567 24 15.857 24 L 1.286 24 C 0.576 24 0 23.496 0 22.875 L 0 5.625 C 0 5.004 0.576 4.5 1.286 4.5 L 5.143 4.5 L 5.143 18.375 C 5.143 19.822 6.489 21 8.143 21 L 17.143 21 Z M 17.143 4.875 L 17.143 0 L 8.143 0 C 7.433 0 6.857 0.504 6.857 1.125 L 6.857 18.375 C 6.857 18.996 7.433 19.5 8.143 19.5 L 22.714 19.5 C 23.424 19.5 24 18.996 24 18.375 L 24 6 L 18.429 6 C 17.721 6 17.143 5.494 17.143 4.875 Z M 23.623 3.421 L 20.091 0.329 C 19.85 0.119 19.523 0 19.182 0 L 18.857 0 L 18.857 4.5 L 24 4.5 L 24 4.216 C 24 3.918 23.865 3.631 23.623 3.421 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CopyIcon;
