import React from "react";


import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
export default function Hero(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      minW='320px'
      maxW='100%'
      position='relative'
      h='50vh'
      minH='60vh'
      {...props}>
      <Flex
        flexDirection={"column"}
        w={["100vw", "100vw", "80vw", "60vw"]}
        color={colors.light}
        bg={colors.primary}
        position={["absolute"]}
        top={["auto", "auto", "50%"]}
        bottom={["0", "0", "auto"]}
        left={["0%"]}
        px={["5vw", "5vw", "10vw", "10vw"]}
        py='12'
        gap='4'
        transform={[
          "translate(0%, -30%)",
          "translate(0%, 0%)",
          "translate(0%, -50%)",
        ]}>
        <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
        Health Exams & Vaccinations
        </Heading>

        <Text>
          Taking your new pet to a veterinarian when you first get them is
          highly recommended to start them with a clean bill of health. At this
          appointment, your veterinarian can conduct a full physical exam and
          help you set up a vaccination protocol based on your pet’s lifestyle.
        </Text>

        <Link variant='LightOutline' alignSelf='flex-start'>
         Make an Appointment
        </Link>
      </Flex>
    </Box>
  );
}
