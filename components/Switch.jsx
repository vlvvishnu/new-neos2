// figma node: 989:151058 Switch (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "active=" + __venc(p.active) + '|' + "size=" + __venc(p.size) + '|' + "content=" + __venc(p.content);

export function Switch(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", active: _p.active ?? false, size: _p.size ?? "default", content: _p.content ?? "icon", title: _p.title ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 22,
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 18,
        height: 18,
        borderRadius: 200,
        backgroundColor: "var(--color-neutral-text-colortextsolid)",
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.02), 0px 1px 6px -1px rgba(0,0,0,0.02), 0px 1px 2px 0px rgba(0,0,0,0.03)",
      }} />
    </div>
  );
  const __impls = {
    // figma: state=default, active=false, size=default, content=none
    "state=default|active=false|size=default|content=none": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Switch;
