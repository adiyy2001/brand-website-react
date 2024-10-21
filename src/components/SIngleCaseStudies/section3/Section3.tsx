import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Div from '../styles/Div';
import Flex from '../styles/Flex';
import { Heading3 } from '../styles/Heading';
import ShowcaseHeader from '../styles/ShowcaseHeading';
import { StyledSpan } from '../styles/Typography';
interface Section3Props {
  theme: 'dark' | 'light';
  sectionTitle: string;
  darkContent?: {
    title: string;
    items: {
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
}

const DarkPhoneImage = styled.img`
  width: 100%;

  @media (min-width: 640px) {
    width: 200px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const Section3: FC<Section3Props> = ({ theme, sectionTitle, darkContent }) => {
  return (
    <Flex
      className="container"
      gap="20px 0px"
      lgGap="60px 0px"
      mdGap="24px 0px"
      direction="column"
    >
      <ShowcaseHeader style={{ fontWeight: 300 }} textAlign="center">
        {sectionTitle}
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
            <Heading3>{darkContent?.title}</Heading3>
          </div>
          <Div
            display="flex"
            direction="column"
            mdDirection="row"
            mdWrap="wrap"
            gap="1rem"
            justify="space-between"
          >
            {darkContent?.items?.map((item, index) => (
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
        </Div>
      </Flex>
    </Flex>
  );
};

export default Section3;
