// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface AuthHeaderFilterProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "auth req view" | "patient auth summary" | "transaction view" | "eligb req view" | "elig automation" | "variant6" | "variant7" | "variant8" | "variant9" | "variant10" | "variant11" | "variant12" | "variant13" | "elig rsummary view";
  /** Text content; defaults to "Authorization Center". */
  text1?: string;
  /** Text content; defaults to "Eligibility". */
  text2?: string;
  /** Text content; defaults to "Authorization". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AuthHeaderFilter: React.FC<AuthHeaderFilterProps>;
export default AuthHeaderFilter;
