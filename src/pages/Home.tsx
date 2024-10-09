import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Home/Banner/Banner';
import CaseStudies from '../components/Home/CaseStudies/CaseStudies';
import Footer from '../components/shared/Footer/Footer';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Header from '../components/shared/Header/Header';
import CallToAction from '../components/shared/CallToAction/CallToAction';
import AboutUs from '../components/Home/AboutUs/AboutUs';

const Home: React.FC = () => (
  <div id="main-wrapper" className="main-wrapper">
    <Helmet>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>MediaHunters | Agencja interaktywna</title>
      <meta name="description" content="MediaHunters to Agencja interaktywna, która pomaga firmom rozwijać swoją obecność w Internecie. Oferujemy szeroki zakres usług, w tym projektowanie i tworzenie stron internetowych, SEO i marketing w mediach społecznościowych." />
      <meta name="keywords" content="Agencja interaktywna, projektowanie stron internetowych, rozwój web, seo, marketing w mediach społecznościowych, Wrocław" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="google-site-verification" content="nkpPTpP-0xL8HdHEdKuOKsLyuNvYSTKcSMsGbWvsoEg" />
      
      <meta property="og:title" content="MediaHunters | Agencja interaktywna" />
      <meta property="og:description" content="MediaHunters to Agencja interaktywna, która pomaga firmom rozwijać swoją obecność w Internecie. Oferujemy szeroki zakres usług, w tym projektowanie i tworzenie stron internetowych, SEO i marketing w mediach społecznościowych." />
      <meta property="og:image" content="https://mediahunters.pl/assets/media/logo.webp" />
      <meta property="og:url" content="https://mediahunters.pl" />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MediaHunters | Agencja interaktywna" />
      <meta name="twitter:description" content="MediaHunters to Agencja interaktywna, która pomaga firmom rozwijać swoją obecność w Internecie. Oferujemy szeroki zakres usług, w tym projektowanie i tworzenie stron internetowych, SEO i marketing w mediach społecznościowych." />
      <meta name="twitter:image" content="https://mediahunters.pl/assets/media/logo.webp" />
      
      <link rel="canonical" href="https://mediahunters.pl" />
      
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MediaHunters" />
      <meta name="theme-color" content="#ffffff" />
      
      <meta property="og:locale" content="pl_PL" />
      
      <meta name="dcterms.title" content="MediaHunters | Agencja interaktywna" />
      <meta name="dcterms.contributor" content="MediaHunters" />
      <meta name="dcterms.creator" content="MediaHunters" />
      <meta name="dcterms.publisher" content="MediaHunters" />
      <meta name="dcterms.description" content="MediaHunters to Agencja interaktywna, która pomaga firmom rozwijać swoją obecność w Internecie. Oferujemy szeroki zakres usług, w tym projektowanie i tworzenie stron internetowych, SEO i marketing w mediach społecznościowych." />
      <meta name="dcterms.language" content="pl" />
      
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MediaHunters",
          "url": "https://mediahunters.pl/",
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
    <Banner />
    <Services />
    <CaseStudies />
    <AboutUs />
    <Testimonials />
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
