// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellTextProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  /** Text content; defaults to "text". */
  text1?: string;
}
export declare const ComponentsTableCellText: React.FC<ComponentsTableCellTextProps>;
export default ComponentsTableCellText;
