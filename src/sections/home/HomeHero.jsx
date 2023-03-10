import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Link } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import HeroContainer from "@components/HeroContainer";
export default function HomeHero(props) {
  const { colors } = useTheme();

  return (
    <HeroContainer heading='Welcome to The Original Spay Clinic.' linktext='Video Introduciton' linkto='/'
    h='100vh'
    >
      <Text mt='4'>
        Here at The Original Spay Clinic, we are dedicated to providing the
        highest level of veterinary medicine along with friendly, compassionate
        service. We believe in treating every patient as if they were our own
        pet, and give them the same loving attention and care.
      </Text>
    </HeroContainer>
  );
}
