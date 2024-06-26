import { Ptag } from "../../Ptag/Ptag";
import SuccessIcon from "./successIcon.svg";
import styles from "./Message.module.scss";

export const Message = () => (
  <div className={styles.message}>
    <SuccessIcon />
    <Ptag color="primary" className={styles.alignText}>
      Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее
      время.
    </Ptag>
  </div>
);
