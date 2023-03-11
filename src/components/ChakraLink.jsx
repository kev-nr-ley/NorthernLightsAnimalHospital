import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ChakraLink(props, children) {
  return (
    <NewLink
      as={Link}
      variant={props.variant}
      to={props.to || "/"}
      linktext={props.linktext}
      onClick={props.onclick || null}
      aria-label={`link to ${props.linktext} page`}
      {...props}>
      {props.linktext}
    </NewLink>
  );
}

export default ChakraLink;
