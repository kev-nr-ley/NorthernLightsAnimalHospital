import { Flex, Heading, Image, Box } from "@chakra-ui/react";

import ChakraImage from "@components/ChakraImage";
export default function ImageTextPill(props) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={["center", "center"]}
      flexDirection='row'
      h='100%'
      margin='12'
      borderRadius='50px'
      w='80vw'
      px='12'
      py='4'
      position='relative'
      boxShadow='0px 4px 13px 0px #00000025'
      {...props}>
      {/* Section heading */}
      <Box w='100%' 
      >
        <Heading
          mt='6'
          borderBottomColor={props.color}
          variant='bodyHeading'>
          {props.heading}
        </Heading>
        {props.src ? (
          <ChakraImage
            src={props.src}
            w={["140px"]}
            h={["140px"]}
            alignSelf='flex-start'
            overflow='visible'
            objectFit='contain'
            float='right'
            borderRadius='50px'
            m='2'
          />
        ) : null}

        {props.children}
      </Box>

    
    </Flex>
  );
}
