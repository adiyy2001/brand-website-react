import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const largeThumbRef = useRef<HTMLDivElement>(null);
  const smallThumbsRef = useRef<HTMLUListElement>(null);
  const shapesRef = useRef<HTMLUListElement>(null);

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

    if (largeThumbRef.current) {
      tl.fromTo(
        largeThumbRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.5'
      );
    }

    if (smallThumbsRef.current) {
      tl.fromTo(
        smallThumbsRef.current.querySelectorAll('.shape'),
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2 },
        '-=0.8'
      );
    }

    if (shapesRef.current) {
      tl.fromTo(
        shapesRef.current.querySelectorAll('.shape'),
        { scale: 0, rotation: 0, opacity: 0 },
        { scale: 1, rotation: 360, opacity: 1, stagger: 0.2 },
        '-=0.8'
      );
    }
  }, []);

  return (
    <section className="section call-to-action-area" ref={sectionRef}>
      <div className="container">
        <div className="call-to-action">
          <div className="section-heading heading-light" ref={headingRef}>
            <span className="subtitle" data-i18n="workTogether">Działajmy Razem</span>
            <h2 className="title" data-i18n="needSuccessfulProject">Potrzebujesz udanego projektu?</h2>
            <a href="contact.html" className="axil-btn btn-large btn-fill-white" data-i18n="getProjectEstimation">Wycena Projektu</a>
          </div>
          <div className="thumbnail">
            <div className="larg-thumb" ref={largeThumbRef}>
              <img className="paralax-image" src="https://mediahunters.pl/assets/media/others/chat-group.webp" alt="Chat" />
            </div>
            <ul className="list-unstyled small-thumb" ref={smallThumbsRef}>
              <li className="shape shape-1">
                <img className="paralax-image" src="https://mediahunters.pl/assets/media/others/laptop-poses.webp" loading="lazy" alt="Laptop" />
              </li>
              <li className="shape shape-2">
                <img className="paralax-image" src="https://mediahunters.pl/assets/media/others/bill-pay.webp" alt="Bill" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-9" ref={shapesRef}>
        <li className="shape shape-1">
          <img src="https://mediahunters.pl/assets/media/others/bubble-12.webp" alt="Comments" />
        </li>
        <li className="shape shape-2">
          <img src="https://mediahunters.pl/assets/media/others/bubble-16.webp" alt="Comments" />
        </li>
        <li className="shape shape-3">
          <img src="https://mediahunters.pl/assets/media/others/bubble-13.webp" alt="Comments" />
        </li>
        <li className="shape shape-4">
          <img src="https://mediahunters.pl/assets/media/others/bubble-14.webp" alt="Comments" />
        </li>
        <li className="shape shape-5">
          <img src="https://mediahunters.pl/assets/media/others/bubble-16.webp" alt="Comments" />
        </li>
        <li className="shape shape-6">
          <img src="https://mediahunters.pl/assets/media/others/bubble-15.webp" alt="Comments" />
        </li>
        <li className="shape shape-7">
          <img src="https://mediahunters.pl/assets/media/others/bubble-16.webp" alt="Comments" />
        </li>
      </ul>
    </section>
  );
};

export default CallToAction;
