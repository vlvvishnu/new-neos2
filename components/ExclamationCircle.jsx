// figma node: 953:106976 ExclamationCircle
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function ExclamationCircle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
      }}>
        <path d={"M 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 Z M 12 21.964 C 6.498 21.964 2.036 17.502 2.036 12 C 2.036 6.498 6.498 2.036 12 2.036 C 17.502 2.036 21.964 6.498 21.964 12 C 21.964 17.502 17.502 21.964 12 21.964 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 10.714 16.714 C 10.714 17.055 10.849 17.382 11.09 17.623 C 11.332 17.865 11.659 18 12 18 C 12.341 18 12.668 17.865 12.909 17.623 C 13.15 17.382 13.285 17.055 13.285 16.714 C 13.285 16.373 13.15 16.046 12.909 15.805 C 12.668 15.564 12.341 15.429 12 15.429 C 11.659 15.429 11.332 15.564 11.09 15.805 C 10.849 16.046 10.714 16.373 10.714 16.714 Z M 11.357 13.714 L 12.642 13.714 C 12.76 13.714 12.857 13.618 12.857 13.5 L 12.857 6.214 C 12.857 6.096 12.76 6 12.642 6 L 11.357 6 C 11.239 6 11.142 6.096 11.142 6.214 L 11.142 13.5 C 11.142 13.618 11.239 13.714 11.357 13.714 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ExclamationCircle;
