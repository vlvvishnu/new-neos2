import { CheckboxInput } from './CheckboxInput.jsx';

// figma node: 2371:193888 nexw check (3 variants)
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function NexwCheck(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: 22,
        }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} disabled={false} hovering={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 22,
        }}>{props.icon1 ?? <CheckboxInput checked={true} indeterminate={false} disabled={false} hovering={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body0,
    // figma: Property 1=Variant3
    "property1=variant3": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NexwCheck;
