// figma node: 640:133189 info-circle
export function InfoCircle(_p = {}) {
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
      <svg width={21} height={21} viewBox="0 0 21 21" fill="none" style={{
        position: "absolute",
        left: 1.5,
        top: 1.5,
        width: 21,
        height: 21,
      }}>
        <path d={"M 10.5 0 C 4.702 0 0 4.702 0 10.5 C 0 16.298 4.702 21 10.5 21 C 16.298 21 21 16.298 21 10.5 C 21 4.702 16.298 0 10.5 0 Z M 11.25 15.563 C 11.25 15.666 11.166 15.75 11.063 15.75 L 9.938 15.75 C 9.834 15.75 9.75 15.666 9.75 15.563 L 9.75 9.188 C 9.75 9.084 9.834 9 9.938 9 L 11.063 9 C 11.166 9 11.25 9.084 11.25 9.188 L 11.25 15.563 Z M 10.5 7.5 C 10.206 7.494 9.925 7.373 9.719 7.162 C 9.513 6.952 9.398 6.669 9.398 6.375 C 9.398 6.081 9.513 5.798 9.719 5.588 C 9.925 5.377 10.206 5.256 10.5 5.25 C 10.794 5.256 11.075 5.377 11.281 5.588 C 11.487 5.798 11.602 6.081 11.602 6.375 C 11.602 6.669 11.487 6.952 11.281 7.162 C 11.075 7.373 10.794 7.494 10.5 7.5 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default InfoCircle;
