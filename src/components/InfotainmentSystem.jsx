import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
export default function InfotainmentSystem(props) {
  return (
    <Flex
      // bg='blue.500'
      flexDirection='column'
      justifyContent={"flex-start"}
      w='100%'
      zIndex='4'
      {...props}>
      <Flex gap='4' fontSize='24px'>
        {props.icondisplay ? (
          <Box fontSize='24px'>{props.icondisplay}</Box>
        ) : null}

        <Heading variant='bodyHeading' mt='0'>
          {props.headertext}
        </Heading>
      </Flex>
      <Box mt='1'>{props.children}</Box>
    </Flex>
  );
}
