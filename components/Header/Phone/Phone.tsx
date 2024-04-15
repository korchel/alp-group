import Link from "next/link";

import PhoneIcon from "./phoneIcon.svg";
import styles from "./Phone.module.scss";

export const Phone = () => {
  return (
    <Link className={styles.phone} href="tel:+71234567890">
      <PhoneIcon />
      <div className={styles.contacts}>
        <p className={styles.number}>+7 123 456 7890</p>
        <p>Звонок бесплатный</p>
      </div>
    </Link>
  );
};
