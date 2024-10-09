import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Breadcrumb: React.FC = () => {
    const breadcrumbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (breadcrumbRef.current) {
            gsap.fromTo(
                breadcrumbRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
    }, []);

    return (
        <div className="breadcrum-area breadcrumb-banner" ref={breadcrumbRef}>
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <a href="index.html" data-i18n="mainPage">Strona główna</a>
                        </li>
                        <li className="active" data-i18n="aboutUs">O nas</li>
                    </ul>
                </div>
                <div className="section-heading heading-left">
                    <h1 className="title h2" data-i18n="oneOfTheFastestGrowingAgencies">
                        Jedna z najszybciej rozwijających się agencji
                    </h1>
                    <p data-i18n="designAndCreateWebAndMobileApplications">
                        Projektujemy i tworzymy aplikacje webowe i mobilne dla naszych
                        klientów w całym kraju.
                    </p>
                </div>
                <div className="banner-thumbnail thumbnail-4">
                    <img
                        src={new URL('assets/media/banner/banner-thumb-3.web', import.meta.url).href}
                        alt="Ilustracja"
                    />
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={new URL('assets/media/others/bubble-9.webp', import.meta.url).href} alt="Bańka" />
                </li>
                <li className="shape shape-2">
                    <img src={new URL('assets/media/others/bubble-22.webp', import.meta.url).href} alt="Bańka" />
                </li>
                <li className="shape shape-3">
                    <img src={new URL('assets/media/others/line-4.webp', import.meta.url).href} alt="Linia" />
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
