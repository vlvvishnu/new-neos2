// figma node: 787:101985 check-circle
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function CheckCircle2(_p = {}) {
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
        <path d={"M 10.5 0 C 4.702 0 0 4.702 0 10.5 C 0 16.298 4.702 21 10.5 21 C 16.298 21 21 16.298 21 10.5 C 21 4.702 16.298 0 10.5 0 Z M 15.035 7.071 L 10.099 13.915 C 10.03 14.011 9.939 14.09 9.834 14.144 C 9.729 14.198 9.612 14.226 9.493 14.226 C 9.375 14.226 9.258 14.198 9.153 14.144 C 9.047 14.09 8.956 14.011 8.888 13.915 L 5.965 9.865 C 5.876 9.741 5.965 9.567 6.117 9.567 L 7.216 9.567 C 7.455 9.567 7.683 9.682 7.823 9.879 L 9.492 12.195 L 13.177 7.085 C 13.317 6.891 13.542 6.773 13.784 6.773 L 14.883 6.773 C 15.035 6.773 15.124 6.947 15.035 7.071 L 15.035 7.071 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CheckCircle2;
