import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Div from '../styles/Div';
import Flex from '../styles/Flex';
import { Heading3, Heading4 } from '../styles/Heading';
import { StyledParagraph } from '../styles/Peragraph';
import ShowcaseHeader from '../styles/ShowcaseHeading';
import { StyledSpan } from '../styles/Typography';
interface Section3Props {
  theme: 'dark' | 'light';

  darkContent?: {
    heading: string;
    sectionHeading: string;
    list: {
      name: string;
      icon: string | ReactNode;
    }[];
    images: {
      imgSrc: string;
      imgAlt?: string;
    }[];
    title2: string | ReactNode;
    description: string | ReactNode;
  };
  lightContent?: {
    heading: string;
    sectionHeading: string;
    title: string;
    description1: string;
    description2: string;
    list: {
      name: string;
      icon: string | ReactNode;
    }[];
    image1: { imgSrc: string; imgAlt?: string };
    image2: { imgSrc: string; imgAlt?: string };
  };
}

const DarkPhoneImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  height: 500px;
  object-fit: contain;
  @media (min-width: 640px) {
    width: 200px;
    height: 600px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }
`;
const LightImage1 = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  height: 500px;
  object-fit: contain;
  border-radius: 16px;

  @media (min-width: 640px) {
    width: 200px;
    height: 600px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const LightImage2 = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  @media (min-width: 640px) {
    height: 600px;
  }
`;
const Section3: FC<Section3Props> = ({ theme, darkContent, lightContent }) => {
  return theme === 'light' ? (
    <Flex
      className="container"
      gap="20px 0px"
      lgGap="60px 0px"
      mdGap="24px 0px"
      direction="column"
    >
      <ShowcaseHeader style={{ fontWeight: 300 }} textAlign="center">
        {darkContent?.heading}
      </ShowcaseHeader>
      <Flex gap="20px 0px" lgGap="60px 0px" mdGap="24px 0px" direction="column">
        <Div
          gap="20px 0px"
          lgGap="60px 0px"
          mdGap="24px 0px"
          direction="column"
          display="flex"
        >
          <div>
            <Heading3>{darkContent?.sectionHeading}</Heading3>
          </div>
          <Div
            display="flex"
            direction="column"
            mdDirection="row"
            mdWrap="wrap"
            gap="1rem"
            justify="space-between"
          >
            {darkContent?.list?.map((item, index) => (
              <Div key={index} display="inline-flex" align="center" gap="8px">
                {item.icon}
                <StyledSpan>{item.name}</StyledSpan>
              </Div>
            ))}
          </Div>
        </Div>
        <Div
          basis="100%"
          gap="20px"
          xlGap="40px"
          lgBasis="50%"
          direction="column"
          mdDirection="row"
        >
          <Flex direction="column" lgDirection="row" gap="20px">
            <Div
              gap="20px"
              display="flex"
              xlGap="40px"
              basis="100%"
              mdBasis="50%"
              direction="column"
              mdDirection="row"
            >
              {darkContent?.images?.map((img, index) => (
                <DarkPhoneImage key={index} alt={img.imgAlt} src={img.imgSrc} />
              ))}
            </Div>
            <Div
              gap="20px"
              display="flex"
              xlGap="40px"
              basis="100%"
              mdBasis="50%"
              direction="column"
            >
              <Heading4>{darkContent?.title2}</Heading4>
              <StyledParagraph>{darkContent?.description}</StyledParagraph>
            </Div>
          </Flex>
        </Div>
      </Flex>
    </Flex>
  ) : (
    <Flex
      className="container"
      gap="20px 0px"
      lgGap="60px 0px"
      mdGap="24px 0px"
      direction="column"
    >
      <ShowcaseHeader style={{ fontWeight: 300 }} textAlign="center">
        {lightContent?.heading}
      </ShowcaseHeader>
      <Flex gap="20px 0px" lgGap="60px 0px" mdGap="24px 0px" direction="column">
        <Div
          gap="20px 0px"
          lgGap="60px 0px"
          mdGap="24px 0px"
          direction="column"
          display="flex"
        >
          <div>
            <Heading3>{lightContent?.sectionHeading}</Heading3>
          </div>
          <Div
            gap="20px"
            display="flex"
            xlGap="40px"
            basis="100%"
            mdBasis="50%"
            direction="column"
          >
            <Heading4>{lightContent?.title}</Heading4>
            <StyledParagraph>{lightContent?.description1}</StyledParagraph>
          </Div>
        </Div>
        <Div
          basis="100%"
          gap="20px"
          xlGap="40px"
          lgBasis="50%"
          direction="column"
          mdDirection="row"
        >
          <Flex direction="column" lgDirection="row" gap="20px">
            <Div
              gap="20px"
              display="flex"
              xlGap="40px"
              basis="100%"
              mdBasis="30%"
              direction="column"
              mdDirection="row"
            >
              <LightImage1
                src={lightContent?.image1.imgSrc}
                alt={lightContent?.image1.imgAlt}
              />
            </Div>
            <div style={{ flex: 1 }}>
              <LightImage2
                src={lightContent?.image2.imgSrc}
                alt={lightContent?.image2.imgAlt}
              />
            </div>
          </Flex>
        </Div>
        <Div
          display="flex"
          direction="column"
          mdDirection="row"
          gap="24px"
          lgGap="40px"
        >
          <Div
            style={{
              maxWidth: '256px',
            }}
          >
            <Div display="flex" direction="column" mdWrap="wrap" gap="1rem">
              {lightContent?.list?.map((item, index) => (
                <Div key={index} display="inline-flex" align="center" gap="8px">
                  {item.icon}
                  <StyledSpan>{item.name}</StyledSpan>
                </Div>
              ))}
            </Div>
          </Div>
          <Div style={{ flex: 1 }}>
            <StyledParagraph>{lightContent?.description2}</StyledParagraph>
          </Div>
        </Div>
      </Flex>
    </Flex>
  );
};

export default Section3;
