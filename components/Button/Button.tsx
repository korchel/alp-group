import React, {type ReactNode} from "react";
import clsx from "clsx";
import ArrowIconIcon from './arrowIcon.svg';
import CheckMarkIcon from './checkMarkIcon.svg'
import styles from './Button.module.scss';

interface IButtonProps {
    icon: 'arrow' | 'check'
    children: ReactNode,
}

export const Button: React.FC<IButtonProps> = ({icon, children, ...props}) => (
    <button {...props} className={clsx(styles.btn, styles.primary)}>
        {children}
        {icon === 'check' ? <CheckMarkIcon /> : <ArrowIconIcon />}
    </button>
);