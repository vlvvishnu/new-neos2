// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface FinalSummaryRowProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "auth req view" | "auth req view + header" | "auth req view with header and combined card" | "transaction with header" | "transaction answer" | "run id header" | "run id" | "variant8" | "variant9" | "variant10" | "variant11" | "variant12" | "variant13" | "variant14" | "variant15" | "variant16" | "variant17" | "variant18" | "variant19" | "variant20" | "variant21";
  /** Text content; defaults to "Reason For Denial : Order/485 not Attached , Clinical Note is Required". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const FinalSummaryRow: React.FC<FinalSummaryRowProps>;
export default FinalSummaryRow;
