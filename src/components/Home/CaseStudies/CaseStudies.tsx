import './CaseStudies.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Slider from 'react-slick';

// Dynamiczny import obrazów
const donationsHeader = new URL('../../../assets/media/home/projects/donations_header.png', import.meta.url).href;
const storeHeader = new URL('../../../assets/media/home/projects/store_header.png', import.meta.url).href;
const barberHeader = new URL('../../../assets/media/home/projects/barber_header.png', import.meta.url).href;
console.log(barberHeader)
const CaseStudies: React.FC = () => {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: thumbSliderRef.current ?? undefined,
    beforeChange: (_current: number, next: number) => {
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(next);
      }
    },
  };

  const thumbSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current ?? undefined,
    focusOnSelect: true,
    beforeChange: (_current: number, next: number) => {
      if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(next);
      }
    },
  };

  useEffect(() => {
    mainSliderRef.current?.slickGoTo(0);
    thumbSliderRef.current?.slickGoTo(0);

    if (caseStudyRef.current) {
      const col5 = caseStudyRef.current.querySelectorAll('.col-xl-5');
      const col7 = caseStudyRef.current.querySelectorAll('.col-xl-7');
      const caseStudyElements = caseStudyRef.current.querySelectorAll('.case-study-featured, .case-study-featured-thumb');

      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power1.out' } });

      if (col5.length > 0) {
        tl.fromTo(col5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
      }

      if (col7.length > 0) {
        tl.fromTo(col7, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, '-=0.4');
      }

      if (caseStudyElements.length > 0) {
        tl.fromTo(caseStudyElements, { opacity: 0 }, { opacity: 1, stagger: 0.1 });
      }
    }
  }, []);

  return (
    <section className="section section-padding-equal case-study-featured-area" ref={caseStudyRef}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <Slider {...mainSliderSettings} ref={mainSliderRef} className="featured-content">
              <CaseStudyItem
                subtitle="Projekt zrealizowany"
                title="Wyszukiwarka dotacji unijnych"
                description="Intuicyjna wyszukiwarka dotacji unijnych umożliwia użytkownikom łatwe znalezienie dostępnych funduszy. Projekt zakłada integrację z bazami danych oraz narzędzia do filtrowania wyników."
                link="single-case-study.html"
                linkText="Czytaj więcej"
              />
              <CaseStudyItem
                subtitle="Projekt zrealizowany"
                title="Sklep internetowy z odzieżą"
                description="Nowoczesny sklep internetowy z odzieżą oferujący szeroki asortyment produktów. Zoptymalizowany pod kątem UX/UI oraz integracji z systemami płatności online i dostaw."
                link="single-case-study.html"
                linkText="Czytaj więcej"
              />
              <CaseStudyItem
                subtitle="Projekt zrealizowany"
                title="Aplikacja do zamawiania barbera do domu"
                description="Innowacyjna aplikacja mobilna umożliwiająca użytkownikom zamawianie usług barbera do domu. Aplikacja oferuje łatwy proces rezerwacji i śledzenie statusu zamówienia w czasie rzeczywistym."
                link="single-case-study.html"
                linkText="Czytaj więcej"
              />
            </Slider>
          </div>
          <div className="col-xl-7 col-lg-6 d-none d-lg-block">
            <Slider {...thumbSliderSettings} ref={thumbSliderRef} className="featured-thumbnail">
              <div className="case-study-featured-thumb">
                <img src={donationsHeader} alt="Wyszukiwarka dotacji unijnych" />
              </div>
              <div className="case-study-featured-thumb">
                <img src={storeHeader} alt="Sklep internetowy z odzieżą" />
              </div>
              <div className="case-study-featured-thumb">
                <img src={barberHeader} alt="Aplikacja do zamawiania barbera do domu" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyItem: React.FC<{ subtitle: string, title: string, description: string, link: string, linkText: string }> = ({ subtitle, title, description, link, linkText }) => (
  <div className="case-study-featured">
    <div className="section-heading heading-left">
      <span className="subtitle">{subtitle}</span>
      <h2 className="title">{title}</h2>
      <p>{description}</p>
      <a href={link} className="axil-btn btn-fill-primary btn-large">{linkText}</a>
    </div>
  </div>
);

export default CaseStudies;
