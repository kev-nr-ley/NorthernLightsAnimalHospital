import React from "react";

import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
export default function ImageCenteredCard(props) {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection='column'
      position='relative'
      alignItems='center'
      justifyContent='center'
      bg='white'
      borderRadius='32px'
      p='8'
      minW='400px'
      w='400px'
      boxShadow='0px 4px 13px rgba(0, 0, 0, 0.25)'
      {...props}>
      {props.src ? (
        <Image
          src={props.src}
          w={props.imageWidth}
          h={props.imageHeight}
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

      <Text>{props.text}</Text>
      <Box mt='8'>{props.children}</Box>
    </Flex>
  );
}
