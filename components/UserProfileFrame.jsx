// figma node: 1537:182113 Frame 1000005033 (1 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function UserProfileFrame(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 168,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 6,
          width: 153,
          height: 22,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>{props.text1 ?? "Review Mode"}</span>
            <div style={{
              position: "relative",
              width: 44,
              height: 22,
              borderRadius: 999,
              backgroundColor: "rgb(58,87,125)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 18,
                height: 18,
                borderRadius: 200,
                backgroundColor: "var(--color-neutral-text-colortextsolid)",
                boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.02), 0px 1px 6px -1px rgba(0,0,0,0.02), 0px 1px 2px 0px rgba(0,0,0,0.03)",
              }} />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 33,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 351</div>
      </div>
      <div style={{
        position: "relative",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={13.357} height={12.571} viewBox="0 0 13.357 12.571" fill="none" style={{
            position: "absolute",
            left: 1.321,
            top: 1.711,
            width: 13.357,
            height: 12.571,
            color: "rgba(0,0,0,0.65)",
          }}>
            <path d={"M 6.566 8.946 C 6.579 8.964 6.597 8.977 6.616 8.987 C 6.635 8.996 6.657 9.001 6.679 9.001 C 6.7 9.001 6.722 8.996 6.741 8.987 C 6.761 8.977 6.778 8.964 6.791 8.946 L 8.791 6.416 C 8.864 6.323 8.798 6.186 8.679 6.186 L 7.355 6.186 L 7.355 0.143 C 7.355 0.064 7.291 0 7.213 0 L 6.141 0 C 6.063 0 5.998 0.064 5.998 0.143 L 5.998 6.184 L 4.679 6.184 C 4.559 6.184 4.493 6.321 4.566 6.414 L 6.566 8.946 Z M 13.214 8.321 L 12.143 8.321 C 12.064 8.321 12 8.386 12 8.464 L 12 11.214 L 1.357 11.214 L 1.357 8.464 C 1.357 8.386 1.293 8.321 1.214 8.321 L 0.143 8.321 C 0.064 8.321 0 8.386 0 8.464 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 12.786 12.571 C 13.102 12.571 13.357 12.316 13.357 12 L 13.357 8.464 C 13.357 8.386 13.293 8.321 13.214 8.321 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default UserProfileFrame;
