import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import AboutUs from './pages/AboutUs/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Services from './pages/Services/Services';
import { Projects } from './pages/projects/projects';
import Project from './components/projects/Project/Project';

const Loader: React.FC = () => (
  <div>
    <Spinner />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/donations"
            element={
              <Project
                name="donations"
                hashtags={[]}
                header={''}
                heroDescription={''}
                heroImage={''}
                heroImageHeader={''}
                heroImageSubHeader={''}
                topSectionHeader={''}
                topSectionDescription={''}
                topSectionSubDescription={''}
                sliderImages={[]}
              />
            }
          />{' '}
          // Trasa dla projektu donations
          <Route
            path="/projects/store"
            element={
              <Project
                name="store"
                hashtags={[]}
                header={''}
                heroDescription={''}
                heroImage={''}
                heroImageHeader={''}
                heroImageSubHeader={''}
                topSectionHeader={''}
                topSectionDescription={''}
                topSectionSubDescription={''}
                sliderImages={[]}
              />
            }
          />{' '}
          // Trasa dla projektu store
          <Route
            path="/projects/barber"
            element={
              <Project
                name="barber"
                hashtags={[]}
                header={''}
                heroDescription={''}
                heroImage={''}
                heroImageHeader={''}
                heroImageSubHeader={''}
                topSectionHeader={''}
                topSectionDescription={''}
                topSectionSubDescription={''}
                sliderImages={[]}
              />
            }
          />{' '}
          // Trasa dla projektu barber
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
