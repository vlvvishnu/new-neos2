import { Button } from './Button.jsx';

// figma node: 455:84444 table-cell/Action-button1 (13 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "solid=" + __venc(p.solid) + '|' + "outline=" + __venc(p.outline);

export function TableCellActionButton1(_p = {}) {
  const props = { ..._p, solid: _p.solid ?? "approved", outline: _p.outline ?? "no" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(210,209,221)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(94,131,150)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>View Details</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(22,119,255)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(22,119,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>View Details</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <Button
        style={{
          position: "absolute",
          left: 12,
          top: 9,
          height: 24,
          width: 106,
        }}
        title={"View Details"}
        type={"default"}
        size={"sm"}
        state={"default"}
        content={"default"}
        danger={false}
        ghost={false}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        backgroundColor: "var(--color-neutral-background-colorbgcontainer)",
        boxShadow: "inset 0 0 0 1px rgba(22,119,255,0.5)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(22,119,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>View Details</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(210,209,221)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(140,117,74)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Needs Attn.</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgba(196,131,33,0.5)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(196,131,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Needs Attn.</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(210,209,221)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(140,61,127)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Due for Recert</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 11.5,
        top: 9,
        width: 106,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgb(112,48,160)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 15px 4px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Due for Recert</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgba(55,120,166,0.5)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(55,120,166)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Due for Recert</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(210,209,221)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(164,84,84)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Expiring Auths</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 11.5,
        top: 9,
        width: 106,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgb(192,79,21)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 15px 4px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Expiring Auths</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 130,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 9,
        width: 106,
        height: "calc(var(--size-height-controlheightsm) * 1px)",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgba(196,33,46,0.5)",
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
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(196,33,46)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Expiring Auths</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Solid=Approved, Outline=no
    "solid=approved|outline=no": __body0,
    // figma: Solid=view detailsss, Outline=no
    "solid=view detailsss|outline=no": __body0,
    // figma: Solid=no, Outline=View details
    "solid=no|outline=view details": __body1,
    // figma: Solid=no, Outline=View details2
    "solid=no|outline=view details2": __body2,
    // figma: Solid=no, Outline=View details3
    "solid=no|outline=view details3": __body3,
    // figma: Solid=needs attention, Outline=no
    "solid=needs attention|outline=no": __body4,
    // figma: Solid=no, Outline=needs attention
    "solid=no|outline=needs attention": __body5,
    // figma: Solid=Due for Recert, Outline=no
    "solid=due for recert|outline=no": __body6,
    // figma: Solid=Due for Recert, Outline=colour
    "solid=due for recert|outline=colour": __body7,
    // figma: Solid=n, Outline=Due for Recert
    "solid=n|outline=due for recert": __body8,
    // figma: Solid=Expiring auths, Outline=no
    "solid=expiring auths|outline=no": __body9,
    // figma: Solid=Expiring auths, Outline=color
    "solid=expiring auths|outline=color": __body10,
    // figma: Solid=no, Outline=Expiring auths
    "solid=no|outline=expiring auths": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TableCellActionButton1;
