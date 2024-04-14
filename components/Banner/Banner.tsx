'use client';
import Image from "next/image";
import clsx from "clsx";
import { useWindowSize } from 'usehooks-ts'

import banner from "./banner.png";
import bannerSmall from "./bannerSmall.png";
import styles from "./Banner.module.scss";
import { Htag } from "./Htag/Htag";

export const Banner = () => {
  const { width = 0, height = 0 } = useWindowSize()
  console.log(width)
  return (
    <div className={clsx(styles.bannerContainer)}>
      <Image src={width > 900 ? banner : bannerSmall} alt="capybara scientist" fill className={styles.img} />
      <div className={styles.position}>
        <Htag variant="primary" className={styles.bottomLeftAttach}>
          точные результаты
        </Htag>
        <Htag variant="ghost" className={styles.topAttach}>
          точно в срок
        </Htag>
      </div>
    </div>
  )
};
