import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
interface Section2Props {
  theme: 'dark' | 'light';
}

import macbookImage from '../../../assets/media/SingleCaseStudies/macbook.webp';
import Flex from '../styles/Flex';
import { StyledParagraph, StyledSpan } from '../styles/Peragraph';

import phone1 from '../../../assets/media/SingleCaseStudies/phones/1.png';
const phones = [
  {
    url: phone1,
    title: 'Title 1',
    id: 1,
  },
  {
    url: phone1,
    title: 'Title 2',
    id: 2,
  },
  {
    url: phone1,
    title: 'Title 3',
    id: 3,
  },
  {
    url: phone1,
    title: 'Title 4',
    id: 4,
  },
  {
    url: phone1,
    title: 'Title 5',
    id: 5,
  },
];

const Container = styled.div`
  min-height: 95vh;
  background: no-repeat center;
  background-image: url(${macbookImage});
  background-size: cover;
  position: relative;
  max-height: 500px;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 85%;
  transform: translateY(-85%);
  z-index: 10;
  max-width: 480px;
  background: transparent;

  @media (min-width: 1024px) {
    top: 70%;
    transform: translateY(-70%);
  }
`;

const Title = styled.h3`
  font-size: 1.8rem; /* text-2xl */
  color: white;
  font-weight: bold;
  font-family: 'Lato' sans-serif;
  margin: 0;
  @media (min-width: 1280px) {
    font-size: 2.6rem; /* xl:text-3xl */
  }
`;

const Paragraph = styled.p`
  font-size: 1rem; /* text-base */
  color: white;
  font-family: 'Lato' sans-serif;
  @media (min-width: 1280px) {
    font-size: 1.5rem; /* xl:text-2xl */
  }
`;

const Button = styled.button`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -95%);
  margin: auto;
  background: transparent;
  border: none;
  outline: none;

  @media (min-width: 1024px) {
    top: 90%;
    transform: translate(-50%, -90%);
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 1024px) {
    max-width: 85%;
    display: block;
    margin-left: auto;
  }
`;

const Slide = styled.div`
  text-align: center;
  img {
    width: 100%;
    height: auto;
    max-width: 250px; /* Adjust as needed */
    transition: transform 0.3s ease;
    display: block;
    margin: 0px auto;
  }
`;

const Section2: FC<Section2Props> = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Flex
      className="container"
      gap="20px 0"
      mdGap="24px 0"
      direction="column"
      lgGap="60px 0"
    >
      <Container>
        <div className="container">
          <OverlayText>
            <Title>Wandrerit tincidunt{'>'}</Title>
            <Paragraph>
              Quam lorem vivamus at porttitor montes molestie egestas elit
            </Paragraph>
          </OverlayText>
        </div>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
          >
            <mask
              id="mask0_4022_1788"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={25}
              height={24}
            >
              <rect x="0.75" width={24} height={24} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_4022_1788)">
              <path
                d="M12.75 22L5.75 15L7.15 13.575L11.75 18.175V11H13.75V18.175L18.35 13.6L19.75 15L12.75 22ZM11.75 9V6H13.75V9H11.75ZM11.75 4V2H13.75V4H11.75Z"
                fill="white"
              />
              <path
                d="M12.75 22L5.75 15L7.15 13.575L11.75 18.175V11H13.75V18.175L18.35 13.6L19.75 15L12.75 22ZM11.75 9V6H13.75V9H11.75ZM11.75 4V2H13.75V4H11.75Z"
                fill="#fff"
              />
            </g>
          </svg>
        </Button>
      </Container>
      <StyledParagraph style={{ fontStyle: 'italic' }}>
        Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor
        rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris.
        Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor
        gravida cursus quis ante. Sed luctus vitae tellus imperdiet.
      </StyledParagraph>
      <StyledDiv>
        <StyledParagraph>
          Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo
          sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in
          arcu odio. Scelerisque tristique semper sapien sagittis egestas
          condimentum. Quam lorem vivamus at porttitor montes molestie egestas
          elit. Auctor rhoncus sed adipiscing pulvinar laoreet{' '}
          <StyledSpan color="#7878F2">
            {
              '<hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque>'
            }
          </StyledSpan>
          . Sit dolor gravida cursus quis ante. Sed luctus vitae tellus
          imperdiet.
        </StyledParagraph>
      </StyledDiv>
      <Slider {...settings}>
        {phones.map((phone) => (
          <Slide key={phone.id}>
            <img src={phone.url} alt={phone.title} />
          </Slide>
        ))}
      </Slider>
    </Flex>
  );
};

export default Section2;