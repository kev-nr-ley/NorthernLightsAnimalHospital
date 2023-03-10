import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
export default function InstagramLink(props) {
  return (
    <Box as={Link} to='instagram.com' target='_blank' {...props}>
      <FaInstagram />
    </Box>
  );
}
