// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellTextIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  /** Text content; defaults to "New York No. 1 Lake Park". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ComponentsTableCellTextIcon: React.FC<ComponentsTableCellTextIconProps>;
export default ComponentsTableCellTextIcon;
