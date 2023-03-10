import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
export default function Considerations(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row-reverse"]}
      alignItems='center'
      justifyContent='center'
      bg='background'
      borderRadius='60px'
      overflow='hidden'
      h='fit-content'
      py='2vw'
      px='2vw'
      position='relative'
      {...props}>
      <Flex
        minW='10vw'
        w={["100%", "100%", "50%"]}
        flexShrink='3'
        h={["20vh", "20vh", "100%"]}
        justifyContent={"flex-end"}>
        <Image
          src={props.image}
          style={{ aspectRatio: "2/2.5" }}
          maxH='100%'
          borderRadius='50px'
          objectFit={"fill"}
        />
      </Flex>
      <Box w='80%' h='fit-content' px='2rem' py='4rem'>
        <Heading variant='bodyHeading' fontSize={["28px", "28px,", "36px"]}>
          {props.title}
        </Heading>
        {props.children}
      </Box>
    </Flex>
  );
}
