import Image from "next/image";
import clsx from "clsx";

import banner from './banner.png'
import styles from './Banner.module.scss';
import { Htag } from "./Htag/Htag";

export const Banner = () => (
    <div className={clsx(styles.bannerContainer)}>
        <Image 
            src={banner}
            alt="capybara scientist"
            fill
            className={styles.img}
        />
        <div className={styles.header}>
            <Htag variant="primary" className={styles.bottomLeftAttach}>точные результаты</Htag>
            <Htag variant="ghost" className={styles.topAttach}>точно в срок</Htag>
        </div>
    </div>
)