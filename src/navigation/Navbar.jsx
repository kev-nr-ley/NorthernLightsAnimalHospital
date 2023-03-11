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
        <DesktopNav {...props} />
      )}
    </>
  );
}
