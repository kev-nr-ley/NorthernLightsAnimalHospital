import React from "react";
import { useState, useEffect } from "react";
import { Flex, HStack, VStack, Center, Button } from "@chakra-ui/react";
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
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      class='feather feather-x'>
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
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      class='feather feather-menu'>
      <line x1='3' y1='12' x2='21' y2='12'></line>
      <line x1='3' y1='6' x2='21' y2='6'></line>
      <line x1='3' y1='18' x2='21' y2='18'></line>
    </svg>
  );

  return (
    <>
      <Button
        onClick={handleNavClick}
        position='fixed'
        top='0'
        right='0'
        zIndex='12'
        m='4'
        color='orange.500'
        transition='all 0.2s ease-in-out'
        bg='transparent'
        boxSizing='border-box'
        border='2px solid transparent'
        _hover={{ bg: "transparent", border: "2px" }}
        _focus={{ border: "2px" }}
        // _active={{ border: "2px" }}
        _focusVisible={{ border: "2px" }}
        aria-label='Navigation Menu'
        >
        {isOpen ? xSvg : menuSvg}
      </Button>

      <Flex
        className='desktop-nav'
        as='nav'
        // justifyContent={'space-between'}
        flexDirection='column'
        bg='background'
        color='dark'
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
        {...props}>
        <Logo w='300px' transition='all 0.2s ease-in-out' />

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
              onclick={handleLinkClick}
            />
          ))}
        </Flex>

        <Flex justifyContent={"space-evenly"} w='100%' py='5vh'>
          <FacebookLink fontSize='52px' />
          <InstagramLink fontSize='52px' />
        </Flex>
      </Flex>
    </>
  );
}
