// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "neos default" | "wellsky updated";
  /** Text content; defaults to "Powered by". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
