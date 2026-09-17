// @dsKitComponent — intentional WellSky Eligibility & Auth kit component
import * as React from 'react';
export interface MenuTopnavigationItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active" | "disabled";
  theme?: "dark" | "light";
  showIcon?: boolean;
  title?: string;
  icon?: React.ReactNode;
}
export declare const MenuTopnavigationItem: React.FC<MenuTopnavigationItemProps>;
export default MenuTopnavigationItem;
