import { Flex, Heading, Image, Box } from "@chakra-ui/react";

import ChakraImage from "@components/ChakraImage";
export default function ImageTextPill(props) {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      alignItems='flex-start'
      justifyContent='flex-start'
      w={props.w || ["100%", "100%", "100%", "100%"]}
      h='fit-content'
      borderRadius='50px'
      pr={["8", "8", "8", "16"]}
      pl={["8", "8", "8", "0"]}
      py={["8", "8", "8", "8"]}
      position='relative'
      boxShadow='0px 4px 13px 0px #00000025'
      {...props}>
      {props.src ? (
        <ChakraImage
          src={props.src}
          w={["200px", "200px", "200px", "200px"]}
          h={["200px", "200px", "200px", "200px"]}
          alignSelf='center'
          overflow='visible'
          objectFit='contain'
          mx={["0", "0", "0", "16"]}
          my={["8", "8", "8", "0"]}
        />
      ) : null}

      {/* Section heading */}
      <Box w='100%'>
        <Heading borderBottomColor={props.color} variant='bodyHeading'>
          {props.heading}
        </Heading>

        {props.children}
      </Box>
    </Flex>
  );
}
