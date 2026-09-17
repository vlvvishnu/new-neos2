// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TableProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "Input normal" | "Input with Bg" | "Inline edit" | "Variant5" | "Chips with Bg" | "Chips normal" | "CHIP WITH INLINE EDIT" | "ICONS" | "Variant10" | "TITLE" | "Checkbox" | "Variant12" | "GREEN CHIP" | "RED CHIP" | "icons 2" | "Variant16" | "ICON 2 WITH BG" | "Variant18" | "four icons" | "Variant20" | "Variant21" | "Variant22" | "icons entry" | "yellow" | "green" | "red" | "gray" | "blue" | "Inline disabled" | "checkbox" | "Variant31" | "Variant32" | "checbox tick" | "Variant34" | "two icon with active" | "Icon two with inactive" | "Variant37" | "Variant38" | "mail icons";
  iconFront?: boolean;
  iconBehind?: boolean;
  iCON?: boolean;
  /** Text content; defaults to "Column Label". */
  text1?: string;
  /** Text content; defaults to "Column Input". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
export default Table;
