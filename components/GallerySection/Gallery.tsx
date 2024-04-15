"use client";
import Image from "next/image";
import clsx from "clsx";

import picture1 from "./images/picture1.png";
import picture2 from "./images/picture2.png";
import picture3 from "./images/picture3.png";
import picture4 from "./images/picture4.png";
import picture5 from "./images/picture5.png";
import picture6 from "./images/picture6.png";
import picture7 from "./images/picture7.png";
import styles from "./Gallery.module.scss";
import { Htag } from "../Htag/Htag";
import { useObserver } from "../hooks/useObserver";

const images = [
  { src: picture1, alt: "lab", id: 1 },
  { src: picture2, alt: "lab", id: 2 },
  { src: picture3, alt: "lab", id: 3 },
  { src: picture4, alt: "microskopes", id: 4 },
  { src: picture5, alt: "lab", id: 5 },
  { src: picture6, alt: "test tubes", id: 6 },
  { src: picture7, alt: "capybara scientist", id: 7 },
];

export const GallerySection = () => {
  const ref = useObserver("gallery");

  return (
    <section className={styles.gallery} id="gallery" ref={ref}>
      <Htag>Галерея</Htag>
      <div className={clsx(styles.grid, styles.mt)}>
        {images.map((image) => {
          const { height } = image.src;
          const { width } = image.src;
          return (
            <div
              key={image.id}
              className={clsx(
                { [styles.twoRows]: height / 4 > 332 },
                { [styles.twoColumns]: width / 4 > 332 },
              )}
            >
              <Image layout="responsive" src={image.src} alt={image.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
