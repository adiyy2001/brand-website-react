import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleUp, faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import '../../../assets/css/darkmode.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isSticky] = useState(false);
  const [isBackToTopVisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const lightIconRef = useRef<HTMLLIElement>(null);
  const darkIconRef = useRef<HTMLLIElement>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      gsap.to(lightIconRef.current, { opacity: 0, duration: 0.5, onComplete: () => setTheme(newTheme) });
      gsap.to(darkIconRef.current, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(darkIconRef.current, { opacity: 0, duration: 0.5, onComplete: () => setTheme(newTheme) });
      gsap.to(lightIconRef.current, { opacity: 1, duration: 0.5 });
    }
  };

  const showTranslations = (lng: string) => {
    const translations = i18n.getDataByLanguage(lng);
    console.log(`Current translations for ${lng}:`, translations);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng, (err, t) => {
      if (err) {
        console.error('Error changing language:', err);
        return;
      }
      showTranslations(lng);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector('.axil-mainmenu') as HTMLElement | null;
      const stickyPlaceHolder = document.getElementById('axil-sticky-placeholder') as HTMLElement | null;
      const menuH = menu?.offsetHeight ?? 0;
      const topHeaderH = (document.querySelector('.axil-header-top') as HTMLElement | null)?.offsetHeight ?? 0;
      const targetScroll = topHeaderH + 200;

      if (window.scrollY > targetScroll) {
        menu?.classList.add('axil-sticky');
        if (stickyPlaceHolder) stickyPlaceHolder.style.height = `${menuH}px`;
      } else {
        menu?.classList.remove('axil-sticky');
        if (stickyPlaceHolder) stickyPlaceHolder.style.height = '0';
      }
    };

    const handleResize = () => {
      const body = document.body;
      const mobileMenuPopup = document.getElementById('mobilemenu-popup') as HTMLElement | null;
      if (window.matchMedia('(min-width: 992px)').matches) {
        body.classList.remove('mobilemenu-active');
        mobileMenuPopup?.classList.remove('offcanvas', 'show');
        mobileMenuPopup?.removeAttribute('style');
        document.querySelectorAll('.axil-submenu').forEach(submenu => submenu.removeAttribute('style'));
      } else {
        body.classList.add('mobilemenu-active');
        body.style.paddingRight = '0';
        mobileMenuPopup?.classList.add('offcanvas');
        document.querySelectorAll('.menu-item-has-children > a').forEach(anchor => {
          anchor.addEventListener('click', e => e.preventDefault());
        });
      }
    };

    const handleBackToTop = () => {
      const btn = document.getElementById('backto-top') as HTMLElement | null;
      if (window.scrollY > 300) {
        btn?.classList.add('show');
      } else {
        btn?.classList.remove('show');
      }
    };

    const scrollToTop = (e: Event) => {
      e.preventDefault();
      gsap.to(window, { scrollTo: 0, duration: 0.3 });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleBackToTop);
    window.addEventListener('resize', handleResize);

    handleResize();

    document.getElementById('backto-top')?.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTop);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('active-dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      lightIconRef.current?.style.setProperty('display', 'none');
      darkIconRef.current?.style.setProperty('display', 'block');
    } else {
      lightIconRef.current?.style.setProperty('display', 'block');
      darkIconRef.current?.style.setProperty('display', 'none');
    }
  }, [theme]);

  return (
    <header className={`header axil-header header-style-1 ${isSticky ? 'axil-sticky' : ''}`}>
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link to="/">
                <img className="light-version-logo" rel="preload" src="https://mediahunters.pl/assets/media/logo.webp" alt="logo" />
              </Link>
              <Link to="/">
                <img rel="preload" className="dark-version-logo" src="https://mediahunters.pl/assets/media/logo.webp" alt="logo" />
              </Link>
              <Link to="/">
                <img rel="preload" className="sticky-logo" src="https://mediahunters.pl/assets/media/logo.webp" alt="logo" />
              </Link>
            </div>
            <div className="header-main-nav">
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link to="/">
                        <img className="light-mode" rel="preload" src="https://mediahunters.pl/assets/media/logo.webp" alt="Site Logo" />
                        <img rel="preload" className="dark-mode" src="https://mediahunters.pl/assets/media/logo.webp" alt="Site Logo" />
                      </Link>
                    </div>
                    <button className="mobile-menu-close" data-bs-dismiss="offcanvas">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
                <ul className="mainmenu">
                  <li><Link to="/">{t('home')}</Link></li>
                  <li><Link to="/about-us" data-i18n="aboutUs">{t('aboutUs')}</Link></li>
                  <li><Link to="/service" data-i18n="services">{t('services')}</Link></li>
                  <li><Link to="/contact" data-i18n="contact">{t('contact')}</Link></li>
                  <li><Link to="/projects" data-i18n="project">{t('projects')}</Link></li>
                </ul>
              </nav>
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="sidemenu-btn d-lg-block d-none">
                  <div className="circle-container" id="switchLanguageBtn">
                    <button className="lang-button" id="plButton" onClick={() => changeLanguage('pl')}>pl</button>
                    <span>|</span>
                    <button className="lang-button" id="enButton" onClick={() => changeLanguage('en')}>en</button>
                  </div>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button className="btn-wrap btn-dark" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li className="my_switcher d-block">
                  <ul>
                    <li title="Light Mode" ref={lightIconRef} style={{ display: theme === 'light' ? 'block' : 'none' }}>
                      <a className="setColor light" data-theme="light" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={faLightbulb} />
                      </a>
                    </li>
                    <li title="Dark Mode" ref={darkIconRef} style={{ display: theme === 'dark' ? 'block' : 'none' }}>
                      <a className="setColor dark" data-theme="dark" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={faMoon} />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isBackToTopVisible && (
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a>
      )}
    </header>
  );
};

export default Header;
