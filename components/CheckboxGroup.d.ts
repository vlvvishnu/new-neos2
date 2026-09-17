// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface CheckboxGroupProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "checkbox-empty" | "checkbox-filled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
