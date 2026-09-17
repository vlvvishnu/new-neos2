// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "table-cell";
  property2?: "header" | "header2";
  /** Text content; defaults to "Recert Status". */
  text1?: string;
  /** Text content; defaults to "Status of the current Episode". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Components: React.FC<ComponentsProps>;
export default Components;
