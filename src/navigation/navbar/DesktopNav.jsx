import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import Routes from "@navigation/PageRoutes";
import Logo from "@components/Logo";
import PageRoutes from "@navigation/PageRoutes";

export default function Navbar(props) {
  const { colors, fonts } = useTheme();

  return <Flex h='200px' bg='red' color='white' >
  
 <PageRoutes  />

  </Flex>;
}
