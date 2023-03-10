import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
export default function SiteNavigation(props) {
  return (
    <Flex flexDirection={"column"} {...props}>
      <Text variant='bold'>Site Navigation</Text>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/spay'>Spay & Neuter</Link>
      <Link to='/dental'>Dental</Link>
      <Link to='/health'>Other Services</Link>
      <Link to='/contact'>Contact Us</Link>
    </Flex>
  );
}
