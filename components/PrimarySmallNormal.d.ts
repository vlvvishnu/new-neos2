// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface PrimarySmallNormalProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "disable" | "hover" | "normal";
  icon?: boolean;
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PrimarySmallNormal: React.FC<PrimarySmallNormalProps>;
export default PrimarySmallNormal;
