import { CheckboxInput } from './CheckboxInput.jsx';

// figma node: 44:6443 Components/Table-Cell/Checkbox (3 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "checked=" + __venc(p.checked) + '|' + "fixed=" + __venc(p.fixed);

export function ComponentsTableCellCheckbox(_p = {}) {
  const props = { ..._p, size: _p.size ?? "md", checked: _p.checked ?? true, fixed: _p.fixed ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 8px 16px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} disabled={false} hovering={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 8px 12px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} disabled={false} hovering={false} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderRight: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} disabled={false} hovering={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=large, Checked=false, Fixed=false
    "size=lg|checked=false|fixed=false": __body0,
    // figma: Size=medium, Checked=false, Fixed=false
    "size=md|checked=false|fixed=false": __body1,
    // figma: Size=small, Checked=false, Fixed=false
    "size=sm|checked=false|fixed=false": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsTableCellCheckbox;
