import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Project.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronDownIcon, GlyphIcon } from '../../shared/icons';

interface Hashtag {
  text: string;
}

interface Image {
  url: string;
  alt: string;
}

interface ProjectProps {
  name: string;
  hashtags: Hashtag[];
  header: string;
  heroDescription: string;
  heroImage: Image;
  heroImageHeader: string;
  heroImageSubHeader: string;
  topSectionHeader: string;
  topSectionDescription: string;
  topSectionSubDescription: string;
  sliderImages: Image[];
}

const Project: React.FC<ProjectProps> = ({
  hashtags,
  header,
  heroDescription,
  heroImage,
  heroImageHeader,
  heroImageSubHeader,
  topSectionDescription,
  topSectionHeader,
  topSectionSubDescription,
  sliderImages,
}) => {
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setFullSizeImage(url);
  };

  const handleCloseFullSize = () => {
    setFullSizeImage(null);
  };

  return (
    <div className="project">
      <section className="project__hashtags" aria-label="Hashtags">
        <GlyphIcon aria-hidden="true" />
        {hashtags.map((hashtag, index) => (
          <span key={index} className="project__hashtag">
            <span className="sr-only">Hashtag </span>#{hashtag.text}
          </span>
        ))}
      </section>
      <header className="project__header">
        <h1>{header}</h1>
        <p className="project__hero-description">{heroDescription}</p>
        <button className="project__chevron-button" aria-label="Scroll down">
          <ChevronDownIcon />
        </button>
      </header>
      <picture className="project__hero-image">
        <img
          src={heroImage.url}
          alt={heroImage.alt}
          className="project__hero-img"
        />
        <figcaption className="project__hero-caption">
          <h2 className="project__hero-image-header">{heroImageHeader}</h2>
          <h3 className="project__hero-image-subheader">
            {heroImageSubHeader}
          </h3>
        </figcaption>
        <button className="project__chevron-button" aria-label="Scroll down">
          <ChevronDownIcon />
        </button>
      </picture>
      <section className="project__top-section">
        <h2 className="project__top-section-header">{topSectionHeader}</h2>
        <p className="project__top-section-description">
          {topSectionDescription}
        </p>
        <p className="project__top-section-subdescription">
          {topSectionSubDescription}
        </p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="project__slider"
          modules={[Autoplay, Pagination]}
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index} className="project__slider-slide">
              <img
                src={image.url}
                alt={image.alt}
                className="project__slider-img"
                onClick={() => handleImageClick(image.url)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {fullSizeImage && (
        <div
          className="project__full-size-overlay"
          onClick={handleCloseFullSize}
        >
          <img
            src={fullSizeImage}
            alt="Full size"
            className="project__full-size-img"
          />
        </div>
      )}
    </div>
  );
};

export default Project;
