import clsx from "clsx";
import Image from "next/image";
import { Ptag } from "../Ptag/Ptag";
import styles from "./Footer.module.scss";
import logo from "./Logo.png";

export const Footer = () => (
  <footer className={clsx(styles.footer, styles.mt)}>
    <Ptag size="s" color="white">Все права защищены Российской Ассоциацией Капибар</Ptag>
    <Image src={logo} alt="logo" />
  </footer>
);
