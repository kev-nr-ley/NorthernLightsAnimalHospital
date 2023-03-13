import React from "react";
import { useState, useEffect } from "react";
import { Flex, HStack, VStack, Center, Button, Box } from "@chakra-ui/react";
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
import LogoBanner from "@components/LogoBanner";

export default function MobileNav(props) {
  const { colors } = useTheme();
  const routes = [
    { path: "/", linktext: "Home", element: <Home /> },
    { path: "/About", linktext: "About", element: <About /> },
    { path: "/Spay", linktext: "Spay", element: <Spay /> },
    { path: "/Dental", linktext: "Dental", element: <Dental /> },
    { path: "/Health", linktext: "Health", element: <Health /> },
    { path: "/Contact", linktext: "Contact", element: <Contact /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const [currentYPosition, setCurrentYPosition] = useState(0);


  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => {
    toggle();
  };
  const handleLinkClick = () => {
    setIsOpen(false);
    console.log("link clicked");
  };

  const xSvg = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-x'>
      <line x1='18' y1='6' x2='6' y2='18'></line>
      <line x1='6' y1='6' x2='18' y2='18'></line>
    </svg>
  );

  const menuSvg = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-menu'>
      <line x1='3' y1='12' x2='21' y2='12'></line>
      <line x1='3' y1='6' x2='21' y2='6'></line>
      <line x1='3' y1='18' x2='21' y2='18'></line>
    </svg>
  );





    
  return (
    <>
      <Flex
        position='fixed'
        top='0'
        right='0'
        zIndex='12'
        bg='#ffffff50'
        w='100vw'
        h={scrollDown ? "0px" : scrollUp ? "80px" : "80px"}
        justifyContent='space-between'
        alignItems='center'
        px='1rem'
        py='0.25rem'
        transition='all 0.2s ease-in-out'>
        <Logo
          h='60px'
          w='60px'
          display={scrollDown ? "none" : scrollUp ? "block" : "block"}
        />
        <Button
          right='0'
          onClick={handleNavClick}
          display={scrollDown ? "none" : scrollUp ? "block" : "block"}
          zIndex='12'
          color='orange.500'
          transition='all 0.2s ease-in-out'
          bg='transparent'
          boxSizing='border-box'
          border='2px solid transparent'
          _hover={{ bg: "transparent", border: "2px" }}
          _focus={{ border: "2px" }}
          _focusVisible={{ border: "2px" }}
          aria-label='Navigation Menu'>
          {isOpen ? xSvg : menuSvg}
        </Button>
      </Flex>

      <Flex
        className='desktop-nav'
        as='nav'
        flexDirection='column'
        justifyContent={"space-between"}
        // bg='light'
        // color='dark'
        h='100vh'
        w={isOpen ? "80vw" : "0vw"}
        maxW='500px'
        userSelect={isOpen ? "auto" : "none"}
        // display={isOpen ? "flex" : "none"}
        overflow='hidden'
        transition='all 0.5s ease-in-out'
        position='fixed'
        top='0'
        right={isOpen ? "0" : "-100vw"}
        zIndex='11'
        px='5vw'
        py='5vh'
        bg='purple.100'
        {...props}>
        <Flex alignSelf='flex-start'>
          <Logo w='100px' transition='all 0.2s ease-in-out' />
          <LogoBanner w='100px' transition='all 0.2s ease-in-out' />
        </Flex>

        <Flex
          flexDirection='column'
          justifyContent={"center"}
          gap='12'
          py='5vh'>
          {routes.map((route, index) => (
            <ChakraLink
              key={index}
              variant='navLink'
              to={route.path}
              linktext={route.linktext}
              color={props.color}
              onClick={handleLinkClick}
            />
          ))}
        </Flex>

        <Flex justifyContent={"space-evenly"} w='100%' py='5vh'>
          {/* <FacebookLink fontSize='52px' />
          <InstagramLink fontSize='52px' /> */}
        </Flex>
      </Flex>
    </>
  );
}
