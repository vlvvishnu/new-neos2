// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface TableCellActionButton1Props {
  className?: string;
  style?: React.CSSProperties;
  solid?: "approved" | "needs attention" | "due for recert" | "expiring auths" | "no" | "n" | "view detailsss";
  outline?: "no" | "view details" | "needs attention" | "expiring auths" | "due for recert" | "view details2" | "view details3" | "colour" | "color";
}
export declare const TableCellActionButton1: React.FC<TableCellActionButton1Props>;
export default TableCellActionButton1;
