import React from "react";
import {Box, Image } from "@chakra-ui/react";
export default function Logo(props) {

  return (
    <Box {...props}>
      <Image w='100%' src='/images/Logo.png' objectFit='contain' />
    </Box>


  );
}
