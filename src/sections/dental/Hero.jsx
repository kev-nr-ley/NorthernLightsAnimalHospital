import { ArrowForwardIcon } from "@chakra-ui/icons";
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
          Dental Care for Pets
        </Heading>

        <Text>
          The most effective way to clean your pet’s teeth and remove all dental
          disease that may have accumulated is through a professional cleaning.
          Here at The Spay Clinic we utilize state of the art dental imaging
          equipment and ultrasonic dental tools to help enhance our capabilities
          during your pet’s dental procedure. We are pleased offer FREE
          pre-dental consultations for you and your pet.
        </Text>

        <Link variant='LightOutline' alignSelf='flex-start'>
          Book a free consultation
        </Link>
      </Flex>
    </Box>
  );
}
