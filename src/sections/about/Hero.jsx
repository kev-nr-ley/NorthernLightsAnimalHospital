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
          Our mission
        </Heading>

        <Text>
          The Original Spay Clinic has been providing affordable priced spays
          and neuters for dogs and cats throughout the Edmonton and surrounding
          areas for over 35 years. Our ongoing mission is, and always has been,
          to provide the community with professional and affordable spaying and
          neutering service, using only the latest technology. In keeping with
          this, that same affordability is available for all of your pets
          veterinary needs.
        </Text>

        <Link variant='LightOutline' alignSelf='flex-start'>
          Video Introduciton <ArrowForwardIcon fontSize='24px' />
        </Link>
      </Flex>
    </Box>
  );
}
