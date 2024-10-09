import './front.css';
import React, { useLayoutEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { GlyphIcon } from '../../shared/icons';

const donationsHeader = new URL('../../../assets/media/home/projects/donations_header.png', import.meta.url).href;
const storeHeader = new URL('../../../assets/media/home/projects/store_header.png', import.meta.url).href;
const barberHeader = new URL('../../../assets/media/home/projects/barber_header.png', import.meta.url).href;

const donationsHeaderMobile = new URL('../../../assets/media/home/projects/donation_header_mobile.png', import.meta.url).href;
const storeHeaderMobile = new URL('../../../assets/media/home/projects/store_header_mobile.png', import.meta.url).href;
const barberHeaderMobile = new URL('../../../assets/media/home/projects/barber_header_mobile.png', import.meta.url).href;

const Front: React.FC = () => {
    const headlineRef: RefObject<HTMLDivElement> = useRef(null);
    const imagesRef: React.MutableRefObject<HTMLImageElement[]> = useRef([]);

    useLayoutEffect(() => {
        if (headlineRef.current) {
            gsap.fromTo(
                headlineRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            );
        }

        imagesRef.current.forEach((img, index) => {
            if (img) {
                const animationProps = index % 2 === 0
                    ? { x: -100, opacity: 0 }
                    : { x: 100, opacity: 0 };

                gsap.fromTo(
                    img,
                    animationProps,
                    { x: 0, opacity: 1, duration: 1, delay: index * 0.3 }
                );
            }
        });
    }, []);

    const addToRefs = (el: HTMLImageElement | null): void => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };

    return (
        <div className="front-container">
            <div className="front-container__headline" ref={headlineRef}>
                <p className="front-container__headline-text">
                    Oferujemy innowacyjne rozwiązania, które wspierają rozwój Twojej firmy. Nasz zespół dba o każdy detal, dostarczając usługi najwyższej jakości. Wybierając nasze projekty, inwestujesz w sukces i przyszłość swojego biznesu.
                </p>
                <div className="front-container__right-panel">
                    <ul className="front-container__icon-list">
                        <li className="front-container__icon-list-item"><GlyphIcon /> Odio viverra</li>
                        <li className="front-container__icon-list-item"><GlyphIcon /> Usługa 2</li>
                        <li className="front-container__icon-list-item"><GlyphIcon /> Usługa 3</li>
                    </ul>
                    <div className="front-container__social-media-icons">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="front-container__social-media-icon">
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="front-container__social-media-icon">
                            Instagram
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="front-container__social-media-icon">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className="front-container__images">
                <picture>
                    <source media="(max-width: 450px)" srcSet={donationsHeaderMobile} />
                    <img ref={addToRefs} src={donationsHeader} alt="Donations Header" className="front-container__image" />
                </picture>
                <picture>
                    <source media="(max-width: 450px)" srcSet={storeHeaderMobile} />
                    <img ref={addToRefs} src={storeHeader} alt="Store Header" className="front-container__image" />
                </picture>
                <picture>
                    <source media="(max-width: 450px)" srcSet={barberHeaderMobile} />
                    <img ref={addToRefs} src={barberHeader} alt="Barber Header" className="front-container__image" />
                </picture>
            </div>
        </div>
    );
};

export default Front;
