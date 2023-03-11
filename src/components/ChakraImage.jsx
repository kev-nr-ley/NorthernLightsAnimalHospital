import React from "react";
import { Image, Box } from "@chakra-ui/react";

export default function ChakraImage(props) {
  const imagePath = "/images/webp/";
  const imageType = ".webp";
  return (
    <Box w={props.w} h={props.h} bg={props.bg} {...props}>
      <Image
        // src={imagePath + props.src + imageType}
        src={props.src}
        alt={`image of ${props.alt}`}
        w='100%'
        h='100%'
        objectFit={props.objectFit || "cover"}
      />
    </Box>
  );
}
