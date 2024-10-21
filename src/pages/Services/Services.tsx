import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Services/Breadcrumb';
import ServiceNav from '../../components/Services/ServiceNav';
import ServiceSection from '../../components/Services/ServiceSection';
import CallToAction from '../../components/shared/CallToAction/CallToAction';
import Footer from '../../components/shared/Footer/Footer';
import Header from '../../components/shared/Header/Header';

const servicesData = [
  {
    id: 1,
    title: 'Projektowanie',
    subtitle: 'design',
    services: [
      {
        icon: 'icon-29.webp',
        title: 'Logo & Branding',
        description:
          'Tworzymy profesjonalne logo i identyfikację wizualną, która wyróżni Twoją firmę spośród konkurencji. Nasze projekty są dopasowane do potrzeb klientów oraz przyjazne dla użytkowników i wyszukiwarek.',
      },
      {
        icon: 'icon-27.webp',
        title: 'Projektowanie Stron Internetowych',
        description:
          'Oferujemy nowoczesne i funkcjonalne strony internetowe, które skutecznie przyciągają klientów i zwiększają konwersje. Nasze rozwiązania są responsywne, zoptymalizowane pod kątem SEO i dostosowane do indywidualnych potrzeb biznesowych.',
      },
    ],
  },
  {
    id: 2,
    title: 'Rozwój',
    subtitle: 'development',
    services: [
      {
        icon: 'icon-31.webp',
        title: 'Zarządzanie Treścią',
        description:
          'Zajmujemy się profesjonalnym zarządzaniem treścią. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
      {
        icon: 'icon-32.webp',
        title: 'Tworzenie Aplikacji Mobilnych',
        description:
          'Zajmujemy się profesjonalnym tworzeniem aplikacji mobilnych. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
      {
        icon: 'icon-33.webp',
        title: 'eCommerce',
        description:
          'Zajmujemy się profesjonalnym e-commerce. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
    ],
  },
  {
    id: 3,
    title: 'Marketing Online',
    subtitle: 'onlineMarketing',
    services: [
      {
        icon: 'icon-34.webp',
        title: 'Optymalizacja wyszukiwarki (SEO)',
        description:
          'Zajmujemy się profesjonalną optymalizacją SEO. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
    ],
  },
  {
    id: 4,
    title: 'Biznes',
    subtitle: 'businessSupport',
    services: [
      {
        icon: 'icon-40.webp',
        title: 'Konsulting Biznesowy',
        description:
          'Zajmujemy się profesjonalnym konsultingiem biznesowym. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
      {
        icon: 'icon-41.webp',
        title: 'Tworzenie Treści',
        description:
          'Zajmujemy się profesjonalnym tworzeniem treści. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
      {
        icon: 'icon-42.webp',
        title: 'Raportowanie',
        description:
          'Zajmujemy się profesjonalnym raportowaniem. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
    ],
  },
  {
    id: 5,
    title: 'Technologia',
    subtitle: 'technology',
    services: [
      {
        icon: 'icon-43.webp',
        title: 'Hosting',
        description:
          'Zajmujemy się profesjonalnym hostingiem. Nasze rozwiązania są przyjazne dla wyszukiwarek internetowych oraz użytkowników.',
      },
    ],
  },
  {
    id: 6,
    title: 'Strategia Treści',
    subtitle: 'contentStrategy',
    services: [
      {
        icon: 'icon-45.webp',
        title: 'Praktyki Audytu Strony Internetowej',
        description:
          'Zajmujemy się przeglądem i analizą stron internetowych. Nasze rozwiązania zwiększają efektywność marketingową.',
      },
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div id="main-wrapper" className="main-wrapper">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>MediaHunters | Usługi</title>
        <meta
          name="description"
          content="MediaHunters oferuje szeroki zakres usług, w tym projektowanie stron internetowych, rozwój, branding i marketing. Pomagamy firmom rozwijać ich obecność w Internecie i osiągać cele."
        />
        <meta
          name="keywords"
          content="Agencja interaktywna, projektowanie stron internetowych, rozwój web, branding, marketing, seo, mediahunters"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="MediaHunters" />

        <meta property="og:title" content="MediaHunters | Usługi" />
        <meta
          property="og:description"
          content="MediaHunters oferuje szeroki zakres usług, w tym projektowanie stron internetowych, rozwój, branding i marketing. Pomagamy firmom rozwijać ich obecność w Internecie i osiągać cele."
        />
        <meta
          property="og:image"
          content="https://mediahunters.pl/assets/media/logo.webp"
        />
        <meta
          property="og:url"
          content="https://mediahunters.pl/service.html"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MediaHunters | Usługi" />
        <meta
          name="twitter:description"
          content="MediaHunters oferuje szeroki zakres usług, w tym projektowanie stron internetowych, rozwój, branding i marketing. Pomagamy firmom rozwijać ich obecność w Internecie i osiągać cele."
        />
        <meta
          name="twitter:image"
          content="https://mediahunters.pl/assets/media/logo.webp"
        />

        <link rel="canonical" href="https://mediahunters.pl/service.html" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="pl_PL" />

        <meta name="dcterms.title" content="MediaHunters | Usługi" />
        <meta name="dcterms.contributor" content="MediaHunters" />
        <meta name="dcterms.creator" content="MediaHunters" />
        <meta name="dcterms.publisher" content="MediaHunters" />
        <meta
          name="dcterms.description"
          content="MediaHunters oferuje szeroki zakres usług, w tym projektowanie stron internetowych, rozwój, branding i marketing. Pomagamy firmom rozwijać ich obecność w Internecie i osiągać cele."
        />
        <meta name="dcterms.language" content="pl" />

        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "MediaHunters",
                  "url": "https://mediahunters.pl/services.html",
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
      <ServiceNav />
      {servicesData.map((section, index) => (
        <ServiceSection
          key={index}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          services={section.services}
        />
      ))}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
