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

import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

import LogoAndBanner from "@components/LogoAndBanner";
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

  const toggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => {
    toggle();
  };
  const handleLinkClick = () => {
    setIsOpen(false);

    console.log("link clicked");
  };

  return (
    <>
      <Flex
        position='fixed'
        top='0'
        right='0'
        zIndex='12'
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
          ml='2rem'
          transition = 'all .4s ease-in-out'
          _hover={{ transform: "rotate(180deg)" }}
          display={scrollDown ? "none" : scrollUp ? "block" : "block"}
        />
        <Button
          right='0'
          onClick={handleNavClick}
          display={scrollDown ? "none" : scrollUp ? "block" : "block"}
          zIndex='12'
          color={isOpen ? "red.200" : "blue.200"}
          transition='all 0.15s ease-in-out'
          bg='transparent'
          // bg='primary'

          boxSizing='border-box'
          border='2px solid transparent'
          aria-label='Navigation Menu'
          variant='LightOutline'
          _hover={{ color: "orange.300", transform: "scale(1.2)" }}
         >
          {isOpen ? (
            <AiOutlineClose fontSize='3rem' />
          ) : (
            <HamburgerIcon fontSize='3rem' />
          )}
        </Button>
      </Flex>

      <Flex
        className='desktop-nav'
        as='nav'
        flexDirection='column'
        justifyContent={"space-between"}
        bg={colors.background}
        // color='dark'
        h='100vh'
        w={isOpen ? "80vw" : "0vw"}
        maxW='800px'
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
        <Flex alignSelf='flex-start'>
          <LogoAndBanner
            minW='200px'
            maxW='400px'
            w='80%'
            transition='all 0.2s ease-in-out'
          />
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
