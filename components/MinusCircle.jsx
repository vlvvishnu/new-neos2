// @dsKitComponent — materialized from Figma layer "MinusCircle"
// figma node: 953:106982 MinusCircle
export function MinusCircle(_p = {}) {
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
        <path d={"M 16.928 11.142 L 7.071 11.142 C 6.953 11.142 6.857 11.238 6.857 11.356 L 6.857 12.642 C 6.857 12.759 6.953 12.856 7.071 12.856 L 16.928 12.856 C 17.046 12.856 17.143 12.759 17.143 12.642 L 17.143 11.356 C 17.143 11.238 17.046 11.142 16.928 11.142 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 Z M 12 21.964 C 6.498 21.964 2.036 17.502 2.036 12 C 2.036 6.498 6.498 2.036 12 2.036 C 17.502 2.036 21.964 6.498 21.964 12 C 21.964 17.502 17.502 21.964 12 21.964 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default MinusCircle;
