// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "approved" | "pending" | "denied" | "none" | "variant6" | "variant7" | "variant10" | "variant11" | "variant8" | "variant9";
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
