import React from 'react';
import styled from 'styled-components';
import { RubyIcon } from '../../shared/icons';
import Div from '../styles/Div';
import Flex from '../styles/Flex';

interface FeatureSectionProps {
  heading: string;
  title: string;
  imageSrc1: { imgSrc: string; imgAlt?: string };
  imageSrc2: { imgSrc: string; imgAlt?: string };
  technologyItems?: string[];
  description?: string;
}

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

const PhoneFeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  imageSrc1,
  imageSrc2,
}) => {
  return (
    <SectionWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>

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
          <LightImage1 src={imageSrc1.imgSrc} alt={imageSrc1.imgAlt} />
        </Div>
        <div style={{ flex: 1 }}>
          <LightImage2 src={imageSrc2.imgSrc} alt={imageSrc1.imgAlt} />
        </div>
      </Flex>
      <DetailsWrapper>
        <TechList>
          <TechItem>
            <RubyIcon />
            <TechLabel>Technology Used</TechLabel>
          </TechItem>
          <TechItem>
            <RubyIcon />
            <TechLabel>Odio viverra</TechLabel>
          </TechItem>
          <TechItem>
            <RubyIcon />
            <TechLabel>Tempor mi eu</TechLabel>
          </TechItem>
        </TechList>

        <Description>
          Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est
          vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi
          faucibus parturient vivamus in arcu odio. Scelerisque tristique semper
          sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor
          montes molestie egestas elit.
          <HighlightGreen> Auctor rhoncus sed </HighlightGreen>
          adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus
          consectetur
          <HighlightPurple>id eu natoque semper pellentesque</HighlightPurple>.
          Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.
        </Description>
      </DetailsWrapper>
    </SectionWrapper>
  );
};

export default PhoneFeatureSection;

// Styled-components

const SectionWrapper = styled.div`
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  scrollbar-width: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TechItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
`;

const TechLabel = styled.span`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.text};

  @media (prefers-color-scheme: dark) {
    color: var(--dark-theme-primary);
  }
`;

const Description = styled.p`
  flex: 1;
  font-size: 0.75rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const HighlightGreen = styled.span`
  color: var(--green-color);
`;

const HighlightPurple = styled.span`
  color: var(--purple-color);
`;
