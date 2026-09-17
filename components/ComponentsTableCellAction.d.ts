// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellActionProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  separator?: boolean;
  items?: "1" | "2" | "3" | "3+";
  /** Text content; defaults to "Invite". */
  text1?: string;
}
export declare const ComponentsTableCellAction: React.FC<ComponentsTableCellActionProps>;
export default ComponentsTableCellAction;
