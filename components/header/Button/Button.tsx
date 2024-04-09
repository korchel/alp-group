import React, {type ReactNode} from "react";
import clsx from "clsx";

import styles from './Button.module.scss';

interface IButtonProps {
    variant: 'ghost' | 'primary-ghost',
    children: ReactNode,
}

export const Button: React.FC<IButtonProps> = ({variant, children}) => {
    return (
        <button className={clsx(styles.button, styles[variant])}>
            {children}
        </button>
    )
};
