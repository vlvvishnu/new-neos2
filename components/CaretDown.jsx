// @dsKitComponent — materialized from Figma layer "CaretDown"
// figma node: 8:16517 CaretDown
export function CaretDown(_p = {}) {
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
      <svg width={16.501} height={9.937} viewBox="0 0 16.501 9.937" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 7.031,
        width: 16.501,
        height: 9.937,
      }}>
        <path d={"M 15.947 0 L 0.553 0 C 0.092 0 -0.166 0.488 0.12 0.82 L 7.817 9.745 C 8.037 10.001 8.461 10.001 8.684 9.745 L 16.381 0.82 C 16.667 0.488 16.409 0 15.947 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CaretDown;
