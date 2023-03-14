import React from "react";
import { Text, Flex, Link, Heading } from "@chakra-ui/react";
import ChakraLink from "../../components/ChakraLink";
export default function SiteNavigation(props) {
  return (
    <Flex flexDirection={"column"} w='100%' zIndex='4' {...props}>
      <Heading variant='bodyHeading' mt='0'>
        Site Navigation
      </Heading>
      <ChakraLink linktext='Home' to='/' />
      <ChakraLink linktext='About' to='/about' />
      <ChakraLink linktext='Spay & Neuter' to='/spay' />
      <ChakraLink linktext='Dental Care' to='/dental' />
      <ChakraLink linktext='Health' to='/health' />
      <ChakraLink linktext='Contact' to='/contact' />

        
    </Flex>
  );
}
