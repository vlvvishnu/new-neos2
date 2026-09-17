// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "lg" | "sm";
  icon?: boolean;
  sorter?: boolean;
  active?: boolean;
  filter?: boolean;
  active2?: boolean;
  search?: boolean;
  active3?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ComponentsTableCellHeader: React.FC<ComponentsTableCellHeaderProps>;
export default ComponentsTableCellHeader;
