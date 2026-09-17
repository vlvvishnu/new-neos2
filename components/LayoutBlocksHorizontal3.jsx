import { LayoutBlocksBase } from './LayoutBlocksBase.jsx';

// figma node: 44:5321 LayoutBlocks/horizontal×3
// @dsKitComponent — confirmed WellSky Eligibility & Auth kit component
export function LayoutBlocksHorizontal3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.stBlock1 ?? <LayoutBlocksBase />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.ndBlock2 ?? <LayoutBlocksBase />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.rdBlock3 ?? <LayoutBlocksBase />}</div>
    </div>
  );
}
export default LayoutBlocksHorizontal3;
