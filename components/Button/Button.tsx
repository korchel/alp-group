import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import clsx from "clsx";
import ArrowIconIcon from "./arrowIcon.svg";
import CheckMarkIcon from "./checkMarkIcon.svg";
import styles from "./Button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: "arrow" | "check";
  children: ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  icon,
  children,
  ...props
}) => (
  <button {...props} className={clsx(styles.btn, styles.primary)}>
    {children}
    {icon === "check" ? <CheckMarkIcon /> : <ArrowIconIcon />}
  </button>
);
