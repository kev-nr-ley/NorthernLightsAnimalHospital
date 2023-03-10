import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import HeroContainer from "@components/HeroContainer";
export default function Hero(props) {
  const { colors } = useTheme();

  return (
    <HeroContainer heading='Our mission' linktext='Video Introduciton' linkto='/'>
      <Text>
        The Original Spay Clinic has been providing affordable priced spays and
        neuters for dogs and cats throughout the Edmonton and surrounding areas
        for over 35 years. Our ongoing mission is, and always has been, to
        provide the community with professional and affordable spaying and
        neutering service, using only the latest technology. In keeping with
        this, that same affordability is available for all of your pets
        veterinary needs.
      </Text>
    </HeroContainer>
  );
}