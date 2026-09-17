import * as React from 'react';
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  showTitle?: boolean;
  status?: "active" | "inactive" | "indeterminate";
  state?: "default" | "hover" | "focus" | "disabled";
  title?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
