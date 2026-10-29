import 'remixicon/fonts/remixicon.css'
import React from "react";
import { Routes, Route } from "react-router-dom";

import Nave from "./components/Nave";
import Home from "./page/Home";
import About from "./page/About";
import Training from "./page/Training";
import Allprograms from './components/Allprograms';
import Facilities from './page/Facilities';
import Notices from './page/Notices';
import Gallery from './page/Gallery';
import Contact from './page/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>


      <Routes>
        {/* All sections on the homepage */}
        <Route
          path="/"
          element={
            <>
              <Nave />
              <Home />
              <About />
              <Training />
              <Facilities/>
              <Notices />
              <Gallery/>
              <Contact/>
              <Footer/>
            </>
          }
        />

        {/* Only All Programs opens a separate page */}
        <Route
          path="/programs"
          element={<Allprograms/>}
        />
      </Routes>
    </>
  );
};

export default App;
