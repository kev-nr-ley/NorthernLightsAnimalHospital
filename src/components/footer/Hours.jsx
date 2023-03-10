import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
export default function Hours(props) {
  return (
    <Flex {...props}>
      <TimeIcon fontSize='1.5rem' />
      <Box>
        <Text variant='bold'>Hours</Text>
        <Text>Monday-Friday: 7am-6pm</Text>
        <Text>Closed Weekends</Text>
      </Box>
    </Flex>
  );
}
