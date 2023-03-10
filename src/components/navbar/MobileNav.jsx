import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";

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
    { name: "About", to: "/About" },
    { name: "Spay & Neuter", to: "/spay" },
    { name: "Dental Care", to: "#" },
    { name: "Contact Us", to: "#" },
  ];



  return (
    <Flex
      flexDirection={"column"}
      justifyContent='center'
      w='70vw'
      maxW='100%'
      minH='100vh'
      position='fixed'
      top='0'
      bg={colors.background}
      zIndex='9'
      alignItems='center'
      p='4px 15vw'
      {...props}>
      <Image src='/public/images/Logo.png'></Image>

      <Flex flexDirection={"column"} gap='4' flexWrap='nowrap' h='100%'>
        {navLinks.map((link, index) => (
          <ChakraLink as={Link} key={index} variant='Default' to={link.to}>
            {link.name}
          </ChakraLink>
        ))}
      </Flex>

      <Flex gap='4' flexWrap='nowrap' h='100%'>
        <InstagramLink />
        <FacebookLink />
      </Flex>
    </Flex>
  );
}
