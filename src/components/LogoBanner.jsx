import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import ChakraLink from "./ChakraLink";
export default function Logo(props) {
  return (
    <Center  {...props}>
      <ChakraLink to='/'>
      <Image w='100%' src='images/northernlights-banner.webp' alt='North Lights Animal Hospital Banner'   objectFit='cover' />
  </ChakraLink>
    </Center>
  );
}
