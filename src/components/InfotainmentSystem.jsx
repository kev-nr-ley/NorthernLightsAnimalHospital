import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
export default function InfotainmentSystem(props) {
  return (
    <Flex
      // bg='blue.500'
      flexDirection='column'
      justifyContent={"center"}
      w='100%'
      {...props}>

      <Flex alignItems='flex-end' gap='4' mt='8' fontSize='24px'>
      <Box fontSize='24px'>
      {props.icondisplay ? props.icon : null}
      </Box>
        <Heading variant='bodyHeading' mt='0'>
          {props.headertext}
        </Heading>
      </Flex>
      <Box mt='1'>{props.children}</Box>
    </Flex>
  );
}