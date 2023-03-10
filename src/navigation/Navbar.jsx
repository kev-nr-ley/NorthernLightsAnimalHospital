import React from "react";
import { useState, useEffect } from "react";
import PageRoutes from "@navigation/PageRoutes";
import MobileNav from "@navigation/navbar/MobileNav";
import DesktopNav from "@navigation/navbar/DesktopNav";

export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  



  return (
    <>
      {isMobile ? <MobileNav  pageRoutes={PageRoutes}
         /> : <DesktopNav pageRoutes={PageRoutes} />}
      <PageRoutes />
    </>
  );
}
