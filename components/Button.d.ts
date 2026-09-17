// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "default" | "lg" | "sm";
  state?: "default" | "disabled" | "focus" | "hover" | "pressed";
  content?: "default" | "icon";
  danger?: boolean;
  ghost?: boolean;
  iconLeft?: React.ReactNode;
  showIconLeft?: boolean;
  icon?: React.ReactNode;
  title?: string;
  showIcon?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
