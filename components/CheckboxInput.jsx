// @dsKitComponent — materialized from Figma layer "CheckboxInput"
// figma node: 44:6422 Checkbox-Input (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "checked=" + __venc(p.checked) + '|' + "indeterminate=" + __venc(p.indeterminate) + '|' + "disabled=" + __venc(p.disabled) + '|' + "hovering=" + __venc(p.hovering);

export function CheckboxInput(_p = {}) {
  const props = { ..._p, checked: _p.checked ?? true, indeterminate: _p.indeterminate ?? false, disabled: _p.disabled ?? false, hovering: _p.hovering ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 16,
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 16,
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 16,
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "8px 8px 8px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={7.836} height={5.622} viewBox="0 0 7.836 5.622" fill="none" style={{
          position: "absolute",
          left: 4.082,
          top: 7,
          width: 7.836,
          height: 5.622,
        }}>
          <path d={"M 3.258 5.609 L 3.245 5.622 L 0 2.376 L 1.057 1.32 L 3.258 3.521 L 6.78 0 L 7.836 1.057 L 3.271 5.622 L 3.258 5.609 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          borderRadius: 2,
          boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
        }} />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "8px 8px 8px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={10.624} height={7.622} viewBox="0 0 10.624 7.622" fill="none" style={{
          position: "absolute",
          left: 2.688,
          top: 5,
          width: 10.624,
          height: 7.622,
        }}>
          <path d={"M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        borderRadius: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        }} />
        <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 8,
          height: 8,
          backgroundColor: "rgb(24,144,255)",
        }} />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -4,
          top: -4,
          width: 24,
          height: 24,
          borderRadius: 2,
          boxShadow: "inset 0 0 0 1px rgba(24,144,255,0)",
        }} />
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <svg width={10.624} height={7.622} viewBox="0 0 10.624 7.622" fill="none" style={{
          position: "absolute",
          left: 2.688,
          top: 5,
          width: 10.624,
          height: 7.622,
        }}>
          <path d={"M 4.417 7.604 L 4.4 7.622 L 0 3.222 L 1.433 1.789 L 4.418 4.774 L 9.192 0 L 10.624 1.433 L 4.435 7.622 L 4.417 7.604 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Checked=false, Indeterminate=false, Disabled=true, Hovering=false
    "checked=false|indeterminate=false|disabled=true|hovering=false": __body0,
    // figma: Checked=false, Indeterminate=false, Disabled=false, Hovering=false
    "checked=false|indeterminate=false|disabled=false|hovering=false": __body1,
    // figma: Checked=false, Indeterminate=false, Disabled=false,Hovering = true
    "checked=false|indeterminate=false|disabled=false|hovering=true": __body2,
    // figma: Checked=true, Indeterminate=false, Disabled=true, Hovering=false
    "checked=true|indeterminate=false|disabled=true|hovering=false": __body3,
    // figma: Checked=false, Indeterminate=true, Disabled=false, Hovering=false
    "checked=false|indeterminate=true|disabled=false|hovering=false": __body4,
    // figma: Checked=true, Indeterminate=false, Disabled=false, Hovering=false
    "checked=true|indeterminate=false|disabled=false|hovering=false": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CheckboxInput;
