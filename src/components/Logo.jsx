import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import ChakraLink from "./ChakraLink";
export default function Logo(props) {
  return (
    <Center {...props}>
      <ChakraLink>
        <Image
          w='100%'
          src='/images/northernlights-logo.webp'
          objectFit='cover'
        />
      </ChakraLink>
    </Center>
  );
}
