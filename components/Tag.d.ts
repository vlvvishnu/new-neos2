// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "closable" | "new";
  border?: boolean;
  title?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
