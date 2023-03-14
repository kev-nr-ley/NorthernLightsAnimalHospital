import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import ChakraLink from "./ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function SectionFlexContainer(props) {
  return (
    <Flex
    className='SectionFlexContainer'
      flexDirection='column'
      alignItems={props.alignItems || "flex-start"}
      justifyContent='center'
      w='100vw'
      minW='320px'
      maxW='100%'
      position='relative'
      px={["8", "12", "5vw", "5vw"]} //affects section heading
      py={["16", "20", "20", "20"]}
      {...props}>
      {props.headertext ? (
        <Heading
          variant='sectionHeading'
          // bg='red'
          w='100%'
          alignSelf={props.alignheader ? props.alignheader : "center"}>
          {props.headertext}
        </Heading>
      ) : null}

      {props.subtext ? <Text mt='2'>{props.subtext}</Text> : null}

      {props.children ? (
        <Flex
          py='10'
          flexDirection={
            !props.fliphorizontal
              ? ["column", "column", "column", "row"]
              : ["column", "column", "column", "row-reverse"]
          }
          h='100%'
          w='100%'
          flexWrap='wrap'
          alignItems={
            props.alignchildren || ["center", "center", "center", "flex-start"]
          }
          justifyContent={["center", "center", "center", "space-evenly"]}
          // px={["0vw", "0vw", "5vw", "5vw"]} //affects section content
          position='relative'
          listStylePosition={"inside"}
          // gap={["20", "24", "24", "30"]}
          gap='20'
          // bg='blue'
        >
          {props.children}
        </Flex>
      ) : null}

      {props.linktext && (
        <ChakraLink
          // mt='12'
          // alignSelf='flex-end'
          linktext={props.linktext}
          alignSelf={
            props.alignlink ? props.alignlink : ["center", "center", "center"]
          }
          variant={props.linkvariant ? props.linkvariant : "LightOutline"}
          to={props.linkto}>
        </ChakraLink>
      )}
    </Flex>
  );
}
