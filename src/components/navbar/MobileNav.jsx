import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function Navbar(props) {
  const { colors, fonts } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", to: "#" },
    { name: "Spay & Neuter", to: "#" },
    { name: "Dental Care", to: "#" },
    { name: "Contact Us", to: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", to: "#", icon: <FaInstagram fontSize='32px' /> },
    { name: "Facebook", to: "#", icon: <FaFacebook fontSize='32px' /> },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => {
      <IconLink to={link.to} key={index}>
        {link.icon}
      </IconLink>;
    });
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent='center'
      w='70vw'
      maxW='100%'
      minH='100vh'
      position='fixed'
      top='0'
      right='0'
      bg={colors.background}
      zIndex='9'
      alignItems='center'
      p='4px 15vw'
      {...props}>
      <Image src='/public/images/Logo.png'></Image>

      <Flex flexDirection={"column"} gap='4' flexWrap='nowrap' h='100%'>
        {props.navLinks.map((link) => (
          <ChakraLink as={Link} variant='Default' to={link.to}>
            {link.name}
          </ChakraLink>
        ))}
      </Flex>

      <Flex gap='4' flexWrap='nowrap' h='100%'>
        <FaInstagram fontSize='32px' />
        <FaFacebook fontSize='32px' />
      </Flex>
    </Flex>
  );
}
 