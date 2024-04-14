import React from "react";
import clsx from "clsx";

import styles from "./Field.module.scss";
import { IFieldProps } from "./Field.props";

export const Field: React.FC<IFieldProps> = ({
  placeholder,
  name,
  error,
  touched,
  value,
  onChange,
}) => (
  <div className={styles.inputGroup}>
    {error && touched && <p className={styles.error}>{error}</p>}
    <input
      value={value}
      className={clsx(styles.inputField, {
        [styles.ErrorBorder]: error && touched,
      })}
      onChange={onChange}
      name={name}
      type="text"
      placeholder={placeholder}
    />
  </div>
);
