import styled from 'styled-components';
interface ShowcaseHeaderProps {
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const ShowcaseHeader = styled.h4<ShowcaseHeaderProps>`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 2.25rem;
  margin: 0;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color }) => color || 'inherit'};
  @media (min-width: 1024px) {
    /* lg */
    text-align: center;
    font-size: 3.75rem;
  }

  @media (min-width: 1280px) {
    /* xl */
    font-size: 4.5rem;
  }
`;

export default ShowcaseHeader;
