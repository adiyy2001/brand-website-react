import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ValuesSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
    }, []);

    return (
        <section className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20" ref={sectionRef}>
            <div className="container">
                <div className="section-heading heading-light-left mb--100">
                    <span className="subtitle">Nasze Wartości</span>
                    <h2 className="title" data-i18n="whyWorthCooperatingWithUs">Dlaczego warto z nami współpracować?</h2>
                    <p className="opacity-50" data-i18n="weAreTheQuicketGrowingcompany">
                        Jesteśmy jedną z najszybciej rozwijających się agencji. Projektujemy i tworzymy aplikacje webowe i mobilne dla klientów w całym kraju.
                    </p>
                </div>
                <div className="row">
                    <ValueItem number="1" title="Przekraczaj oczekiwania klientów i kolegów" description="Tworzymy oprogramowanie dla tych, którzy zmieniają świat. Zależy nam na przewyższaniu oczekiwań naszych klientów i współpracowników, zapewniając im rozwiązania, które inspirują i zaskakują." />
                    <ValueItem number="2" title="Bierz odpowiedzialność i kwestionuj status quo w konstruktywny sposób" description="Jesteśmy odważni w podejmowaniu odpowiedzialności za nasze projekty i zawsze zwracamy uwagę na możliwość wprowadzania pozytywnych zmian. Wprowadzamy innowacyjne rozwiązania i kwestionujemy utarte schematy, aby osiągnąć jeszcze lepsze wyniki." />
                    <ValueItem number="3" title="Bądź odważny, ciekawski i eksperymentuj - ucz się na podstawie sukcesów i porażek" description="Jesteśmy gotowi na wyzwania i nowe doświadczenia. Eksperymentujemy, uczymy się na błędach i sukcesach, dzięki czemu stajemy się coraz lepsi i skuteczniejsi w dostarczaniu innowacyjnych rozwiązań." />
                    <ValueItem number="4" title="Działaj w sposób, który sprawia, że wszyscy możemy być dumni" description="Dążymy do tego, aby nasza praca była źródłem dumy zarówno dla nas, jak i dla naszych klientów. Wszystkie nasze działania są ukierunkowane na dostarczenie wartościowych i trwałych rozwiązań." />
                    <ValueItem number="5" title="Buduj kulturę włączającą, transparentną i społecznie odpowiedzialną" description="W naszej agencji stawiamy na współpracę, zaufanie i otwartość. Tworzymy kulturę, która sprzyja integracji i wzajemnemu wsparciu. Jesteśmy również zaangażowani w działania społeczne i dbamy o naszą otoczkę." />
                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1">
                    <img src={new URL('../../assets/media/others/circle-1.webp', import.meta.url).href} alt="Circle" />
                </li>
                <li className="shape shape-2">
                    <img src={new URL('../../assets/media/others/line-3.webp', import.meta.url).href} alt="Circle" />
                </li>
                <li className="shape shape-3">
                    <img src={new URL('../../assets/media/others/bubble-5.webp', import.meta.url).href} alt="Circle" />
                </li>
            </ul>
        </section>
    );
};

const ValueItem: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="col-lg-4">
        <div className="about-quality">
            <h3 className="sl-number">{number}</h3>
            <h5 className="title">{title}</h5>
            <p>{description}</p>
        </div>
    </div>
);

export default ValuesSection;
