// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface SorterProps {
  className?: string;
  style?: React.CSSProperties;
  sortOrder?: "inactive" | "↓ descending" | "↑ ascending";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Sorter: React.FC<SorterProps>;
export default Sorter;
