import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import clsx from "clsx";
import ArrowIconIcon from "./arrowIcon.svg";
import CheckMarkIcon from "./checkMarkIcon.svg";
import styles from "./Button.module.scss";
import Link from "next/link";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: "arrow" | "check";
  children: ReactNode;
  href?: string;
}

export const Button: React.FC<IButtonProps> = ({
  icon,
  children,
  href,
  ...props
}) => (
  <>
    {href ? (
      <Link href={href} className={clsx(styles.btn, styles.primary)}>
        {children}
        {icon === "check" ? <CheckMarkIcon /> : <ArrowIconIcon />}
      </Link>
    ) : (
      <button {...props} className={clsx(styles.btn, styles.primary)}>
        {children}
        {icon === "check" ? <CheckMarkIcon /> : <ArrowIconIcon />}
      </button>
    )}
  </>
);
