import React, {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import clsx from "clsx";

import styles from "./Ptag.module.scss";

interface IPtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  fontStyle?: "normal" | "italic";
  textAlign?: "center" | "left";
  bold?: boolean;
  size?: 'l' | 'm' | 's';
  color?: 'black' | 'white';
}

export const Ptag: React.FC<IPtagProps> = ({
  fontStyle = "normal",
  textAlign = "left",
  bold = false,
  size = 'm',
  color = 'black',
  children,
  className,
}) => (
  <p
    className={clsx(
      styles.ptag,
      styles[fontStyle],
      styles[textAlign],
      { [styles.bold]: bold },
      styles[size],
      styles[color],
      className,
    )}
  >
    {children}
  </p>
);
