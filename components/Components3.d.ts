// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface Components3Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "table-cell";
  property2?: "header" | "header2";
  /** Text content; defaults to "Expired Auth(s)". */
  text1?: string;
  /** Text content; defaults to "Number of Approved auth expired". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Components3: React.FC<Components3Props>;
export default Components3;
