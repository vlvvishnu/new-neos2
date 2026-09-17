import { CheckboxGroup } from './CheckboxGroup.jsx';
import { EntypoForward } from './EntypoForward.jsx';
import { HeroiconsOutlineArrowDownOn } from './HeroiconsOutlineArrowDownOn.jsx';
import { HeroiconsOutlineArrowUpOn } from './HeroiconsOutlineArrowUpOn.jsx';
import { HeroiconsOutlineCalculator } from './HeroiconsOutlineCalculator.jsx';
import { HeroiconsOutlineCheckCircle } from './HeroiconsOutlineCheckCircle.jsx';
import { HeroiconsOutlineCheckCircle2 } from './HeroiconsOutlineCheckCircle2.jsx';
import { HeroiconsOutlineDocumentDuplicate } from './HeroiconsOutlineDocumentDuplicate.jsx';
import { HeroiconsOutlineFilter } from './HeroiconsOutlineFilter.jsx';
import { HeroiconsOutlinePencil } from './HeroiconsOutlinePencil.jsx';
import { HeroiconsOutlineReceiptRefund } from './HeroiconsOutlineReceiptRefund.jsx';
import { HeroiconsOutlineTrash } from './HeroiconsOutlineTrash.jsx';
import { HeroiconsOutlineXCircle } from './HeroiconsOutlineXCircle.jsx';
import { HeroiconsOutlineXMark } from './HeroiconsOutlineXMark.jsx';
import { HeroiconsSolidCheckCircle } from './HeroiconsSolidCheckCircle.jsx';
import { HeroiconsSolidCloudArrowUp } from './HeroiconsSolidCloudArrowUp.jsx';
import { HeroiconsSolidDocumentDuplicate } from './HeroiconsSolidDocumentDuplicate.jsx';
import { HeroiconsSolidEllipsisVertical } from './HeroiconsSolidEllipsisVertical.jsx';
import { HeroiconsSolidPencil } from './HeroiconsSolidPencil.jsx';
import { HeroiconsSolidXCircle } from './HeroiconsSolidXCircle.jsx';

// figma node: 49:5479 Table  (39 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Table(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "Input normal", iconFront: _p.iconFront ?? true, iconBehind: _p.iconBehind ?? true, iCON: _p.iCON ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 10px 14px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,98,184)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Column Label"}</span>
      {props.iCON && (
      <div style={{
        position: "relative",
        width: 15,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 15,
            height: 15,
          }}>{props.icon1 ?? <HeroiconsOutlineFilter style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 10px 14px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(27,36,44)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Column Label"}</span>
      {props.iCON && (
      <div style={{
        position: "relative",
        width: 15,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 15,
            height: 15,
          }}>{props.icon1 ?? <HeroiconsOutlineFilter style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 108,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 10px 14px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "space-between",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(58,66,74)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Column Input"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 108,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 124,
        height: 45,
        backgroundColor: "rgb(238,238,246)",
      }} />
      <span style={{
        position: "absolute",
        left: 8,
        top: 14,
        width: 90,
        height: 17,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(58,66,74)",
      }}>{props.text1 ?? "Column Input"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 8px 13px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <CheckboxGroup property1={"checkbox-empty"} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 106,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 8,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(212,213,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "6px 11px 6px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(58,66,74)",
          flexShrink: 0,
        }}>{props.text1 ?? "Column Input"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 106,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 8,
        borderRadius: 6,
        backgroundColor: "rgb(240,243,245)",
        boxShadow: "inset 0 0 0 1px rgb(212,213,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "6px 11px 6px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(147,151,169)",
          flexShrink: 0,
        }}>{props.text1 ?? "Column Input"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 10px 8px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(212,213,221)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 14px 5px 7px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 18,
          backgroundColor: "rgb(207,214,221)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2px 8px 1px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(27,36,44)",
            flexShrink: 0,
          }}>{props.text1 ?? "Column Input"}</span>
          <div style={{
              position: "relative",
              width: 12,
              height: 12,
              flexShrink: 0,
            }}>{props.icon1 ?? <HeroiconsOutlineXMark style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 18,
          backgroundColor: "rgb(207,214,221)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2px 8px 1px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(27,36,44)",
            flexShrink: 0,
          }}>{props.text2 ?? "Column Input"}</span>
          <div style={{
              position: "relative",
              width: 12,
              height: 12,
              flexShrink: 0,
            }}>{props.icon2 ?? <HeroiconsOutlineXMark style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(238,238,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 10px 14px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 90,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 90,
          height: 17,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(58,66,74)",
        }}>{props.text1 ?? "Column Input"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(238,238,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 10px 14px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(58,66,74)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Column Input"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(238,238,246)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(207,214,221)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "4px 4px 4px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.iconFront && (
        <div style={{
          position: "relative",
          width: 15,
          height: 15,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0.5,
              width: 15,
              height: 15,
            }}>{props.icon1 ?? <HeroiconsOutlineXMark style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(27,36,44)",
          flexShrink: 0,
        }}>{props.text1 ?? "Column Input"}</span>
        {props.iconBehind && (
        <div style={{
          position: "relative",
          width: 15,
          height: 15,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15,
              height: 15,
            }}>{props.icon2 ?? <HeroiconsOutlineXMark style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(207,214,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(27,36,44)",
          flexShrink: 0,
        }}>{props.text1 ?? "Column Input"}</span>
        <div style={{
            position: "relative",
            width: 15,
            height: 15,
            flexShrink: 0,
          }}>{props.icon1 ?? <HeroiconsOutlineXMark style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(207,214,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(27,36,44)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Column Input"}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(207,214,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(27,36,44)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Column Input"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(207,214,221)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(27,36,44)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Column Input"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsOutlineCheckCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon2 ?? <HeroiconsOutlineDocumentDuplicate style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon3 ?? <HeroiconsOutlinePencil style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 52,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 52,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,52,0)",
                transformOrigin: "0 0",
                width: 52,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 4,
                  top: 4,
                  width: 14,
                  height: 14,
                  color: "rgb(15,23,42)",
                }}>{props.icon1 ?? <HeroiconsSolidPencil style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "absolute",
                left: 19,
                top: 2,
                width: 26,
                height: 17,
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--icon-color-3)",
              }}>{props.text1 ?? "Edit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 52,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 52,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,52,0)",
                transformOrigin: "0 0",
                width: 52,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsOutlineCalculator style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "absolute",
                left: 19,
                top: 4,
                width: 28,
                height: 13,
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 11,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--icon-color-3)",
              }}>{props.text1 ?? "Entry"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 66,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,66,0)",
                transformOrigin: "0 0",
                width: 66,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 5,
                  top: 5,
                  width: 12,
                  height: 12,
                }}>{props.icon1 ?? <HeroiconsOutlineReceiptRefund style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "absolute",
                left: 19,
                top: 4,
                width: 41,
                height: 13,
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 11,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--icon-color-3)",
              }}>{props.text1 ?? "Restore"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsOutlineDocumentDuplicate style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon2 ?? <HeroiconsOutlineArrowUpOn style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon3 ?? <HeroiconsOutlineArrowDownOn style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon4 ?? <HeroiconsOutlineTrash style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsSolidCheckCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon2 ?? <HeroiconsSolidDocumentDuplicate style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon3 ?? <HeroiconsSolidPencil style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsOutlineCheckCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon2 ?? <HeroiconsSolidDocumentDuplicate style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon3 ?? <HeroiconsSolidPencil style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
            }}>
              <div style={{
                position: "absolute",
                left: 3,
                top: 3,
                width: 16,
                height: 16,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transform: "matrix(-1,0,0,1,16,0)",
                  transformOrigin: "0 0",
                  width: 16,
                  height: 16,
                  borderRadius: 2,
                  boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 11px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
            }}>
              <div style={{
                position: "absolute",
                left: 3,
                top: 3,
                width: 16,
                height: 16,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transform: "matrix(-1,0,0,1,16,0)",
                  transformOrigin: "0 0",
                  width: 16,
                  height: 16,
                  borderRadius: 2,
                  boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
                }} />
              </div>
              <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 22,
                  height: 22,
                }}>{props.icon1 ?? <CheckboxGroup property1={"checkbox-filled"} style={{ transform: "scale(1.100, 1.100)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(189,238,207)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 15,
            height: 15,
            flexShrink: 0,
          }}>{props.icon1 ?? <HeroiconsOutlineCheckCircle2 style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,140,52)",
          flexShrink: 0,
        }}>{props.text1 ?? "Opened"}</span>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(254,231,188)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(215,141,1)",
          flexShrink: 0,
        }}>{props.text1 ?? "Hard Hold"}</span>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(189,238,207)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,140,52)",
          flexShrink: 0,
        }}>{props.text1 ?? "Soft Hold"}</span>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 3,
        backgroundColor: "rgb(189,238,207)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,140,52)",
          flexShrink: 0,
        }}>{props.text1 ?? "Soft Hold"}</span>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(243,206,206)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(193,11,11)",
          flexShrink: 0,
        }}>{props.text1 ?? "Soft Hold"}</span>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 3,
        backgroundColor: "rgb(243,206,206)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(193,11,11)",
          flexShrink: 0,
        }}>{props.text1 ?? "Rejected"}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(222,227,231)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(85,95,109)",
          flexShrink: 0,
        }}>{props.text1 ?? "Soft Hold"}</span>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(204,209,253)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(13,53,194,0.79)",
          flexShrink: 0,
        }}>{props.text1 ?? "Soft Hold"}</span>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "11px 8px 10px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 39,
        backgroundColor: "rgb(237,182,182)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 15,
            height: 15,
            flexShrink: 0,
          }}>{props.icon1 ?? <HeroiconsOutlineXCircle style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(192,24,24)",
          flexShrink: 0,
        }}>{props.text1 ?? "Closed"}</span>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 98,
      height: 45,
      backgroundColor: "rgb(230,243,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -15,
        top: 0,
        width: 112,
        height: 45,
        backgroundColor: "rgb(230,243,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 8,
        top: 12,
        width: 82,
        height: 22,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsSolidCheckCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon2 ?? <HeroiconsSolidDocumentDuplicate style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon3 ?? <HeroiconsSolidPencil style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 98,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 38,
        top: 12,
        width: 52,
        height: 22,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsSolidCheckCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon2 ?? <HeroiconsSolidEllipsisVertical style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 12,
        width: 52,
        height: 22,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(255,255,255)",
                }}>{props.icon1 ?? <HeroiconsSolidCloudArrowUp style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  transform: "matrix(-1,0,0,1,19,3)",
                  transformOrigin: "0 0",
                  color: "rgb(0,0,0)",
                }}>{props.icon2 ?? <EntypoForward style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 98,
      height: 45,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 38,
        top: 12,
        width: 52,
        height: 22,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                }}>{props.icon1 ?? <HeroiconsSolidXCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            height: 22,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 22,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-1,0,0,1,22,0)",
                transformOrigin: "0 0",
                width: 22,
                height: 22,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0.500px rgb(158,168,179), 0 0 0 0.500px rgb(158,168,179)",
              }} />
              <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 16,
                  height: 16,
                  color: "rgb(15,23,42)",
                }}>{props.icon2 ?? <HeroiconsSolidEllipsisVertical style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=TITLE
    "property1=TITLE": __body0,
    // figma: Property 1=Variant18
    "property1=Variant18": __body0,
    // figma: Property 1=Variant10
    "property1=Variant10": __body1,
    // figma: Property 1=Input normal
    "property1=Input normal": __body2,
    // figma: Property 1=Variant21
    "property1=Variant21": __body2,
    // figma: Property 1=Variant16
    "property1=Variant16": __body3,
    // figma: Property 1=Checkbox
    "property1=Checkbox": __body4,
    // figma: Property 1=Inline edit
    "property1=Inline edit": __body5,
    // figma: Property 1=Inline disabled
    "property1=Inline disabled": __body6,
    // figma: Property 1=CHIP WITH INLINE EDIT
    "property1=CHIP WITH INLINE EDIT": __body7,
    // figma: Property 1=Input with Bg
    "property1=Input with Bg": __body8,
    // figma: Property 1=Variant5
    "property1=Variant5": __body9,
    // figma: Property 1=Chips with Bg
    "property1=Chips with Bg": __body10,
    // figma: Property 1=Variant12
    "property1=Variant12": __body10,
    // figma: Property 1=Chips normal
    "property1=Chips normal": __body11,
    // figma: Property 1=Variant20
    "property1=Variant20": __body12,
    // figma: Property 1=Variant22
    "property1=Variant22": __body13,
    // figma: Property 1=ICONS
    "property1=ICONS": __body14,
    // figma: Property 1=Variant38
    "property1=Variant38": __body15,
    // figma: Property 1=icons entry
    "property1=icons entry": __body16,
    // figma: Property 1=Variant37
    "property1=Variant37": __body17,
    // figma: Property 1=four icons
    "property1=four icons": __body18,
    // figma: Property 1=icons 2
    "property1=icons 2": __body19,
    // figma: Property 1=Variant34
    "property1=Variant34": __body20,
    // figma: Property 1=checkbox
    "property1=checkbox": __body21,
    // figma: Property 1=checbox tick
    "property1=checbox tick": __body22,
    // figma: Property 1=GREEN CHIP
    "property1=GREEN CHIP": __body23,
    // figma: Property 1=yellow
    "property1=yellow": __body24,
    // figma: Property 1=green
    "property1=green": __body25,
    // figma: Property 1=Variant31
    "property1=Variant31": __body26,
    // figma: Property 1=red
    "property1=red": __body27,
    // figma: Property 1=Variant32
    "property1=Variant32": __body28,
    // figma: Property 1=gray
    "property1=gray": __body29,
    // figma: Property 1=blue
    "property1=blue": __body30,
    // figma: Property 1=RED CHIP
    "property1=RED CHIP": __body31,
    // figma: Property 1=ICON 2 WITH BG
    "property1=ICON 2 WITH BG": __body32,
    // figma: Property 1=two icon with active
    "property1=two icon with active": __body33,
    // figma: Property 1=mail icons
    "property1=mail icons": __body34,
    // figma: Property 1=Icon two with inactive
    "property1=Icon two with inactive": __body35,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Table;
