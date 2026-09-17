// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "pressed" | "loading" | "disabled";
  active?: boolean;
  size?: "default" | "sm";
  content?: "icon" | "none" | "text";
  title?: string;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
