import React from "react";

import { Box, Image, Text, Heading, Flex, VStack } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import CrossProcessExports from "electron";
export default function ImageHeaderTextBlock(props) {
  const { colors } = useTheme();
  return (
    <Flex
      justifyContent={"center"}
      alignItems='center'
      flexDirection='column'
      w='360px'
      position='relative'
      {...props}>
      {props.src ? (
        <Image
          src={props.src}
          w='160px'
          h='160px'
          overflow='visible'
          objectFit='fill'></Image>
      ) : props.bigText ? (
        <Heading
          bg='background'
          borderRadius='100%'
          w='100px'
          h='100px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          as='h3'
          whiteSpace={"nowrap"}
          variant='SectionHeading'
          fontSize={["28px", "28px,", "36px"]}>
          {props.bigText}
        </Heading>
      ) : null}

      <Heading
        mb='4'
        mt='6'
        variant='SectionHeading'
        // whiteSpace={"nowrap"}
        fontSize={["24px"]}>
        {props.heading}
      </Heading>

      <Text>{props.text ? props.text : props.children}</Text>
      <Box mt='8'>{props.children}</Box>
    </Flex>
  );
}
