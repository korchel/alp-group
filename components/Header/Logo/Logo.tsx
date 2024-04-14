import Image from "next/image";
import logo from "./logo.png";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="Kapibara Lab" height={29} />
      <p>Современные методики диагностики</p>
    </div>
  );
};
