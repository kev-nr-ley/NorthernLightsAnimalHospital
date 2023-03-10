import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
export default function SiteNavigation(props) {
  return (
    <Flex flexDirection={"column"} {...props}>
      <Text variant='bold'>Site Navigation</Text>
      <Text>Home</Text>
      <Text>About</Text>
      <Text>Spay and Neuter</Text>
      <Text>Other Services</Text>
      <Text>Contact Us</Text>
    </Flex>
  );
}
