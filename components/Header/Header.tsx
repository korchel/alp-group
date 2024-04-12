import clsx from "clsx";
import styles from "./Header.module.scss";
import { NavItem } from "./NavItem/NavItem";
import { Logo } from "./Logo/Logo";
import { Phone } from "./Phone/Phone";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <Logo />
      <nav className={styles.buttonGgroup}>
        <NavItem variant="primary-ghost">Лаборатория</NavItem>
        <NavItem variant="ghost">Галерея</NavItem>
        <NavItem variant="ghost">Оставить заявку</NavItem>
      </nav>
      <Phone />
    </header>
  );
};
