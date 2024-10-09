import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Banner.css';

const Banner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".banner-content", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".large-thumb-2", {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".shape-group .shape", {
        duration: 1,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.5,
      });

      gsap.from(".shape-group-21 .shape", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 2,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="banner banner-style-1" ref={bannerRef}>
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1 className="title" data-i18n="TogetherWeWillBuildSuccessOfYourCompany">Strony internetowe Wrocław</h1>
              <span className="subtitle" data-i18n="discoverThePowerOfPersonalization">
                Odkryj potęgę personalizacji - Skuteczne komunikaty dopasowane do Twojego odbiorcy
              </span>
              <a href="contact.html" className="axil-btn btn-fill-primary btn-large" data-i18n="letsGetStarted">Zacznijmy</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div>
                <img src="https://mediahunters.pl/assets/media/banner/window.webp" alt="Laptop" loading="eager" />
              </div>
              <div className="large-thumb-2">
                <img src="https://mediahunters.pl/assets/media/banner/laptop-poses.webp" alt="Laptop" loading="lazy" />
              </div>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <img src="https://mediahunters.pl/assets/media/banner/chat-group.webp" alt="chat" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img src="https://mediahunters.pl/assets/media/others/bubble-39.webp" alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <img src="https://mediahunters.pl/assets/media/others/bubble-38.webp" alt="Bubble" />
        </li>
        <li className="shape shape-3">
          <img src="https://mediahunters.pl/assets/media/others/bubble-14.webp" alt="Bubble" />
        </li>
        <li className="shape shape-4">
          <img src="https://mediahunters.pl/assets/media/others/bubble-14.webp" alt="Bubble" />
        </li>
        <li className="shape shape-5">
          <img src="https://mediahunters.pl/assets/media/others/bubble-14.webp" alt="Bubble" />
        </li>
        <li className="shape shape-6">
          <img src="https://mediahunters.pl/assets/media/others/bubble-40.webp" alt="Bubble" />
        </li>
        <li className="shape shape-7">
          <img src="https://mediahunters.pl/assets/media/others/bubble-41.webp" alt="Bubble" />
        </li>
      </ul>
    </section>
  );
};

export default Banner;
