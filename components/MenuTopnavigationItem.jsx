import { Mail } from './Mail.jsx';

// figma node: 7:12184 .menu__topnavigation__item (8 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "theme=" + __venc(p.theme);

export function MenuTopnavigationItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", theme: _p.theme ?? "dark", showIcon: _p.showIcon ?? true, title: _p.title ?? "Navigation Item" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "2px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgb(22,119,255)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "2px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.88)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.88)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.88)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(255,255,255,0.65)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.88)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-neutral-text-colortextsolid)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgb(22,119,255)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-neutral-text-colortextsolid)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.88)",
        }}>{props.icon ?? <Mail style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(255,255,255,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: state=default, theme=light
    "state=default|theme=light": __body0,
    // figma: state=hover, theme=light
    "state=hover|theme=light": __body1,
    // figma: state=active, theme=light
    "state=active|theme=light": __body2,
    // figma: state=disabled, theme=light
    "state=disabled|theme=light": __body3,
    // figma: state=default, theme=dark
    "state=default|theme=dark": __body4,
    // figma: state=hover, theme=dark
    "state=hover|theme=dark": __body5,
    // figma: state=active, theme=dark
    "state=active|theme=dark": __body6,
    // figma: state=disabled, theme=dark
    "state=disabled|theme=dark": __body7,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default MenuTopnavigationItem;
