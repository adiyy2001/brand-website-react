import { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Section1 from '../../components/SIngleCaseStudies/section1/Section1';
import Section2 from '../../components/SIngleCaseStudies/Section2.tsx';
import Flex from '../../components/SIngleCaseStudies/styles/Flex.tsx';
import { darkTheme, lightTheme } from './theme.ts';

const GlobalStyle = createGlobalStyle`
  div {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1px solid currentColor;
  cursor: pointer;
  padding: 10px;
`;
const SingleCaseStudies = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToggleButton onClick={toggleTheme}>Chantheme</ToggleButton>
      <Flex direction="column" gap="24px 0" lgGap="60px 0">
        <Section1 theme={theme} />
        <Section2 theme={theme} />
      </Flex>
    </ThemeProvider>
  );
};

export default SingleCaseStudies;
