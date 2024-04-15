"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import VisibilitySensor from "react-visibility-sensor";

import { Htag } from "../Htag/Htag";
import { Ptag } from "../Ptag/Ptag";
import styles from "./DescriptionSection.module.scss";
import capybara from "./descriptionSection.png";
import { Button } from "../Button/Button";
import { useVisibility } from "../hooks/useVisibility";
export const DescriptionSection = (): JSX.Element => {
  const handleVisibility = useVisibility("description");

  return (
    <VisibilitySensor onChange={handleVisibility} scrollCheck={true} partialVisibility={true} offset={{top: 150, bottom: 100}}>
      <section className={styles.description} id="description">
        <div className={styles.grid}>
          <Htag className={styles.title}>Лаборатория</Htag>
          <div className={styles.text}>
            <Ptag className={clsx(styles.text)}>
              Наша лаборатория предлагает широкий спектр медицинских
              исследований, проводимых опытными капибарами-лаборантами. Мы
              специализируемся на анализе биоматериалов, микробиологических
              исследованиях, генетической диагностике и многом другом.
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
              style={{width: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};
