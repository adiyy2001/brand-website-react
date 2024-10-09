import './Contact.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import { Breadcrumb } from 'react-bootstrap';
import ContactForm from '../../components/Home/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

const Contact: React.FC = () => {
    return (
        <div id="main-wrapper" className="main-wrapper">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>MediaHunters | Kontakt</title>
                <meta name="description" content="Skontaktuj się z MediaHunters, agencją kreatywną specjalizującą się w tworzeniu stron internetowych, brandingu i aplikacji mobilnych. Jesteśmy tutaj, aby pomóc w realizacji Twoich projektów." />
                <meta name="keywords" content="MediaHunters, kontakt, agencja kreatywna, strony internetowe, branding, aplikacje mobilne" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="MediaHunters" />
                
                <meta property="og:title" content="MediaHunters | Kontakt" />
                <meta property="og:description" content="Skontaktuj się z MediaHunters, agencją kreatywną specjalizującą się w tworzeniu stron internetowych, brandingu i aplikacji mobilnych. Jesteśmy tutaj, aby pomóc w realizacji Twoich projektów." />
                <meta property="og:image" content="https://mediahunters.pl/assets/media/logo.webp" />
                <meta property="og:url" content="https://mediahunters.pl/contact.html" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MediaHunters | Kontakt" />
                <meta name="twitter:description" content="Skontaktuj się z MediaHunters, agencją kreatywną specjalizującą się w tworzeniu stron internetowych, brandingu i aplikacji mobilnych. Jesteśmy tutaj, aby pomóc w realizacji Twoich projektów." />
                <meta name="twitter:image" content="https://mediahunters.pl/assets/media/logo.webp" />
                
                <link rel="canonical" href="https://mediahunters.pl/kontakt" />
                
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#ffffff" />
                
                <meta property="og:locale" content="pl_PL" />
                
                <meta name="dcterms.title" content="MediaHunters | Kontakt" />
                <meta name="dcterms.contributor" content="MediaHunters" />
                <meta name="dcterms.creator" content="MediaHunters" />
                <meta name="dcterms.publisher" content="MediaHunters" />
                <meta name="dcterms.description" content="Skontaktuj się z MediaHunters, agencją kreatywną specjalizującą się w tworzeniu stron internetowych, brandingu i aplikacji mobilnych. Jesteśmy tutaj, aby pomóc w realizacji Twoich projektów." />
                <meta name="dcterms.language" content="pl" />
                
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="general" />
                
                <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "MediaHunters",
                  "url": "https://mediahunters.pl/contact.html",
                  "logo": "https://mediahunters.pl/assets/media/logo.webp",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+48-731-985-567",
                    "contactType": "Customer Service",
                    "areaServed": "PL",
                    "availableLanguage": "Polish"
                  },
                  "sameAs": [
                    "https://www.facebook.com/people/Media-hunters/100089741575460/",
                    "https://www.instagram.com/mediahuntersco/"
                  ]
                }
                `}
                </script>
            </Helmet>
            <Header />
            <Breadcrumb />
            <section className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <ContactForm />
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1">
                        <img src={new URL('../../assets/media/others/bubble-2.webp', import.meta.url).href} alt="Bąbel" />
                    </li>
                    <li className="shape shape-2">
                        <img src={new URL('../../assets/media/others/bubble-1.webp', import.meta.url).href} alt="Bąbel" />
                    </li>
                    <li className="shape shape-3">
                        <img src={new URL('../../assets/media/others/circle-3.webp', import.meta.url).href} alt="Koło" />
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
