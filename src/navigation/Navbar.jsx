import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "@navigation/navbar/MobileNav";
import DesktopNav from "@navigation/navbar/DesktopNav";
import { useTheme } from "@chakra-ui/react";
export default function Navbar(props) {
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
      {isMobile ? (
        <MobileNav bg='primary' {...props} />
      ) : (
        <DesktopNav
          className='desktop-nav'
          as='nav'
          bg={colors.primary}
          color='white'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          px='4'
          w={["100vw"]}
          maxW='100%'
          h='80px'
          position='sticky'
          top='0'
          zIndex='11'
          {...props}
        />
      )}
    </>
  );
}
