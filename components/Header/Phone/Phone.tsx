import PhoneIcon from "./phoneIcon.svg";
import styles from "./Phone.module.scss";

export const Phone = () => {
  return (
    <div className={styles.phone}>
      <PhoneIcon />
      <div className={styles.contacts}>
        <p className={styles.number}>+7 123 456 7890</p>
        <p>Звонок бесплатный</p>
      </div>
    </div>
  );
};
