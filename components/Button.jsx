import { Search2 } from './Search2.jsx';

// figma node: 50:4856 Button (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state) + '|' + "content=" + __venc(p.content) + '|' + "danger=" + __venc(p.danger) + '|' + "ghost=" + __venc(p.ghost);

export function Button(_p = {}) {
  const props = { ..._p, type: _p.type ?? "primary", size: _p.size ?? "default", state: _p.state ?? "default", content: _p.content ?? "default", danger: _p.danger ?? false, ghost: _p.ghost ?? false, showIconLeft: _p.showIconLeft ?? false, title: _p.title ?? "Button", showIcon: _p.showIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheight) * 1px)",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--color-neutral-text-colortextsolid)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-neutral-text-colortextsolid)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheightsm) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-primary-colorprimarytext)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheight) * 1px)",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheight) * 1px)",
      borderRadius: 6,
      backgroundColor: "var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-neutral-text-colortextsolid)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheight) * 1px)",
      borderRadius: 6,
      backgroundColor: "var(--color-neutral-background-colorbgcontainer)",
      boxShadow: "inset 0 0 0 1px var(--color-neutral-borders-colorborder)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-padding) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-padding) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheightsm) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-primary-colorprimary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-neutral-text-colortextsolid)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--size-height-controlheightsm) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-neutral-background-colorbgcontainer)",
      boxShadow: "inset 0 0 0 1px var(--color-neutral-borders-colorborder)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--size-padding-paddingxs) * 1px)",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
      paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
      paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIconLeft && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgba(0,0,0,0.65)",
        }}>{props.iconLeft ?? <Search2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: type=default, size=default, state=default, content=default, danger=false, ghost=true
    "type=default|size=default|state=default|content=default|danger=false|ghost=true": __body0,
    // figma: type=link, size=small, state=default, content=default, danger=false, ghost=false
    "type=link|size=sm|state=default|content=default|danger=false|ghost=false": __body1,
    // figma: type=text, size=default, state=default, content=default, danger=false, ghost=false
    "type=text|size=default|state=default|content=default|danger=false|ghost=false": __body2,
    // figma: type=primary, size=default, state=default, content=default, danger=false, ghost=false
    "type=primary|size=default|state=default|content=default|danger=false|ghost=false": __body3,
    // figma: type=default, size=default, state=default, content=default, danger=false, ghost=false
    "type=default|size=default|state=default|content=default|danger=false|ghost=false": __body4,
    // figma: type=primary, size=small, state=default, content=default, danger=false, ghost=false
    "type=primary|size=sm|state=default|content=default|danger=false|ghost=false": __body5,
    // figma: type=default, size=small, state=default, content=default, danger=false, ghost=false
    "type=default|size=sm|state=default|content=default|danger=false|ghost=false": __body6,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Button;
