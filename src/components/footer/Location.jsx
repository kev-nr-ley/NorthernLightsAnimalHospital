import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
export default function Location(props) {
  return (
    <Flex {...props}>
      <HiLocationMarker fontSize='1.5rem' />
      <Box>
        <Text variant='bold'>Clinic Address</Text>
        <Text>10575 111 St NW</Text>
        <Text>Edmonton, Alberta T5H 3E8</Text>

        <Link as={Box} mt='2' variant='solid'>
          Open Maps
        </Link>
      </Box>
    </Flex>
  );
}
