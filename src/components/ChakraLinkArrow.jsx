import React from "react";

import { Link as NewLink, Flex, Image, Text, HStack } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "@chakra-ui/react";

export default function ChakraLinkArrow(props) {
  const { colors } = useTheme();
  return (
    <NewLink
      as='NewLink'
      display='flex'
      alignItems='center'
      variant={"LightOutline"}
      fontSize='1rem'
      gap='1rem'
      fontWeight='800'
      to={props.to}
      {...props}>
      <Text>{props.text}</Text>
    </NewLink>
  );
}
