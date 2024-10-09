import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  itemsRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });

    if (sectionRef.current) {
      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }

    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );
    }

    itemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        `-=${0.4 - index * 0.1}`
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section className="section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-heading heading-left" ref={headingRef}>
          <span className="subtitle" data-i18n="opinionsOfOurCustomers">Opinie naszych klientów</span>
          <h2 className="title" data-i18n="fromTheBeginningOfActivity">Od początku działalności</h2>
          <p data-i18n="ourCompanySpecializesInProvidingProfessionalServicesToOurCustomers">
            Nasza firma specjalizuje się w świadczeniu profesjonalnych usług
            dla naszych klientów. Zaufali nam wielu partnerów, a każdy sukces
            jest dla nas potwierdzeniem jakości naszej pracy.
          </p>
        </div>
        <div className="row">
          <TestimonialItem
            ref={addToRefs}
            imgSrc="https://mediahunters.pl/assets/media/testimonial/testimonial-1.webp"
            name="Daniel"
            testimonial="Gorąco polecam, po niezbyt udanej współpracy z dwoma innymi firmami wreszcie trafiłem na profesjonalistów. Rzetelne i uczciwe podejście do sprawy! Strona wykonana perfekcyjnie."
          />
          <TestimonialItem
            ref={addToRefs}
            imgSrc="https://mediahunters.pl/assets/media/testimonial/testimonial-2.webp"
            name="Kamil"
            testimonial="Dziękuję za profesjonalną współpracę przy tworzeniu strony www. Wyszło świetnie, w ustalonym wcześniej terminie, zawsze mogę liczyć na pomoc w razie chęci dalszej rozbudowy strony."
          />
          <TestimonialItem
            ref={addToRefs}
            imgSrc="https://mediahunters.pl/assets/media/testimonial/testimonial-3.webp"
            name="Ewelina"
            testimonial="Nie mogłem się spodziewać lepszego podejścia do rozwiązania mojego problemu. Obsługa była naprawdę profesjonalna, a moje oczekiwania zostały spełnione w pełni."
          />
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <img src="https://mediahunters.pl/assets/media/others/bubble-1.webp" alt="Bubble" />
        </li>
      </ul>
    </section>
  );
};

const TestimonialItem = React.forwardRef<HTMLDivElement, { imgSrc: string, name: string, testimonial: string }>((props, ref) => (
  <div className="col-lg-4" ref={ref}>
    <div className="testimonial-grid">
      <p>{props.testimonial}</p>
      <div className="author-info">
        <div className="thumb">
          <img src={props.imgSrc} alt="Google Review" />
        </div>
        <div className="content">
          <span className="name">{props.name}</span>
        </div>
      </div>
    </div>
  </div>
));

export default Testimonials;
