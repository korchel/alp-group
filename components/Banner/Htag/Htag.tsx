import React, {type DetailedHTMLProps, type HTMLAttributes, type ReactNode} from "react";
import clsx from "clsx";

import styles from "./Htag.module.scss";

interface IHtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    variant: 'primary' | 'ghost';
    children: ReactNode,
}

export const Htag:  React.FC<IHtagProps> = ({variant, children, className}) => (
    <h1 className={clsx(styles.htag, styles[variant], className)}>{children}</h1>
);

