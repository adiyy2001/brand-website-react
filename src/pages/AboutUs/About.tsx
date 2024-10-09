import React from 'react';
import './AboutUs.css';
import { Helmet } from 'react-helmet';
import { Breadcrumb } from 'react-bootstrap';
import AboutSection from '../../components/AboutUs/AboutSection';
import ProcessSection from '../../components/AboutUs/ProcessSection';
import TeamSection from '../../components/AboutUs/TeamSection';
import ValuesSection from '../../components/AboutUs/ValuesSection';
import CallToAction from '../../components/shared/CallToAction/CallToAction';
import Footer from '../../components/shared/Footer/Footer';
import Header from '../../components/shared/Header/Header';

const AboutUs: React.FC = () => {
    return (
        <div className="main-wrapper">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>MediaHunters | O nas</title>
                <meta name="description" content="Poznaj zespół MediaHunters - agencji interaktywnej, która pomaga firmom rozwijać swoją obecność w Internecie. Specjalizujemy się w projektowaniu stron internetowych, SEO, marketingu w mediach społecznościowych oraz brandingu." />
                <meta name="keywords" content="Agencja interaktywna, projektowanie stron internetowych, rozwój web, SEO, marketing w mediach społecznościowych, branding, Wrocław" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="MediaHunters" />
                
                <meta property="og:title" content="MediaHunters | O nas" />
                <meta property="og:description" content="Poznaj zespół MediaHunters - agencji interaktywnej, która pomaga firmom rozwijać swoją obecność w Internecie. Specjalizujemy się w projektowaniu stron internetowych, SEO, marketingu w mediach społecznościowych oraz brandingu." />
                <meta property="og:image" content="https://mediahunters.pl/assets/media/logo.webp" />
                <meta property="og:url" content="https://mediahunters.pl/about-us.html" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MediaHunters | O nas" />
                <meta name="twitter:description" content="Poznaj zespół MediaHunters - agencji interaktywnej, która pomaga firmom rozwijać swoją obecność w Internecie. Specjalizujemy się w projektowaniu stron internetowych, SEO, marketingu w mediach społecznościowych oraz brandingu." />
                <meta name="twitter:image" content="https://mediahunters.pl/assets/media/logo.webp" />
                
                <link rel="canonical" href="https://mediahunters.pl/about-us.html" />
                
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#ffffff" />
                
                <meta property="og:locale" content="pl_PL" />
                
                <meta name="dcterms.title" content="MediaHunters | O nas" />
                <meta name="dcterms.contributor" content="MediaHunters" />
                <meta name="dcterms.creator" content="MediaHunters" />
                <meta name="dcterms.publisher" content="MediaHunters" />
                <meta name="dcterms.description" content="Poznaj zespół MediaHunters - agencji interaktywnej, która pomaga firmom rozwijać swoją obecność w Internecie. Specjalizujemy się w projektowaniu stron internetowych, SEO, marketingu w mediach społecznościowych oraz brandingu." />
                <meta name="dcterms.language" content="pl" />
                
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="general" />
                
                <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "MediaHunters",
                  "url": "https://mediahunters.pl/about-us.html",
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
                
                <link rel="shortcut icon" type="image/x-icon" href="assets/media/favicon.webp" />
                <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/vendor/font-awesome.css" />
                <link rel="stylesheet" href="assets/css/vendor/slick.css" />
                <link rel="stylesheet" href="assets/css/vendor/slick-theme.css" />
                <link rel="stylesheet" href="assets/css/vendor/sal.css" />
                <link rel="stylesheet" href="assets/css/vendor/magnific-popup.css" />
                <link rel="stylesheet" href="assets/css/vendor/green-audio-player.min.css" />
                <link rel="stylesheet" href="assets/css/vendor/odometer-theme-default.css" />
                <link rel="stylesheet" href="assets/css/app.css" />
            </Helmet>
            <Header />
            <Breadcrumb />
            <AboutSection />
            <ValuesSection />
            <TeamSection />
            <ProcessSection />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default AboutUs;
