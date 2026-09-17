// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface IconWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "10px" | "12px" | "14px" | "16px" | "18px" | "20px" | "22px" | "24px" | "32px" | "48px" | "64px" | "104px" | "128px";
  union?: boolean;
  icon?: React.ReactNode;
}
export declare const IconWrapper: React.FC<IconWrapperProps>;
export default IconWrapper;
