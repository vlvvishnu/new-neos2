// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface ComponentsTableCellSerialProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const ComponentsTableCellSerial: React.FC<ComponentsTableCellSerialProps>;
export default ComponentsTableCellSerial;
