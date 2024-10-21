import { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import code from '../../assets/media/SingleCaseStudies/code.png';
import phone from '../../assets/media/SingleCaseStudies/phones/2.png';
import { RubyIcon } from '../../components/shared/icons.tsx';
import Section1 from '../../components/SIngleCaseStudies/section1/Section1';
import Section2 from '../../components/SIngleCaseStudies/section2/Section2.tsx';
import Section3 from '../../components/SIngleCaseStudies/section3/Section3.tsx';
import Section4 from '../../components/SIngleCaseStudies/section4/Section4.tsx';
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

const Section4Items = [
  {
    id: 1,
    title: 'MacBook Pro 16-inch',
    imgSrc:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUwOXwwfDF8c2VhcmNofDF8fG1hY2Jvb2slMjBwcm98ZW58MHx8fHwxNjk3ODU3NzA5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    imgAlt: 'MacBook Pro 16-inch on a desk',
    description:
      'The MacBook Pro 16-inch offers high-end performance and a stunning Retina display.',
  },
  {
    id: 2,
    title: 'Dell XPS 13',
    imgSrc:
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUwOXwwfDF8c2VhcmNofDR8fGRlbGwlMjB4cHMlMjAxM3xlbnwwfHx8fDE2OTc4NTc3MDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    imgAlt: 'Dell XPS 13 with thin bezels',
    description:
      "Dell's XPS 13 is a compact powerhouse with an infinity-edge display and powerful internals.",
  },
  {
    id: 3,
    title: 'HP Spectre x360',
    imgSrc:
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: 'HP Spectre x360 on a wooden table',
    description:
      'The HP Spectre x360 is a versatile 2-in-1 laptop with excellent battery life and a stunning design.',
  },
];

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
          darkContent={{
            heading: 'Sections header',
            sectionHeading: 'Section one header',
            title2: 'Nazwa pierwszej korzyści',
            description:
              'Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
            list: [
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
                imgSrc: phone,
              },
              {
                imgAlt: 'Alt',
                imgSrc: phone,
              },
            ],
          }}
          lightContent={{
            heading: 'Functions header',
            sectionHeading: 'Section header',
            title: 'Nazwa pierwszej funkcjonalności',
            description1:
              'Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
            description2:
              'Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
            list: [
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
            image1: {
              imgAlt: 'Alt',
              imgSrc: phone,
            },
            image2: {
              imgAlt: 'Alt',
              imgSrc: code,
            },
          }}
        />
        <Section4
          theme={theme}
          darkContent={{
            sectionHeading: 'Section one header',

            description: [
              {
                text: 'Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
                uniqueId: 151515,
              },
              {
                text: 'Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rho. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet. ncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
                uniqueId: 1515122,
              },
            ],
            items: Section4Items,
          }}
          lightContent={{
            sectionHeading: 'Section one header',

            description: [
              {
                text: 'Opis funkcjonalności appki. Dictum felis arcu vulputate massa mi est vulputate vulputate. Justo sed morbi turpis malesuada amet. Morbi faucibus parturient vivamus in arcu odio. Scelerisque tristique semper sapien sagittis egestas condimentum. Quam lorem vivamus at porttitor montes molestie egestas elit. Auctor rhoncus sed adipiscing pulvinar laoreet hendrerit tincidunt mauris. Pulvinar risus consectetur id eu natoque semper pellentesque. Sit dolor gravida cursus quis ante. Sed luctus vitae tellus imperdiet.',
                uniqueId: 1515156,
              },
            ],
            items: Section4Items,
          }}
        />
      </Flex>
    </ThemeProvider>
  );
};

export default SingleCaseStudies;
