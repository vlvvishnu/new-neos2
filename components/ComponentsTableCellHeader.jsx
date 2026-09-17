import { Filter } from './Filter.jsx';
import { Sorter } from './Sorter.jsx';

// figma node: 44:5616 Components/Table-Cell/Header (90 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "icon=" + __venc(p.icon) + '|' + "sorter=" + __venc(p.sorter) + '|' + "active=" + __venc(p.active) + '|' + "filter=" + __venc(p.filter) + '|' + "active2=" + __venc(p.active2) + '|' + "search=" + __venc(p.search) + '|' + "active3=" + __venc(p.active3);

export function ComponentsTableCellHeader(_p = {}) {
  const props = { ..._p, size: _p.size ?? "md", icon: _p.icon ?? false, sorter: _p.sorter ?? true, active: _p.active ?? true, filter: _p.filter ?? true, active2: _p.active2 ?? true, search: _p.search ?? true, active3: _p.active3 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 900,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 900,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
        position: "relative",
        width: 200,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 176,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Title"}</span>
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
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Filter active={false} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 185,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 900,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
        position: "relative",
        width: 185,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
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
          width: 11,
          transform: "matrix(1,0,0,-1,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Sorter sortOrder={"inactive"} />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 900,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            transform: "matrix(1,0,0,-1,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 39,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
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
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 8px 8px 8px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
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
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          transform: "matrix(1,0,0,-1,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 47,
        width: 232,
        height: 900,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          transform: "matrix(1,0,0,-1,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 12px 12px 12px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
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
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Filter active={false} hover={false} />}</div>
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
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={true} hover={false} />}</div>
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
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "relative",
            width: 11,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Filter active={false} hover={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
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
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 232,
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"↓ descending"} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 232,
        height: 934,
        mixBlendMode: "multiply",
        backgroundColor: "rgb(250,250,250)",
      }} />
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 232,
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
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
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
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Title"}</span>
      <div style={{
          position: "relative",
          width: 11,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Sorter sortOrder={"inactive"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body0,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body0,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body1,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=true|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body2,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=true|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body3,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body4,
    // figma: Size=small, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=true|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body5,
    // figma: Size=small, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=true|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body6,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body7,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body8,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body9,
    // figma: Size=small, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body5,
    // figma: Size=small, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body6,
    // figma: Size=small, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body10,
    // figma: Size=small, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=true|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body11,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=true|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body12,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=true|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body13,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=true|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body14,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=true|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body15,
    // figma: Size=medium, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=true|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body16,
    // figma: Size=medium, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=true|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body17,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body18,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body19,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body20,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body15,
    // figma: Size=medium, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body16,
    // figma: Size=medium, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body17,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body21,
    // figma: Size=medium, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body22,
    // figma: Size=medium, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=true|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body23,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=true|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body24,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=true|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body25,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body26,
    // figma: Size=large, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=true|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body27,
    // figma: Size=large, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=true|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body28,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body29,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body30,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body26,
    // figma: Size=large, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body27,
    // figma: Size=large, Icon=true, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body28,
    // figma: Size=large, Icon=true, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body31,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body32,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body33,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body34,
    // figma: Size=large, Icon=true, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=true|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body35,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body36,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=false|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body37,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=false|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body38,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body39,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body40,
    // figma: Size=small, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=sm|icon=false|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body41,
    // figma: Size=small, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=sm|icon=false|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body42,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body43,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body44,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body45,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body40,
    // figma: Size=small, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body41,
    // figma: Size=small, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body42,
    // figma: Size=small, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body46,
    // figma: Size=small, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=sm|icon=false|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body47,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=false|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body48,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=false|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body49,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=false|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body50,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=false|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body51,
    // figma: Size=medium, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=md|icon=false|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body52,
    // figma: Size=medium, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=md|icon=false|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body53,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body54,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body55,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body56,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body51,
    // figma: Size=medium, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body52,
    // figma: Size=medium, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body53,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body57,
    // figma: Size=medium, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body58,
    // figma: Size=medium, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=md|icon=false|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body59,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=false|sorter=true|active=true|filter=false|active2=true|search=true|active3=true": __body60,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=false|sorter=true|active=false|filter=false|active2=true|search=true|active3=true": __body61,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=true|filter=false|active2=false|search=true|active3=false": __body62,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=false|filter=false|active2=false|search=true|active3=false": __body63,
    // figma: Size=large, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=true, Search=true, ↳ Active=true
    "size=lg|icon=false|sorter=false|active=false|filter=false|active2=true|search=true|active3=true": __body64,
    // figma: Size=large, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=true, ↳ Active=false
    "size=lg|icon=false|sorter=false|active=false|filter=false|active2=false|search=true|active3=false": __body65,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=true|filter=true|active2=true|search=false|active3=false": __body66,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=false|filter=true|active2=true|search=false|active3=false": __body67,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=true, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=true|filter=true|active2=false|search=false|active3=false": __body68,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=false|filter=true|active2=false|search=false|active3=false": __body63,
    // figma: Size=large, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=true, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=false|active=false|filter=true|active2=true|search=false|active3=false": __body64,
    // figma: Size=large, Icon=false, Sorter=false, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=false|active=false|filter=false|active2=false|search=false|active3=false": __body69,
    // figma: Size=large, Icon=false, Sorter=false, ↳Active=false, Filter=true, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=false|active=false|filter=true|active2=false|search=false|active3=false": __body65,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=true, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=true|filter=false|active2=false|search=false|active3=false": __body70,
    // figma: Size=large, Icon=false, Sorter=true, ↳Active=false, Filter=false, ↳Active=false, Search=false, ↳ Active=false
    "size=lg|icon=false|sorter=true|active=false|filter=false|active2=false|search=false|active3=false": __body71,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellHeader;
