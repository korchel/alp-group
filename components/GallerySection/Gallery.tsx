import Image from 'next/image';

import picture1 from './images/picture1.png';
import picture2 from './images/picture2.png';
import picture3 from './images/picture3.png';
import picture4 from './images/picture4.png';
import picture5 from './images/picture5.png';
import picture6 from './images/picture6.png';
import picture7 from './images/picture7.png';
import styles from './Gallery.module.scss';
import { Htag } from '../Htag/Htag';


const images = [
    {src: picture1, alt: 'lab'},
    {src: picture2, alt: 'lab'},
    {src: picture3, alt: 'lab'},
    {src: picture4, alt: 'microskopes'},
    {src: picture5, alt: 'lab'},
    {src: picture6, alt: 'test tubes'},
    {src: picture7, alt: 'capybara scientist'},
];

export const GallerySection = () => (
    <section className={styles.gallery}>
        <Htag>Галерея</Htag>
        <div className={styles.grid}>
        {images.map((image) => (
            <Image
                src={image.src}
                alt={image.alt}
                key={image.src.src}
            />
        ))}
        </div>
    </section>
)