import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
export default function Logo(props) {
  return (
    <Center  {...props}>
      <Image w='100%' src='images/northernlights-banner.webp' alt='North Lights Animal Hospital Banner'   objectFit='cover' />
    </Center>
  );
}
