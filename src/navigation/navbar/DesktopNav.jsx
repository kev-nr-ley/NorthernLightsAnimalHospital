import React from "react";
import { useState, useEffect } from "react";
import { Flex, HStack, VStack, Center, Box } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import PageRoutes from "@navigation/PageRoutes";
import { useTheme } from "@chakra-ui/react";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";
import LogoBanner from "@components/LogoBanner";

import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
import Logo from "@components/Logo";
export default function DesktopNav(props) {
  const { colors } = useTheme();
  const routes = [
    { path: "/", linktext: "Home", element: <Home /> },
    { path: "/About", linktext: "About", element: <About /> },
    { path: "/Spay", linktext: "Spay & Neuter", element: <Spay /> },
    { path: "/Dental", linktext: "Dental", element: <Dental /> },
    { path: "/Health", linktext: "Health", element: <Health /> },
    { path: "/Contact", linktext: "Contact", element: <Contact /> },
  ];

  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setCurrentScrollPosition(position);
    setPreviousScrollPosition(currentScrollPosition);
    if (currentScrollPosition > previousScrollPosition) {
      setScrollDown(true);
      setScrollUp(false);
      setShrinkNavbar(true);
    } else {
      setScrollDown(false);
      setScrollUp(true);
      setShrinkNavbar(false);
    }
  };

  const checkScroll = () => {
    window.requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [currentScrollPosition]);

  return (
    <Flex
      className='desktop-nav'
      as='nav'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      w='100vw'
      maxW='100%'
      bg={colors.light}
      color={colors.dark}
      h={shrinkNavbar ? "40px" : scrollUp ? "80px" : "80px"}
      transition='all 0.2s ease-in-out'
      position='sticky'
      top='0'
      zIndex='11'
      px='16'
      {...props}>
      <HStack>
        <Logo
          w='60px'
          position='relative'
          transition='all 0.2s ease-in-out'
          top={shrinkNavbar ? "-60px" : scrollUp ? "0px" : "0px"}
        />
        <LogoBanner w='100px' h='40px' transition='all 0.2s ease-in-out' />
      </HStack>

      <Flex justifyContent={"center"} alignItems='center' h='100%' gap='12'>
        {routes.map((route, index) => (
          <ChakraLink
            key={index}
            variant='navLink'
            to={route.path}
            linktext={route.linktext}
            // h={scrollDown ? "40px" : scrollUp ? "80px" : "80px"}
          />
        ))}
      </Flex>
      {/* 
      <Flex gap='4'>
        <FacebookLink fontSize='36px' />
        <InstagramLink fontSize='36px' />
      </Flex> */}
    </Flex>
  );
}
