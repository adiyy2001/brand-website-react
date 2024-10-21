import styled from 'styled-components';

const StyledSpan = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: 'Lato' sans-serif;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export { StyledSpan };
