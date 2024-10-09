import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ContactForm from '../ContactForm';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    if (sectionRef.current) {
      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }

    if (aboutUsRef.current) {
      tl.fromTo(
        aboutUsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.5'
      );
    }

    if (contactFormRef.current) {
      tl.fromTo(
        contactFormRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=0.5'
      );
    }

    if (shapesRef.current) {
      tl.fromTo(
        shapesRef.current.querySelectorAll('.shape'),
        { scale: 0, rotation: 0, opacity: 0 },
        { scale: 1, rotation: 360, opacity: 1, stagger: 0.2 }
      );
    }
  }, []);

  return (
    <section className="section section-padding-equal bg-color-light" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" ref={aboutUsRef}>
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle" data-i18n="aboutUs">O nas</span>
                <h2 className="title mb--40" data-i18n="ProjectsCodingAndCustomSolutions">
                  Projekty, Kodowanie i Indywidualne Rozwiązania!
                </h2>
                <p data-i18n="WeAreInternetMagiciansCreatingAttractiveAndEffectiveWebsitesForIndividualsAndCompanies">
                  Jesteśmy magikami sieci, tworzymy atrakcyjne i skuteczne
                  strony internetowe dla osób indywidualnych i firm. Nasza
                  agencja przykłada ogromną wagę do zrozumienia potrzeb
                  naszych klientów. Opowiedz nam o Twoich marzeniach, a my
                  sprawimy, że staną się rzeczywistością. U nas możesz liczyć
                  na unikalne rozwiązania, tworzone specjalnie dla Ciebie -
                  żadnych gotowców czy szablonów!
                </p>
                <p data-i18n="OurServicesIncludeTheHighestQualityOfWebsiteDesignAndDevelopment">
                  Nasze usługi obejmują najwyższą jakość projektowania i
                  tworzenia stron internetowych, serwisów internetowych oraz
                  rozwiązań e-commerce. Współpracujemy z naszymi klientami na
                  każdym etapie, aby dostarczyć odpowiednią strukturę i treści
                  strony, a także aby zapewnić odpowiedni system zarządzania
                  treścią, który spełnia ich oczekiwania.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1" ref={contactFormRef}>
            <ContactForm />
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled" ref={shapesRef}>
        <li className="shape shape-1">
          <img src="https://mediahunters.pl/assets/media/others/bubble-7.webp" alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <img src="https://mediahunters.pl/assets/media/others/line-4.webp" alt="line" />
        </li>
        <li className="shape shape-3">
          <img src="https://mediahunters.pl/assets/media/others/line-5.webp" alt="line" />
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
