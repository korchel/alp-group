import React, {type DetailedHTMLProps, type HTMLAttributes, type ReactNode} from "react";
import clsx from "clsx";

import styles from './Ptag.module.scss';

interface IPtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    fontStyle?: 'normal' | 'italic',
    textAlign?: 'center' | 'left',
    bold?: boolean;
}

export const Ptag: React.FC<IPtagProps> = ({fontStyle = 'normal', textAlign = 'left', bold = false, children, className}) => (
    <p className={clsx(styles.ptag, styles[fontStyle], styles[textAlign], {[styles.bold]: bold}, className)}>{children}</p>
);