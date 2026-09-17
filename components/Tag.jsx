import { Close } from './Close.jsx';

// figma node: 44:1231 Tag (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "border=" + __venc(p.border);

export function Tag(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", border: _p.border ?? false, title: _p.title ?? "Tag" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(0,0,0,0.02)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(0,0,0,0.02)",
      boxShadow: "inset 0 0 0 1px var(--color-neutral-borders-colorborder)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: type=closable, border=false
    "type=closable|border=false": __body0,
    // figma: type=closable, border=true
    "type=closable|border=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tag;
