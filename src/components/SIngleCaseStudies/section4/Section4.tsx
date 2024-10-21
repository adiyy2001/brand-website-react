import { FC } from 'react';
import styled from 'styled-components';
import ProductCardItem from '../ProductCardItem';
import Div from '../styles/Div';
import Flex from '../styles/Flex';
import { Heading3 } from '../styles/Heading';
import { StyledParagraph } from '../styles/Peragraph';

interface Section4Props {
  theme: 'dark' | 'light';
  darkContent?: {
    sectionHeading?: string;
    description: {
      text: string;
      uniqueId: string | number;
    }[];
    items: {
      id: number | string;
      title: string;
      imgSrc: string;
      imgAlt?: string;
      description?: string;
    }[];
  };
  lightContent?: {
    sectionHeading?: string;
    description: {
      text: string;
      uniqueId: string | number;
    }[];
    items: {
      id: number | string;
      title: string;
      imgSrc: string;
      imgAlt?: string;
      description?: string;
    }[];
  };
}

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    gap: 3rem;
  }
`;
const Section4: FC<Section4Props> = ({ theme, darkContent, lightContent }) => {
  return theme === 'light' ? (
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
          lgGap="48px 0px"
          mdGap="24px 0px"
          direction="column"
          display="flex"
        >
          <Heading3>{darkContent?.sectionHeading}</Heading3>
          {darkContent?.description.map((des, index) => (
            <StyledParagraph key={index}>{des.text}</StyledParagraph>
          ))}
        </Div>
      </Flex>
      <ListGrid>
        {darkContent?.items.map((item) => (
          <ProductCardItem key={item.id} item={item} />
        ))}
      </ListGrid>
    </Flex>
  ) : (
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
          lgGap="48px 0px"
          mdGap="24px 0px"
          direction="column"
          display="flex"
        >
          <Heading3>{lightContent?.sectionHeading}</Heading3>
          {lightContent?.description.map((des, index) => (
            <StyledParagraph key={index}>{des.text}</StyledParagraph>
          ))}
        </Div>
      </Flex>
      <ListGrid>
        {darkContent?.items?.map((item) => (
          <ProductCardItem key={item.id} item={item} />
        ))}
      </ListGrid>
    </Flex>
  );
};

export default Section4;
