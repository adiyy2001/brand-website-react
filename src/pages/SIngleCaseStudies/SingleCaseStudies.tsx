import { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { RubyIcon } from '../../components/shared/icons.tsx';
import Section1 from '../../components/SIngleCaseStudies/section1/Section1';
import Section2 from '../../components/SIngleCaseStudies/section2/Section2.tsx';
import Section3 from '../../components/SIngleCaseStudies/section3/Section3.tsx';
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
        <Section3
          theme={theme}
          sectionTitle="Sections header"
          darkContent={{
            title: 'Section one header',
            title2: 'Nazwa pierwszej korzyści',
            description:
              'Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
            items: [
              {
                name: 'Technology Used',
                icon: <RubyIcon />,
              },
              {
                name: 'Technology Used',
                icon: <RubyIcon />,
              },
              {
                name: 'Technology Used',
                icon: <RubyIcon />,
              },
              {
                name: 'Technology Used',
                icon: <RubyIcon />,
              },
              {
                name: 'Technology Used',
                icon: <RubyIcon />,
              },
            ],
            images: [
              {
                imgAlt: 'Alt',
                imgSrc:
                  'https://raw.githubusercontent.com/tarifalhasan/media-hunter/refs/heads/dev/public/images/phones/1.png?token=GHSAT0AAAAAACX3LIIFI6GJLUQJVXV24J5EZYWLGXA',
              },
              {
                imgAlt: 'Alt',
                imgSrc:
                  'https://raw.githubusercontent.com/tarifalhasan/media-hunter/refs/heads/dev/public/images/phones/1.png?token=GHSAT0AAAAAACX3LIIFI6GJLUQJVXV24J5EZYWLGXA',
              },
            ],
          }}
        />
      </Flex>
    </ThemeProvider>
  );
};

export default SingleCaseStudies;
