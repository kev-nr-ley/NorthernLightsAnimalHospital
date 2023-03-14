import { Flex, Box, Heading, Link } from "@chakra-ui/react";
export default function HeroContainer(props) {
  return (
    <Flex
      // For the background image
      color='light'
      flexDirection='column'
      bg='transparent'
      justifyContent={"center"}
      h={["100vh", "100vh", "80vh"]}
      w='100vw'
      position='relative'
      // {...props}
      {...props}>
      <Flex
        // For the header, text, and link
        flexDirection='column'
        bg={["primaryOpacity80", "primaryOpacity80", "primaryOpacity90"]}
        alignItems={props.alignchildren || ["flex-start"]}
        justifyContent={
          props.justifychildren || ["center", "center", "flex-start"]
        }
        w={props.w || ["100vw", "100vw", "70vw", "65vw"]}
        h={["100vh", "100vh", "auto"]}
        minH='fit-content'
        pl={["8", "12", "15vw"]}
        pr={["8", "12", "20", "24"]}
        py='16'
        position={["absolute", "absolute", "relative"]}>
        <Heading variant='sectionHeading'>{props.heading}</Heading>
        <Box
        // pb={["2", "4", "8"]}
        >
          {props.children}
        </Box>

        {props.linktext ? (
          <Link
          my='8'
            variant='LightOutline'
            to={props.linkto}
            w={["100%", "auto", "auto"]}
            textAlign='center'>
            {props.linktext}
          </Link>
        ) : null}
      </Flex>
    </Flex>
  );
}
