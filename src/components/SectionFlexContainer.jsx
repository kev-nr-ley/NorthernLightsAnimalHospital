import { Flex, Box, Heading, Text, Image, Grid, Link } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
export default function SectionFlexContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection='column'
      alignItems={["flex-start"]}
      w='100vw'
      minW='320px'
      maxW='100%'
      position='relative'
      px={["5vw", "5vw", "10vw", "10vw"]} //affects section heading
      py={["5vw", "5vw", "10vw", "10vw"]}
      my='10vh'
      {...props}>
      <Heading variant='sectionHeading'>{props.header}</Heading>
      <Text>{props.subText}</Text>
      <Flex
        mt='8'
        flexDirection={
          !props.flipHorizontal
            ? ["column", "column", "column", "row"]
            : ["column", "column", "column", "row-reverse"]
        }
        h='100%'
        w='100%'
        alignItems={["center", "center", "center", "flex-start"]}
        justifyContent={["center", "center", "center", "space-evenly"]}
        px={["0vw", "0vw", "5vw", "5vw"]} //affects section content
        position='relative'
        listStylePosition={"inside"}
        gap={["10vw", "8vw", "5vw", "5vw"]}>
        {props.children}
      </Flex>

      {props.linkText && props.linkTo && (
        <Link
          mt='8'
          // alignSelf='flex-end'
          alignSelf='center'
          variant={props.linkVariant ? props.linkVariant : "LightOutline"}
          to={props.linkTo}>
          {props.linkText}
        </Link>
      )}
    </Flex>
  );
}
