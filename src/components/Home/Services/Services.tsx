import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Services.css';

const Services: React.FC = () => {
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".section-heading", { y: -50, opacity: 0 }, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.fromTo(".services-grid", { y: 50, opacity: 0 }, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1,
      });

      gsap.fromTo(".shape-group-10 .shape", { scale: 0, opacity: 0 }, {
        duration: 1,
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.5,
      });
    }, serviceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section section-padding-2 bg-color-dark" ref={serviceRef}>
      <div className="container">
        <div className="section-heading heading-light-left">
          <span className="subtitle" data-i18n="whatCanWeDoForYou">Co możemy zrobić dla Ciebie</span>
          <h2 className="title" data-i18n="servicesWeCanOfferYou">Usługi, które możemy Ci zaoferować</h2>
          <p className="opacity-50" data-i18n="comprehensiveAndTailored">
            Jesteśmy gotowi pomóc Ci w osiągnięciu Twoich celów. Nasza oferta
            usług jest kompleksowa i dopasowana do Twoich potrzeb. Niezależnie
            od tego, czy potrzebujesz wsparcia w projektowaniu, rozwoju,
            marketingu online, zarządzaniu biznesem, technologii czy strategii
            treści, jesteśmy tutaj, aby Ci pomóc.
          </p>
        </div>
        <div className="row">
          <ServiceItem
            delay={100}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-1.webp"
            title="Projektowanie"
            description="Jeśli potrzebujesz profesjonalnego i kreatywnego projektowania, jesteśmy gotowi dostarczyć Ci rozwiązania, które przyciągną uwagę Twoich klientów."
          />
          <ServiceItem
            delay={200}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-2.webp"
            title="Rozwój"
            description="Nasz zespół doświadczonych programistów i developerów jest gotowy wziąć się za Twój projekt i dostarczyć rozwiązania zgodne z najnowszymi standardami technologicznymi."
          />
          <ServiceItem
            delay={300}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-3.webp"
            title="Marketing online"
            description="Osiągnij sukces w internecie dzięki naszym strategiom marketingowym. Pomagamy w zwiększeniu widoczności Twojej marki i pozyskaniu nowych klientów online."
          />
          <ServiceItem
            delay={100}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-4.webp"
            title="Biznes"
            description="Nasza oferta usług biznesowych obejmuje wsparcie w zarządzaniu, strategii rozwoju, analizie rynku i wiele innych aspektów, które pomogą Ci odnieść sukces."
          />
          <ServiceItem
            delay={200}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-5.webp"
            title="Technologia"
            description="Zapewniamy wsparcie w zakresie nowoczesnych technologii, wdrożeń systemów informatycznych oraz rozwoju aplikacji i oprogramowania."
          />
          <ServiceItem
            delay={300}
            imgSrc="https://mediahunters.pl/assets/media/icon/icon-6.webp"
            title="Zarządzanie treściami"
            description="Zapewniamy kompleksowe podejście do zarządzania treściami, aby Twoja marka mogła skutecznie komunikować się z Twoją grupą docelową."
          />
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img src="https://mediahunters.pl/assets/media/others/line-9.webp" alt="Koło" />
        </li>
        <li className="shape shape-2">
          <img src="https://mediahunters.pl/assets/media/others/bubble-42.webp" alt="Koło" />
        </li>
        <li className="shape shape-3">
          <img src="https://mediahunters.pl/assets/media/others/bubble-43.webp" alt="Koło" />
        </li>
      </ul>
    </section>
  );
};

const ServiceItem: React.FC<{ delay: number, imgSrc: string, title: string, description: string }> = ({ delay, imgSrc, title, description }) => (
  <div className={`col-xl-4 col-md-6`}>
    <div className="services-grid" style={{ transitionDelay: `${delay}ms` }}>
      <div className="thumbnail">
        <img src={imgSrc} alt="ikona" />
      </div>
      <div className="content">
        <h5 className="title text-light" data-i18n={title.toLowerCase().replace(" ", "")}>{title}</h5>
        <p data-i18n={description.toLowerCase().replace(" ", "")}>{description}</p>
      </div>
    </div>
  </div>
);

export default Services;
