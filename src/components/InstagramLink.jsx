import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
export default function InstagramLink(props) {
  return (
    <Link
      as={Box}
      w={props.w}
      h={props.h}
      to='facebook.com'
      target='_blank'
      {...props}>
      <FaInstagram fontSize={props.fontSize} />
    </Link>
  );
}
