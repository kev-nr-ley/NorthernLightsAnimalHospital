import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
export default function Logo(props) {
  return (
    <Center {...props}>
      <Image w='100%' src='/images/Logo.png' objectFit='contain' />
    </Center>
  );
}
