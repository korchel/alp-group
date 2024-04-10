import React, {type ReactNode} from "react";
import Image from "next/image";
import clsx from "clsx";
import arrowIcon from './Arrow.svg';
import checkMark from './CheckMark.svg'
import styles from './Button.module.scss';

interface IButtonProps {
    icon: 'arrow' | 'check'
    children: ReactNode,
}

export const Button: React.FC<IButtonProps> = ({icon, children, ...props}) => (
    <button {...props} className={clsx(styles.btn, styles.primary)}>
        {children}
        <Image
            src={icon === 'check' ? checkMark : arrowIcon }
            alt="arrow"
            className={styles.img}
        />
    </button>
);