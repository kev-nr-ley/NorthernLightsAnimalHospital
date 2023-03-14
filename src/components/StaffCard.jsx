import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import ChakraImage from "@components/ChakraImage";
import { useTheme } from "@chakra-ui/react";
export default function StaffCard(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      maxW={["auto", "320px", "380px", "100%"]}
      h='100%'
      objectFit='contain'
      boxShadow='0px 8px 8px rgba(0, 0, 0, 0.25)'
      borderRadius='30px'
      bg={colors.light}
      overflow='hidden'
      position='relative'
      {...props}>
      <Box
        borderRadius='100%'
        minH='240px'
        minW='240px'
        p='1.5rem'
        overflow='hidden'
        lexShrink='0'>
        <ChakraImage
          w='100%'
          h='100%'
          borderRadius='100%'
          src={props.image}
          alt={props.name}
          objectFit={props.imageobjectfit || "cover"}
        />
      </Box>

      <Flex
        flexDirection='column'
        justifyContent={"center"}
        py='1rem'
        px='1rem'
        alignItems='left'>
        <Heading variant='bodyHeading'>{props.name}</Heading>
        <Text>{props.children}</Text>
      </Flex>
    </Flex>
  );
}
