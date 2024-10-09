import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const ServiceNav: React.FC = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fixedElem = navRef.current;
        const containerElem = containerRef.current;

        if (fixedElem && containerElem) {
            const distance = fixedElem.offsetTop - 100;
            const totalDistance = containerElem.offsetHeight + distance;

            const handleScroll = () => {
                const scrollY = window.scrollY;
                if (scrollY >= distance && scrollY < totalDistance) {
                    gsap.set(fixedElem, { position: 'fixed', left: 0, right: 0, top: 0, zIndex: 5 });
                } else {
                    gsap.set(fixedElem, { position: 'relative', top: 'auto', zIndex: 'auto' });
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            gsap.to(window, { scrollTo: { y: section, offsetY: 70 }, duration: 1, ease: 'power3.out' });
        }
    };

    return (
        <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed" ref={navRef}>
            <div className="container" ref={containerRef}>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="#section1" data-i18n="design" onClick={(e) => handleLinkClick(e, 'section1')}>Projektowanie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#section2" data-i18n="development" onClick={(e) => handleLinkClick(e, 'section2')}>Rozwój</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#section3" data-i18n="onlineMarketing" onClick={(e) => handleLinkClick(e, 'section3')}>Marketing Online</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#section4" data-i18n="businessSupport" onClick={(e) => handleLinkClick(e, 'section4')}>Biznes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#section5" data-i18n="technology" onClick={(e) => handleLinkClick(e, 'section5')}>Technologia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#section6" data-i18n="contentStrategy" onClick={(e) => handleLinkClick(e, 'section6')}>Strategia Treści</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ServiceNav;
