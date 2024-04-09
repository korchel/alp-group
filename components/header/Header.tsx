import styles from "./Header.module.scss";
import { Button } from "./Button/Button";
import { Logo } from "./Logo/Logo";
import { Phone } from "./Phone/Phone";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttonGgroup}>
        <Button variant="primary-ghost">Лаборатория</Button>
        <Button variant="ghost">Галерея</Button>
        <Button variant="ghost">Оставить заявку</Button>
      </div>
      <Phone />
    </header>
  );
};
