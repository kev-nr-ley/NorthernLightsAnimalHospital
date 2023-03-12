import React from "react";
import { Text, Flex, Link, Heading } from "@chakra-ui/react";
export default function SiteNavigation(props) {
  return (
    <Flex flexDirection={"column"} w='100%' zIndex='4' {...props}>
      <Heading variant='bodyHeading' mt='0'>
        Site Navigation
      </Heading>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/spay'>Spay & Neuter</Link>
      <Link to='/dental'>Dental</Link>
      <Link to='/health'>Other Services</Link>
      <Link to='/contact'>Contact Us</Link>
    </Flex>
  );
}
