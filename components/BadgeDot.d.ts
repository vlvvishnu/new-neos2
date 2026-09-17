// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface BadgeDotProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "pink" | "red" | "yellow" | "orange" | "cyan" | "green" | "blue" | "purple" | "geek blue" | "magenta" | "volcano" | "gold" | "lime" | "gray" | "processing" | "processing-animating";
}
export declare const BadgeDot: React.FC<BadgeDotProps>;
export default BadgeDot;
