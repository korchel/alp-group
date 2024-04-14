import React, { type ReactNode } from "react";
import clsx from "clsx";

import styles from "./NavItem.module.scss";

interface INavItemProps {
  variant: "ghost" | "primary-ghost";
  children: ReactNode;
}

export const NavItem: React.FC<INavItemProps> = ({ variant, children }) => {
  return <a className={clsx(styles.button, styles[variant])}>{children}</a>;
};
