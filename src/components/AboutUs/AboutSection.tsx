import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutSection: React.FC = () => {
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
        <section className="section section-padding case-study-featured-area" ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                            <img src={new URL('../../assets/media/others/case-study-4.webp', import.meta.url).href} alt="Podróż" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                            <div className="section-heading heading-left">
                                <span className="subtitle" data-i18n="whoWeAre">Kim jesteśmy</span>
                                <h2 className="title h4" data-i18n="whoWeAreItTeam">
                                    Tworzymy rozwiązania informatyczne dla dynamicznie zmieniającego się świata.
                                </h2>
                                <p data-i18n="ourTeamFocusOnInovativeSolutions">
                                    Nasz zespół skupia się na tworzeniu innowacyjnych rozwiązań, które przyczyniają się do zmiany świata. Wspieramy naszych klientów w projektowaniu i rozwijaniu stron internetowych oraz aplikacji mobilnych. Nasze usługi charakteryzują się kreatywnością, profesjonalizmem i dbałością o detale. Działamy z pasją i zaangażowaniem, aby dostarczyć najwyższej jakości produkty.
                                </p>
                                <p data-i18n="weAreConvincedThatEveryProject">
                                    Jesteśmy przekonani, że każdy projekt ma potencjał, aby odnieść sukces. Dlatego pracujemy w ścisłej współpracy z klientami, słuchamy ich potrzeb i wizji, aby dostosować nasze rozwiązania do indywidualnych wymagań. Nasza agencja interaktywna kładzie nacisk na doskonałość i dążenie do osiągnięcia najlepszych wyników dla naszych partnerów biznesowych.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
