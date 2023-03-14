import { Flex, Heading, Image, Box } from "@chakra-ui/react";

import ChakraImage from "@components/ChakraImage";
export default function ImageTextPill(props) {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      alignItems='center'
      justifyContent='center'
      w={props.w || ["100%", "100%", "100%", "100%"]}
      h='fit-content'
      gap='2rem'
      borderRadius='50px'
      p='2rem'
      position='relative'
      boxShadow='0px 4px 10px 0px #00000040'
      {...props}>
      {props.src ? (
        <ChakraImage
          src={props.src}
          w={["150px", "150px", "150px", "150px"]}
          h={["150px", "150px", "150px", "150px"]}
          py='0rem'
          alignSelf='center'
          overflow='visible'
          objectFit='contain'
        />
      ) : null}

      {/* Section heading */}
      <Box w='100%' px='1rem' py='1rem'>
        <Heading borderBottomColor={props.color} variant='bodyHeading'>
          {props.heading}
        </Heading>

        {props.children}
      </Box>
    </Flex>
  );
}
