import { CaretDown } from './CaretDown.jsx';
import { Filter4 } from './Filter4.jsx';

// figma node: 1977:204126 Filter column
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function FilterColumn(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1920,
      height: 62,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 62,
        backgroundColor: "rgba(163,203,255,0.28)",
      }} />
      <div style={{
        position: "absolute",
        left: 26,
        top: 8,
        width: 1578,
        height: 54,
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "6px 16px 6px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(102,96,166)",
          }}>{props.icon1 ?? <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: 210,
          height: 22,
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(216,228,244)",
            boxShadow: "inset 0 0 0 0.500px rgb(192,206,223), 0 0 0 0.500px rgb(192,206,223)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "5px 12px 5px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(54,69,88)",
              flexShrink: 0,
            }}>Auth Initiated Date : Last 7 Days</span>
            <div style={{
                position: "relative",
                width: 12,
                height: 12,
                flexShrink: 0,
              }}>
              <CaretDown style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
              whiteSpace: "pre-wrap",
            }}>{"◇\nSwap"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
              whiteSpace: "pre-wrap",
            }}>{"◇\nSwap"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 34,
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
          width: 131,
          height: 25,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 14,
              height: 14,
              color: "rgb(102,96,166)",
            }}>
              <path d={"M 7 0 C 3.134 0 0 3.134 0 7 C 0 10.866 3.134 14 7 14 C 10.866 14 14 10.866 14 7 C 14 3.134 10.866 0 7 0 Z M 10 7.375 C 10 7.444 9.944 7.5 9.875 7.5 L 7.5 7.5 L 7.5 9.875 C 7.5 9.944 7.444 10 7.375 10 L 6.625 10 C 6.556 10 6.5 9.944 6.5 9.875 L 6.5 7.5 L 4.125 7.5 C 4.056 7.5 4 7.444 4 7.375 L 4 6.625 C 4 6.556 4.056 6.5 4.125 6.5 L 6.5 6.5 L 6.5 4.125 C 6.5 4.056 6.556 4 6.625 4 L 7.375 4 C 7.444 4 7.5 4.056 7.5 4.125 L 7.5 6.5 L 9.875 6.5 C 9.944 6.5 10 6.556 10 6.625 L 10 7.375 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(102,96,166)",
            flexShrink: 0,
          }}>Add More Filters</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1665,
        top: 20,
        width: 227,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 227,
          height: 32,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 227,
            height: 32,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 227,
              height: 30,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 227,
                height: 30,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 227,
                  height: 30,
                  borderRadius: 6.000000476837158,
                  backgroundColor: "rgb(255,255,255)",
                  boxShadow: "inset 0 0 0 0.500px var(--pending)",
                }} />
                <span style={{
                  position: "absolute",
                  left: 33,
                  top: 7,
                  width: 146,
                  height: 16,
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(126,139,153)",
                }}>{props.text1 ?? "Search Patient Records"}</span>
              </div>
              <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                position: "absolute",
                left: 11,
                top: 8,
                width: 13,
                height: 13,
                color: "rgb(158,168,179)",
              }}>
                <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterColumn;
