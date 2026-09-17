// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellTagsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  count?: React.ReactNode;
}
export declare const ComponentsTableCellTags: React.FC<ComponentsTableCellTagsProps>;
export default ComponentsTableCellTags;
