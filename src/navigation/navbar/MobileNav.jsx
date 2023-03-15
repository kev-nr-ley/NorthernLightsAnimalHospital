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

import Logo from "@components/Logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineClose } from "react-icons/ai";

import LogoAndBanner from "@components/LogoAndBanner";
export default function MobileNav(props) {
  const { colors } = useTheme();
  const routes = [
    { path: "/", linktext: "Home", element: <Home /> },
    { path: "/About", linktext: "About", element: <About /> },
    {
      path: "/Spay",
      linktext: "Spay & Neuter",
      element: <Spay />,
      sublinks: [
        { path: "/Spay#SpayFAQs", linktext: "FAQs", element: <Spay /> },
        {
          path: "/Spay#SpayBeforeAppointment",
          linktext: "Before Your Appointment",
          element: <Spay />,
        },
        {
          path: "/Spay#SpayAfterAppointment",
          linktext: "After Your Appointment",
          element: <Spay />,
        },
      ],
    },
    {
      path: "/Dental",
      linktext: "Dental",
      element: <Dental />,
      sublinks: [
        { path: "/Dental#FAQs", linktext: "FAQs", element: <Dental /> },
        {
          path: "/Dental#BeforeAppointment",
          linktext: "Before Your Appointment",
          element: <Dental />,
        },
        {
          path: "/Dental#AfterAppointment",
          linktext: "After Your Appointment",
          element: <Dental />,
        },
      ],
    },

    {
      path: "/Health",
      linktext: "Health",
      element: <Health />,
      sublinks: [
        { path: "/Health#Care", linktext: "Health Exams", element: <Health /> },
        {
          path: "/Health#Parasite",
          linktext: "Common Parasites",
          element: <Health />,
        },
      ],
    },
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

  const mapRoutesAndSublinks = (routes) => {
    return routes.map((route) => {
      if (route.sublinks) {
        return (
          <Box key={route.linktext}>
            <ChakraLink
              to={route.path}
              color='dark'
              fontSize='1.5rem'
              fontWeight='bold'
              onClick={handleLinkClick}>
              {route.linktext}
            </ChakraLink>
            <VStack
              display={isOpen ? "flex" : "none"}
              flexDirection='column'
              alignItems='flex-start'
              justifyContent='flex-start'
              w='100%'
              p='0.5rem'
              bg='light'
              color='dark'
              fontSize='1.5rem'
              fontWeight='bold'>
              {route.sublinks.map((sublink) => {
                return (
                  <ChakraLink
                    to={sublink.path}
                    color='dark'
                    fontSize='1rem'
                    fontWeight='bold'
                    onClick={handleLinkClick}>
                    {sublink.linktext}
                  </ChakraLink>
                );
              })}
            </VStack>
          </Box>
        );
      } else {
        return (
          <ChakraLink
            to={route.path}
            color='dark'
            fontSize='1.5rem'
            fontWeight='bold'
            onClick={handleLinkClick}>
            {route.linktext}
          </ChakraLink>
        );
      }
    });
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
        // h={scrollDown ? "0px" : scrollUp ? "80px" : "80px"}
        h='80px'
        justifyContent='space-between'
        alignItems='center'
        px='1rem'
        py='0.25rem'
        transition='all 0.2s ease-in-out'>
        {/* <LogoAndBanner
          h='60px'
          w='140px'
          ml='2rem'
          transition='all .4s ease-in-out'
          // _hover={{ transform: "rotate(180deg)" }}
          display={scrollDown ? "none" : scrollUp ? "block" : "block"}
          // display='block'
        /> */}

        <Button
          right='1rem'
          top='1rem'
          position='absolute'
          onClick={handleNavClick}
          // display={scrollDown ? "none" : scrollUp ? "block" : "block"}
          display='block'
          zIndex='12'
          color={isOpen ? "red.200" : "blue.200"}
          transition='all 0.15s ease-in-out'
          bg='transparent'
          // bg='primary'

          boxSizing='border-box'
          border='2px solid transparent'
          aria-label='Navigation Menu'
          variant='LightOutline'
          _hover={{ color: "orange.300", transform: "scale(1.2)" }}>
          {isOpen ? (
            <AiOutlineClose fontSize='3rem' />
          ) : (
            <HamburgerIcon fontSize='3rem' />
          )}
        </Button>
      </Flex>

      <Flex
        className='mobile-nav'
        as='nav'
        flexDirection='column'
        justifyContent={"center"}
        bg={colors.light}
        boxShadow='8px 0px 8px 8px rgba(0,0,0,0.2)'
        borderRadius='0 0 0 30px'
        // color='dark'
        h='80vh'
        maxH='100%'
        w={isOpen ? "auto" : "0vw"}
        userSelect={isOpen ? "auto" : "none"}
        overflow='hidden'
        transition='all 0.5s ease-in-out'
        position='fixed'
        top='0'
        // right='0'
        right={isOpen ? "0" : "-50vw"}
        zIndex='11'
        px='5vw'
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
          {mapRoutesAndSublinks(routes)}
        </Flex>
      </Flex>
    </>
  );
}

// THIS WORKS
{
  /* {routes.map((route, index) => (
            <ChakraLink
              key={index}
              variant='navUnderline'
              to={route.path}
              linktext={route.linktext}
              color={props.color}
              onClick={handleLinkClick}
            />
    ))} */
}
