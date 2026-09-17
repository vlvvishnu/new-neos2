import { Apple } from './Apple.jsx';

// figma node: 7:11306 .tab__item (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "position=" + __venc(p.position) + '|' + "state=" + __venc(p.state);

export function TabItem(_p = {}) {
  const props = { ..._p, size: _p.size ?? "default", position: _p.position ?? "bottom", state: _p.state ?? "active", title: _p.title ?? "Tab title", showIcon: _p.showIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "2px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
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
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-padding) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-primary-colorprimarytext)",
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
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
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
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-padding) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.88)",
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
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-padding) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "2px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "2px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-padding) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "2px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "2px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "2px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "2px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "1px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 24px 4px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 24px 4px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
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
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 24px 4px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "2px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "2px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
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
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-primary-colorprimary)",
      borderRight: "1px solid var(--color-primary-colorprimary)",
      borderBottom: "1px solid var(--color-primary-colorprimary)",
      borderLeft: "2px solid var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 24px 4px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddinglg) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.45)",
        }}>{props.icon ?? <Apple style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: size=default, position=top, state=active
    "size=default|position=top|state=active": __body0,
    // figma: size=large, position=top, state=active
    "size=lg|position=top|state=active": __body1,
    // figma: size=small, position=top, state=active
    "size=sm|position=top|state=active": __body2,
    // figma: size=default, position=top, state=default
    "size=default|position=top|state=default": __body3,
    // figma: size=large, position=top, state=default
    "size=lg|position=top|state=default": __body4,
    // figma: size=small, position=top, state=default
    "size=sm|position=top|state=default": __body5,
    // figma: size=default, position=top, state=disabled
    "size=default|position=top|state=disabled": __body6,
    // figma: size=large, position=top, state=disabled
    "size=lg|position=top|state=disabled": __body7,
    // figma: size=small, position=top, state=disabled
    "size=sm|position=top|state=disabled": __body8,
    // figma: size=default, position=bottom, state=active
    "size=default|position=bottom|state=active": __body9,
    // figma: size=large, position=bottom, state=active
    "size=lg|position=bottom|state=active": __body10,
    // figma: size=small, position=bottom, state=active
    "size=sm|position=bottom|state=active": __body11,
    // figma: size=default, position=bottom, state=default
    "size=default|position=bottom|state=default": __body3,
    // figma: size=large, position=bottom, state=default
    "size=lg|position=bottom|state=default": __body4,
    // figma: size=small, position=bottom, state=default
    "size=sm|position=bottom|state=default": __body5,
    // figma: size=default, position=bottom, state=disabled
    "size=default|position=bottom|state=disabled": __body6,
    // figma: size=large, position=bottom, state=disabled
    "size=lg|position=bottom|state=disabled": __body7,
    // figma: size=small, position=bottom, state=disabled
    "size=sm|position=bottom|state=disabled": __body8,
    // figma: size=default, position=left, state=active
    "size=default|position=left|state=active": __body12,
    // figma: size=large, position=left, state=active
    "size=lg|position=left|state=active": __body13,
    // figma: size=small, position=left, state=active
    "size=sm|position=left|state=active": __body14,
    // figma: size=default, position=left, state=default
    "size=default|position=left|state=default": __body15,
    // figma: size=large, position=left, state=default
    "size=lg|position=left|state=default": __body16,
    // figma: size=small, position=left, state=default
    "size=sm|position=left|state=default": __body17,
    // figma: size=default, position=left, state=disabled
    "size=default|position=left|state=disabled": __body18,
    // figma: size=large, position=left, state=disabled
    "size=lg|position=left|state=disabled": __body19,
    // figma: size=small, position=left, state=disabled
    "size=sm|position=left|state=disabled": __body20,
    // figma: size=default, position=right, state=active
    "size=default|position=right|state=active": __body21,
    // figma: size=large, position=right, state=active
    "size=lg|position=right|state=active": __body22,
    // figma: size=small, position=right, state=active
    "size=sm|position=right|state=active": __body23,
    // figma: size=default, position=right, state=default
    "size=default|position=right|state=default": __body15,
    // figma: size=large, position=right, state=default
    "size=lg|position=right|state=default": __body16,
    // figma: size=small, position=right, state=default
    "size=sm|position=right|state=default": __body17,
    // figma: size=default, position=right, state=disabled
    "size=default|position=right|state=disabled": __body18,
    // figma: size=large, position=right, state=disabled
    "size=lg|position=right|state=disabled": __body19,
    // figma: size=small, position=right, state=disabled
    "size=sm|position=right|state=disabled": __body20,
  };
  return (__impls[__vkey(props)] ?? __body9)();
}
export default TabItem;
