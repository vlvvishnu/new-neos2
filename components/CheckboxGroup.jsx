import { Check } from './Check.jsx';
import { CheckboxEmpty } from './CheckboxEmpty.jsx';

// figma node: 49:5467 Checkbox group (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function CheckboxGroup(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "checkbox-empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "rgb(196,196,196)",
        }}>{props.icon1 ?? <CheckboxEmpty style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 3.333,
          top: 3.333,
          width: 13.333,
          height: 13.333,
        }}>{props.icon2 ?? <Check style={{ transform: "scale(0.556, 0.556)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(158,168,179)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2.5,
        top: 2.5,
        width: 15,
        height: 15,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Vector</div>
    </div>
  );
  const __impls = {
    // figma: Property 1=checkbox-filled
    "property1=checkbox-filled": __body0,
    // figma: Property 1=checkbox-empty
    "property1=checkbox-empty": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default CheckboxGroup;
