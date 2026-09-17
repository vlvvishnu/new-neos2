import { TagStatus } from './TagStatus.jsx';

// figma node: 12275:51344 Status-auth line item (13 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function StatusAuthLineItem(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "approved" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgb(252,255,249)",
        boxShadow: "inset 0 0 0 1px rgb(74,164,30)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 12,
            height: 12,
            color: "rgb(74,164,30)",
          }}>
            <path d={"M 8.504 3.87 L 7.876 3.87 C 7.74 3.87 7.61 3.936 7.529 4.048 L 5.424 6.968 L 4.47 5.645 C 4.39 5.534 4.262 5.467 4.124 5.467 L 3.495 5.467 C 3.408 5.467 3.358 5.566 3.408 5.637 L 5.077 7.951 C 5.117 8.006 5.169 8.051 5.229 8.082 C 5.289 8.113 5.356 8.129 5.423 8.129 C 5.491 8.129 5.558 8.113 5.618 8.082 C 5.678 8.051 5.73 8.006 5.77 7.951 L 8.59 4.04 C 8.642 3.969 8.591 3.87 8.504 3.87 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 6 0 C 2.687 0 0 2.687 0 6 C 0 9.313 2.687 12 6 12 C 9.313 12 12 9.313 12 6 C 12 2.687 9.313 0 6 0 Z M 6 10.982 C 3.249 10.982 1.018 8.751 1.018 6 C 1.018 3.249 3.249 1.018 6 1.018 C 8.751 1.018 10.982 3.249 10.982 6 C 10.982 8.751 8.751 10.982 6 10.982 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(74,164,30)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Approved</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgb(252,255,249)",
        boxShadow: "inset 0 0 0 1px rgb(74,164,30)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 8,
            height: 8,
            color: "rgb(74,164,30)",
          }}>
            <path d={"M 4 0 C 4.53 0 5.039 0.211 5.414 0.586 C 5.789 0.961 6 1.47 6 2 C 6 2.53 5.789 3.039 5.414 3.414 C 5.039 3.789 4.53 4 4 4 C 3.47 4 2.961 3.789 2.586 3.414 C 2.211 3.039 2 2.53 2 2 C 2 1.47 2.211 0.961 2.586 0.586 C 2.961 0.211 3.47 0 4 0 Z M 4 5 C 6.21 5 8 5.895 8 7 L 8 8 L 0 8 L 0 7 C 0 5.895 1.79 5 4 5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(74,164,30)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Approved</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgb(252,255,249)",
        boxShadow: "inset 0 0 0 1px var(--placeholder)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 12,
            height: 12,
            color: "rgb(74,164,30)",
          }}>
            <path d={"M 8.504 3.87 L 7.876 3.87 C 7.74 3.87 7.61 3.936 7.529 4.048 L 5.424 6.968 L 4.47 5.645 C 4.39 5.534 4.262 5.467 4.124 5.467 L 3.495 5.467 C 3.408 5.467 3.358 5.566 3.408 5.637 L 5.077 7.951 C 5.117 8.006 5.169 8.051 5.229 8.082 C 5.289 8.113 5.356 8.129 5.423 8.129 C 5.491 8.129 5.558 8.113 5.618 8.082 C 5.678 8.051 5.73 8.006 5.77 7.951 L 8.59 4.04 C 8.642 3.969 8.591 3.87 8.504 3.87 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 6 0 C 2.687 0 0 2.687 0 6 C 0 9.313 2.687 12 6 12 C 9.313 12 12 9.313 12 6 C 12 2.687 9.313 0 6 0 Z M 6 10.982 C 3.249 10.982 1.018 8.751 1.018 6 C 1.018 3.249 3.249 1.018 6 1.018 C 8.751 1.018 10.982 3.249 10.982 6 C 10.982 8.751 8.751 10.982 6 10.982 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(129,70,156)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Non-Req Auths </span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TagStatus
        style={{
          position: "relative",
          width: 134,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        text1={"Denied"}
        status={"error"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "var(--color-error-colorerrorbg)",
        boxShadow: "inset 0 0 0 1px var(--color-error-colorerrorborder)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 8,
            height: 8,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 4 0 C 4.53 0 5.039 0.211 5.414 0.586 C 5.789 0.961 6 1.47 6 2 C 6 2.53 5.789 3.039 5.414 3.414 C 5.039 3.789 4.53 4 4 4 C 3.47 4 2.961 3.789 2.586 3.414 C 2.211 3.039 2 2.53 2 2 C 2 1.47 2.211 0.961 2.586 0.586 C 2.961 0.211 3.47 0 4 0 Z M 4 5 C 6.21 5 8 5.895 8 7 L 8 8 L 0 8 L 0 7 C 0 5.895 1.79 5 4 5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-error-colorerrortext)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Denied</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(26,184,127,0.06)",
        boxShadow: "inset 0 0 0 1px rgb(28,177,124)",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10.501} height={10.501} viewBox="0 0 10.501 10.501" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.749,
            width: 10.501,
            height: 10.501,
            color: "rgb(28,177,124)",
          }}>
            <path d={"M 4.248 10.404 C 3.217 10.204 2.269 9.698 1.529 8.954 C 0.788 8.209 0.287 7.26 0.092 6.228 C -0.104 5.196 0.015 4.129 0.432 3.165 C 0.85 2.201 1.546 1.384 2.433 0.821 C 2.503 0.776 2.587 0.756 2.67 0.764 C 2.753 0.772 2.831 0.808 2.892 0.866 C 3.234 1.189 9.054 7.025 9.627 7.617 C 9.686 7.678 9.722 7.756 9.731 7.841 C 9.74 7.925 9.72 8.009 9.674 8.081 C 9.107 8.967 8.286 9.663 7.318 10.077 C 6.351 10.491 5.281 10.605 4.248 10.404 Z M 8.874 7.92 C 6.786 5.814 4.692 3.714 2.591 1.62 C 2.069 2.004 1.635 2.496 1.32 3.062 C 1.006 3.629 0.817 4.256 0.767 4.903 C 0.718 5.549 0.808 6.198 1.033 6.806 C 1.257 7.414 1.61 7.966 2.068 8.425 C 2.526 8.884 3.077 9.239 3.684 9.465 C 4.292 9.691 4.941 9.783 5.587 9.735 C 6.234 9.687 6.862 9.5 7.429 9.187 C 7.997 8.874 8.49 8.441 8.874 7.92 M 10.446 6.009 C 10.439 6.058 10.422 6.105 10.397 6.147 C 10.372 6.189 10.338 6.226 10.299 6.256 C 10.259 6.285 10.214 6.307 10.167 6.319 C 10.119 6.331 10.069 6.333 10.02 6.326 C 9.972 6.319 9.925 6.303 9.883 6.277 C 9.84 6.252 9.803 6.219 9.774 6.179 C 9.744 6.14 9.723 6.095 9.711 6.047 C 9.699 6 9.696 5.95 9.703 5.901 C 9.711 5.852 9.711 5.852 9.717 5.801 C 9.77 5.374 9.761 4.941 9.691 4.516 C 9.683 4.467 9.685 4.418 9.696 4.37 C 9.707 4.322 9.728 4.276 9.756 4.236 C 9.785 4.196 9.821 4.162 9.863 4.136 C 9.905 4.11 9.952 4.093 10 4.085 C 10.049 4.077 10.099 4.078 10.147 4.089 C 10.194 4.101 10.24 4.121 10.28 4.15 C 10.32 4.178 10.354 4.215 10.38 4.257 C 10.406 4.298 10.423 4.345 10.431 4.394 C 10.512 4.885 10.523 5.388 10.461 5.893 L 10.446 6.009 Z M 9.491 2.156 C 9.52 2.195 9.541 2.24 9.553 2.288 C 9.564 2.336 9.566 2.386 9.559 2.435 C 9.551 2.483 9.534 2.53 9.508 2.572 C 9.483 2.614 9.449 2.651 9.409 2.68 C 9.369 2.709 9.324 2.73 9.276 2.741 C 9.229 2.753 9.179 2.755 9.13 2.748 C 9.081 2.74 9.035 2.723 8.993 2.697 C 8.951 2.672 8.914 2.638 8.885 2.598 C 8.612 2.223 8.282 1.892 7.907 1.617 C 7.832 1.557 7.783 1.469 7.771 1.374 C 7.758 1.278 7.783 1.182 7.84 1.104 C 7.897 1.026 7.982 0.973 8.076 0.956 C 8.171 0.939 8.269 0.959 8.349 1.013 C 8.787 1.332 9.172 1.718 9.491 2.156 Z M 6.126 0.074 C 6.176 0.082 6.223 0.099 6.265 0.125 C 6.308 0.151 6.345 0.185 6.374 0.225 C 6.403 0.265 6.424 0.311 6.435 0.36 C 6.447 0.408 6.448 0.458 6.44 0.507 C 6.432 0.556 6.414 0.603 6.387 0.645 C 6.361 0.687 6.326 0.724 6.285 0.752 C 6.244 0.781 6.198 0.801 6.15 0.812 C 6.101 0.822 6.051 0.823 6.002 0.814 C 5.543 0.737 5.076 0.73 4.615 0.794 C 4.518 0.806 4.419 0.78 4.341 0.72 C 4.263 0.66 4.212 0.572 4.198 0.475 C 4.184 0.377 4.209 0.278 4.268 0.199 C 4.326 0.12 4.413 0.067 4.51 0.052 C 5.047 -0.024 5.592 -0.017 6.126 0.074 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 4.248 10.404 L 4.296 10.159 L 4.295 10.159 L 4.248 10.404 Z M 2.433 0.821 L 2.299 0.609 L 2.299 0.61 L 2.433 0.821 Z M 2.892 0.866 L 2.719 1.047 L 2.72 1.047 L 2.892 0.866 Z M 9.627 7.617 L 9.447 7.791 L 9.448 7.791 L 9.627 7.617 Z M 9.674 8.081 L 9.885 8.215 L 9.885 8.215 L 9.674 8.081 Z M 2.591 1.62 L 2.767 1.443 L 2.616 1.292 L 2.443 1.419 L 2.591 1.62 Z M 10.446 6.009 L 10.693 6.045 L 10.693 6.043 L 10.446 6.009 Z M 9.703 5.901 L 9.456 5.864 L 9.456 5.865 L 9.703 5.901 Z M 9.717 5.801 L 9.469 5.771 L 9.468 5.772 L 9.717 5.801 Z M 9.691 4.516 L 9.938 4.475 L 9.938 4.475 L 9.691 4.516 Z M 10.431 4.394 L 10.678 4.353 L 10.678 4.353 L 10.431 4.394 Z M 10.461 5.893 L 10.709 5.926 L 10.71 5.923 L 10.461 5.893 Z M 9.491 2.156 L 9.289 2.303 L 9.289 2.303 L 9.491 2.156 Z M 8.885 2.598 L 8.683 2.745 L 8.683 2.746 L 8.885 2.598 Z M 7.907 1.617 L 7.75 1.812 L 7.759 1.819 L 7.907 1.617 Z M 8.349 1.013 L 8.497 0.811 L 8.487 0.804 L 8.349 1.013 Z M 6.126 0.074 L 6.085 0.321 L 6.089 0.321 L 6.126 0.074 Z M 6.002 0.814 L 6.047 0.568 L 6.043 0.567 L 6.002 0.814 Z M 4.615 0.794 L 4.646 1.042 L 4.65 1.042 L 4.615 0.794 Z M 4.51 0.052 L 4.475 -0.196 L 4.471 -0.195 L 4.51 0.052 Z M 4.248 10.404 L 4.295 10.159 C 3.313 9.968 2.411 9.487 1.706 8.777 L 1.529 8.954 L 1.351 9.13 C 2.128 9.91 3.12 10.439 4.2 10.649 L 4.248 10.404 Z M 1.529 8.954 L 1.706 8.777 C 1 8.068 0.523 7.164 0.337 6.181 L 0.092 6.228 L -0.154 6.274 C 0.051 7.355 0.575 8.35 1.351 9.13 L 1.529 8.954 Z M 0.092 6.228 L 0.337 6.181 C 0.151 5.198 0.264 4.182 0.662 3.264 L 0.432 3.165 L 0.203 3.065 C -0.234 4.075 -0.359 5.193 -0.154 6.274 L 0.092 6.228 Z M 0.432 3.165 L 0.662 3.264 C 1.059 2.346 1.723 1.568 2.567 1.032 L 2.433 0.821 L 2.299 0.61 C 1.37 1.2 0.64 2.056 0.203 3.065 L 0.432 3.165 Z M 2.433 0.821 L 2.566 1.032 C 2.59 1.017 2.618 1.01 2.646 1.013 L 2.67 0.764 L 2.694 0.515 C 2.556 0.502 2.417 0.535 2.299 0.609 L 2.433 0.821 Z M 2.67 0.764 L 2.646 1.013 C 2.673 1.016 2.699 1.028 2.719 1.047 L 2.892 0.866 L 3.064 0.684 C 2.963 0.588 2.833 0.529 2.694 0.515 L 2.67 0.764 Z M 2.892 0.866 L 2.72 1.047 C 3.058 1.367 8.875 7.199 9.447 7.791 L 9.627 7.617 L 9.806 7.443 C 9.233 6.85 3.41 1.011 3.063 0.684 L 2.892 0.866 Z M 9.627 7.617 L 9.448 7.791 C 9.467 7.812 9.479 7.838 9.482 7.866 L 9.731 7.841 L 9.98 7.815 C 9.965 7.675 9.904 7.544 9.806 7.443 L 9.627 7.617 Z M 9.731 7.841 L 9.482 7.866 C 9.485 7.894 9.479 7.922 9.463 7.946 L 9.674 8.081 L 9.885 8.215 C 9.961 8.096 9.994 7.955 9.98 7.815 L 9.731 7.841 Z M 9.674 8.081 L 9.463 7.946 C 8.923 8.79 8.141 9.453 7.22 9.847 L 7.318 10.077 L 7.417 10.307 C 8.43 9.873 9.29 9.144 9.885 8.215 L 9.674 8.081 Z M 7.318 10.077 L 7.22 9.847 C 6.298 10.242 5.279 10.35 4.296 10.159 L 4.248 10.404 L 4.2 10.649 C 5.282 10.86 6.403 10.741 7.417 10.307 L 7.318 10.077 Z M 8.874 7.92 L 9.051 7.744 C 6.963 5.637 4.868 3.537 2.767 1.443 L 2.591 1.62 L 2.414 1.797 C 4.515 3.89 6.609 5.99 8.696 8.096 L 8.874 7.92 Z M 2.591 1.62 L 2.443 1.419 C 1.892 1.823 1.434 2.343 1.102 2.941 L 1.32 3.062 L 1.539 3.183 C 1.836 2.648 2.246 2.184 2.739 1.822 L 2.591 1.62 Z M 1.32 3.062 L 1.102 2.941 C 0.77 3.539 0.571 4.201 0.518 4.883 L 0.767 4.903 L 1.017 4.922 C 1.064 4.311 1.242 3.719 1.539 3.183 L 1.32 3.062 Z M 0.767 4.903 L 0.518 4.883 C 0.466 5.566 0.561 6.251 0.798 6.893 L 1.033 6.806 L 1.267 6.719 C 1.055 6.145 0.97 5.532 1.017 4.922 L 0.767 4.903 Z M 1.033 6.806 L 0.798 6.893 C 1.035 7.534 1.408 8.117 1.891 8.602 L 2.068 8.425 L 2.245 8.249 C 1.813 7.815 1.479 7.294 1.267 6.719 L 1.033 6.806 Z M 2.068 8.425 L 1.891 8.602 C 2.374 9.086 2.956 9.46 3.597 9.699 L 3.684 9.465 L 3.772 9.23 C 3.198 9.017 2.677 8.682 2.245 8.249 L 2.068 8.425 Z M 3.684 9.465 L 3.597 9.699 C 4.238 9.938 4.923 10.035 5.606 9.984 L 5.587 9.735 L 5.569 9.486 C 4.958 9.531 4.345 9.444 3.772 9.23 L 3.684 9.465 Z M 5.587 9.735 L 5.606 9.984 C 6.288 9.934 6.951 9.736 7.55 9.406 L 7.429 9.187 L 7.308 8.968 C 6.773 9.264 6.179 9.44 5.569 9.486 L 5.587 9.735 Z M 7.429 9.187 L 7.55 9.406 C 8.149 9.075 8.669 8.619 9.076 8.069 L 8.874 7.92 L 8.673 7.772 C 8.31 8.264 7.844 8.672 7.308 8.968 L 7.429 9.187 Z M 10.446 6.009 L 10.198 5.973 C 10.196 5.989 10.19 6.005 10.182 6.019 L 10.397 6.147 L 10.612 6.275 C 10.654 6.204 10.681 6.126 10.693 6.045 L 10.446 6.009 Z M 10.397 6.147 L 10.182 6.019 C 10.174 6.033 10.162 6.046 10.149 6.055 L 10.299 6.256 L 10.448 6.456 C 10.514 6.407 10.57 6.346 10.612 6.275 L 10.397 6.147 Z M 10.299 6.256 L 10.149 6.055 C 10.136 6.065 10.121 6.072 10.105 6.076 L 10.167 6.319 L 10.228 6.561 C 10.308 6.541 10.382 6.505 10.448 6.456 L 10.299 6.256 Z M 10.167 6.319 L 10.105 6.076 C 10.089 6.08 10.073 6.081 10.056 6.079 L 10.02 6.326 L 9.984 6.574 C 10.066 6.586 10.149 6.581 10.228 6.561 L 10.167 6.319 Z M 10.02 6.326 L 10.056 6.079 C 10.04 6.077 10.025 6.071 10.01 6.063 L 9.883 6.277 L 9.755 6.492 C 9.825 6.534 9.903 6.562 9.984 6.574 L 10.02 6.326 Z M 9.883 6.277 L 10.01 6.063 C 9.996 6.054 9.984 6.043 9.974 6.03 L 9.774 6.179 L 9.573 6.329 C 9.622 6.395 9.684 6.45 9.755 6.492 L 9.883 6.277 Z M 9.774 6.179 L 9.974 6.03 C 9.964 6.017 9.957 6.002 9.953 5.986 L 9.711 6.047 L 9.468 6.109 C 9.489 6.188 9.524 6.263 9.573 6.329 L 9.774 6.179 Z M 9.711 6.047 L 9.953 5.986 C 9.949 5.97 9.948 5.953 9.951 5.937 L 9.703 5.901 L 9.456 5.865 C 9.444 5.946 9.448 6.029 9.468 6.109 L 9.711 6.047 Z M 9.703 5.901 L 9.95 5.939 C 9.958 5.886 9.959 5.884 9.965 5.831 L 9.717 5.801 L 9.468 5.772 C 9.465 5.798 9.464 5.808 9.463 5.818 C 9.461 5.828 9.46 5.838 9.456 5.864 L 9.703 5.901 Z M 9.717 5.801 L 9.965 5.832 C 10.021 5.381 10.012 4.924 9.938 4.475 L 9.691 4.516 L 9.445 4.556 C 9.511 4.958 9.519 5.367 9.469 5.771 L 9.717 5.801 Z M 9.691 4.516 L 9.938 4.475 C 9.935 4.459 9.936 4.442 9.939 4.426 L 9.696 4.37 L 9.453 4.313 C 9.434 4.393 9.431 4.476 9.445 4.557 L 9.691 4.516 Z M 9.696 4.37 L 9.939 4.426 C 9.943 4.41 9.95 4.395 9.96 4.382 L 9.756 4.236 L 9.553 4.091 C 9.505 4.157 9.471 4.233 9.453 4.313 L 9.696 4.37 Z M 9.756 4.236 L 9.96 4.382 C 9.969 4.368 9.981 4.357 9.995 4.348 L 9.863 4.136 L 9.731 3.924 C 9.661 3.967 9.601 4.024 9.553 4.091 L 9.756 4.236 Z M 9.863 4.136 L 9.995 4.348 C 10.009 4.34 10.025 4.334 10.041 4.331 L 10 4.085 L 9.959 3.838 C 9.878 3.851 9.801 3.881 9.731 3.924 L 9.863 4.136 Z M 10 4.085 L 10.041 4.331 C 10.057 4.329 10.074 4.329 10.09 4.333 L 10.147 4.089 L 10.203 3.846 C 10.123 3.827 10.04 3.825 9.959 3.838 L 10 4.085 Z M 10.147 4.089 L 10.09 4.333 C 10.106 4.337 10.121 4.343 10.134 4.353 L 10.28 4.15 L 10.425 3.947 C 10.359 3.899 10.283 3.865 10.203 3.846 L 10.147 4.089 Z M 10.28 4.15 L 10.134 4.353 C 10.148 4.363 10.159 4.375 10.168 4.389 L 10.38 4.257 L 10.592 4.125 C 10.549 4.055 10.492 3.994 10.425 3.947 L 10.28 4.15 Z M 10.38 4.257 L 10.168 4.389 C 10.176 4.403 10.182 4.418 10.185 4.434 L 10.431 4.394 L 10.678 4.353 C 10.665 4.272 10.636 4.194 10.592 4.125 L 10.38 4.257 Z M 10.431 4.394 L 10.185 4.434 C 10.262 4.902 10.272 5.381 10.213 5.863 L 10.461 5.893 L 10.71 5.923 C 10.774 5.395 10.763 4.868 10.678 4.353 L 10.431 4.394 Z M 10.461 5.893 L 10.214 5.859 L 10.198 5.976 L 10.446 6.009 L 10.693 6.043 L 10.709 5.926 L 10.461 5.893 Z M 9.491 2.156 L 9.289 2.303 C 9.299 2.316 9.306 2.331 9.31 2.347 L 9.553 2.288 L 9.796 2.229 C 9.776 2.15 9.741 2.074 9.693 2.008 L 9.491 2.156 Z M 9.553 2.288 L 9.31 2.347 C 9.314 2.363 9.314 2.38 9.312 2.396 L 9.559 2.435 L 9.806 2.473 C 9.818 2.392 9.815 2.309 9.796 2.229 L 9.553 2.288 Z M 9.559 2.435 L 9.312 2.396 C 9.309 2.412 9.303 2.428 9.295 2.442 L 9.508 2.572 L 9.722 2.702 C 9.765 2.632 9.793 2.554 9.806 2.473 L 9.559 2.435 Z M 9.508 2.572 L 9.295 2.442 C 9.286 2.456 9.275 2.468 9.262 2.478 L 9.409 2.68 L 9.557 2.882 C 9.623 2.833 9.679 2.772 9.722 2.702 L 9.508 2.572 Z M 9.409 2.68 L 9.262 2.478 C 9.249 2.488 9.233 2.495 9.217 2.498 L 9.276 2.741 L 9.335 2.984 C 9.415 2.965 9.49 2.93 9.557 2.882 L 9.409 2.68 Z M 9.276 2.741 L 9.217 2.498 C 9.202 2.502 9.185 2.503 9.169 2.501 L 9.13 2.748 L 9.092 2.995 C 9.173 3.007 9.256 3.004 9.335 2.984 L 9.276 2.741 Z M 9.13 2.748 L 9.169 2.501 C 9.152 2.498 9.137 2.492 9.123 2.484 L 8.993 2.697 L 8.863 2.911 C 8.933 2.953 9.011 2.982 9.092 2.995 L 9.13 2.748 Z M 8.993 2.697 L 9.123 2.484 C 9.109 2.475 9.097 2.464 9.087 2.451 L 8.885 2.598 L 8.683 2.746 C 8.731 2.812 8.792 2.868 8.863 2.911 L 8.993 2.697 Z M 8.885 2.598 L 9.087 2.451 C 8.798 2.055 8.45 1.705 8.055 1.415 L 7.907 1.617 L 7.759 1.819 C 8.113 2.078 8.425 2.391 8.683 2.745 L 8.885 2.598 Z M 7.907 1.617 L 8.064 1.423 C 8.039 1.402 8.023 1.373 8.019 1.342 L 7.771 1.374 L 7.523 1.406 C 7.544 1.565 7.625 1.711 7.75 1.812 L 7.907 1.617 Z M 7.771 1.374 L 8.019 1.342 C 8.015 1.31 8.023 1.277 8.042 1.252 L 7.84 1.104 L 7.638 0.956 C 7.543 1.086 7.502 1.247 7.523 1.406 L 7.771 1.374 Z M 7.84 1.104 L 8.042 1.252 C 8.061 1.226 8.089 1.208 8.121 1.202 L 8.076 0.956 L 8.032 0.71 C 7.874 0.739 7.733 0.827 7.638 0.956 L 7.84 1.104 Z M 8.076 0.956 L 8.121 1.202 C 8.152 1.197 8.185 1.203 8.212 1.221 L 8.349 1.013 L 8.487 0.804 C 8.353 0.715 8.19 0.682 8.032 0.71 L 8.076 0.956 Z M 8.349 1.013 L 8.202 1.214 C 8.618 1.519 8.985 1.886 9.289 2.303 L 9.491 2.156 L 9.693 2.008 C 9.358 1.55 8.955 1.146 8.497 0.811 L 8.349 1.013 Z M 6.126 0.074 L 6.089 0.321 C 6.105 0.324 6.121 0.33 6.135 0.338 L 6.265 0.125 L 6.395 -0.089 C 6.325 -0.132 6.246 -0.16 6.164 -0.173 L 6.126 0.074 Z M 6.265 0.125 L 6.135 0.338 C 6.149 0.347 6.162 0.358 6.171 0.372 L 6.374 0.225 L 6.576 0.079 C 6.528 0.011 6.466 -0.045 6.395 -0.089 L 6.265 0.125 Z M 6.374 0.225 L 6.171 0.372 C 6.181 0.385 6.188 0.4 6.192 0.417 L 6.435 0.36 L 6.679 0.303 C 6.66 0.222 6.625 0.146 6.576 0.079 L 6.374 0.225 Z M 6.435 0.36 L 6.192 0.417 C 6.196 0.433 6.196 0.449 6.193 0.466 L 6.44 0.507 L 6.686 0.549 C 6.7 0.467 6.697 0.383 6.679 0.303 L 6.435 0.36 Z M 6.44 0.507 L 6.193 0.466 C 6.191 0.482 6.185 0.498 6.176 0.512 L 6.387 0.645 L 6.598 0.779 C 6.643 0.709 6.673 0.631 6.686 0.549 L 6.44 0.507 Z M 6.387 0.645 L 6.176 0.512 C 6.167 0.526 6.155 0.538 6.142 0.547 L 6.285 0.752 L 6.428 0.957 C 6.496 0.91 6.554 0.849 6.598 0.779 L 6.387 0.645 Z M 6.285 0.752 L 6.142 0.547 C 6.128 0.557 6.113 0.564 6.097 0.567 L 6.15 0.812 L 6.203 1.056 C 6.284 1.038 6.361 1.005 6.428 0.957 L 6.285 0.752 Z M 6.15 0.812 L 6.097 0.567 C 6.08 0.571 6.064 0.571 6.047 0.568 L 6.002 0.814 L 5.957 1.06 C 6.038 1.075 6.122 1.073 6.203 1.056 L 6.15 0.812 Z M 6.002 0.814 L 6.043 0.567 C 5.56 0.486 5.067 0.479 4.581 0.547 L 4.615 0.794 L 4.65 1.042 C 5.085 0.981 5.527 0.988 5.961 1.06 L 6.002 0.814 Z M 4.615 0.794 L 4.585 0.546 C 4.552 0.55 4.519 0.541 4.493 0.521 L 4.341 0.72 L 4.189 0.918 C 4.319 1.018 4.483 1.063 4.646 1.042 L 4.615 0.794 Z M 4.341 0.72 L 4.493 0.521 C 4.467 0.501 4.45 0.472 4.445 0.44 L 4.198 0.475 L 3.95 0.51 C 3.973 0.672 4.059 0.819 4.189 0.918 L 4.341 0.72 Z M 4.198 0.475 L 4.445 0.44 C 4.441 0.407 4.449 0.374 4.469 0.348 L 4.268 0.199 L 4.066 0.051 C 3.969 0.183 3.927 0.347 3.95 0.51 L 4.198 0.475 Z M 4.268 0.199 L 4.469 0.348 C 4.488 0.322 4.517 0.304 4.55 0.299 L 4.51 0.052 L 4.471 -0.195 C 4.309 -0.169 4.164 -0.081 4.066 0.051 L 4.268 0.199 Z M 4.51 0.052 L 4.545 0.299 C 5.056 0.227 5.576 0.234 6.085 0.321 L 6.126 0.074 L 6.168 -0.172 C 5.609 -0.267 5.037 -0.275 4.475 -0.196 L 4.51 0.052 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(28,177,124)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Partially Approved</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(26,184,127,0.06)",
        boxShadow: "inset 0 0 0 1px rgb(28,177,124)",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 8,
            height: 8,
            color: "rgb(28,177,124)",
          }}>
            <path d={"M 4 0 C 4.53 0 5.039 0.211 5.414 0.586 C 5.789 0.961 6 1.47 6 2 C 6 2.53 5.789 3.039 5.414 3.414 C 5.039 3.789 4.53 4 4 4 C 3.47 4 2.961 3.789 2.586 3.414 C 2.211 3.039 2 2.53 2 2 C 2 1.47 2.211 0.961 2.586 0.586 C 2.961 0.211 3.47 0 4 0 Z M 4 5 C 6.21 5 8 5.895 8 7 L 8 8 L 0 8 L 0 7 C 0 5.895 1.79 5 4 5 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 4 0 L 4 -0.25 L 4 0 Z M 6 2 L 6.25 2 L 6 2 Z M 4 4 L 4 4.25 L 4 4 Z M 2 2 L 1.75 2 L 2 2 Z M 8 8 L 8 8.25 L 8.25 8.25 L 8.25 8 L 8 8 Z M 0 8 L -0.25 8 L -0.25 8.25 L 0 8.25 L 0 8 Z M 4 0 L 4 0.25 C 4.464 0.25 4.909 0.434 5.237 0.763 L 5.414 0.586 L 5.591 0.409 C 5.169 -0.013 4.597 -0.25 4 -0.25 L 4 0 Z M 5.414 0.586 L 5.237 0.763 C 5.566 1.091 5.75 1.536 5.75 2 L 6 2 L 6.25 2 C 6.25 1.403 6.013 0.831 5.591 0.409 L 5.414 0.586 Z M 6 2 L 5.75 2 C 5.75 2.464 5.566 2.909 5.237 3.237 L 5.414 3.414 L 5.591 3.591 C 6.013 3.169 6.25 2.597 6.25 2 L 6 2 Z M 5.414 3.414 L 5.237 3.237 C 4.909 3.566 4.464 3.75 4 3.75 L 4 4 L 4 4.25 C 4.597 4.25 5.169 4.013 5.591 3.591 L 5.414 3.414 Z M 4 4 L 4 3.75 C 3.536 3.75 3.091 3.566 2.763 3.237 L 2.586 3.414 L 2.409 3.591 C 2.831 4.013 3.403 4.25 4 4.25 L 4 4 Z M 2.586 3.414 L 2.763 3.237 C 2.434 2.909 2.25 2.464 2.25 2 L 2 2 L 1.75 2 C 1.75 2.597 1.987 3.169 2.409 3.591 L 2.586 3.414 Z M 2 2 L 2.25 2 C 2.25 1.536 2.434 1.091 2.763 0.763 L 2.586 0.586 L 2.409 0.409 C 1.987 0.831 1.75 1.403 1.75 2 L 2 2 Z M 2.586 0.586 L 2.763 0.763 C 3.091 0.434 3.536 0.25 4 0.25 L 4 0 L 4 -0.25 C 3.403 -0.25 2.831 -0.013 2.409 0.409 L 2.586 0.586 Z M 4 5 L 4 5.25 C 5.075 5.25 6.035 5.468 6.717 5.809 C 7.414 6.158 7.75 6.593 7.75 7 L 8 7 L 8.25 7 C 8.25 6.302 7.691 5.737 6.941 5.362 C 6.175 4.979 5.135 4.75 4 4.75 L 4 5 Z M 8 7 L 7.75 7 L 7.75 8 L 8 8 L 8.25 8 L 8.25 7 L 8 7 Z M 8 8 L 8 7.75 L 0 7.75 L 0 8 L 0 8.25 L 8 8.25 L 8 8 Z M 0 8 L 0.25 8 L 0.25 7 L 0 7 L -0.25 7 L -0.25 8 L 0 8 Z M 0 7 L 0.25 7 C 0.25 6.593 0.586 6.158 1.283 5.809 C 1.965 5.468 2.925 5.25 4 5.25 L 4 5 L 4 4.75 C 2.865 4.75 1.825 4.979 1.059 5.362 C 0.309 5.737 -0.25 6.302 -0.25 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(28,177,124)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Partially Aprvd</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(63,126,161,0.05)",
        boxShadow: "inset 0 0 0 1px rgb(163,202,224)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.250} height={11.250} viewBox="0 0 11.250 11.250" fill="none" style={{
            position: "absolute",
            left: 0.375,
            top: 0.375,
            width: 11.25,
            height: 11.25,
            color: "rgb(63,126,161)",
          }}>
            <path d={"M 1.018 5.521 C 1.031 4.935 1.152 4.367 1.378 3.833 C 1.61 3.284 1.942 2.792 2.365 2.368 C 2.788 1.943 3.281 1.611 3.83 1.379 C 4.398 1.14 5.001 1.018 5.624 1.018 C 6.246 1.018 6.849 1.14 7.416 1.379 C 7.963 1.611 8.46 1.946 8.879 2.368 C 9.012 2.5 9.137 2.641 9.252 2.788 L 8.446 3.418 C 8.43 3.43 8.417 3.447 8.411 3.466 C 8.404 3.485 8.402 3.505 8.406 3.525 C 8.411 3.545 8.42 3.563 8.434 3.577 C 8.448 3.592 8.466 3.602 8.486 3.607 L 10.839 4.183 C 10.906 4.199 10.971 4.148 10.971 4.079 L 10.982 1.657 C 10.982 1.567 10.879 1.516 10.809 1.572 L 10.054 2.163 C 9.024 0.845 7.422 0 5.622 0 C 2.554 0 0.058 2.459 0 5.515 C 0 5.529 0.002 5.544 0.007 5.557 C 0.013 5.57 0.02 5.582 0.03 5.593 C 0.04 5.603 0.052 5.611 0.066 5.617 C 0.079 5.622 0.093 5.625 0.107 5.625 L 0.911 5.625 C 0.97 5.625 1.017 5.578 1.018 5.521 Z M 11.143 5.625 L 10.339 5.625 C 10.28 5.625 10.234 5.672 10.232 5.729 C 10.219 6.315 10.098 6.883 9.872 7.417 C 9.64 7.966 9.308 8.459 8.885 8.882 C 8.458 9.311 7.95 9.651 7.391 9.883 C 6.831 10.115 6.232 10.233 5.626 10.232 C 5.021 10.233 4.422 10.115 3.863 9.883 C 3.304 9.651 2.796 9.311 2.369 8.882 C 2.237 8.75 2.112 8.609 1.997 8.462 L 2.803 7.832 C 2.819 7.82 2.831 7.803 2.838 7.784 C 2.845 7.765 2.847 7.745 2.842 7.725 C 2.838 7.705 2.829 7.687 2.814 7.673 C 2.8 7.658 2.783 7.648 2.763 7.643 L 0.41 7.067 C 0.343 7.051 0.277 7.102 0.277 7.171 L 0.268 9.595 C 0.268 9.684 0.371 9.735 0.441 9.679 L 1.196 9.088 C 2.226 10.405 3.828 11.25 5.628 11.25 C 8.697 11.25 11.192 8.79 11.25 5.735 C 11.25 5.721 11.248 5.706 11.243 5.693 C 11.237 5.68 11.23 5.668 11.22 5.657 C 11.21 5.647 11.198 5.639 11.185 5.633 C 11.171 5.628 11.157 5.625 11.143 5.625 L 11.143 5.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(63,126,161)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Pending</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(63,126,161,0.05)",
        boxShadow: "inset 0 0 0 1px rgb(163,202,224)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 8,
            height: 8,
            color: "rgb(63,126,161)",
          }}>
            <path d={"M 4 0 C 4.53 0 5.039 0.211 5.414 0.586 C 5.789 0.961 6 1.47 6 2 C 6 2.53 5.789 3.039 5.414 3.414 C 5.039 3.789 4.53 4 4 4 C 3.47 4 2.961 3.789 2.586 3.414 C 2.211 3.039 2 2.53 2 2 C 2 1.47 2.211 0.961 2.586 0.586 C 2.961 0.211 3.47 0 4 0 Z M 4 5 C 6.21 5 8 5.895 8 7 L 8 8 L 0 8 L 0 7 C 0 5.895 1.79 5 4 5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(63,126,161)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Pending Submission</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(255,251,230,0.65)",
        boxShadow: "inset 0 0 0 1px rgb(223,156,23)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 12,
            height: 12,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 6 0 C 2.687 0 0 2.687 0 6 C 0 9.313 2.687 12 6 12 C 9.313 12 12 9.313 12 6 C 12 2.687 9.313 0 6 0 Z M 6 10.982 C 3.249 10.982 1.018 8.751 1.018 6 C 1.018 3.249 3.249 1.018 6 1.018 C 8.751 1.018 10.982 3.249 10.982 6 C 10.982 8.751 8.751 10.982 6 10.982 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 5.357 8.357 C 5.357 8.528 5.425 8.691 5.545 8.812 C 5.666 8.932 5.829 9 6 9 C 6.17 9 6.334 8.932 6.454 8.812 C 6.575 8.691 6.643 8.528 6.643 8.357 C 6.643 8.187 6.575 8.023 6.454 7.903 C 6.334 7.782 6.17 7.714 6 7.714 C 5.829 7.714 5.666 7.782 5.545 7.903 C 5.425 8.023 5.357 8.187 5.357 8.357 Z M 5.678 6.857 L 6.321 6.857 C 6.38 6.857 6.428 6.809 6.428 6.75 L 6.428 3.107 C 6.428 3.048 6.38 3 6.321 3 L 5.678 3 C 5.619 3 5.571 3.048 5.571 3.107 L 5.571 6.75 C 5.571 6.809 5.619 6.857 5.678 6.857 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(223,156,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Exception</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 134,
        borderRadius: 4,
        backgroundColor: "rgba(255,251,230,0.65)",
        boxShadow: "inset 0 0 0 1px rgb(223,156,23)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--size-padding-paddingxs) * 1px)",
        paddingRight: "calc(var(--size-padding-paddingxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 12,
            height: 12,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 6 0 C 2.687 0 0 2.687 0 6 C 0 9.313 2.687 12 6 12 C 9.313 12 12 9.313 12 6 C 12 2.687 9.313 0 6 0 Z M 6 10.982 C 3.249 10.982 1.018 8.751 1.018 6 C 1.018 3.249 3.249 1.018 6 1.018 C 8.751 1.018 10.982 3.249 10.982 6 C 10.982 8.751 8.751 10.982 6 10.982 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 5.357 8.357 C 5.357 8.528 5.425 8.691 5.545 8.812 C 5.666 8.932 5.829 9 6 9 C 6.17 9 6.334 8.932 6.454 8.812 C 6.575 8.691 6.643 8.528 6.643 8.357 C 6.643 8.187 6.575 8.023 6.454 7.903 C 6.334 7.782 6.17 7.714 6 7.714 C 5.829 7.714 5.666 7.782 5.545 7.903 C 5.425 8.023 5.357 8.187 5.357 8.357 Z M 5.678 6.857 L 6.321 6.857 C 6.38 6.857 6.428 6.809 6.428 6.75 L 6.428 3.107 C 6.428 3.048 6.38 3 6.321 3 L 5.678 3 C 5.619 3 5.571 3.048 5.571 3.107 L 5.571 6.75 C 5.571 6.809 5.619 6.857 5.678 6.857 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(223,156,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Exception</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Approved
    "property1=approved": __body0,
    // figma: Property 1=manual approved
    "property1=manual approved": __body1,
    // figma: Property 1=non auth placeholder
    "property1=non auth placeholder": __body2,
    // figma: Property 1=non auth subm
    "property1=non auth subm": __body2,
    // figma: Property 1=Denied
    "property1=denied": __body3,
    // figma: Property 1=manual denied
    "property1=manual denied": __body4,
    // figma: Property 1=Partial aprvd
    "property1=partial aprvd": __body5,
    // figma: Property 1=manual aprtial
    "property1=manual aprtial": __body6,
    // figma: Property 1=Pending
    "property1=pending": __body7,
    // figma: Property 1=manual pending
    "property1=manual pending": __body8,
    // figma: Property 1=Auth Not Req
    "property1=auth not req": __body9,
    // figma: Property 1=submission exception
    "property1=submission exception": __body10,
    // figma: Property 1=auth already submitted
    "property1=auth already submitted": __body10,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StatusAuthLineItem;
