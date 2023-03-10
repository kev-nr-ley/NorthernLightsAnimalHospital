import React from "react";
import { Box, Flex, Text, HStack, Center } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
export default function UserTestimonial(props) {
  const { colors } = useTheme();

  const makeStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar />);
    }

    return (
      <Center
        as={HStack}
        color={colors.star}
        fontSize='2.5rem'
        {...props.starProps}>
        {stars}
      </Center>
    );
  };

  
  return (
    <Flex flexDirection='column' justifyContent={"space-between"} {...props}>
      <Box>
        {makeStars(props.rating)}
        <Center as={Text} my='2rem' fontSize='16px'>
          {props.review}
        </Center>
      </Box>
      <Center as={Text} variant='bold'>
        {props.name}
      </Center>
    </Flex>
  );
}
