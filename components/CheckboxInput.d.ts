// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface CheckboxInputProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  hovering?: boolean;
}
export declare const CheckboxInput: React.FC<CheckboxInputProps>;
export default CheckboxInput;
