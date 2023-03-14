import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function ChakraLink(props) {
  return (
    <NewLink
    className='ChakraLink'
      as={RouterLink}
      variant={props.variant}
      to={props.to || "/"}
      linktext={props.linktext}
      onClick={props.onClick || null}
      aria-label={`link to ${props.linktext} page`}
      {...props}>
      {props.linktext ? props.linktext : props.children}
    </NewLink>
  );
}

export default ChakraLink;
