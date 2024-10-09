import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProcessSection: React.FC = () => {
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
        <section className="section section-padding bg-color-light pb--70" ref={sectionRef}>
            <div className="container">
                <div className="section-heading mb--90">
                    <span className="subtitle" data-i18n="ourProcess">Nasz proces</span>
                    <h2 className="title" data-i18n="howWeWork">Jak pracujemy</h2>
                    <p data-i18n="ourAgencieWorkInFourSteps">
                        Nasza agencja interaktywna działa w 4 etapach, aby dostarczyć najlepsze rozwiązania dla Ciebie.
                    </p>
                </div>
                <div>
                    <ProcessItem className="process-work content-reverse" number="1" title="Odkrywanie" description="Wspólnie poznajemy Twoje cele i potrzeby, aby dokładnie zrozumieć, co chcesz osiągnąć. Przeprowadzamy wywiady z Tobą, analizujemy rynek i konkurencję oraz identyfikujemy kluczowe wymagania i cele projektu. Naszym celem jest poznanie Twojej wizji, abyśmy mogli skutecznie przekształcić ją w funkcjonalne i przyciągające rozwiązania." />
                    <ProcessItem className="process-work" number="2" title="Prototyp" description="Tworzymy interaktywne prototypy, aby przedstawić Ci wizualizację naszych pomysłów. Na tym etapie skupiamy się na zaprojektowaniu interfejsów, doświadczenia użytkownika oraz funkcjonalności. Prototypy pozwalają nam zobaczyć, jak Twoja aplikacja lub strona internetowa będzie działać w praktyce i pozwala na wcześniejszą identyfikację potencjalnych problemów. Wspólnie z Tobą przeglądamy prototypy, aby zapewnić, że spełniają Twoje oczekiwania przed przechodzeniem do pełnej realizacji projektu." />
                    <ProcessItem className="process-work content-reverse" number="3" title="Testowanie" description="Przeprowadzamy testy, aby upewnić się, że nasze rozwiązania są funkcjonalne i spełniają Twoje oczekiwania. Testujemy zarówno aspekty techniczne, jak i doświadczenie użytkownika, aby zapewnić najwyższą jakość i użyteczność. Wykorzystujemy feedback od użytkowników, aby dokonać ewentualnych poprawek i dostosować rozwiązania do Twoich potrzeb. Jesteśmy bardzo zaangażowani w zapewnienie, że nasze produkty są gotowe do działania na najwyższym poziomie jakości i użyteczności." />
                    <ProcessItem className="process-work" number="4" title="Realizacja" description="Przystępujemy do budowy finalnych rozwiązań, dbając o jakość i skuteczność każdego detalu. Nasz zespół programistów, projektantów i specjalistów ds. jakości pracuje razem, aby dostarczyć kompleksowe i dopracowane rozwiązania. Jesteśmy zdeterminowani, aby sprostać Twoim oczekiwaniom i zapewnić, że produkt spełni Twoje cele biznesowe. Realizujemy projekt w terminie i zapewniamy wsparcie wdrożeniowe, aby zapewnić płynne działanie rozwiązania i pomóc w razie jakichkolwiek pytań czy problemów." />
                </div>
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1">
                    <img src={new URL('../../assets/media/others/bubble-24.webp', import.meta.url).href} alt="Bąbel" />
                </li>
                <li className="shape shape-2">
                    <img src={new URL('../../assets/media/others/bubble-23.webp', import.meta.url).href} alt="Bąbel" />
                </li>
                <li className="shape shape-3">
                    <img src={new URL('../../assets/media/others/line-4.webp', import.meta.url).href} alt="Linia" />
                </li>
                <li className="shape shape-4">
                    <img src={new URL('../../assets/media/others/line-5.webp', import.meta.url).href} alt="Linia" />
                </li>
                <li className="shape shape-5">
                    <img src={new URL('../../assets/media/others/line-4.webp', import.meta.url).href} alt="Linia" />
                </li>
                <li className="shape shape-6">
                    <img src={new URL('../../assets/media/others/line-5.webp', import.meta.url).href} alt="Linia" />
                </li>
            </ul>
        </section>
    );
};

const ProcessItem: React.FC<{ number: string, title: string, description: string, className: string }> = ({ number, title, description, className }) => (<div className={className}>
    <div className="thumbnail paralax-image">
        <img src={new URL(`../../assets/media/others/process-${number}.webp`, import.meta.url).href} alt="Miniatura" />
    </div>
    <div className="content">
        <span className="subtitle">{`Krok ${number}`}</span>
        <h3 className="title">{title}</h3>
        <p>{description}</p>
    </div>
</div>
);

export default ProcessSection;
