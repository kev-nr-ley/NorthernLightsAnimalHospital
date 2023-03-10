import React from "react";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Dental from "@pages/Dental";
// import Health from "@pages/Health";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@chakra-ui/react";
function App() {
  const { colors } = useTheme();
  return (
    <>
      <Navbar bg='light' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/spay' element={<Spay />} />
        <Route path='/dental' element={<Dental />} />
        {/* <Route path='/health' element={<Health />} /> */}
      </Routes>
      <Footer bg='light' />
    </>
  );
}

export default App;
