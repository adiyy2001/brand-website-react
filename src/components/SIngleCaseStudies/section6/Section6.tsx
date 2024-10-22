import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Div from '../styles/Div';
import Flex from '../styles/Flex';
import { Heading3, Heading4 } from '../styles/Heading';
import { StyledParagraph } from '../styles/Peragraph';
import { StyledSpan } from '../styles/Typography';
interface Section6Props {
  theme: 'dark' | 'light';

  content?: {
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
}

const DarkPhoneImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  height: 500px;
  object-fit: contain;
  @media (min-width: 640px) {
    width: 200px;
    height: 394px;
  }

  @media (min-width: 1280px) {
    width: 240px;
    height: 494px;
  }
`;

const Section6: FC<Section6Props> = ({ theme, content }) => {
  return (
    <Flex
      className="container"
      gap="20px 0px"
      lgGap="60px 0px"
      mdGap="24px 0px"
      direction="column"
    >
      <Flex gap="20px 0px" lgGap="60px 0px" mdGap="24px 0px" direction="column">
        <Div
          gap="20px 0px"
          lgGap="60px 0px"
          mdGap="24px 0px"
          direction="column"
          display="flex"
        >
          <div>
            <Heading3>{content?.sectionHeading}</Heading3>
          </div>
          <div>
            <Heading4>{content?.title2}</Heading4>
          </div>
          <StyledParagraph>{content?.description}</StyledParagraph>
          <Div
            display="flex"
            direction="column"
            mdDirection="row"
            mdWrap="wrap"
            gap="1rem"
            justify="space-between"
          >
            {content?.list?.map((item, index) => (
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
              direction="column"
              mdDirection="row"
            >
              {content?.images?.map((img, index) => (
                <DarkPhoneImage key={index} alt={img.imgAlt} src={img.imgSrc} />
              ))}
            </Div>
            <Div
              gap="16px"
              display="flex"
              xlGap="40px"
              basis="100%"
              style={{ flex: 1 }}
              direction="column"
            >
              <Heading4>Jakiś header</Heading4>
              <StyledParagraph>
                Od eu natoque semper pellentesque. Sit dolor gravida cursus quis
                ante. Sed luctus vitae tellus imperdiet.
              </StyledParagraph>
              <StyledParagraph>
                Od eu natoque semper pellentesque. Sit dolor gravida cursus quis
                ante. Sed luctus vitae tellus imperdiet.
              </StyledParagraph>
              <StyledParagraph>
                Od eu natoque semper pellentesque. Sit dolor gravida cursus quis
                ante. Sed luctus vitae tellus imperdiet.
              </StyledParagraph>
            </Div>
          </Flex>
        </Div>
      </Flex>
    </Flex>
  );
};

export default Section6;
