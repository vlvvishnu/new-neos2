import * as React from 'react';
export interface FieldProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "normal" | "filled" | "error" | "disable" | "lengthy" | "calendar" | "calendar-filled" | "time filled" | "big text box" | "big text box filled" | "time" | "focused" | "password" | "eye" | "variant15" | "big textbox lengthy" | "big text diabled" | "small" | "lengthy table with chip" | "lengthy disabled" | "hide and show" | "variant22" | "variant23" | "variant24" | "count range" | "variant26" | "variant27";
  /** Text content; defaults to "Enter Contact". */
  text1?: string;
  /** Text content; defaults to "Name". */
  text2?: string;
  /** Text content; defaults to "Name". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Field: React.FC<FieldProps>;
export default Field;
