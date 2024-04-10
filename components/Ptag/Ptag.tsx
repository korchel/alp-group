import React, {type DetailedHTMLProps, type HTMLAttributes, type ReactNode} from "react";
import clsx from "clsx";

import styles from './Ptag.module.scss';

interface IPtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    fontStyle?: 'normal' | 'italic',
    textAlign?: 'center' | 'left',
    bold?: boolean;
    large?: boolean;
}

export const Ptag: React.FC<IPtagProps> = ({fontStyle = 'normal', textAlign = 'left', bold = false, large = false, children, className}) => (
    <p className={clsx(styles.ptag, styles[fontStyle], styles[textAlign], {[styles.bold]: bold}, {[styles.large]: large}, className)}>{children}</p>
);