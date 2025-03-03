// import './App.css'
import { useEffect } from 'react';
import Layout from './Layout'
import ReactGA from 'react-ga4';


function App() {
  useEffect(() => {
    ReactGA.initialize('G-C5DVXGTRT8D');
    ReactGA.send({hitType: "pageview", page: "/landingpage", title: "Landing Page"});
  },[]);

  return (
    <>
      <Layout>
      </Layout>
    </>
  )
}

export default App
