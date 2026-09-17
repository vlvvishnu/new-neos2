// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm" | "lg";
  checked?: boolean;
  fixed?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ComponentsTableCellCheckbox: React.FC<ComponentsTableCellCheckboxProps>;
export default ComponentsTableCellCheckbox;
