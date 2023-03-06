import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MobileNav from "./navbar/MobileNav";
import DesktopNav from "./navbar/DesktopNav";

export default function Navbar(props) {
  const { colors, fonts } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 700 ? setIsMobile(true) : setIsMobile(false);
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


  return <>{isMobile ? <MobileNav  navLinks={navLinks}  {...props} /> : <DesktopNav navLinks={navLinks}  {...props} />}</>;
}