import { CaretDown2 } from './CaretDown2.jsx';
import { CaretUp } from './CaretUp.jsx';

// figma node: 44:5587 _sorter (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "sortOrder=" + __venc(p.sortOrder);

export function Sorter(_p = {}) {
  const props = { ..._p, sortOrder: _p.sortOrder ?? "inactive" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 11,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 10,
          width: 11,
          height: 11,
          color: "rgb(24,144,255)",
        }}>{props.icon1 ?? <CaretDown2 style={{ transform: "scale(0.344, 0.344)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 11,
          height: 11,
          color: "rgb(191,191,191)",
        }}>{props.icon2 ?? <CaretUp style={{ transform: "scale(0.344, 0.344)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Sort order=inactive
    "sortOrder=inactive": __body0,
    // figma: Sort order=↓ descending
    "sortOrder=↓ descending": __body0,
    // figma: Sort order=↑ ascending
    "sortOrder=↑ ascending": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Sorter;
