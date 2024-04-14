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
  weight?: "normal" | "bold";
  size?: "l" | "m" | "s";
  color?: "black" | "white" | "primary";
}

export const Ptag: React.FC<IPtagProps> = ({
  fontStyle = "normal",
  textAlign = "left",
  weight = "normal",
  size = "m",
  color = "black",
  children,
  className,
}) => (
  <p
    className={clsx(
      styles.ptag,
      styles[fontStyle],
      styles[textAlign],
      styles[weight],
      styles[size],
      styles[color],
      className,
    )}
  >
    {children}
  </p>
);
