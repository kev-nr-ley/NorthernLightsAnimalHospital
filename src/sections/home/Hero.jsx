import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Link } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
export default function Hero(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      minW='360px'
      maxW='100%'
      position='relative'
      h='100vh'
      {...props}>
      <Flex
        flexDirection={"column"}
        w={["100vw", "100vw", "80vw", "60vw"]}
        color={colors.light}
        bg={colors.primary}
        position={["absolute"]}
        top={["auto", "auto", "70%"]}
        bottom={["0", "0", "auto"]}
        left={["0%"]}
        px={["5vw", "5vw", "10vw", "10vw"]}
        py='12'
        gap='4'
        transform={[
          "translate(0%, -30%)",
          "translate(0%, 0%)",
          "translate(0%, -100%)",
        ]}>
        <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
          Welcome to The Original Spay Clinic.
        </Heading>

        <Text mt='4'>
          Here at The Original Spay Clinic, we are dedicated to providing the
          highest level of veterinary medicine along with friendly,
          compassionate service. We believe in treating every patient as if they
          were our own pet, and give them the same loving attention and care.
        </Text>

          <Link variant={'LightOutline'}>Video Introduction</Link>
      </Flex>
    </Box>
  );
}
