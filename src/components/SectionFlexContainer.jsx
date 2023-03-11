import { Flex, Heading, Text, Link } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
export default function SectionFlexContainer(props) {
  return (
    <Flex
      flexDirection='column'
      alignItems={["flex-start"]}
      justifyContent='center'
      w='100vw'
      minW='320px'
      maxW='100%'
      position='relative'
      px={["8", "12", "15vw", "15vw"]} //affects section heading
      py={["16", "20", "20", "20"]}
      {...props}>
      <Heading
        variant='sectionHeading'
        // bg='red'
        w='100%'
        alignSelf={props.alignheader ? props.alignheader : "center"}>
        {props.headertext}
      </Heading>
      <Text mt='2'>{props.subtext}</Text>
      <Flex
        py='10'
        flexDirection={
          !props.fliphorizontal
            ? ["column", "column", "column", "row"]
            : ["column", "column", "column", "row-reverse"]
        }
        h='100%'
        w='100%'
        alignItems={["center", "center", "center", "flex-start"]}
        justifyContent={["center", "center", "center", "space-evenly"]}
        // px={["0vw", "0vw", "5vw", "5vw"]} //affects section content
        position='relative'
        listStylePosition={"inside"}
        // gap={["20", "24", "24", "30"]}
        gap='12'
        // bg='blue'
        >
        {props.children}
      </Flex>

      {props.linktext && props.linkto && (
        <Link
          mt='12'
          // alignSelf='flex-end'
          alignSelf={props.alignlink ? props.alignlink : "center"}
          variant={props.linkvariant ? props.linkvariant : "LightOutline"}
          to={props.linkto}>
          {props.linktext}
        </Link>
      )}
    </Flex>
  );
}
