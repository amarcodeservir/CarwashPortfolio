// App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navebar from "./Components/Navbar"; // Check the path is correct
import Footer from "./Components/Footer";
import Home from "./Components/Home";
// import About from './Components/About';
import Faq from "./Components/Pages/Faq";
import HelpSupport from "./Components/Pages/HelpSupport";
import TermsofService from "./Components/Pages/TermsofService";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import Disclaimer from "./Components/Pages/Disclaimer";
// import ImageSlider from './Components/ImageSlider'; // Import ImageSlider component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/imageslider" element={<ImageSlider />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/helpsupport" element={<HelpSupport />} />
          <Route path="/termsofservice" element={<TermsofService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
