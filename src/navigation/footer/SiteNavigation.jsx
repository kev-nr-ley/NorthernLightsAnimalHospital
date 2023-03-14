import React from "react";
import { Text, Flex, Link, Heading } from "@chakra-ui/react";
import ChakraLink from "../../components/ChakraLink";
import InfotainmentSystem from "../../components/InfotainmentSystem";
export default function SiteNavigation(props) {
  return (
    <InfotainmentSystem headertext='Site Navigation' {...props}>
      <Flex flexDirection='column'>
        <ChakraLink linktext='Home' to='/' />
        <ChakraLink linktext='About' to='/about' />
        <ChakraLink linktext='Spay & Neuter' to='/spay' />
        <ChakraLink linktext='Dental Care' to='/dental' />
        <ChakraLink linktext='Health' to='/health' />
        <ChakraLink linktext='Contact' to='/contact' />
      </Flex>
    </InfotainmentSystem>
  );
}
