// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TabsHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  items?: "6" | "5" | "4" | "3" | "2";
  position?: "bottom" | "left" | "right" | "top";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TabsHeader: React.FC<TabsHeaderProps>;
export default TabsHeader;
