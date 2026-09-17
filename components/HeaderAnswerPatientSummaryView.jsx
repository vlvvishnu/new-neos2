import { AttachmentIcon } from './AttachmentIcon.jsx';
import { Badge } from './Badge.jsx';
import { CaretDown2 } from './CaretDown2.jsx';
import { CaretUp } from './CaretUp.jsx';
import { CheckboxInput } from './CheckboxInput.jsx';
import { Close2 } from './Close2.jsx';
import { Components } from './Components.jsx';
import { Components2 } from './Components2.jsx';
import { Components3 } from './Components3.jsx';
import { Filter } from './Filter.jsx';
import { InfoCircle } from './InfoCircle.jsx';
import { NexwCheck } from './NexwCheck.jsx';
import { TagAlone } from './TagAlone.jsx';

// figma node: 508:60372 header&answer/patient summary view (8 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function HeaderAnswerPatientSummaryView(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 158,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 152,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 98,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 137,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 98,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 104,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          width: 226,
          height: 44,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -54,
            width: 206,
            height: 98,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            borderRight: "1px solid rgba(0,0,0,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            borderLeft: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              height: 98,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 187,
                  height: 38,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 188,
                    height: 34,
                    overflow: "hidden",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 5,
                      top: 0,
                      width: 183,
                      height: 16,
                      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      whiteSpace: "pre-wrap",
                      lineHeight: "16px",
                      color: "rgba(0,0,0,0.65)",
                      display: "inline-block",
                    }}>{"Episode Auth Summary "}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 20,
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text1 ?? "Reqstd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text2 ?? "Apprd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text3 ?? "Denied"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text4 ?? "Pending"}</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          padding: "11px 5px 11px 5px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,-1,0,0,38.992)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>Title</span>
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
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 14,
                  height: 14,
                  color: "rgba(0,0,0,0.85)",
                }}>
                  <path d={"M 7 0 C 3.134 0 0 3.134 0 7 C 0 10.866 3.134 14 7 14 C 10.866 14 14 10.866 14 7 C 14 3.134 10.866 0 7 0 Z M 7 12.813 C 3.791 12.813 1.188 10.209 1.188 7 C 1.188 3.791 3.791 1.188 7 1.188 C 10.209 1.188 12.813 3.791 12.813 7 C 12.813 10.209 10.209 12.813 7 12.813 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 8.744 3.948 C 8.275 3.537 7.656 3.312 7 3.312 C 6.344 3.312 5.725 3.539 5.256 3.948 C 4.769 4.375 4.5 4.948 4.5 5.562 L 4.5 5.681 C 4.5 5.75 4.556 5.806 4.625 5.806 L 5.375 5.806 C 5.444 5.806 5.5 5.75 5.5 5.681 L 5.5 5.562 C 5.5 4.873 6.173 4.312 7 4.312 C 7.826 4.312 8.5 4.873 8.5 5.562 C 8.5 6.048 8.156 6.493 7.623 6.698 C 7.292 6.825 7.011 7.046 6.809 7.337 C 6.604 7.634 6.498 7.99 6.498 8.351 L 6.498 8.687 C 6.498 8.756 6.554 8.812 6.623 8.812 L 7.373 8.812 C 7.442 8.812 7.498 8.756 7.498 8.687 L 7.498 8.332 C 7.499 8.181 7.546 8.033 7.632 7.908 C 7.718 7.783 7.84 7.687 7.981 7.632 C 8.903 7.278 9.498 6.465 9.498 5.562 C 9.5 4.948 9.231 4.375 8.744 3.948 Z M 6.375 10.437 C 6.375 10.603 6.441 10.762 6.558 10.879 C 6.675 10.996 6.834 11.062 7 11.062 C 7.166 11.062 7.324 10.996 7.442 10.879 C 7.559 10.762 7.625 10.603 7.625 10.437 C 7.625 10.271 7.559 10.112 7.442 9.995 C 7.324 9.878 7.166 9.812 7 9.812 C 6.834 9.812 6.675 9.878 6.558 9.995 C 6.441 10.112 6.375 10.271 6.375 10.437 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>25</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 176,
            display: "flex",
            flexDirection: "row",
            gap: 9,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>Title</span>
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
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 14,
                  height: 14,
                  color: "rgba(0,0,0,0.85)",
                }}>
                  <path d={"M 7 0 C 3.134 0 0 3.134 0 7 C 0 10.866 3.134 14 7 14 C 10.866 14 14 10.866 14 7 C 14 3.134 10.866 0 7 0 Z M 7 12.813 C 3.791 12.813 1.188 10.209 1.188 7 C 1.188 3.791 3.791 1.188 7 1.188 C 10.209 1.188 12.813 3.791 12.813 7 C 12.813 10.209 10.209 12.813 7 12.813 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 8.744 3.948 C 8.275 3.537 7.656 3.312 7 3.312 C 6.344 3.312 5.725 3.539 5.256 3.948 C 4.769 4.375 4.5 4.948 4.5 5.562 L 4.5 5.681 C 4.5 5.75 4.556 5.806 4.625 5.806 L 5.375 5.806 C 5.444 5.806 5.5 5.75 5.5 5.681 L 5.5 5.562 C 5.5 4.873 6.173 4.312 7 4.312 C 7.826 4.312 8.5 4.873 8.5 5.562 C 8.5 6.048 8.156 6.493 7.623 6.698 C 7.292 6.825 7.011 7.046 6.809 7.337 C 6.604 7.634 6.498 7.99 6.498 8.351 L 6.498 8.687 C 6.498 8.756 6.554 8.812 6.623 8.812 L 7.373 8.812 C 7.442 8.812 7.498 8.756 7.498 8.687 L 7.498 8.332 C 7.499 8.181 7.546 8.033 7.632 7.908 C 7.718 7.783 7.84 7.687 7.981 7.632 C 8.903 7.278 9.498 6.465 9.498 5.562 C 9.5 4.948 9.231 4.375 8.744 3.948 Z M 6.375 10.437 C 6.375 10.603 6.441 10.762 6.558 10.879 C 6.675 10.996 6.834 11.062 7 11.062 C 7.166 11.062 7.324 10.996 7.442 10.879 C 7.559 10.762 7.625 10.603 7.625 10.437 C 7.625 10.271 7.559 10.112 7.442 9.995 C 7.324 9.878 7.166 9.812 7 9.812 C 6.834 9.812 6.675 9.878 6.558 9.995 C 6.441 10.112 6.375 10.271 6.375 10.437 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <InfoCircle style={{ transform: "scale(0.833, 0.917)", transformOrigin: "0 0" }} />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,-1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>0</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Action </span>
          <div style={{
            position: "relative",
            width: 20,
            height: 22,
            flexShrink: 0,
          }}>
            <svg width={9.375} height={8.391} viewBox="0 0 9.375 8.391" fill="none" style={{
              position: "absolute",
              left: 5.313,
              top: 7,
              width: 9.375,
              height: 8.391,
              color: "rgba(0,0,0,0.25)",
            }}>
              <path d={"M 2.777 8.016 C 2.777 8.223 2.943 8.391 3.149 8.391 L 6.224 8.391 C 6.431 8.391 6.597 8.223 6.597 8.016 L 6.597 5.719 L 2.777 5.719 L 2.777 8.016 Z M 9 0 L 0.373 0 C 0.086 0 -0.093 0.313 0.051 0.563 L 2.644 4.969 L 6.732 4.969 L 9.325 0.563 C 9.467 0.313 9.288 0 9 0 L 9 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          height: 43,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TagAlone
            style={{
              position: "absolute",
              left: 21,
              top: 10,
              width: 83,
              height: 22,
            }}
            property1={"approved"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 149,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 88,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 115,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 85,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 81,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          width: 226,
          height: 44,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -54,
            width: 206,
            height: 98,
            borderTop: "1px solid rgba(0,0,0,0)",
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              height: 98,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 187,
                  height: 38,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 188,
                    height: 34,
                    overflow: "hidden",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 5,
                      top: 0,
                      width: 183,
                      height: 16,
                      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      whiteSpace: "pre-wrap",
                      lineHeight: "16px",
                      color: "rgba(0,0,0,0.65)",
                      display: "inline-block",
                    }}>{"Episode Auth Summary "}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 20,
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text1 ?? "Reqstd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text2 ?? "Apprd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text3 ?? "Denied"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text4 ?? "Pending"}</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          padding: "11px 5px 11px 5px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,-1,0,0,38.992)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>Title</span>
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
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 14,
                  height: 14,
                  color: "rgba(0,0,0,0.85)",
                }}>
                  <path d={"M 7 0 C 3.134 0 0 3.134 0 7 C 0 10.866 3.134 14 7 14 C 10.866 14 14 10.866 14 7 C 14 3.134 10.866 0 7 0 Z M 7 12.813 C 3.791 12.813 1.188 10.209 1.188 7 C 1.188 3.791 3.791 1.188 7 1.188 C 10.209 1.188 12.813 3.791 12.813 7 C 12.813 10.209 10.209 12.813 7 12.813 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 8.744 3.948 C 8.275 3.537 7.656 3.312 7 3.312 C 6.344 3.312 5.725 3.539 5.256 3.948 C 4.769 4.375 4.5 4.948 4.5 5.562 L 4.5 5.681 C 4.5 5.75 4.556 5.806 4.625 5.806 L 5.375 5.806 C 5.444 5.806 5.5 5.75 5.5 5.681 L 5.5 5.562 C 5.5 4.873 6.173 4.312 7 4.312 C 7.826 4.312 8.5 4.873 8.5 5.562 C 8.5 6.048 8.156 6.493 7.623 6.698 C 7.292 6.825 7.011 7.046 6.809 7.337 C 6.604 7.634 6.498 7.99 6.498 8.351 L 6.498 8.687 C 6.498 8.756 6.554 8.812 6.623 8.812 L 7.373 8.812 C 7.442 8.812 7.498 8.756 7.498 8.687 L 7.498 8.332 C 7.499 8.181 7.546 8.033 7.632 7.908 C 7.718 7.783 7.84 7.687 7.981 7.632 C 8.903 7.278 9.498 6.465 9.498 5.562 C 9.5 4.948 9.231 4.375 8.744 3.948 Z M 6.375 10.437 C 6.375 10.603 6.441 10.762 6.558 10.879 C 6.675 10.996 6.834 11.062 7 11.062 C 7.166 11.062 7.324 10.996 7.442 10.879 C 7.559 10.762 7.625 10.603 7.625 10.437 C 7.625 10.271 7.559 10.112 7.442 9.995 C 7.324 9.878 7.166 9.812 7 9.812 C 6.834 9.812 6.675 9.878 6.558 9.995 C 6.441 10.112 6.375 10.271 6.375 10.437 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>25</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 176,
            display: "flex",
            flexDirection: "row",
            gap: 9,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>Title</span>
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
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 14,
                  height: 14,
                  color: "rgba(0,0,0,0.85)",
                }}>
                  <path d={"M 7 0 C 3.134 0 0 3.134 0 7 C 0 10.866 3.134 14 7 14 C 10.866 14 14 10.866 14 7 C 14 3.134 10.866 0 7 0 Z M 7 12.813 C 3.791 12.813 1.188 10.209 1.188 7 C 1.188 3.791 3.791 1.188 7 1.188 C 10.209 1.188 12.813 3.791 12.813 7 C 12.813 10.209 10.209 12.813 7 12.813 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 8.744 3.948 C 8.275 3.537 7.656 3.312 7 3.312 C 6.344 3.312 5.725 3.539 5.256 3.948 C 4.769 4.375 4.5 4.948 4.5 5.562 L 4.5 5.681 C 4.5 5.75 4.556 5.806 4.625 5.806 L 5.375 5.806 C 5.444 5.806 5.5 5.75 5.5 5.681 L 5.5 5.562 C 5.5 4.873 6.173 4.312 7 4.312 C 7.826 4.312 8.5 4.873 8.5 5.562 C 8.5 6.048 8.156 6.493 7.623 6.698 C 7.292 6.825 7.011 7.046 6.809 7.337 C 6.604 7.634 6.498 7.99 6.498 8.351 L 6.498 8.687 C 6.498 8.756 6.554 8.812 6.623 8.812 L 7.373 8.812 C 7.442 8.812 7.498 8.756 7.498 8.687 L 7.498 8.332 C 7.499 8.181 7.546 8.033 7.632 7.908 C 7.718 7.783 7.84 7.687 7.981 7.632 C 8.903 7.278 9.498 6.465 9.498 5.562 C 9.5 4.948 9.231 4.375 8.744 3.948 Z M 6.375 10.437 C 6.375 10.603 6.441 10.762 6.558 10.879 C 6.675 10.996 6.834 11.062 7 11.062 C 7.166 11.062 7.324 10.996 7.442 10.879 C 7.559 10.762 7.625 10.603 7.625 10.437 C 7.625 10.271 7.559 10.112 7.442 9.995 C 7.324 9.878 7.166 9.812 7 9.812 C 6.834 9.812 6.675 9.878 6.558 9.995 C 6.441 10.112 6.375 10.271 6.375 10.437 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <InfoCircle style={{ transform: "scale(0.833, 0.917)", transformOrigin: "0 0" }} />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,-1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>0</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Action </span>
          <div style={{
            position: "relative",
            width: 20,
            height: 22,
            flexShrink: 0,
          }}>
            <svg width={9.375} height={8.391} viewBox="0 0 9.375 8.391" fill="none" style={{
              position: "absolute",
              left: 5.313,
              top: 7,
              width: 9.375,
              height: 8.391,
              color: "rgba(0,0,0,0.25)",
            }}>
              <path d={"M 2.777 8.016 C 2.777 8.223 2.943 8.391 3.149 8.391 L 6.224 8.391 C 6.431 8.391 6.597 8.223 6.597 8.016 L 6.597 5.719 L 2.777 5.719 L 2.777 8.016 Z M 9 0 L 0.373 0 C 0.086 0 -0.093 0.313 0.051 0.563 L 2.644 4.969 L 6.732 4.969 L 9.325 0.563 C 9.467 0.313 9.288 0 9 0 L 9 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          height: 43,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TagAlone
            style={{
              position: "absolute",
              left: 12,
              top: 10,
              width: 83,
              height: 22,
            }}
            property1={"approved"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "19px 16px 19px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Reviewed?</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 8px 10px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NexwCheck
            style={{
              position: "relative",
              width: 16,
              height: 22,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 149,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 88,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 115,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 85,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 81,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          width: 226,
          height: 44,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -54,
            width: 206,
            height: 98,
            borderTop: "1px solid rgba(0,0,0,0)",
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              height: 98,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 187,
                  height: 38,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 188,
                    height: 34,
                    overflow: "hidden",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 5,
                      top: 0,
                      width: 183,
                      height: 16,
                      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      whiteSpace: "pre-wrap",
                      lineHeight: "16px",
                      color: "rgba(0,0,0,0.65)",
                      display: "inline-block",
                    }}>{"Episode Auth Summary "}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 20,
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text1 ?? "Reqstd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text2 ?? "Apprd"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text3 ?? "Denied"}</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>{props.text4 ?? "Pending"}</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 111,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          padding: "11px 5px 11px 5px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>{"Recert Status"}<span style={{ fontSize: 11 }}>{"(Days)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Current</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
          }}>Expiring Auth(s)</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>2 Expiring</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
          }}>Expired Auth(s)</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01 Expired</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "19px 16px 19px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Reviewed?</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 8px 10px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NexwCheck
            style={{
              position: "relative",
              width: 16,
              height: 22,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1835,
      height: 97,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>{props.icon1 ?? <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0" }} />}</div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>{props.icon2 ?? <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0" }} />}</div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>{props.text1 ?? "Patient Name"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>{props.icon3 ?? <Filter active={false} hover={false} style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }} />}</div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 137,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>{props.icon4 ?? <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0" }} />}</div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>{props.text2 ?? "MRN"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>B6100062245601</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 79,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 94,
          height: 55,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 19,
            width: 64,
            height: 16,
          }}>
            <span style={{
              position: "absolute",
              left: 15,
              top: 0,
              width: 43,
              height: 16,
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.65)",
            }}>{props.text3 ?? "Agency"}</span>
            <div style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 11,
              height: 16,
            }}>
              <div style={{
                  position: "absolute",
                  left: 2,
                  top: 7,
                  width: 9,
                  height: 9,
                  color: "rgb(24,144,255)",
                }}>
                <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
              <div style={{
                  position: "absolute",
                  left: 2,
                  top: 1,
                  width: 9,
                  height: 9,
                  color: "rgb(191,191,191)",
                }}>
                <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
              </div>
            </div>
          </div>
          <div style={{
              position: "absolute",
              left: 48,
              top: 16,
              width: 20,
              height: 22,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 59,
          width: 94,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Agency 1</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 65,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 5px 16px 5px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>{props.text4 ?? "Branch"}</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 22,
            opacity: 0,
            flexShrink: 0,
          }}>
            <svg width={9.375} height={8.391} viewBox="0 0 9.375 8.391" fill="none" style={{
              position: "absolute",
              left: 5.313,
              top: 7,
              width: 9.375,
              height: 8.391,
              color: "rgba(0,0,0,0.25)",
            }}>
              <path d={"M 6.597 5.719 L 6.597 8.016 C 6.597 8.223 6.43 8.391 6.224 8.391 L 3.15 8.391 C 2.943 8.391 2.776 8.223 2.776 8.016 L 2.776 5.719 L 6.597 5.719 Z M 9 0 C 9.287 0 9.467 0.313 9.325 0.563 L 6.732 4.969 L 2.644 4.969 L 0.051 0.563 C -0.093 0.313 0.086 0 0.373 0 L 9 0 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Bcode</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 87,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>11521357</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 113,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 22,
            opacity: 0,
            flexShrink: 0,
          }}>
            <svg width={9.375} height={8.391} viewBox="0 0 9.375 8.391" fill="none" style={{
              position: "absolute",
              left: 5.313,
              top: 7,
              width: 9.375,
              height: 8.391,
              color: "rgba(0,0,0,0.25)",
            }}>
              <path d={"M 2.777 8.016 C 2.777 8.223 2.943 8.391 3.149 8.391 L 6.224 8.391 C 6.431 8.391 6.597 8.223 6.597 8.016 L 6.597 5.719 L 2.777 5.719 L 2.777 8.016 Z M 9 0 L 0.373 0 C 0.086 0 -0.093 0.313 0.051 0.563 L 2.644 4.969 L 6.732 4.969 L 9.325 0.563 C 9.467 0.313 9.288 0 9 0 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Aetna Medi..</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 109,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 93,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 10,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 4,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 130,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 14,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 8,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 9,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.321, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 106,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "absolute",
                left: 2,
                top: 14,
                width: 9,
                height: 9,
                color: "rgb(24,144,255)",
              }}>
              <CaretDown2 style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
            <div style={{
                position: "absolute",
                left: 2,
                top: 8,
                width: 9,
                height: 9,
                color: "rgb(191,191,191)",
              }}>
              <CaretUp style={{ transform: "scale(0.281, 0.281)", transformOrigin: "0 0", color: "rgb(191,191,191)" }} />
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 9,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.321, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 14,
              color: "rgb(159,109,171)",
            }}>
              <path d={"M 10 12.25 L 10 13.344 C 10 13.706 9.664 14 9.25 14 L 0.75 14 C 0.336 14 0 13.706 0 13.344 L 0 3.281 C 0 2.919 0.336 2.625 0.75 2.625 L 3 2.625 L 3 10.719 C 3 11.563 3.785 12.25 4.75 12.25 L 10 12.25 Z M 10 2.844 L 10 0 L 4.75 0 C 4.336 0 4 0.294 4 0.656 L 4 10.719 C 4 11.081 4.336 11.375 4.75 11.375 L 13.25 11.375 C 13.664 11.375 14 11.081 14 10.719 L 14 3.5 L 10.75 3.5 C 10.337 3.5 10 3.205 10 2.844 Z M 13.78 1.995 L 11.72 0.192 C 11.579 0.069 11.388 0 11.189 0 L 11 0 L 11 2.625 L 14 2.625 L 14 2.459 C 14 2.285 13.921 2.118 13.78 1.995 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 10 12.25 L 11 12.25 L 11 11.25 L 10 11.25 L 10 12.25 Z M 3 2.625 L 4 2.625 L 4 1.625 L 3 1.625 L 3 2.625 Z M 10 0 L 11 0 L 11 -1 L 10 -1 L 10 0 Z M 14 3.5 L 15 3.5 L 15 2.5 L 14 2.5 L 14 3.5 Z M 13.78 1.995 L 14.439 1.243 L 14.439 1.243 L 13.78 1.995 Z M 11.72 0.192 L 12.378 -0.56 L 12.378 -0.56 L 11.72 0.192 Z M 11.189 0 L 11.189 -1 L 11.189 -1 L 11.189 0 Z M 11 0 L 11 -1 L 10 -1 L 10 0 L 11 0 Z M 11 2.625 L 10 2.625 L 10 3.625 L 11 3.625 L 11 2.625 Z M 14 2.625 L 14 3.625 L 15 3.625 L 15 2.625 L 14 2.625 Z M 14 2.459 L 15 2.459 L 15 2.459 L 14 2.459 Z M 10 12.25 L 9 12.25 L 9 13.344 L 10 13.344 L 11 13.344 L 11 12.25 L 10 12.25 Z M 10 13.344 L 9 13.344 C 9 13.202 9.068 13.102 9.122 13.055 C 9.174 13.01 9.222 13 9.25 13 L 9.25 14 L 9.25 15 C 10.087 15 11 14.38 11 13.344 L 10 13.344 Z M 9.25 14 L 9.25 13 L 0.75 13 L 0.75 14 L 0.75 15 L 9.25 15 L 9.25 14 Z M 0.75 14 L 0.75 13 C 0.778 13 0.826 13.01 0.878 13.055 C 0.932 13.102 1 13.202 1 13.344 L 0 13.344 L -1 13.344 C -1 14.38 -0.087 15 0.75 15 L 0.75 14 Z M 0 13.344 L 1 13.344 L 1 3.281 L 0 3.281 L -1 3.281 L -1 13.344 L 0 13.344 Z M 0 3.281 L 1 3.281 C 1 3.423 0.932 3.523 0.878 3.57 C 0.826 3.615 0.778 3.625 0.75 3.625 L 0.75 2.625 L 0.75 1.625 C -0.087 1.625 -1 2.245 -1 3.281 L 0 3.281 Z M 0.75 2.625 L 0.75 3.625 L 3 3.625 L 3 2.625 L 3 1.625 L 0.75 1.625 L 0.75 2.625 Z M 3 2.625 L 2 2.625 L 2 10.719 L 3 10.719 L 4 10.719 L 4 2.625 L 3 2.625 Z M 3 10.719 L 2 10.719 C 2 12.237 3.362 13.25 4.75 13.25 L 4.75 12.25 L 4.75 11.25 C 4.208 11.25 4 10.89 4 10.719 L 3 10.719 Z M 4.75 12.25 L 4.75 13.25 L 10 13.25 L 10 12.25 L 10 11.25 L 4.75 11.25 L 4.75 12.25 Z M 10 2.844 L 11 2.844 L 11 0 L 10 0 L 9 0 L 9 2.844 L 10 2.844 Z M 10 0 L 10 -1 L 4.75 -1 L 4.75 0 L 4.75 1 L 10 1 L 10 0 Z M 4.75 0 L 4.75 -1 C 3.913 -1 3 -0.38 3 0.656 L 4 0.656 L 5 0.656 C 5 0.798 4.932 0.898 4.878 0.945 C 4.826 0.99 4.778 1 4.75 1 L 4.75 0 Z M 4 0.656 L 3 0.656 L 3 10.719 L 4 10.719 L 5 10.719 L 5 0.656 L 4 0.656 Z M 4 10.719 L 3 10.719 C 3 11.755 3.913 12.375 4.75 12.375 L 4.75 11.375 L 4.75 10.375 C 4.778 10.375 4.826 10.385 4.878 10.43 C 4.932 10.477 5 10.577 5 10.719 L 4 10.719 Z M 4.75 11.375 L 4.75 12.375 L 13.25 12.375 L 13.25 11.375 L 13.25 10.375 L 4.75 10.375 L 4.75 11.375 Z M 13.25 11.375 L 13.25 12.375 C 14.087 12.375 15 11.755 15 10.719 L 14 10.719 L 13 10.719 C 13 10.577 13.068 10.477 13.122 10.43 C 13.174 10.385 13.222 10.375 13.25 10.375 L 13.25 11.375 Z M 14 10.719 L 15 10.719 L 15 3.5 L 14 3.5 L 13 3.5 L 13 10.719 L 14 10.719 Z M 14 3.5 L 14 2.5 L 10.75 2.5 L 10.75 3.5 L 10.75 4.5 L 14 4.5 L 14 3.5 Z M 10.75 3.5 L 10.75 2.5 C 10.781 2.5 10.829 2.511 10.879 2.555 C 10.93 2.6 11 2.699 11 2.844 L 10 2.844 L 9 2.844 C 9 3.878 9.915 4.5 10.75 4.5 L 10.75 3.5 Z M 13.78 1.995 L 14.439 1.243 L 12.378 -0.56 L 11.72 0.192 L 11.061 0.945 L 13.122 2.748 L 13.78 1.995 Z M 11.72 0.192 L 12.378 -0.56 C 12.043 -0.854 11.614 -1 11.189 -1 L 11.189 0 L 11.189 1 C 11.174 1 11.156 0.997 11.136 0.99 C 11.116 0.983 11.089 0.969 11.061 0.945 L 11.72 0.192 Z M 11.189 0 L 11.189 -1 L 11 -1 L 11 0 L 11 1 L 11.189 1 L 11.189 0 Z M 11 0 L 10 0 L 10 2.625 L 11 2.625 L 12 2.625 L 12 0 L 11 0 Z M 11 2.625 L 11 3.625 L 14 3.625 L 14 2.625 L 14 1.625 L 11 1.625 L 11 2.625 Z M 14 2.625 L 15 2.625 L 15 2.459 L 14 2.459 L 13 2.459 L 13 2.625 L 14 2.625 Z M 14 2.459 L 15 2.459 C 15 1.974 14.778 1.54 14.439 1.243 L 13.78 1.995 L 13.122 2.748 C 13.064 2.697 13 2.597 13 2.459 L 14 2.459 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 208,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -10,
          top: 54,
          width: 226,
          height: 44,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -54,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 206,
              height: 98,
              flexShrink: 0,
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 187,
                  height: 38,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 16.5,
                    top: -7,
                    width: 156,
                    height: 48,
                    overflow: "hidden",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 8,
                      top: 0,
                      width: 138,
                      height: 30,
                      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      textAlign: "center",
                      lineHeight: "16px",
                      color: "rgba(0,0,0,0.65)",
                      whiteSpace: "pre-wrap",
                      display: "inline-block",
                    }}>{"Episode Auth Summary "}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 34,
                      display: "flex",
                      flexDirection: "row",
                      gap: 42,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>R</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>A</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>D</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 11,
                        whiteSpace: "nowrap",
                        lineHeight: "14px",
                        color: "rgb(0,0,0)",
                        flexShrink: 0,
                      }}>P</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <Badge
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                      property1={"variant6"}
                    />
                    <Badge
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                      property1={"variant6"}
                    />
                    <Badge
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                      property1={"none"}
                    />
                    <Badge
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                      property1={"none"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 104,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <Components
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          property1={"table-cell"}
          property2={"header"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Current</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 107,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <Components2
          style={{
            position: "relative",
            height: 55,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          property1={"table-cell"}
          property2={"header"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>-</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 105,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <Components3
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          property1={"table-cell"}
          property2={"header"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>-</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 67,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 55,
          borderTop: "1px solid rgba(0,0,0,0)",
          borderRight: "1px solid rgba(0,0,0,0)",
          borderBottom: "1px solid rgba(0,0,0,0)",
          borderLeft: "1px solid rgba(0,0,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Docs</span>
        </div>
        <div style={{
          position: "relative",
          height: 37,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <AttachmentIcon style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 65,
              height: 37,
            }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "19px 16px 19px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Reviewed?</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 8px 10px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NexwCheck
            style={{
              position: "relative",
              width: 16,
              height: 22,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 149,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 88,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 115,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 85,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 81,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          width: 226,
          height: 44,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -59,
            width: 206,
            height: 98,
            borderTop: "1px solid rgba(0,0,0,0)",
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              height: 54,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 111,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          padding: "11px 5px 11px 5px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>{"Recert Status"}<span style={{ fontSize: 11 }}>{"(Days)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Current</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
          }}>Expiring Auth(s)</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>2 Expiring</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
          }}>Expired Auth(s)</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01 Expired</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "19px 16px 19px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 0 L 22 0 L 22 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Reviewed?</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 8px 10px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NexwCheck
            style={{
              position: "relative",
              width: 16,
              height: 22,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 1835,
      height: 42,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 137,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 79,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>Agency 1</span>
      </div>
      <div style={{
        position: "relative",
        width: 65,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 87,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 113,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 109,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gateway</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 93,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi St Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 106,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 208,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -10,
          top: 6,
          width: 226,
          height: 36,
        }}>
          <div style={{
            position: "absolute",
            left: 10,
            top: -11,
            width: 206,
            height: 49,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              height: 49,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
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
                left: 8,
                top: 9,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 190,
                  height: 40,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 190,
                    display: "flex",
                    flexDirection: "row",
                    gap: 9,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon3 ?? <Badge property1={"variant6"} />}</div>
                    <div style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                    <Badge
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                      property1={"none"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 104,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(250,250,250)",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            borderRight: "1px solid rgba(0,0,0,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            borderLeft: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "row",
            padding: "11px 5px 11px 5px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: "pre-wrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.65)",
              flexShrink: 0,
            }}>{"Recert Status"}<span style={{ fontSize: 11 }}>{"(Days)"}</span></span>
            <div style={{
                position: "relative",
                width: 20,
                height: 22,
                flexShrink: 0,
              }}>
              <Filter
                style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
                active={false}
                hover={false}
              />
            </div>
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
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            padding: "10px 12px 10px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>Current</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            borderRight: "1px solid rgba(0,0,0,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            borderLeft: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            padding: "16px 16px 16px 16px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
            }}>text</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 108,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 93,
          height: 42,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: -5,
            width: 93,
            height: 52,
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(250,250,250)",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "11px 16px 11px 16px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Expiring Auth(s)</span>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 22,
                  flexShrink: 0,
                }}>
                <Filter
                  style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
                  active={false}
                  hover={false}
                />
              </div>
              <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0,-1,1,0,0,39)",
                transformOrigin: "0 0",
                width: 22,
                height: 1,
                color: "rgba(0,0,0,0.06)",
              }}>
                <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "10px 12px 10px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
                height: 22,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 4px 1px 4px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(250,140,22)",
                    flexShrink: 0,
                  }}>2 Expiring</span>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 8px 1px 8px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    color: "rgb(47,84,235)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>geekblue</span>
                  <div style={{
                      position: "relative",
                      width: 10,
                      height: 10,
                      flexShrink: 0,
                    }}>
                    <Close2 style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 8px 1px 8px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    color: "rgb(245,34,45)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>red</span>
                  <div style={{
                      position: "relative",
                      width: 10,
                      height: 10,
                      flexShrink: 0,
                    }}>
                    <Close2 style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              padding: "16px 16px 16px 16px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.85)",
                flexShrink: 0,
              }}>text</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 105,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: -5,
          width: 93,
          height: 52,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 93,
            height: 52,
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(250,250,250)",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "11px 16px 11px 16px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Expiring Auth(s)</span>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 22,
                  flexShrink: 0,
                }}>
                <Filter
                  style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
                  active={false}
                  hover={false}
                />
              </div>
              <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0,-1,1,0,0,39)",
                transformOrigin: "0 0",
                width: 22,
                height: 1,
                color: "rgba(0,0,0,0.06)",
              }}>
                <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "10px 12px 10px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 64,
                height: 22,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 4px 1px 4px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(245,34,45)",
                    flexShrink: 0,
                  }}>01 Expired</span>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 8px 1px 8px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    color: "rgb(47,84,235)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>geekblue</span>
                  <div style={{
                      position: "relative",
                      width: 10,
                      height: 10,
                      flexShrink: 0,
                    }}>
                    <Close2 style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 2,
                  backgroundColor: "rgb(230,247,255)",
                  boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  padding: "1px 8px 1px 8px",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    color: "rgb(245,34,45)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>red</span>
                  <div style={{
                      position: "relative",
                      width: 10,
                      height: 10,
                      flexShrink: 0,
                    }}>
                    <Close2 style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              padding: "16px 16px 16px 16px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.85)",
                flexShrink: 0,
              }}>text</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 67,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <AttachmentIcon style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 65,
            height: 37,
          }} />
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "19px 16px 19px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "center",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Reviewed?</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 8px 10px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NexwCheck
            style={{
              position: "relative",
              width: 16,
              height: 22,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 158,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 152,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 98,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 137,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gw</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 98,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi Start Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 104,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 10,
          top: 0,
          width: 206,
          height: 43,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 41,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
              left: 8,
              top: 1,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 190,
                height: 40,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 190,
                  display: "flex",
                  flexDirection: "row",
                  gap: 9,
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Recert Rem. Days</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>25</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Expiring Auth</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
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
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>0</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 43,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 9.5,
            top: 10,
            width: 106,
            height: "calc(var(--size-height-controlheightsm) * 1px)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--size-padding-paddingxs) * 1px)",
            padding: "4px 8px 4px 8px",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
            paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
            paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
            paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              overflow: "hidden",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
                position: "absolute",
                left: 0.857,
                top: 0.859,
                width: 14.286,
                height: 14.286,
                color: "rgba(0,0,0,0.65)",
              }}>
                <path d={"M 14.243 13.259 L 9.605 8.621 C 10.325 7.691 10.714 6.554 10.714 5.357 C 10.714 3.925 10.155 2.582 9.145 1.57 C 8.134 0.557 6.788 0 5.357 0 C 3.927 0 2.58 0.559 1.57 1.57 C 0.557 2.58 0 3.925 0 5.357 C 0 6.788 0.559 8.134 1.57 9.145 C 2.58 10.157 3.925 10.714 5.357 10.714 C 6.554 10.714 7.689 10.325 8.62 9.607 L 13.257 14.243 C 13.271 14.256 13.287 14.267 13.305 14.275 C 13.322 14.282 13.341 14.286 13.361 14.286 C 13.38 14.286 13.399 14.282 13.417 14.275 C 13.435 14.267 13.451 14.256 13.464 14.243 L 14.243 13.466 C 14.256 13.452 14.267 13.436 14.275 13.419 C 14.282 13.401 14.286 13.382 14.286 13.363 C 14.286 13.343 14.282 13.324 14.275 13.306 C 14.267 13.289 14.256 13.273 14.243 13.259 L 14.243 13.259 Z M 8.186 8.186 C 7.429 8.941 6.425 9.357 5.357 9.357 C 4.289 9.357 3.286 8.941 2.529 8.186 C 1.773 7.429 1.357 6.425 1.357 5.357 C 1.357 4.289 1.773 3.284 2.529 2.529 C 3.286 1.773 4.289 1.357 5.357 1.357 C 6.425 1.357 7.43 1.771 8.186 2.529 C 8.941 3.286 9.357 4.289 9.357 5.357 C 9.357 6.425 8.941 7.43 8.186 8.186 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "rgb(27,175,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>View Details</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 1835,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 149,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexGrow: 1,
          }}>Patient Name</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>Marvin Mckinney</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>MRN</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>B6100062245601</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 88,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Branch</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Bcode</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mem ID</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>11521357</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 115,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Src</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Humana Gol..</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Payer Type</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Mcare Adv</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Gw</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Carelon</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 85,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Mode</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Electronic</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 81,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>SOC</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 114,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi Start Date"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>01/15/24</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 94,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Epi ID"}{"\n"}<span style={{ color: "rgba(130,128,128,0.65)" }}>{"(Current)"}</span></span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Epi23456</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 226,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 10,
          top: 0,
          width: 206,
          height: 43,
          borderTop: "1px solid rgba(0,0,0,0)",
          borderRight: "1px solid rgba(0,0,0,0)",
          borderBottom: "1px solid rgba(0,0,0,0)",
          borderLeft: "1px solid rgba(0,0,0,0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 41,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
              left: 8,
              top: 1,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 190,
                height: 40,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 190,
                  display: "flex",
                  flexDirection: "row",
                  gap: 9,
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon1 ?? <Badge property1={"variant6"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon2 ?? <Badge property1={"variant6"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon3 ?? <Badge property1={"none"} />}</div>
                  <div style={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                    }}>{props.icon4 ?? <Badge property1={"none"} />}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 95,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Recert Rem. Days</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>25</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(250,250,250)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "11px 16px 11px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.65)",
            flexShrink: 0,
          }}>Expiring Auth</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 22,
              flexShrink: 0,
            }}>
            <Filter
              style={{ transform: "scale(0.714, 0.407)", transformOrigin: "0 0" }}
              active={false}
              hover={false}
            />
          </div>
          <svg width={22} height={1} viewBox="0 -0.500 22 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,39)",
            transformOrigin: "0 0",
            width: 22,
            height: 1,
            color: "rgba(0,0,0,0.06)",
          }}>
            <path d={"M 0 -0.5 L 0 0 L 22 0 L 22 -0.5 L 22 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 12px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>0</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>text</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 112,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 43,
            borderTop: "1px solid rgba(0,0,0,0)",
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0.5,
              top: 10,
              width: 106,
              height: "calc(var(--size-height-controlheightsm) * 1px)",
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--size-padding-paddingxs) * 1px)",
              padding: "4px 8px 4px 8px",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
              paddingTop: "calc(var(--size-padding-paddingxxs) * 1px)",
              paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
              paddingBottom: "calc(var(--size-padding-paddingxxs) * 1px)",
            }}>
              <div style={{
                position: "relative",
                width: 16,
                overflow: "hidden",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
                  position: "absolute",
                  left: 0.857,
                  top: 0.859,
                  width: 14.286,
                  height: 14.286,
                  color: "rgba(0,0,0,0.65)",
                }}>
                  <path d={"M 14.243 13.259 L 9.605 8.621 C 10.325 7.691 10.714 6.554 10.714 5.357 C 10.714 3.925 10.155 2.582 9.145 1.57 C 8.134 0.557 6.788 0 5.357 0 C 3.927 0 2.58 0.559 1.57 1.57 C 0.557 2.58 0 3.925 0 5.357 C 0 6.788 0.559 8.134 1.57 9.145 C 2.58 10.157 3.925 10.714 5.357 10.714 C 6.554 10.714 7.689 10.325 8.62 9.607 L 13.257 14.243 C 13.271 14.256 13.287 14.267 13.305 14.275 C 13.322 14.282 13.341 14.286 13.361 14.286 C 13.38 14.286 13.399 14.282 13.417 14.275 C 13.435 14.267 13.451 14.256 13.464 14.243 L 14.243 13.466 C 14.256 13.452 14.267 13.436 14.275 13.419 C 14.282 13.401 14.286 13.382 14.286 13.363 C 14.286 13.343 14.282 13.324 14.275 13.306 C 14.267 13.289 14.256 13.273 14.243 13.259 L 14.243 13.259 Z M 8.186 8.186 C 7.429 8.941 6.425 9.357 5.357 9.357 C 4.289 9.357 3.286 8.941 2.529 8.186 C 1.773 7.429 1.357 6.425 1.357 5.357 C 1.357 4.289 1.773 3.284 2.529 2.529 C 3.286 1.773 4.289 1.357 5.357 1.357 C 6.425 1.357 7.43 1.771 8.186 2.529 C 8.941 3.286 9.357 4.289 9.357 5.357 C 9.357 6.425 8.941 7.43 8.186 8.186 Z"} fill="currentColor" fillRule="nonzero" />
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
                color: "rgb(27,175,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>View Details</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 103,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "10px 8px 10px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 22,
          borderRadius: 2,
          flexShrink: 0,
        }}>
          <CheckboxInput
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: 22,
            }}
            checked={false}
            indeterminate={false}
            disabled={false}
            hovering={false}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant3
    "property1=variant3": __body1,
    // figma: Property 1=Variant5
    "property1=variant5": __body2,
    // figma: Property 1=Variant8
    "property1=variant8": __body3,
    // figma: Property 1=Variant6
    "property1=variant6": __body4,
    // figma: Property 1=Variant7
    "property1=variant7": __body5,
    // figma: Property 1=Variant2
    "property1=variant2": __body6,
    // figma: Property 1=Variant4
    "property1=variant4": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeaderAnswerPatientSummaryView;
