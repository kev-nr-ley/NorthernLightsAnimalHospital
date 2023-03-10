import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Image,
  Grid,
  Select,
  AspectRatio,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function StaffCard(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='clamp(300px, 30vw, 400px)'
      h='100%'
      objectFit='contain'
      boxShadow='0px 8px 8px rgba(0, 0, 0, 0.25)'
      borderRadius='30px'
      mb='5vh'
      bg={colors.light}
      overflow='hidden'
      position='relative'
      {...props}>
      <Box overflow='hidden' w='100%' h='100%'>
        <Image
          w='100%'
          h='100%'
          objectFit='cover'
          objectPosition='center center'
          src={props.image}
        />
      </Box>
      <Box px={["2vw"]} pb='2vh' mt='8'>
        <Heading variant='bodyHeading'>{props.name}</Heading>
        <Box mt='4'>
          {props.description.map((item, index) => {
            return (
              <Text mt='4' key={index}>
                {item}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
