// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellStatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "error" | "warning" | "disabled" | "success";
  size?: "lg" | "md" | "sm";
}
export declare const ComponentsTableCellStatus: React.FC<ComponentsTableCellStatusProps>;
export default ComponentsTableCellStatus;
