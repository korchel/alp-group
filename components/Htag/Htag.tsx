import React, {type DetailedHTMLProps, type HTMLAttributes, type ReactNode} from "react";

import styles from './Htag.module.scss';

interface IHtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children: ReactNode,
}

export const Htag: React.FC<IHtagProps> = ({children}) => (
    <h1 className={styles.htag}>{children}</h1>
)