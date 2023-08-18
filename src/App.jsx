import { BrowserRouter } from "react-router-dom";

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
} from "./components";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("eng");
  // const [language, setLanguage] = useState('srb');

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
        <Feedbacks />
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
          <Footer language={language} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
