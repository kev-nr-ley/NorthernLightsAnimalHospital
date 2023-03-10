import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
export default function Hours(props) {
  return (
    <Flex gap='8' w='100%' {...props}>
      <TimeIcon fontSize='2rem' />
      <Box>
        <Text variant='bold'>Hours</Text>
        <Text>
          Monday-Friday: 7am-6pm <br />
          Closed Weekends
        </Text>
      </Box>
    </Flex>
  );
}
