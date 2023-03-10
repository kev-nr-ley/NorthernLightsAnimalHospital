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
      px={["5vw"]}
      py={["5vw", "5vw", "10vw", "10vw"]}
      {...props}>
      <Heading variant='sectionHeading'>{props.header}</Heading>
      <Text>
        Please complete the following form to request an appointment. Please
        also note that availability will vary depending on your request. Your
        appointment will be confirmed by phone by a member of our staff.
      </Text>
      <Flex
        mt='8'
        flexDirection={["column", "column", "column", "row"]}
        h='100%'
        w='100%'
        alignItems={["center", "center", "center", "flex-start"]}
        justifyContent={["center", "center", "center", "space-evenly"]}
        position='relative'
        listStylePosition={"inside"}
        gap={["10vw", "8vw", "5vw", "5vw"]}>
        {props.children}
      </Flex>

      {props.linkText && props.linkTo && (
        <Link
          mt='8'
          variant='LightOutline'
          to={props.linkTo}
          alignSelf='center'>
          {props.linkText}
        </Link>
      )}
    </Flex>
  );
}
