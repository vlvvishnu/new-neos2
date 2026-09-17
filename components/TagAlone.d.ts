// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TagAloneProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "approved" | "up for recer" | "pending" | "denied" | "needs attention" | "outline - approved" | "outline - needs attention" | "outline - up for recdert" | "outline - pending" | "outline - denied" | "outline - alerts" | "outline - partial approva;";
  /** Text content; defaults to "Approved". */
  text1?: string;
}
export declare const TagAlone: React.FC<TagAloneProps>;
export default TagAlone;
