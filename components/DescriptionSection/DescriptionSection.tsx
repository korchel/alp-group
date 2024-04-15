"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { Htag } from "../Htag/Htag";
import { Ptag } from "../Ptag/Ptag";
import styles from "./DescriptionSection.module.scss";
import capybara from "./descriptionSection.png";
import { Button } from "../Button/Button";
import { useObserver } from "../hooks/useObserver";

export const DescriptionSection = (): JSX.Element => {
  const ref = useObserver("description");

  return (
    <section className={styles.description} id="description" ref={ref}>
      <div className={styles.grid}>
        <Htag className={styles.title}>Лаборатория</Htag>
        <div className={styles.text}>
          <Ptag className={clsx(styles.text)}>
            Наша лаборатория предлагает широкий спектр медицинских исследований,
            проводимых опытными капибарами-лаборантами. Мы специализируемся на
            анализе биоматериалов, микробиологических исследованиях,
            генетической диагностике и многом другом.
          </Ptag>
          <Ptag className={styles.mt1}>
            Мы используем современное оборудование и методики и гарантируем
            точность и надежность результатов.
          </Ptag>
        </div>
        <Button
          href="#form"
          className={styles.button}
          type="button"
          icon="arrow"
        >
          Оставить заявку
        </Button>
        <div className={styles.picture}>
          <Image
            src={capybara}
            alt="capybara and test tubes"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};
