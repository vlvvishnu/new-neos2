import { CheckCircle3 } from './CheckCircle3.jsx';
import { CloseCircle2 } from './CloseCircle2.jsx';
import { ExclamationCircle } from './ExclamationCircle.jsx';
import { MinusCircle } from './MinusCircle.jsx';
import { Sync2 } from './Sync2.jsx';

// figma node: 953:106984 Tag__Status (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function TagStatus(_p = {}) {
  const props = { ..._p, status: _p.status ?? "success", showIcon: _p.showIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-success-colorsuccessbg)",
      boxShadow: "inset 0 0 0 1px var(--color-success-colorsuccessborder)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.icon1 ?? <CheckCircle3 style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-success-colorsuccesstext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "success"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-error-colorerrorbg)",
      boxShadow: "inset 0 0 0 1px var(--color-error-colorerrorborder)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
          color: "rgb(82,196,26)",
        }}>{props.icon1 ?? <CloseCircle2 style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-error-colorerrortext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "error"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-info-colorinfobg)",
      boxShadow: "inset 0 0 0 1px var(--color-info-colorinfoborder)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
          color: "rgb(82,196,26)",
        }}>{props.icon1 ?? <Sync2 style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-info-colorinfotext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "processing"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-warning-colorwarningbg)",
      boxShadow: "inset 0 0 0 1px var(--color-warning-colorwarningborder)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
          color: "rgb(82,196,26)",
        }}>{props.icon1 ?? <ExclamationCircle style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-warning-colorwarningtext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "warning"}</span>
    </div>
  );
  const __body4 = () => (
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
          color: "rgb(82,196,26)",
        }}>{props.icon1 ?? <MinusCircle style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
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
      }}>{props.text1 ?? "stop"}</span>
    </div>
  );
  const __impls = {
    // figma: status=success
    "status=success": __body0,
    // figma: status=error
    "status=error": __body1,
    // figma: status=processing
    "status=processing": __body2,
    // figma: status=warning
    "status=warning": __body3,
    // figma: status=stop
    "status=stop": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TagStatus;
