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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  // --------------------------------------------

  // Menu Drawer and Buttons Only ---------------------------------------
  const btnRef = React.useRef();
  const [currentPath, setCurrentPath] = useState("/");
  const [cuurentLink, setCurrentLink] = useState({});
  const [currentSublinks, setCurrentSublinks] = useState({});
  const [showSublinks, setShowSublinks] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    const link = routes.find((route) => route.path === path);
    setCurrentLink(link);
    setCurrentSublinks(link.sublinks);
  }, []);

  const handleLinkOnMouseEnter = (link) => {
    setCurrentLink(link);
    setCurrentSublinks(link.sublinks);
    link.sublinks ? setShowSublinks(true) : setShowSublinks(false);
  };

  const handleLinkOnMouseLeave = () => {
    const link = routes.find((route) => route.path === currentPath);
    setCurrentLink(link);
    setCurrentSublinks(link.sublinks);
    link.sublinks ? setShowSublinks(true) : setShowSublinks(false);
  };
  // -------------------------------------------------------------------

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
      h={visible ? "40px" : "80px"}
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
          top={visible ? "-80px" : "0px"}
        />
        <LogoBanner
          w='100px'
          h='40px'
          transition='all 0.2s ease-in-out'
        />
      </HStack>

      <Flex
        justifyContent={"center"}
        alignItems='center'
        h='100%'
        gap='12'>
        {routes.map((route, index) => (
          <ChakraLink
            key={index}
            variant='navUnderline'
            to={route.path}
            linktext={route.linktext}
            // h={scrollDown ? "40px" : scrollUp ? "80px" : "80px"}
          />
        ))}
      </Flex>
    </Flex>
  );
}
