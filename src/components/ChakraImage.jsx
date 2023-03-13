import React from "react";
import { Image, Box, Link } from "@chakra-ui/react";

export default function ChakraImage(props) {
  const imagePath = "/images/";
  const imageType = ".webp";
  return (
    <Image
      // src={imagePath + props.src + imageType}
      src={props.src }
      alt={`image of ${props.alt}`}
      w={props.w || "100%"}
      h={props.h || "100%"}
      objectFit={props.objectFit || "cover"}
      borderRadius={props.borderRadius || "0px"}
    />
  );
}
