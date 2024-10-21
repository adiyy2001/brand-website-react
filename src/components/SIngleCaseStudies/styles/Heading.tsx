// Heading.ts
import styled from 'styled-components';

const Heading1 = styled.h1`
  font-family: var(--font-terminus);
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const Heading2 = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: 'Lato' sans-serif;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1536px) {
    font-size: 1.875rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: 'Lato' sans-serif;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1536px) {
    font-size: 1.875rem;
  }
`;

const Heading4 = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: 'Lato' sans-serif;
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1536px) {
    font-size: 2rem;
  }
`;

export { Heading1, Heading2, Heading3, Heading4 };
