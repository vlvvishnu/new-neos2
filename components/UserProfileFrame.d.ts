// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface UserProfileFrameProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default";
  /** Text content; defaults to "Review Mode". */
  text1?: string;
}
export declare const UserProfileFrame: React.FC<UserProfileFrameProps>;
export default UserProfileFrame;
