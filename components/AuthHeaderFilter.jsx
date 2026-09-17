import { CaretDown } from './CaretDown.jsx';
import { Filter4 } from './Filter4.jsx';
import { UserProfileFrame } from './UserProfileFrame.jsx';
import { Question } from './Question.jsx';
import { WellSkyLogos } from './WellSkyLogos.jsx';

// figma node: 1977:204317 Auth Header + Filter (14 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AuthHeaderFilter(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "auth req view" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,267,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.75,
                    top: 1.75,
                    width: 12.5,
                    height: 12.5,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 12 0 L 0.5 0 C 0.223 0 0 0.223 0 0.5 L 0 12 C 0 12.277 0.223 12.5 0.5 12.5 L 12 12.5 C 12.277 12.5 12.5 12.277 12.5 12 L 12.5 0.5 C 12.5 0.223 12.277 0 12 0 Z M 4 9.875 C 4 9.944 3.944 10 3.875 10 L 2.625 10 C 2.556 10 2.5 9.944 2.5 9.875 L 2.5 2.625 C 2.5 2.556 2.556 2.5 2.625 2.5 L 3.875 2.5 C 3.944 2.5 4 2.556 4 2.625 L 4 9.875 Z M 7 5.5 C 7 5.569 6.944 5.625 6.875 5.625 L 5.625 5.625 C 5.556 5.625 5.5 5.569 5.5 5.5 L 5.5 2.625 C 5.5 2.556 5.556 2.5 5.625 2.5 L 6.875 2.5 C 6.944 2.5 7 2.556 7 2.625 L 7 5.5 Z M 10 6.625 C 10 6.694 9.944 6.75 9.875 6.75 L 8.625 6.75 C 8.556 6.75 8.5 6.694 8.5 6.625 L 8.5 2.625 C 8.5 2.556 8.556 2.5 8.625 2.5 L 9.875 2.5 C 9.944 2.5 10 2.556 10 2.625 L 10 6.625 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.88)",
                  flexShrink: 0,
                }}>Patient Auth Summary View </span>
              </div>
              <div style={{
                position: "relative",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--color-neutral-text-colortextsolid)",
                  flexShrink: 0,
                }}>Auth Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Authorization Center"}</span>
          </div>
        </div>
        <UserProfileFrame
          style={{ position: "absolute", left: 1655, top: 133 }}
          property1={"default"}
        />
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,267,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 558,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 558,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 457.117,
              top: 3.856,
              width: 22.47,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 22.47,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 22.47,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 22.47,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 22.47,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 22.47,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 558,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
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
                  <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.75,
                    top: 1.75,
                    width: 12.5,
                    height: 12.5,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 12 0 L 0.5 0 C 0.223 0 0 0.223 0 0.5 L 0 12 C 0 12.277 0.223 12.5 0.5 12.5 L 12 12.5 C 12.277 12.5 12.5 12.277 12.5 12 L 12.5 0.5 C 12.5 0.223 12.277 0 12 0 Z M 4 9.875 C 4 9.944 3.944 10 3.875 10 L 2.625 10 C 2.556 10 2.5 9.944 2.5 9.875 L 2.5 2.625 C 2.5 2.556 2.556 2.5 2.625 2.5 L 3.875 2.5 C 3.944 2.5 4 2.556 4 2.625 L 4 9.875 Z M 7 5.5 C 7 5.569 6.944 5.625 6.875 5.625 L 5.625 5.625 C 5.556 5.625 5.5 5.569 5.5 5.5 L 5.5 2.625 C 5.5 2.556 5.556 2.5 5.625 2.5 L 6.875 2.5 C 6.944 2.5 7 2.556 7 2.625 L 7 5.5 Z M 10 6.625 C 10 6.694 9.944 6.75 9.875 6.75 L 8.625 6.75 C 8.556 6.75 8.5 6.694 8.5 6.625 L 8.5 2.625 C 8.5 2.556 8.556 2.5 8.625 2.5 L 9.875 2.5 C 9.944 2.5 10 2.556 10 2.625 L 10 6.625 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--color-neutral-text-colortextsolid)",
                  flexShrink: 0,
                }}>Patient Auth Summary View </span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Auth Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
              <div style={{
                position: "relative",
                width: 17,
                overflow: "hidden",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "absolute",
                  left: 17,
                  top: 6,
                  width: null,
                  height: null,
                  overflow: "hidden",
                }} />
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
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Authorization Center"}</span>
          </div>
        </div>
        <UserProfileFrame
          style={{ position: "absolute", left: 1655, top: 133 }}
          property1={"default"}
        />
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,267,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.75,
                    top: 1.75,
                    width: 12.5,
                    height: 12.5,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 12 0 L 0.5 0 C 0.223 0 0 0.223 0 0.5 L 0 12 C 0 12.277 0.223 12.5 0.5 12.5 L 12 12.5 C 12.277 12.5 12.5 12.277 12.5 12 L 12.5 0.5 C 12.5 0.223 12.277 0 12 0 Z M 4 9.875 C 4 9.944 3.944 10 3.875 10 L 2.625 10 C 2.556 10 2.5 9.944 2.5 9.875 L 2.5 2.625 C 2.5 2.556 2.556 2.5 2.625 2.5 L 3.875 2.5 C 3.944 2.5 4 2.556 4 2.625 L 4 9.875 Z M 7 5.5 C 7 5.569 6.944 5.625 6.875 5.625 L 5.625 5.625 C 5.556 5.625 5.5 5.569 5.5 5.5 L 5.5 2.625 C 5.5 2.556 5.556 2.5 5.625 2.5 L 6.875 2.5 C 6.944 2.5 7 2.556 7 2.625 L 7 5.5 Z M 10 6.625 C 10 6.694 9.944 6.75 9.875 6.75 L 8.625 6.75 C 8.556 6.75 8.5 6.694 8.5 6.625 L 8.5 2.625 C 8.5 2.556 8.556 2.5 8.625 2.5 L 9.875 2.5 C 9.944 2.5 10 2.556 10 2.625 L 10 6.625 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.88)",
                  flexShrink: 0,
                }}>Patient Auth Summary View </span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Auth Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--color-neutral-text-colortextsolid)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Authorization Center"}</span>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 1843,
            top: 133.5,
            width: 48,
          }}>{props.icon1 ?? <UserProfileFrame property1={"default"} />}</div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 253,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,310,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(22,119,255)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Eligibility Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Eligibility Center"}</span>
          </div>
        </div>
        <UserProfileFrame
          style={{
            position: "absolute",
            left: 1738,
            top: 138.5,
            width: 153,
            height: 22,
          }}
          property1={"default"}
        />
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 253,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,310,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(22,119,255)",
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
                  <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.75,
                    top: 1.75,
                    width: 12.5,
                    height: 12.5,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 12 0 L 0.5 0 C 0.223 0 0 0.223 0 0.5 L 0 12 C 0 12.277 0.223 12.5 0.5 12.5 L 12 12.5 C 12.277 12.5 12.5 12.277 12.5 12 L 12.5 0.5 C 12.5 0.223 12.277 0 12 0 Z M 4 9.875 C 4 9.944 3.944 10 3.875 10 L 2.625 10 C 2.556 10 2.5 9.944 2.5 9.875 L 2.5 2.625 C 2.5 2.556 2.556 2.5 2.625 2.5 L 3.875 2.5 C 3.944 2.5 4 2.556 4 2.625 L 4 9.875 Z M 7 5.5 C 7 5.569 6.944 5.625 6.875 5.625 L 5.625 5.625 C 5.556 5.625 5.5 5.569 5.5 5.5 L 5.5 2.625 C 5.5 2.556 5.556 2.5 5.625 2.5 L 6.875 2.5 C 6.944 2.5 7 2.556 7 2.625 L 7 5.5 Z M 10 6.625 C 10 6.694 9.944 6.75 9.875 6.75 L 8.625 6.75 C 8.556 6.75 8.5 6.694 8.5 6.625 L 8.5 2.625 C 8.5 2.556 8.556 2.5 8.625 2.5 L 9.875 2.5 C 9.944 2.5 10 2.556 10 2.625 L 10 6.625 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.88)",
                  flexShrink: 0,
                }}>Patient Eligibility Summary View </span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Eligibility Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Eligibility Center"}</span>
          </div>
        </div>
        <UserProfileFrame
          style={{
            position: "absolute",
            left: 1738,
            top: 138.5,
            width: 153,
            height: 22,
          }}
          property1={"default"}
        />
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 253,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,310,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--table-small-header)",
                  flexShrink: 0,
                }}>Eligibility Request View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--color-neutral-text-colortextsolid)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Eligibility Center"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 252,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,309,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims - Batch View</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(22,119,255)",
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
                  <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.75,
                    top: 1.75,
                    width: 12.5,
                    height: 12.5,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 12 0 L 0.5 0 C 0.223 0 0 0.223 0 0.5 L 0 12 C 0 12.277 0.223 12.5 0.5 12.5 L 12 12.5 C 12.277 12.5 12.5 12.277 12.5 12 L 12.5 0.5 C 12.5 0.223 12.277 0 12 0 Z M 4 9.875 C 4 9.944 3.944 10 3.875 10 L 2.625 10 C 2.556 10 2.5 9.944 2.5 9.875 L 2.5 2.625 C 2.5 2.556 2.556 2.5 2.625 2.5 L 3.875 2.5 C 3.944 2.5 4 2.556 4 2.625 L 4 9.875 Z M 7 5.5 C 7 5.569 6.944 5.625 6.875 5.625 L 5.625 5.625 C 5.556 5.625 5.5 5.569 5.5 5.5 L 5.5 2.625 C 5.5 2.556 5.556 2.5 5.625 2.5 L 6.875 2.5 C 6.944 2.5 7 2.556 7 2.625 L 7 5.5 Z M 10 6.625 C 10 6.694 9.944 6.75 9.875 6.75 L 8.625 6.75 C 8.556 6.75 8.5 6.694 8.5 6.625 L 8.5 2.625 C 8.5 2.556 8.556 2.5 8.625 2.5 L 9.875 2.5 C 9.944 2.5 10 2.556 10 2.625 L 10 6.625 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.88)",
                  flexShrink: 0,
                }}>Patient Claims Summary View </span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims Status View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Claims Center"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
      <UserProfileFrame
        style={{
          position: "absolute",
          left: 1738,
          top: 138.5,
          width: 153,
          height: 22,
        }}
        property1={"default"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 252,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,309,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims - Batch View</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(22,119,255)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims Status View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Claims Center"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
      <UserProfileFrame
        style={{
          position: "absolute",
          left: 1738,
          top: 138.5,
          width: 153,
          height: 22,
        }}
        property1={"default"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 252,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,309,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(22,119,255)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims - Batch View</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims Status View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Claims Center"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
      <UserProfileFrame
        style={{
          position: "absolute",
          left: 1738,
          top: 138.5,
          width: 153,
          height: 22,
        }}
        property1={"default"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      color: "rgba(255,255,255,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 252,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,309,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 94,
          width: 596,
          height: 72,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 596,
            height: 32,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 488.254,
              top: 3.856,
              width: 24,
              height: 15.143,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 15.143,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 24,
                  height: 15.143,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 24,
                    height: 15.143,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 24,
                      height: 15.143,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 24,
                        height: 15.143,
                        overflow: "hidden",
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 596,
              height: 32,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims - Batch View</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "rgb(63,82,107)",
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
                  <svg width={14.571} height={12.143} viewBox="0 0 14.571 12.143" fill="none" style={{
                    position: "absolute",
                    left: 0.715,
                    top: 1.93,
                    width: 14.571,
                    height: 12.143,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 14.429 0.357 L 4 0.357 C 3.921 0.357 3.857 0.421 3.857 0.5 L 3.857 1.5 C 3.857 1.579 3.921 1.643 4 1.643 L 14.429 1.643 C 14.507 1.643 14.571 1.579 14.571 1.5 L 14.571 0.5 C 14.571 0.421 14.507 0.357 14.429 0.357 Z M 14.429 5.429 L 4 5.429 C 3.921 5.429 3.857 5.493 3.857 5.571 L 3.857 6.571 C 3.857 6.65 3.921 6.714 4 6.714 L 14.429 6.714 C 14.507 6.714 14.571 6.65 14.571 6.571 L 14.571 5.571 C 14.571 5.493 14.507 5.429 14.429 5.429 Z M 14.429 10.5 L 4 10.5 C 3.921 10.5 3.857 10.564 3.857 10.643 L 3.857 11.643 C 3.857 11.721 3.921 11.786 4 11.786 L 14.429 11.786 C 14.507 11.786 14.571 11.721 14.571 11.643 L 14.571 10.643 C 14.571 10.564 14.507 10.5 14.429 10.5 Z M 0 1 C 0 1.131 0.026 1.261 0.076 1.383 C 0.126 1.504 0.2 1.614 0.293 1.707 C 0.386 1.8 0.496 1.874 0.617 1.924 C 0.739 1.974 0.869 2 1 2 C 1.131 2 1.261 1.974 1.383 1.924 C 1.504 1.874 1.614 1.8 1.707 1.707 C 1.8 1.614 1.874 1.504 1.924 1.383 C 1.974 1.261 2 1.131 2 1 C 2 0.869 1.974 0.739 1.924 0.617 C 1.874 0.496 1.8 0.386 1.707 0.293 C 1.614 0.2 1.504 0.126 1.383 0.076 C 1.261 0.026 1.131 0 1 0 C 0.869 0 0.739 0.026 0.617 0.076 C 0.496 0.126 0.386 0.2 0.293 0.293 C 0.2 0.386 0.126 0.496 0.076 0.617 C 0.026 0.739 0 0.869 0 1 L 0 1 Z M 0 6.071 C 0 6.203 0.026 6.333 0.076 6.454 C 0.126 6.575 0.2 6.686 0.293 6.779 C 0.386 6.871 0.496 6.945 0.617 6.995 C 0.739 7.046 0.869 7.071 1 7.071 C 1.131 7.071 1.261 7.046 1.383 6.995 C 1.504 6.945 1.614 6.871 1.707 6.779 C 1.8 6.686 1.874 6.575 1.924 6.454 C 1.974 6.333 2 6.203 2 6.071 C 2 5.94 1.974 5.81 1.924 5.689 C 1.874 5.567 1.8 5.457 1.707 5.364 C 1.614 5.271 1.504 5.198 1.383 5.148 C 1.261 5.097 1.131 5.071 1 5.071 C 0.869 5.071 0.739 5.097 0.617 5.148 C 0.496 5.198 0.386 5.271 0.293 5.364 C 0.2 5.457 0.126 5.567 0.076 5.689 C 0.026 5.81 0 5.94 0 6.071 L 0 6.071 Z M 0 11.143 C 0 11.274 0.026 11.404 0.076 11.526 C 0.126 11.647 0.2 11.757 0.293 11.85 C 0.386 11.943 0.496 12.016 0.617 12.067 C 0.739 12.117 0.869 12.143 1 12.143 C 1.131 12.143 1.261 12.117 1.383 12.067 C 1.504 12.016 1.614 11.943 1.707 11.85 C 1.8 11.757 1.874 11.647 1.924 11.526 C 1.974 11.404 2 11.274 2 11.143 C 2 11.012 1.974 10.882 1.924 10.76 C 1.874 10.639 1.8 10.529 1.707 10.436 C 1.614 10.343 1.504 10.269 1.383 10.219 C 1.261 10.169 1.131 10.143 1 10.143 C 0.869 10.143 0.739 10.169 0.617 10.219 C 0.496 10.269 0.386 10.343 0.293 10.436 C 0.2 10.529 0.126 10.639 0.076 10.76 C 0.026 10.882 0 11.012 0 11.143 L 0 11.143 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.88)",
                  flexShrink: 0,
                }}>Claims Status View</span>
              </div>
              <div style={{
                position: "relative",
                width: 133,
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
                  <svg width={12.570} height={14.717} viewBox="0 0 12.570 14.717" fill="none" style={{
                    position: "absolute",
                    left: 1.714,
                    top: 0.641,
                    width: 12.57,
                    height: 14.717,
                    color: "rgba(0,0,0,0.65)",
                  }}>
                    <path d={"M 11.214 10.82 L 11.214 1.644 C 11.214 1.486 11.086 1.358 10.929 1.358 L 7.893 1.358 L 7.893 0.129 C 7.893 0.022 7.768 -0.039 7.684 0.027 L 5.405 1.827 C 5.39 1.839 5.377 1.855 5.369 1.872 C 5.36 1.89 5.356 1.909 5.356 1.928 C 5.356 1.948 5.36 1.967 5.369 1.985 C 5.377 2.002 5.39 2.017 5.405 2.029 L 7.682 3.829 C 7.766 3.895 7.891 3.836 7.891 3.727 L 7.891 2.501 L 9.927 2.501 L 9.927 10.82 C 9.138 11.088 8.57 11.836 8.57 12.715 C 8.57 13.819 9.466 14.715 10.57 14.715 C 11.673 14.715 12.57 13.819 12.57 12.715 C 12.571 11.836 12.004 11.09 11.214 10.82 L 11.214 10.82 Z M 10.571 13.572 C 10.347 13.568 10.134 13.475 9.977 13.315 C 9.82 13.155 9.732 12.939 9.732 12.715 C 9.732 12.491 9.82 12.275 9.977 12.115 C 10.134 11.955 10.347 11.862 10.571 11.858 C 10.796 11.862 11.009 11.955 11.166 12.115 C 11.323 12.275 11.411 12.491 11.411 12.715 C 11.411 12.939 11.323 13.155 11.166 13.315 C 11.009 13.475 10.796 13.568 10.571 13.572 L 10.571 13.572 Z M 4 2.001 C 4 0.897 3.104 0.001 2 0.001 C 0.896 0.001 0 0.897 0 2.001 C 0 2.879 0.568 3.626 1.357 3.895 L 1.357 10.822 C 0.568 11.09 0 11.838 0 12.717 C 0 13.82 0.896 14.717 2 14.717 C 3.104 14.717 4 13.82 4 12.717 C 4 11.838 3.432 11.092 2.643 10.822 L 2.643 3.895 C 3.432 3.626 4 2.879 4 2.001 L 4 2.001 Z M 1.143 2.001 C 1.147 1.776 1.24 1.563 1.4 1.406 C 1.56 1.249 1.776 1.161 2 1.161 C 2.224 1.161 2.44 1.249 2.6 1.406 C 2.76 1.563 2.853 1.776 2.857 2.001 C 2.853 2.225 2.76 2.439 2.6 2.596 C 2.44 2.753 2.224 2.84 2 2.84 C 1.776 2.84 1.56 2.753 1.4 2.596 C 1.24 2.439 1.147 2.225 1.143 2.001 L 1.143 2.001 Z M 2.857 12.715 C 2.853 12.939 2.76 13.153 2.6 13.31 C 2.44 13.467 2.224 13.555 2 13.555 C 1.776 13.555 1.56 13.467 1.4 13.31 C 1.24 13.153 1.147 12.939 1.143 12.715 C 1.147 12.491 1.24 12.277 1.4 12.12 C 1.56 11.963 1.776 11.875 2 11.875 C 2.224 11.875 2.44 11.963 2.6 12.12 C 2.76 12.277 2.853 12.491 2.857 12.715 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--color-neutral-text-colortextsolid)",
                  flexShrink: 0,
                }}>Automation Log</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 190,
            height: 24,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 190,
              height: 24,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "Claims Center"}</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,267,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 74,
          width: 1859,
          height: 98,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 73,
            width: 301,
            height: 25,
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "25.001px",
            color: "rgb(206,219,237)",
          }}>{props.text1 ?? "Authorization Status Summary and Trends"}</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1859,
            height: 65,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 12,
              top: 0,
              width: 1320,
              height: 65,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1320,
                height: 65,
              }} />
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: 58,
                display: "flex",
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 65.002,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--size-padding-paddingxs) * 1px)",
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingTop: "calc(var(--size-padding-padding) * 1px)",
                  paddingBottom: "calc(var(--size-padding-padding) * 1px)",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20.001007080078125,
                    whiteSpace: "nowrap",
                    lineHeight: "25.001px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>{props.text2 ?? "Eligibility"}</span>
                </div>
                <div style={{
                  position: "relative",
                  width: 121,
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "relative",
                    width: 20.001,
                    height: 20.001,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={16.787} height={19.465} viewBox="0 0 16.787 19.465" fill="none" style={{
                      position: "absolute",
                      left: 1.607,
                      top: 0.263,
                      width: 16.787,
                      height: 19.465,
                      color: "rgb(255,255,255)",
                    }}>
                      <path d={"M 11.355 13.242 C 11.339 13.219 11.317 13.2 11.292 13.187 C 11.267 13.174 11.239 13.168 11.21 13.168 L 10.224 13.168 C 10.079 13.168 9.994 13.333 10.079 13.452 L 11.726 15.731 C 11.797 15.829 11.943 15.829 12.014 15.731 L 14.563 12.204 C 14.648 12.085 14.563 11.92 14.418 11.92 L 13.429 11.92 C 13.371 11.92 13.318 11.947 13.284 11.994 L 11.867 13.954 L 11.355 13.242 Z M 12.322 5.134 L 12.322 4.063 C 12.322 3.964 12.242 3.884 12.143 3.884 L 3.572 3.884 C 3.473 3.884 3.393 3.964 3.393 4.063 L 3.393 5.134 C 3.393 5.232 3.473 5.313 3.572 5.313 L 12.143 5.313 C 12.242 5.313 12.322 5.232 12.322 5.134 Z M 3.572 7.099 C 3.473 7.099 3.393 7.179 3.393 7.277 L 3.393 8.349 C 3.393 8.447 3.473 8.527 3.572 8.527 L 7.679 8.527 C 7.777 8.527 7.858 8.447 7.858 8.349 L 7.858 7.277 C 7.858 7.179 7.777 7.099 7.679 7.099 L 3.572 7.099 Z M 7.679 17.322 L 1.607 17.322 L 1.607 1.607 L 14.108 1.607 L 14.108 8.215 C 14.108 8.313 14.188 8.393 14.286 8.393 L 15.536 8.393 C 15.635 8.393 15.715 8.313 15.715 8.215 L 15.715 0.714 C 15.715 0.319 15.396 0 15.001 0 L 0.714 0 C 0.319 0 0 0.319 0 0.714 L 0 18.215 C 0 18.61 0.319 18.93 0.714 18.93 L 7.679 18.93 C 7.777 18.93 7.858 18.849 7.858 18.751 L 7.858 17.501 C 7.858 17.403 7.777 17.322 7.679 17.322 Z M 16.666 10.161 L 12.38 8.672 C 12.36 8.666 12.342 8.663 12.322 8.663 C 12.302 8.663 12.282 8.666 12.264 8.672 L 7.978 10.161 C 7.943 10.173 7.913 10.196 7.891 10.226 C 7.869 10.256 7.858 10.292 7.858 10.329 L 7.858 15.934 C 7.858 15.99 7.882 16.041 7.927 16.074 L 12.213 19.427 C 12.244 19.452 12.284 19.465 12.322 19.465 C 12.36 19.465 12.4 19.452 12.431 19.427 L 16.717 16.074 C 16.76 16.041 16.787 15.99 16.787 15.934 L 16.787 10.329 C 16.787 10.253 16.737 10.186 16.666 10.161 Z M 15.403 15.351 L 12.322 17.76 L 9.242 15.351 L 9.242 11.184 L 12.322 10.112 L 15.403 11.184 L 15.403 15.351 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20.001007080078125,
                    whiteSpace: "nowrap",
                    lineHeight: "25.001px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                  }}>Authorization</span>
                </div>
                <div style={{
                  position: "relative",
                  width: 62,
                  height: 65.002,
                  opacity: 0.3,
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
                  flexShrink: 0,
                }} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 60,
              width: 1859,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 365</div>
            <div style={{
              position: "absolute",
              left: 120,
              top: 60,
              width: 127,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 391</div>
          </div>
        </div>
        <UserProfileFrame
          style={{ position: "absolute", left: 1655, top: 133 }}
          property1={"default"}
        />
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
      <UserProfileFrame
        style={{ position: "absolute", left: 1655, top: 133 }}
        property1={"default"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 253,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,310,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 0 L 34 0 L 34 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 74,
          width: 1859,
          height: 98,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 73,
            width: 267,
            height: 25,
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "25.001px",
            color: "rgb(206,219,237)",
          }}>{props.text1 ?? "Summary of Eligibility Request Status"}</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1859,
            height: 65,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 12,
              top: 0,
              width: 1320,
              height: 65,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1320,
                height: 65,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 65.002,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "flex",
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 58,
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
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                  }}>{props.text2 ?? "Eligibility"}</span>
                </div>
                <div style={{
                  position: "relative",
                  height: 58,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--size-padding-paddingxs) * 1px)",
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingTop: "calc(var(--size-padding-padding) * 1px)",
                  paddingBottom: "calc(var(--size-padding-padding) * 1px)",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20.001007080078125,
                    whiteSpace: "nowrap",
                    lineHeight: "25.001px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "Authorization"}</span>
                </div>
                <div style={{
                  position: "relative",
                  width: 62,
                  height: 58,
                  opacity: 0.3,
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
                  flexShrink: 0,
                }} />
                <div style={{
                  position: "relative",
                  width: 63,
                  height: 58,
                  opacity: 0.3,
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
                  flexShrink: 0,
                }} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 60,
              width: 1859,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 365</div>
            <div style={{
              position: "absolute",
              left: 10,
              top: 60,
              width: 83,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 391</div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 252,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,309,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 74,
          width: 1859,
          height: 98,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 73,
            width: 267,
            height: 25,
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "25.001px",
            color: "rgb(206,219,237)",
          }}>{props.text1 ?? "Summary of Eligibility Request Status"}</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1859,
            height: 65,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 12,
              top: 0,
              width: 1320,
              height: 65,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1320,
                height: 65,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 65.002,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "flex",
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 58,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10.000503540039062,
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>{props.text2 ?? "Eligibility"}</span>
                </div>
                <div style={{
                  position: "relative",
                  height: 58,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--size-padding-paddingxs) * 1px)",
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingTop: "calc(var(--size-padding-padding) * 1px)",
                  paddingBottom: "calc(var(--size-padding-padding) * 1px)",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20.001007080078125,
                    whiteSpace: "nowrap",
                    lineHeight: "25.001px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "Authorization"}</span>
                </div>
                <div style={{
                  position: "relative",
                  width: 62,
                  height: 58,
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
                  flexShrink: 0,
                }} />
                <div style={{
                  position: "relative",
                  width: 63,
                  height: 58,
                  opacity: 0.3,
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
                  flexShrink: 0,
                }} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 60,
              width: 1859,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 365</div>
            <div style={{
              position: "absolute",
              left: 272,
              top: 60,
              width: 68,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 391</div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 242,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 1920,
        height: 62,
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
            }}>
            <Filter4 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(102,96,166)" }} />
          </div>
          <div style={{
            position: "relative",
            width: 269,
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
          <svg width={34} height={1} viewBox="0 -0.500 34 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,326,44)",
            transformOrigin: "0 0",
            width: 34,
            height: 1,
            color: "rgba(192,206,223,0.4)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 34 0 L 34 -0.5 L 34 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
                  }}>Search Patient Records</span>
                </div>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 11,
                  top: 8,
                  width: 13,
                  height: 13,
                  color: "rgb(158,168,179)",
                }}>
                  <path d={"M 10.259 9.354 L 13 12.094 L 12.094 13 L 9.354 10.259 C 8.335 11.076 7.066 11.521 5.76 11.519 C 2.58 11.519 0 8.939 0 5.76 C 0 2.58 2.58 0 5.76 0 C 8.939 0 11.519 2.58 11.519 5.76 C 11.521 7.066 11.076 8.335 10.259 9.354 Z M 8.975 8.879 C 9.788 8.044 10.241 6.925 10.239 5.76 C 10.239 3.285 8.234 1.28 5.76 1.28 C 3.285 1.28 1.28 3.285 1.28 5.76 C 1.28 8.234 3.285 10.239 5.76 10.239 C 6.925 10.241 8.044 9.788 8.879 8.975 L 8.975 8.879 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1920,
        height: 188,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1920,
          height: 188,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 188,
            borderRadius: "0px 0px 5px 5px",
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(28,45,66) 100.00%)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 1920,
          height: 72,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 72,
            background: "linear-gradient(90deg, rgb(56,71,90) 0.00%, rgb(44,60,80) 41.55%, rgb(28,45,66) 100.00%)",
          }} />
          <div style={{
            position: "absolute",
            left: 1859.555,
            top: 21,
            width: 28,
            height: 28,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 24.813,
            width: 114,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: -1,
              top: -14,
              width: 118,
              height: 50,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 118,
                height: 50,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 118,
                  height: 50,
                  borderRadius: 4,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 4,
                top: 3,
                width: 109,
                height: 46,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 6.421,
                  top: 0,
                  width: 97.158,
                  height: 22,
                }} />
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 24,
                  width: 95.999,
                  height: 22,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 59.999,
                    top: 6.634,
                    width: 36,
                    height: 8.835,
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 57,
                    height: 22,
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "0.010em",
                    color: "rgba(54,69,89,0.56)",
                  }}>Powered by</span>
                </div>
                <svg width={109} height={1} viewBox="0 -0.500 109 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 26,
                  width: 109,
                  height: 1,
                  color: "rgb(239,239,240)",
                }}>
                  <path d={"M 0 -0.5 L 0 0 L 109 0 L 109 -0.5 L 109 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 1816,
            top: 21,
            width: 28,
            height: 28,
            overflow: "hidden",
          }}>
            <svg width={21} height={23.333} viewBox="0 0 21 23.333" fill="none" style={{
              position: "absolute",
              left: 3.5,
              top: 2.333,
              width: 21,
              height: 23.333,
              color: "rgba(255,255,255,0.6)",
            }}>
              <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.313 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 7,
                top: 7,
                width: 9.333,
                height: 9.333,
                color: "rgba(255,255,255,0.6)",
              }}>
              <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <WellSkyLogos
              style={{ position: "relative", flexShrink: 0 }}
              color={"white"}
              orientation={"horizontal"}
              solution={"basic"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 110,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgb(22,119,255)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "relative",
                width: 96,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.65)",
                  flexShrink: 0,
                }}>Eligibility</span>
              </div>
              <div style={{
                position: "relative",
                width: 128,
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--size-padding-paddingxs) * 1px)",
                padding: "12px 16px 12px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingTop: "calc(var(--size-padding-paddingsm) * 1px)",
                paddingBottom: "calc(var(--size-padding-paddingsm) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={12.571} viewBox="0 0 16 12.571" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.711,
                    width: 16,
                    height: 12.571,
                    color: "rgba(0,0,0,0.88)",
                  }}>
                    <path d={"M 15.429 0 L 0.571 0 C 0.255 0 0 0.255 0 0.571 L 0 12 C 0 12.316 0.255 12.571 0.571 12.571 L 15.429 12.571 C 15.745 12.571 16 12.316 16 12 L 16 0.571 C 16 0.255 15.745 0 15.429 0 Z M 14.714 1.979 L 14.714 11.286 L 1.286 11.286 L 1.286 1.979 L 0.793 1.595 L 1.495 0.693 L 2.259 1.288 L 13.743 1.288 L 14.507 0.693 L 15.209 1.595 L 14.714 1.979 L 14.714 1.979 Z M 13.743 1.286 L 8 5.75 L 2.257 1.286 L 1.493 0.691 L 0.791 1.593 L 1.284 1.977 L 7.384 6.72 C 7.559 6.856 7.775 6.93 7.997 6.93 C 8.219 6.93 8.435 6.856 8.611 6.72 L 14.714 1.979 L 15.207 1.595 L 14.505 0.693 L 13.743 1.286 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}>Authorization</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 74,
          width: 1859,
          height: 98,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 73,
            width: 267,
            height: 25,
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "25.001px",
            color: "rgb(206,219,237)",
          }}>{props.text1 ?? "Summary of Eligibility Request Status"}</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1859,
            height: 65,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 12,
              top: 0,
              width: 1320,
              height: 65,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1320,
                height: 65,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 65.002,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "flex",
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  height: 58,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10.000503540039062,
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>{props.text2 ?? "Eligibility"}</span>
                </div>
                <div style={{
                  position: "relative",
                  height: 58,
                  opacity: 0.3,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--size-padding-paddingxs) * 1px)",
                  padding: "20.001px 0px 20.001px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingTop: "calc(var(--size-padding-padding) * 1px)",
                  paddingBottom: "calc(var(--size-padding-padding) * 1px)",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 20.001007080078125,
                    whiteSpace: "nowrap",
                    lineHeight: "25.001px",
                    color: "rgb(255,255,255)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "Authorization"}</span>
                </div>
                <div style={{
                  position: "relative",
                  width: 62,
                  height: 58,
                  opacity: 0.3,
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
                  flexShrink: 0,
                }} />
                <div style={{
                  position: "relative",
                  width: 63,
                  height: 58,
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
                  flexShrink: 0,
                }} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 60,
              width: 1859,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 365</div>
            <div style={{
              position: "absolute",
              left: 364,
              top: 60,
              width: 68,
              height: 1,
              border: "1px dashed currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              fontSize: 10,
              opacity: 0.45,
            }}>Line 391</div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 29,
          top: 74,
          width: 1859,
          height: 1,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Line 320</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Auth Req view
    "property1=auth req view": __body0,
    // figma: Property 1=Patient Auth Summary
    "property1=patient auth summary": __body1,
    // figma: Property 1=Transaction View
    "property1=transaction view": __body2,
    // figma: Property 1=Eligb req view
    "property1=eligb req view": __body3,
    // figma: Property 1=elig rsummary view
    "property1=elig rsummary view": __body4,
    // figma: Property 1=Elig automation
    "property1=elig automation": __body5,
    // figma: Property 1=Variant9
    "property1=variant9": __body6,
    // figma: Property 1=Variant10
    "property1=variant10": __body7,
    // figma: Property 1=Variant11
    "property1=variant11": __body8,
    // figma: Property 1=Variant12
    "property1=variant12": __body9,
    // figma: Property 1=Variant6
    "property1=variant6": __body10,
    // figma: Property 1=Variant7
    "property1=variant7": __body11,
    // figma: Property 1=Variant8
    "property1=variant8": __body12,
    // figma: Property 1=Variant13
    "property1=variant13": __body13,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AuthHeaderFilter;
