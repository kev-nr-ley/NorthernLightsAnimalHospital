import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import SectionFlexContainer from "@components/SectionFlexContainer";
import HeroContainer from "@components/HeroContainer";
import { useTheme } from "@chakra-ui/react";
export default function SpayHero(props) {
  const { colors } = useTheme();

  return (
    <HeroContainer
      heading='Spaying and neutering your pets '
      linktext='Video Introduciton'
      linkto='/'>
      <Text>
        The Original Spay Clinic has been providing affordable priced spays and
        neuters for dogs and cats throughout the Edmonton and surrounding areas
        for over 35 years. Our ongoing mission is, and always has been, to
        provide the community with professional and affordable spaying and
        neutering service, using only the latest technology.
      </Text>
    </HeroContainer>
  );
}
