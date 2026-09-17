// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface LayoutBlocksBaseProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "◇\nSwap". */
  text1?: string;
}
export declare const LayoutBlocksBase: React.FC<LayoutBlocksBaseProps>;
export default LayoutBlocksBase;
