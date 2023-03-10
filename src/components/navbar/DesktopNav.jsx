import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Logo from "@components/Logo";
export default function Navbar(props) {
  const { colors, fonts } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
    console.log("resize");
  };

  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Spay & Neuter", to: "/spay" },
    { name: "Dental Care", to: "/dental" },
    // { name: "Services", to: "/health" },
    // { name: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      w='100vw'
      maxW='100%'
      h='100px'
      p='15px 5vw'
      lineHeight='60px'
      position='sticky'
      top='0'
      bg={colors.light}
      zIndex='9'
      justifyContent='space-between'
      {...props}>
      <Logo />
      <Flex
        gap='12'
        flexWrap='nowrap'
        h='100%'
        justifyContent={"center"}
        alignItems={"center"}>
        {navLinks.map((link, index) => (
          <ChakraLink key={index} as={Link} variant='navLink' to={link.to}>
            {link.name}
          </ChakraLink>
        ))}
      </Flex>

      <Flex
        gap='4'
        flexWrap='nowrap'
        h='100%'
        justifyContent={"center"}
        alignItems={"center"}>
        <FaInstagram fontSize='2rem' />
        <FaFacebook fontSize='2rem' />
      </Flex>
    </Flex>
  );
}
