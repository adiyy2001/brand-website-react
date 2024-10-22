import { FC } from 'react';
import styled from 'styled-components';
import icon1 from '../../../assets/media/SingleCaseStudies/1.svg';
import Flex from '../styles/Flex';
import { FlexItem, ItemImg, ItemTitle } from '../styles/FlexItem';
import { StyledParagraph, StyledSpan } from '../styles/Peragraph';
import ShowcaseHeader from '../styles/ShowcaseHeading';
const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: 'Terminus2' !important;
  text-transform: uppercase;
  margin: 0 !important;
  color: ${({ theme }) => theme.text} !important;
  @media (min-width: 640px) {
    font-size: 42px;
  }
  @media (min-width: 1280px) {
    font-size: 90px;
  }
  @media (min-width: 1536px) {
    font-size: 96px;
  }
`;

interface Section1Props {
  theme: 'dark' | 'light';
}
const Section1: FC<Section1Props> = ({ theme }) => {
  return (
    <div className="container">
      <Flex direction="column" mdGap="24px 0px" xlGap="60px 0px" gap="20px 0px">
        {theme === 'light' ? (
          <Title>Grants Finder</Title>
        ) : (
          <Title>GrantsFinder.eu:~rc_c$</Title>
        )}
        <Flex mdDirection="row" direction="column" gap="24px">
          <FlexItem>
            <ItemImg>
              <img src={icon1} alt="" />
            </ItemImg>
            <ItemTitle>Pulvinar est</ItemTitle>
          </FlexItem>
          <FlexItem>
            <ItemImg>
              <img src={icon1} alt="" />
            </ItemImg>
            <ItemTitle>Odio viverra</ItemTitle>
          </FlexItem>
          <FlexItem>
            <ItemImg>
              <img src={icon1} alt="" />
            </ItemImg>
            <ItemTitle>Tempor mi eu</ItemTitle>
          </FlexItem>
        </Flex>
        <ShowcaseHeader textAlign="center">Showcase header</ShowcaseHeader>
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
      </Flex>
    </div>
  );
};

export default Section1;
