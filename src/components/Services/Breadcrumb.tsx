import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li><Link to="/" data-i18n="mainPage">Strona główna</Link></li>
                        <li className="active">Usługi</li>
                    </ul>
                </div>
                <div className="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 className="title h2" data-i18n="bestSolutionsForYourBusiness">Najlepsze rozwiązania dla Twojego biznesu</h1>
                    <p data-i18n="giveYourBusinessUniqueLogoThatStandsOut">
                        Daj swojemu biznesowi unikalne logo, które wyróżni się spośród tłumu. Stworzymy logo specjalnie dla Twojej firmy.
                    </p>
                </div>
                <ul className="shape-group-8 list-unstyled">
                    <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                        <img src={new URL('../../assets/media/others/bubble-9.webp', import.meta.url).href} alt="Bubble" />
                    </li>
                    <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                        <img src={new URL('../../assets/media/others/bubble-21.webp', import.meta.url).href} alt="Bubble" />
                    </li>
                    <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                        <img src={new URL('../../assets/media/others/line-4.webp', import.meta.url).href} alt="Line" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;
