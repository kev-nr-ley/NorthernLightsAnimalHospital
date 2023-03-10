import React from "react";

import { Box, Image, Heading, Flex, Link } from "@chakra-ui/react";
export default function ImageHeaderTextBlock(props) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={["center", "center"]}
      flexDirection='column'
      h='100%'
      w={["100%", "100%", "100%", "auto"]}
      minW='280px'
      maxW='360px'
      position='relative'
      {...props}>
      {props.src ? (
        <Image
          src={props.src}
          w={["75px"]}
          h={["75px"]}
          alignSelf='flex-start'
          overflow='visible'
          objectFit='contain'
        />
      ) : null}

      {props.headercircle ? (
        <Heading
          w='80px' //for circle
          h='80px' //for circle
          borderRadius='100%'
          color={props.headercolor}
          bg={props.headerbg}
          display='flex'
          justifySelf='flex-start'
          alignSelf='flex-start'
          justifyContent='center'
          alignItems='center'
          whiteSpace={"nowrap"}
          variant='sectionHeading'>
          {props.headercircle}
        </Heading>
      ) : null}

      {/* Section heading */}
      <Heading
        mt='6'
        w='100%'
        borderBottomColor={props.color}
        variant='bodyHeading'>
        {props.headertext}
      </Heading>

      <Box>{props.children}</Box>
      {props.linktext ? (
        <Link mt='4' to={props.linkto} variant={props.linkvariant}>
          {props.linktext}
        </Link>
      ) : null}
    </Flex>
  );
}
