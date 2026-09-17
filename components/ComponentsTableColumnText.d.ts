// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableColumnTextProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  align?: "left" | "center" | "right";
  fixed?: boolean;
}
export declare const ComponentsTableColumnText: React.FC<ComponentsTableColumnTextProps>;
export default ComponentsTableColumnText;
