import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TeamSection: React.FC = () => {
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
        <section className="section-padding-equal" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="about-team">
                            <div className="thumbnail">
                                <img src={new URL('../../assets/media/about/about-2.webp', import.meta.url).href} alt="thumbnail" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-team">
                            <div className="section-heading heading-left">
                                <h2 className="title" data-i18n="whyWorthCooperatingWithUs">
                                    Dlaczego warto z nami współpracować?
                                </h2>
                                <p className="opacity-50" data-i18n="TogetherWeAchieveMore">
                                    Razem osiągamy więcej! Jesteśmy zespołem innowatorów, gotowych kwestionować status quo. Wspieramy odwagę i eksperymenty, ucząc się na sukcesach i porażkach. Nasza kultura jest transparentna i społecznie odpowiedzialna. Poznaj nasz zespół i wspólnie zdobywajmy sukcesy!
                                </p>
                                <a href="contact.html" className="axil-btn btn-large btn-fill-primary" data-i18n="contactUsEx">Skontaktuj się!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
