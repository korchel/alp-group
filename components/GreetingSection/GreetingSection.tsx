import clsx from "clsx";
import { Ptag } from "../Ptag/Ptag";
import styles from './GreetingSection.module.scss'

export const GreetingSection = () => (
    <section className={clsx(styles.py, styles.container)}>
        <Ptag fontStyle="italic" textAlign="center" bold={true} large={true}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</Ptag>
    </section>
);
