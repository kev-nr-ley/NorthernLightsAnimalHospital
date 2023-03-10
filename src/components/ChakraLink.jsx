import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ChakraLink(props, children) {
  return (
    <NewLink
      as={Link}
      variant={props.variant}
      to={props.to || "/"}
      name={props.name}
      onClick={props.onClick || null}
      aria-label={`link to ${children} page`}
      {...props}>
      <Text>{props.name}</Text>
    </NewLink>
  );
}

export default ChakraLink;
