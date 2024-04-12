import React from "react"
import Image from "next/image";

import { Htag } from "../Htag/Htag";
import { Ptag } from "../Ptag/Ptag";
import styles from './DescriptionSection.module.scss';
import capybara from './descriptionSection.png';
import { Button } from "../Button/Button";

export const DescriptionSection = (): JSX.Element => (
    <section className={styles.description}>
        <div>
            <Htag>Лаборатория</Htag>
            <Ptag className={styles.mt}>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.</Ptag>
            <Ptag>Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</Ptag>
            <Button icon="arrow">Оставить заявку</Button>
        </div>
        <Image
            src={capybara}
            alt="capybara and test tubes"
        />
    </section>
)