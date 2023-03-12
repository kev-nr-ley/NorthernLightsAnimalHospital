import React from "react";
import { useState, useEffect } from "react";
import { Flex, HStack, VStack, Center } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import PageRoutes from "@navigation/PageRoutes";
import { useTheme } from "@chakra-ui/react";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";

import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
import Logo from "@components/Logo";
export default function DesktopNav(props) {
  const { colors } = useTheme();
  const routes = [
    { path: "/", linktext: "Home", element: <Home /> },
    { path: "/About", linktext: "About", element: <About /> },
    { path: "/Spay", linktext: "Spay", element: <Spay /> },
    { path: "/Dental", linktext: "Dental", element: <Dental /> },
    { path: "/Health", linktext: "Health", element: <Health /> },
    { path: "/Contact", linktext: "Contact", element: <Contact /> },
  ];

  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollDown(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY < 0);
    });
  }, []);

  return (
    <Flex
      className='desktop-nav'
      as='nav'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      w='100vw'
      maxW='100%'
      // h='80px'
      bg={scrollDown ? "light" : scrollUp ? "primary" : "light"}
      color={colors.dark}
      h={scrollDown ? "40px" : scrollUp ? "80px" : "80px"}
      transition='all 0.2s ease-in-out'
      position='sticky'
      top='0'
      zIndex='11'
      px='16'
      {...props}>
      <Logo
        w='200px'
        h='100%'
        opacity={scrollDown ? "0" : scrollUp ? "1" : "1"}
        transition='all 0.2s ease-in-out'
      />

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

      <Flex gap='4'>
        <FacebookLink fontSize='36px' />
        <InstagramLink fontSize='36px' />
      </Flex>
    </Flex>
  );
}
