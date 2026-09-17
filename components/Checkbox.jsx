// figma node: 233:21389 Checkbox (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status) + '|' + "state=" + __venc(p.state);

export function Checkbox(_p = {}) {
  const props = { ..._p, showTitle: _p.showTitle ?? true, status: _p.status ?? "active", state: _p.state ?? "default", title: _p.title ?? "Checkbox" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-neutral-background-colorbgcontainer)",
        boxShadow: "inset 0 0 0 1px var(--color-neutral-borders-colorborder)",
        flexShrink: 0,
      }} />
      {props.showTitle && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: status=inactive, state=default
    "status=inactive|state=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkbox;
