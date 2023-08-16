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
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('eng');

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar setLanguage={setLanguage} language={language} />
          <Hero language={language} />
        </div>
        <About />
        <Experience language={language} />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
