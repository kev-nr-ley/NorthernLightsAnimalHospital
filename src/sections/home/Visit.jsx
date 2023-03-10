import { Flex, Box, Heading, Text, Link, Image, Grid } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
export default function Visit(props) {
  const { colors } = useTheme();

  const staff = [
    {
      name: "Dr. Charles West",
      title: "dr",
      image: "/images/charles-west.png",
    },
    {
      name: "Dr. Amanda McMillan",
      title: "dr",
      image: "/images/amanda-mcmillan.png",
    },

    {
      name: "Dr. Ellen Lagore",
      title: "dr",
      image: "/images/ellen-lagore.png",
    },
  ];

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      minW='300px'
      gap='5vw'
      w='100vw'
      maxW='100%'
      position='relative'
      bg={colors.primary}
      color={colors.light}
      p={["5vw 5vw", "5vw 5vw", "5vw 5vw", "5vw 5vw"]}
      justifyContent={"center"}
      {...props}>
      <Flex flexDirection='column' justifyContent={"center"}>
        <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
          Schedule a visit.
        </Heading>
        <Heading mt='4'>The Original Spay Clinic</Heading>
        <Text>
          10575 111 St. NW <br />
          Edmonton, Alberta <br />
          T5H 3E8
        </Text>

        <Heading mt='2'>Phone</Heading>
        <Text>780-426-4221</Text>
        <Heading>Hours</Heading>
        <Text mt='2'>
          Monday-Friday: 7am-6pm <br />
          Closed weekends
        </Text>

        <Link variant='LightOutline' mt='4'>
          Request An Appointment
        </Link>
      </Flex>

      <Box>
        <Image
          src='/images/map.png'
          w='100%'
          h='100%'
          minW='320px'
          minH='320px'
          maxH='500px'
          maxW='500px'
        />
      </Box>
    </Flex>
  );
}
