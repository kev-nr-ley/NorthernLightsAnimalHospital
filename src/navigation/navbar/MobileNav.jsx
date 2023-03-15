import React from "react";
import {
  Flex,
  Button,
  useDisclosure,
  VStack,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";

import Drawer from "@components/DrawerExample";
import { useState, useEffect } from "react";
import ChakraLink from "@components/ChakraLink";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";
import LogoAndBanner from "@components/LogoAndBanner";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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

export default function MobileDrawer() {
  // Hide Navbar on Scrolldown Only
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <Flex>
      <Button
        position='fixed'
        top={visible? '1rem' : '-3rem'}
        right='1rem'
        zIndex='100'
        ref={btnRef}
        
        transition='all 0.5s ease'
        onClick={onOpen}
        bg='transparent'
        fontSize='3rem'
        color='tertiary'
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}>
        <HamburgerIcon />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <LogoAndBanner mt='5vh' w='80%' maxW='300px' alignSelf='center' mb='2rem' />

        <List as={Flex}  flexDirection='column' gap='2rem' alignItems='left'>
          {routes.map((route, i) => (
            <ListItem as='span' key={i}>
              <ChakraLink
                variant='navUnderline'
                to={route.path}
                onClick={onClose}>
                {route.linktext}
              </ChakraLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Flex>
  );
}
