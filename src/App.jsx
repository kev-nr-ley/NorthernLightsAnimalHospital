import React from "react";
import Navbar from "@navigation/Navbar";
import Footer from "@navigation/Footer";
import PageRoutes from "@navigation/PageRoutes";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors } = useTheme();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1079) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <PageRoutes isMobile={isMobile} />

      <Footer bg='light' color='dark' />
    </>
  );
}

export default App;
