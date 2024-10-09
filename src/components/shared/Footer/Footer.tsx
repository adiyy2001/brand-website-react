import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Footer.css';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLUListElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }

    if (socialLinksRef.current) {
      tl.fromTo(
        socialLinksRef.current.querySelectorAll('li'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2 },
        '-=0.5'
      );
    }

    if (leftColumnRef.current) {
      tl.fromTo(
        leftColumnRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1 },
        '-=0.5'
      );
    }

    if (rightColumnRef.current) {
      tl.fromTo(
        rightColumnRef.current.querySelectorAll('.footer-widget'),
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2 },
        '-=0.5'
      );
    }

    if (bottomRef.current) {
      tl.fromTo(
        bottomRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.5'
      );
    }
  }, []);

  return (
    <footer className="footer-area" ref={footerRef}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled" ref={socialLinksRef}>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100089741575460">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mediahuntersco/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5" ref={leftColumnRef}>
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title" data-i18n="letsBeInTouch">Bądźmy w kontakcie!</h2>
                  <p data-i18n="weHaveMuchToOffer">
                    Mamy wiele do zaoferowania - inspirujące usługi, świeże
                    pomysły i rozwiązania dopasowane do Twoich potrzeb.
                    Skontaktuj się z nami, a razem osiągniemy sukces!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7" ref={rightColumnRef}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title" data-i18n="ourServices">Nasze Usługi</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li><a href="service.html" data-i18n="logoAndBrandingDesign">Projektowanie Logo i Brandingu</a></li>
                        <li><a href="service.html" data-i18n="websiteDevelopment">Tworzenie Stron Internetowych</a></li>
                        <li><a href="service.html" data-i18n="websitesPositioning">Pozycjonowanie stron</a></li>
                        <li><a href="service.html" data-i18n="searchEngineOptimization">Optymalizacja dla Wyszukiwarek (SEO)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title" data-i18n="support">Wsparcie</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li><a href="contact.html" data-i18n="contactUs">Skontaktuj się z nami</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" ref={bottomRef}>
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text" data-i18n="allRightsReservedByMediaHunters">
                  © 2023. Wszelkie prawa zastrzeżone przez <a href="https://mediahunters.pl/">MediaHunters</a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
