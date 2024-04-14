"use client";
import { useContext } from "react";
import clsx from "clsx";

import { ObserverContext } from "../../context/obeserverContext";
import styles from "./Header.module.scss";
import { NavItem } from "./NavItem/NavItem";
import { Logo } from "./Logo/Logo";
import { Phone } from "./Phone/Phone";

const navItems = [
  { id: "description", title: "Лаборатория" },
  { id: "gallery", title: "Галерея" },
  { id: "form", title: "Оставить заявку" },
];

export const Header = () => {
  const { activeTab } = useContext(ObserverContext);

  return (
    <header className={clsx(styles.header)}>
      <Logo />
      <nav className={styles.buttonGgroup}>
        {navItems.map((item) => (
          <NavItem
            goTo={`#${item.id}`}
            key={item.id}
            active={item.id === activeTab}
          >
            {item.title}
          </NavItem>
        ))}
      </nav>
      <Phone />
    </header>
  );
};
