import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";
import PageRoutes from "@navigation/PageRoutes";

import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";

export default function MobileNav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors } = useTheme();
  const handleLink = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    { path: "/", name: "Home", element: <Home /> },
    { path: "/About", name: "About", element: <About /> },
    { path: "/Spay", name: "Spay", element: <Spay /> },
    { path: "/Dental", name: "Dental", element: <Dental /> },
    { path: "/Health", name: "Health", element: <Health /> },
    { path: "/Contact", name: "Contact", element: <Contact /> },
  ];

  return (
    <Flex
      className='mobile-nav'
      position='fixed'
      top='0'
      right='0'
      zIndex='99999999999'
      alignItems='center'
      color={colors.light}
      bg={isMenuOpen ? "gray.700" : colors.backgroundDark50}
      w={isMenuOpen ? "70vw" : "100vw"}
      h={isMenuOpen ? "100vh" : "80px"}
      {...props}>
      <Box //menu icon container
        position='absolute'
        top='0'
        right='0'
        px='2vw'
        py='2vw'
        zIndex='999999999'>
        <IconButton
          icon={isMenuOpen ? <CloseIcon /> : <FaBars />}
          bg='transparent'
          _hover={{
            bg: "transparent",
            color: "primary",
          }}
          onClick={handleLink}
          fontSize='48px'
        />
      </Box>

      <Flex
        display={isMenuOpen ? "flex" : "none"}
        flexDirection='column'
        justifyContent='center'
        gap='8'
        px='5vw'>
        <Flex flexDirection='column' gap='4'>
          {routes.map((route, index) => (
            <ChakraLink
              key={index}
              variant='bigNavLink'
              to={route.path}
              name={route.name}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
