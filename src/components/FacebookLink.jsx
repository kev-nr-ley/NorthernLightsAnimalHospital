import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

export default function FacebookLink(props) {
  return (
    <Link
      as={Box}
      w={props.w}
      h={props.h}
      to='facebook.com'
      target='_blank'
      {...props}>
      <FaFacebook fontSize={props.fontSize} />
    </Link>
  );
}
