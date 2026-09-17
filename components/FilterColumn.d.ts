// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface FilterColumnProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search Patient Records". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const FilterColumn: React.FC<FilterColumnProps>;
export default FilterColumn;
