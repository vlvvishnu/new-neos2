// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface StatusAuthLineItemProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "approved" | "auth not req" | "denied" | "partial aprvd" | "pending" | "auth already submitted" | "submission exception" | "non auth placeholder" | "non auth subm" | "manual pending" | "manual aprtial" | "manual denied" | "manual approved";
}
export declare const StatusAuthLineItem: React.FC<StatusAuthLineItemProps>;
export default StatusAuthLineItem;
