import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
export default function Location(props) {
  return (
    <Flex gap='8' w='100%' {...props}>
      <HiLocationMarker fontSize='2rem' />
      <Box>
        <Text variant='bold'>The Original Spay Clinic</Text>
        <Text>
          10575 111 St NW <br />
          Edmonton, Alberta T5H 3E8
        </Text>

        <Link as={Box} mt='2' variant='solid'>
          Open Maps
        </Link>
      </Box>
    </Flex>
  );
}
