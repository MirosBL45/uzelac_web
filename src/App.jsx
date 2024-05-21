import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import ButtonHidden from './components/ButtonHidden';

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar setLanguage={setLanguage} language={language} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Experience language={language} />
        <Tech />
        <Works language={language} />
        <Feedbacks language={language} />
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
          <Footer language={language} />
        </div>
        {/* <ButtonHidden language={language} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
