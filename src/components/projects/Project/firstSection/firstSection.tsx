import './firstSection.css';
import { GlyphIcon } from '../../../shared/icons';

interface Benefit {
  text: string;
  icon?: React.ReactNode;
}

interface Picture {
  url: string;
  alt: string;
}

interface FirstSectionProps {
  header: string;
  benefits: Benefit[];
  pictures: Picture[];
  benefitHeader: string;
  benefitDescription: string;
  seoTitle: string;
  seoDescription: string;
}

export const FirstSection = ({
  header,
  benefits,
  pictures,
  benefitHeader,
  benefitDescription,
}: FirstSectionProps) => {
  return (
    <>
      <section className="first-section">
        <h1 className="first-section__header">{header}</h1>
        <div className="first-section__benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="first-section__benefit-item">
              {benefit.icon || <GlyphIcon />}
              <span className="first-section__benefit-text">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
        <div className="first-section__pictures">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture.url}
              alt={picture.alt}
              className="first-section__picture"
            />
          ))}
        </div>
        <div className="first-section__benefit-detail">
          <h2 className="first-section__benefit-header">{benefitHeader}</h2>
          <p className="first-section__benefit-description">
            {benefitDescription}
          </p>
        </div>
      </section>
    </>
  );
};
