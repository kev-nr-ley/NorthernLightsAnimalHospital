import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
export default function FacebookLink(props) {
  return (
    <Box as={Link} to='facebook.com' target='_blank' {...props}>
      <FaFacebook />
    </Box>
  );
}
