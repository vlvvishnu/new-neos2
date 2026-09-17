import * as React from 'react';
export interface TabItemProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "default" | "lg" | "sm";
  position?: "bottom" | "left" | "right" | "top";
  state?: "active" | "default" | "disabled";
  title?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
}
export declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
