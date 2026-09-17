import { Filter } from './Filter.jsx';

// figma node: 7476:54514 Components (2 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1) + '|' + "property2=" + __venc(p.property2);

export function Components2(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "table-cell", property2: _p.property2 ?? "header" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 92,
      height: 55,
      borderTop: "1px solid rgba(0,0,0,0)",
      borderRight: "1px solid rgba(0,0,0,0)",
      borderBottom: "1px solid rgba(0,0,0,0)",
      borderLeft: "1px solid rgba(0,0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: -2,
      padding: "11px 7px 11px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(0,0,0,0.65)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Expiring Auth(s)"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 22,
          flexShrink: 0,
        }}>{props.icon1 ?? <Filter active={false} hover={false} style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 1,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Divider ↕︎</div>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.250} height={12.250} viewBox="0 0 12.250 12.250" fill="none" style={{
            position: "absolute",
            left: 0.875,
            top: 0.875,
            width: 12.25,
            height: 12.25,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 6.125 0 C 2.743 0 0 2.743 0 6.125 C 0 9.507 2.743 12.25 6.125 12.25 C 9.507 12.25 12.25 9.507 12.25 6.125 C 12.25 2.743 9.507 0 6.125 0 Z M 6.563 9.078 C 6.563 9.138 6.513 9.188 6.453 9.188 L 5.797 9.188 C 5.737 9.188 5.688 9.138 5.688 9.078 L 5.688 5.359 C 5.688 5.299 5.737 5.25 5.797 5.25 L 6.453 5.25 C 6.513 5.25 6.563 5.299 6.563 5.359 L 6.563 9.078 Z M 6.125 4.375 C 5.953 4.371 5.79 4.301 5.67 4.178 C 5.549 4.055 5.482 3.891 5.482 3.719 C 5.482 3.547 5.549 3.382 5.67 3.259 C 5.79 3.137 5.953 3.066 6.125 3.063 C 6.297 3.066 6.46 3.137 6.58 3.259 C 6.701 3.382 6.768 3.547 6.768 3.719 C 6.768 3.891 6.701 4.055 6.58 4.178 C 6.46 4.301 6.297 4.371 6.125 4.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 92,
      height: 55,
      borderTop: "1px solid rgba(0,0,0,0)",
      borderRight: "1px solid rgba(0,0,0,0)",
      borderBottom: "1px solid rgba(0,0,0,0)",
      borderLeft: "1px solid rgba(0,0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7,
        top: 11,
        width: 50,
        height: 32,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(0,0,0,0.65)",
      }}>{props.text1 ?? "Expiring Auth(s)"}</span>
      <div style={{
          position: "absolute",
          left: 55,
          top: 16,
          width: 20,
          height: 22,
        }}>{props.icon1 ?? <Filter active={false} hover={false} style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 1,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Divider ↕︎</div>
      <div style={{
        position: "absolute",
        left: 73,
        top: 20,
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.250} height={12.250} viewBox="0 0 12.250 12.250" fill="none" style={{
            position: "absolute",
            left: 0.875,
            top: 0.875,
            width: 12.25,
            height: 12.25,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 6.125 0 C 2.743 0 0 2.743 0 6.125 C 0 9.507 2.743 12.25 6.125 12.25 C 9.507 12.25 12.25 9.507 12.25 6.125 C 12.25 2.743 9.507 0 6.125 0 Z M 6.563 9.078 C 6.563 9.138 6.513 9.188 6.453 9.188 L 5.797 9.188 C 5.737 9.188 5.688 9.138 5.688 9.078 L 5.688 5.359 C 5.688 5.299 5.737 5.25 5.797 5.25 L 6.453 5.25 C 6.513 5.25 6.563 5.299 6.563 5.359 L 6.563 9.078 Z M 6.125 4.375 C 5.953 4.371 5.79 4.301 5.67 4.178 C 5.549 4.055 5.482 3.891 5.482 3.719 C 5.482 3.547 5.549 3.382 5.67 3.259 C 5.79 3.137 5.953 3.066 6.125 3.063 C 6.297 3.066 6.46 3.137 6.58 3.259 C 6.701 3.382 6.768 3.547 6.768 3.719 C 6.768 3.891 6.701 4.055 6.58 4.178 C 6.46 4.301 6.297 4.371 6.125 4.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: -216,
        top: 42,
        width: 327,
        height: 45,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 327,
          height: 45,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 6,
            width: 327,
            height: 39,
            borderRadius: 4,
            backgroundColor: "rgb(39,46,83)",
          }} />
          <span style={{
            position: "absolute",
            left: 16,
            top: 17,
            width: 294,
            height: 17,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>{props.text2 ?? "Number of Approved auth expiring in 7 days"}</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 10,
            height: 10,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Polygon 3</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Table-Cell, Property 2=Header
    "property1=table-cell|property2=header": __body0,
    // figma: Property 1=Table-Cell, Property 2=Header2
    "property1=table-cell|property2=header2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Components2;
