// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface BadgeStatusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "success" | "error" | "default" | "warning" | "processing";
  /** Text content; defaults to "Success". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BadgeStatus: React.FC<BadgeStatusProps>;
export default BadgeStatus;
