import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                <h4 className="title" data-i18n="phone">Telefon</h4>
                <p data-i18n="ourCustomerServiceDepartmentIsOpenFromMonday">
                    Nasz dział obsługi klienta jest czynny od poniedziałku do piątku w godzinach od 10:00 do 18:00.
                </p>
                <h4 className="phone-number">
                    <a href="tel:1234567890">+48 731 985 567</a>
                </h4>
            </div>
            <div className="contact-info mb--30">
                <h4 className="title">Email</h4>
                <p data-i18n="ourSupportTeamRespondsWithinHoursDuringStandardBusinessHours">
                    Nasz zespół wsparcia odpowiada w ciągu 48 godzin w czasie standardowych godzin pracy.
                </p>
                <h4 className="phone-number">
                    <a href="mailto:hello.mediahunters@gmail.com">hello.mediahunters@gmail.com</a>
                </h4>
            </div>
        </div>
    );
};

export default ContactInfo;
