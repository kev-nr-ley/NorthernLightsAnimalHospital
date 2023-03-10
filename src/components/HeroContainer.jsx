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
      {...props}>
      <Flex
        // For the header, text, and link
        flexDirection='column'
        bg='primary'
        alignItems={["flex-start"]}
        justifyContent='center'
        w={["100vw", "100vw", "60vw"]}
        h={["auto", "auto", "auto"]}
        pl={["2vw", "2vw", "15vw"]}
        pr='2vw'
        py='2vh'
        position={["absolute", "absolute", "relative"]}
        bottom={["0", "0", "auto"]} //bototm of hero on reveal
      >
        <Heading variant='sectionHeading'>{props.heading}</Heading>
        <Box>{props.children}</Box>
        <Link mt='4' variant='LightOutline' to={props.linkto}>
          {props.linktext}
        </Link>
      </Flex>
    </Flex>
  );
}
