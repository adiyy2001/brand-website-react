import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Lato' sans-serif;
  margin: 0;
  @media (min-width: 1280px) {
    font-size: 1.4rem;
  }
`;

const StyledSpan = styled.span`
  color: ${(props) => props.color};
  display: inline;
`;

export { StyledParagraph, StyledSpan };
