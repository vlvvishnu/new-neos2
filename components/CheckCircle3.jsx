// figma node: 953:106971 CheckCircle
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function CheckCircle3(_p = {}) {
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
        <path d={"M 17.009 7.74 L 15.753 7.74 C 15.479 7.74 15.22 7.871 15.059 8.096 L 10.848 13.936 L 8.941 11.289 C 8.78 11.067 8.523 10.933 8.247 10.933 L 6.991 10.933 C 6.817 10.933 6.715 11.131 6.817 11.273 L 10.154 15.902 C 10.233 16.012 10.337 16.102 10.458 16.163 C 10.578 16.225 10.711 16.258 10.847 16.258 C 10.982 16.258 11.116 16.225 11.236 16.163 C 11.356 16.102 11.46 16.012 11.539 15.902 L 17.18 8.08 C 17.285 7.938 17.183 7.74 17.009 7.74 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 Z M 12 21.964 C 6.498 21.964 2.036 17.502 2.036 12 C 2.036 6.498 6.498 2.036 12 2.036 C 17.502 2.036 21.964 6.498 21.964 12 C 21.964 17.502 17.502 21.964 12 21.964 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CheckCircle3;
