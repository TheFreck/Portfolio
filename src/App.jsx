import { useEffect, useRef, useState } from 'react';
import Layout from './Layout'
import ReactGA from 'react-ga4';
import { BrowserRouter, Route, Routes } from 'react-router';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ReadingList from './components/ReadingList';
import Endorsements from './components/Endorsements';
import EventTracker from './EventTracker';

const App = () => {
  const mobileRef = useRef();
  const [ready,setReady] = useState(false);

  useEffect(() => {
    ReactGA.initialize('G-C5DVXGTRT8D');
    ReactGA.send({hitType: "pageview", page: "/landingpage", title: "Landing Page"});
    const tracker = EventTracker("landing");
    mobileRef.current = {
      isMobile: navigator.maxTouchPoints > 0
    }
    if(mobileRef.current.isMobile) tracker("device","mobile");
    else tracker("device","desktop");
    setReady(true);
  },[]);

  return (
    <>
      <BrowserRouter>
      {
        ready &&
        <Layout
          isMobile={mobileRef?.current?.isMobile}
        >
          <Routes>
            <Route exact path="/" element={<AboutMe isMobile={mobileRef?.current?.isMobile} />} />
            <Route path="/Portfolio/" element={<AboutMe isMobile={mobileRef?.current?.isMobile} />} />
            <Route path="/Portfolio/Endorsements" element={<Endorsements isMobile={mobileRef?.current?.isMobile} />} />
            <Route path="/Portfolio/ReadingList" element={<ReadingList isMobile={mobileRef?.current?.isMobile} />} />
            <Route path="/Portfolio/Projects" element={<Projects isMobile={mobileRef?.current?.isMobile} />} />
          </Routes>
        </Layout>
      }
      </BrowserRouter>
    </>
  )
}

export default App
