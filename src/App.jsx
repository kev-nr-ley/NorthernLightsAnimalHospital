import React from "react";
import Navbar from "@navigation/Navbar";
import Footer from "@navigation/Footer";
import PageRoutes from "@navigation/PageRoutes";
import { useTheme } from "@chakra-ui/react";

function App() {
  const { colors } = useTheme();

  return (
    <>
      <Navbar bg='light' />
      <PageRoutes />
      <Footer bg='light' />
    </>
  );
}

export default App;
