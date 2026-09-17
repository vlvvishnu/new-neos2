import { Question } from './Question.jsx';
import { WellSkyLogos } from './WellSkyLogos.jsx';

// figma node: 162241:490352 Header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Header(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "neos default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 72,
      position: "relative",
      ...props.style,
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
        left: 165,
        top: 13,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.312 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <div style={{
            position: "absolute",
            left: 7,
            top: 7,
            width: 9.333,
            height: 9.333,
            color: "rgba(255,255,255,0.6)",
          }}>{props.icon1 ?? <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 31,
        top: 11,
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
            }}>{props.text1 ?? "Powered by"}</span>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 109,
            height: 1,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Line 334</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 72,
      position: "relative",
      color: "rgba(255,255,255,0.6)",
      ...props.style,
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
        }}>
          <path d={"M 3.5 23.333 C 2.528 23.333 1.701 22.993 1.021 22.312 C 0.34 21.632 0 20.806 0 19.833 L 0 3.5 C 0 2.528 0.34 1.701 1.021 1.021 C 1.701 0.34 2.528 0 3.5 0 L 16.333 0 L 16.333 18.667 L 3.5 18.667 C 3.169 18.667 2.893 18.779 2.669 19.003 C 2.446 19.227 2.334 19.504 2.333 19.833 C 2.333 20.163 2.445 20.44 2.669 20.665 C 2.894 20.89 3.171 21.002 3.5 21 L 18.667 21 L 18.667 2.333 L 21 2.333 L 21 23.333 L 3.5 23.333 Z M 3.5 16.333 L 14 16.333 L 14 2.333 L 3.5 2.333 C 3.169 2.333 2.893 2.445 2.669 2.669 C 2.446 2.893 2.334 3.17 2.333 3.5 L 2.333 16.537 C 2.528 16.479 2.718 16.431 2.903 16.392 C 3.088 16.353 3.287 16.333 3.5 16.333 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <div style={{
            position: "absolute",
            left: 7,
            top: 7,
            width: 9.333,
            height: 9.333,
            color: "rgba(255,255,255,0.6)",
          }}>{props.icon1 ?? <Question style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
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
  );
  const __impls = {
    // figma: Property 1=Neos Default
    "property1=neos default": __body0,
    // figma: Property 1=WellSky Updated
    "property1=wellsky updated": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Header;
