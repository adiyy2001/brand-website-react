import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection: React.FC<{ id: number, title: string, subtitle: string, services: { icon: string, title: string, description: string }[] }> = ({ id, title, subtitle, services }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (section) {
            gsap.fromTo(section, { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                }
            });
        }
    }, []);

    return (
        <section id={`section${id}`} ref={sectionRef} className="section section-padding">
            <div className="container">
                <div className="section-heading heading-left">
                    <span className="subtitle" data-i18n={subtitle}>{title}</span>
                    <h2 className="title" data-i18n={subtitle}>{title} Usługi</h2>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div className="service-style-2">
                                <div className="thumbnail">
                                    <img src={new URL(`../../assets/media/icon/${service.icon}`, import.meta.url).href} alt="Ikona" />
                                </div>
                                <div className="content">
                                    <h5 className="title">{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
