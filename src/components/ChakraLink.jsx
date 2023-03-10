import React from "react";

import { Link as NewLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

export default function ChakraLinkArrow(props) {
  return (
    <NewLink
      display='flex'
      alignItems='center'
      variant={"LightOutline"}
      fontSize='1rem'
      gap='1rem'
      fontWeight='800'
      to={props.to}
      {...props}>
      {props.text}
    </NewLink>
  );
}
