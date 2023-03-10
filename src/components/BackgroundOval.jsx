import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";

export default function BackgroundOval(props) {
  const { colors } = useTheme();
  
  return (
    <Box
      w='100vw'
      h='100vh'
      position='absolute'
      top='0'
      left='0'
      zIndex='1'
      bg='transparent'>
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        w='80%'
        h='80%'
        bg='red'
        borderRadius={"100px 100px 100px 100px"} // tleft tright bright bleft
        opacity='0.1'
        zIndex='-1'
        {...props}></Box>
    </Box>
  );
}
