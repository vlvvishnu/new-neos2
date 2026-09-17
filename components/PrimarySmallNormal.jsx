import { HeroiconsOutlineCheck } from './HeroiconsOutlineCheck.jsx';

// figma node: 44:1462 Primary small - normal (3 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function PrimarySmallNormal(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "disable", icon: _p.icon ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(1,132,247)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 16px 7px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <HeroiconsOutlineCheck />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(158,168,179)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 16px 7px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <HeroiconsOutlineCheck />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(0,98,184)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 16px 7px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <HeroiconsOutlineCheck />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Normal
    "property1=normal": __body0,
    // figma: Property 1=Disable
    "property1=disable": __body1,
    // figma: Property 1=Hover
    "property1=hover": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default PrimarySmallNormal;
