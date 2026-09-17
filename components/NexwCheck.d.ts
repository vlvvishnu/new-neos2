// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface NexwCheckProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NexwCheck: React.FC<NexwCheckProps>;
export default NexwCheck;
