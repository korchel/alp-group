import React, { type ReactNode } from "react";
import clsx from "clsx";

import styles from "./NavItem.module.scss";
import Link from "next/link";

interface INavItemProps {
  active: boolean;
  children: ReactNode;
  goTo: string;
}

export const NavItem: React.FC<INavItemProps> = ({
  children,
  goTo,
  active,
}) => {
  return (
    <Link
      href={goTo}
      className={clsx(styles.button, { [styles.active]: active })}
    >
      {children}
    </Link>
  );
};
