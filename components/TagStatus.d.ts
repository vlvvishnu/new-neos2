// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TagStatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "success" | "error" | "warning" | "processing" | "waiting" | "stop";
  showIcon?: boolean;
  /** Text content; defaults to "success". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TagStatus: React.FC<TagStatusProps>;
export default TagStatus;
