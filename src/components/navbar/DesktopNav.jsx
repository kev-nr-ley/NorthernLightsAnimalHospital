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
    console.log("resize");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      w='100vw'
      maxW='100%'
      h='60px'
      p='0 5vw'
      lineHeight='60px'
      position='sticky'
      top='0'
      bg={colors.light}
      zIndex='9'
      justifyContent='space-between'
      {...props}>
      <Image src='/public/images/Logo.png'></Image>

      <Flex
        gap='4'
        flexWrap='nowrap'
        h='100%'
        justifyContent={"center"}
        alignItems={"center"}>

          {props.navLinks.map((link) => (
            <ChakraLink as={Link} variant='Default' to={link.to}>
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
        <FaInstagram fontSize='32px' />
        <FaFacebook fontSize='32px' />
      </Flex>
    </Flex>
  );
}
