// figma node: 44:5602 _filter (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active) + '|' + "hover=" + __venc(p.hover);

export function Filter(_p = {}) {
  const props = { ..._p, active: _p.active ?? true, hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 54,
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 21.195,
        width: 12,
        height: 12,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 54,
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.04)",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 21.195,
        width: 12,
        height: 12,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 54,
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 21.195,
        width: 12,
        height: 12,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 54,
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.04)",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 21.195,
        width: 12,
        height: 12,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __impls = {
    // figma: Active=false, Hover=false
    "active=false|hover=false": __body0,
    // figma: Active=false,Hover=true
    "active=false|hover=true": __body1,
    // figma: Active=true, Hover=false
    "active=true|hover=false": __body2,
    // figma: Active=true, Hover=true
    "active=true|hover=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Filter;
