import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  font-family: 'Lato' sans-serif;
  margin: 0;
  @media (min-width: 1280px) {
    font-size: 1.1rem;
  }
`;

const StyledSpan = styled.span`
  color: ${(props) => props.color};
  display: inline;
`;

export { StyledParagraph, StyledSpan };
