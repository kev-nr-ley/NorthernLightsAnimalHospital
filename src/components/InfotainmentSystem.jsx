import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
export default function InfotainmentSystem(props) {
  return (
    <Flex
      flexDirection='column'
      justifyContent={"center"}
      h='100%'
      w='100%'
      {...props}>
      <Flex gap='4' mt='8' fontSize='24px'> 
        {props.icon ? props.icon : null}

        <Text variant='bold' mt='0'>
          {props.headertext}
        </Text>
      </Flex>
      <Box mt='1'>{props.children}</Box>
    </Flex>
  );
}
