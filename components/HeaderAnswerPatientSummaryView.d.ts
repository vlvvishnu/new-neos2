// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface HeaderAnswerPatientSummaryViewProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6" | "variant7" | "variant8";
  /** Text content; defaults to "Reqstd". */
  text1?: string;
  /** Text content; defaults to "Apprd". */
  text2?: string;
  /** Text content; defaults to "Denied". */
  text3?: string;
  /** Text content; defaults to "Pending". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const HeaderAnswerPatientSummaryView: React.FC<HeaderAnswerPatientSummaryViewProps>;
export default HeaderAnswerPatientSummaryView;
