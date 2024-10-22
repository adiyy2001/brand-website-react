import styled from 'styled-components';
import darkImgLg from '../../../assets/media/SingleCaseStudies/section-5-dark-lg.svg';
import darkImgSm from '../../../assets/media/SingleCaseStudies/section-5-dark-sm.svg';
import lightImgLg from '../../../assets/media/SingleCaseStudies/section-5-light-lg.svg';
import lightImgSm from '../../../assets/media/SingleCaseStudies/section-5-light-sm.svg';
const SvgWrapperLg = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 100%;
  }
`;
const SvgWrapperMobile = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Section5 = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="container py-16">
      <SvgWrapperLg>
        {theme === 'light' && <img src={darkImgLg} alt="laptop" />}
      </SvgWrapperLg>

      {theme === 'light' && (
        <SvgWrapperMobile>
          {theme === 'light' && <img src={darkImgSm} alt="laptop" />}
        </SvgWrapperMobile>
      )}

      {theme === 'dark' && (
        <SvgWrapperLg>
          <img src={lightImgLg} alt="laptop" />
        </SvgWrapperLg>
      )}

      {theme === 'dark' && (
        <SvgWrapperMobile>
          <img src={lightImgSm} alt="laptop" />
        </SvgWrapperMobile>
      )}
    </div>
  );
};

export default Section5;
