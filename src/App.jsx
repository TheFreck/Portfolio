import { useEffect, useRef, useState } from 'react';
import Layout from './Layout'
import ReactGA from 'react-ga4';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ReadingList from './components/ReadingList';
import Endorsements from './components/Endorsements';
import EventTracker from './EventTracker';

const App = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    ReactGA.initialize('G-C5DVXGTRT8D');
    ReactGA.send({hitType: "pageview", page: "/landingpage", title: "Landing Page"});
    const tracker = EventTracker("landing");
    if (navigator.maxTouchPoints > 0) {
        setIsMobile(true);
        tracker("device", "mobile");
    }
    else {
        setIsMobile(false);
        tracker("device", "desktop");
    }
  },[]);

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Portfolio/Endorsements" element={<Endorsements isMobile={isMobile} />} />
          <Route path="/Portfolio/ReadingList" element={<ReadingList isMobile={isMobile} />} />
          <Route path="/Portfolio/Projects" element={<Projects isMobile={isMobile} />} />
          <Route path="/Portfolio/" element={<AboutMe isMobile={isMobile} />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
