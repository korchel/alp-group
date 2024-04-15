import Image from "next/image";
import logo from "./logo.png";
import styles from "./Logo.module.scss";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className={styles.logo} href={'/'}>
      <Image src={logo} alt="Kapibara Lab" height={29} />
      <p>Современные методики диагностики</p>
    </Link>
  );
};
