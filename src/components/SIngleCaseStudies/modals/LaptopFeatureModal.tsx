import React from 'react';
import styled from 'styled-components';
import { RubyIcon } from '../../shared/icons';

// Styled-components with TS types
const Container = styled.div`
  scrollbar-width: none;
  max-height: 85vh;
  overflow-y: auto;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 364px;
  object-fit: cover;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
`;

const ListItemText = styled.span`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
`;

const HighlightedText = styled.span`
  color: #4f46e5; // Example primary color
  text-decoration: underline;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

// Type definition for Section component props
interface SectionProps {
  title: string;
  imgSrc: string;
  listItems: string[];
  description: string;
  highlightedText?: string;
}

// Reusable Section Component with props
const Section: React.FC<SectionProps> = ({
  title,
  imgSrc,
  listItems,
  description,
  highlightedText,
}) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      <StyledImg src={imgSrc} alt="macbook" />
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <RubyIcon />
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Description>
        {description}{' '}
        {highlightedText && (
          <HighlightedText>{highlightedText}</HighlightedText>
        )}
      </Description>
    </SectionContainer>
  );
};

// LaptopDetails Component with reusable Sections and props
const LaptopDetails: React.FC = () => {
  const sectionsData: SectionProps[] = [
    {
      title: 'Nazwa drugiej funkcjonalności',
      imgSrc:
        'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      listItems: ['Technology Used', 'Odio viverra', 'Tempor mi eu'],
      description:
        'Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit.',
      highlightedText: 'Auctor rhoncus',
    },
    {
      title: '',
      imgSrc:
        'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUwOXwwfDF8c2VhcmNofDR8fGRlbGwlMjB4cHMlMjAxM3xlbnwwfHx8fDE2OTc4NTc3MDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
      listItems: ['Technology Used', 'Odio viverra', 'Tempor mi eu'],
      description:
        'Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit.',
      highlightedText: 'Auctor rhoncus',
    },
    {
      title: '',
      imgSrc:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUwOXwwfDF8c2VhcmNofDF8fG1hY2Jvb2slMjBwcm98ZW58MHx8fHwxNjk3ODU3NzA5fDA&ixlib=rb-4.0.3&q=80&w=1080',
      listItems: ['Technology Used', 'Odio viverra', 'Tempor mi eu'],
      description:
        'Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit.',
      highlightedText: 'Auctor rhoncus',
    },
  ];

  return (
    <Container>
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          imgSrc={section.imgSrc}
          listItems={section.listItems}
          description={section.description}
          highlightedText={section.highlightedText}
        />
      ))}
    </Container>
  );
};

export default LaptopDetails;
