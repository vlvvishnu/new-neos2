// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface WellSkyLogosProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "color" | "white";
  orientation?: "horizontal" | "vertical";
  solution?: "basic" | "biotherapies clinic" | "caretend" | "community services" | "hhh" | "homehealth" | "hospice" | "transfusion" | "transfusion analytics" | "dls" | "basic small";
}
export declare const WellSkyLogos: React.FC<WellSkyLogosProps>;
export default WellSkyLogos;
