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
        w={["100vw", "100vw", "70vw", "65vw"]}
        h={["auto", "auto", "auto"]}
        pl={["8", "12", "15vw"]}
        pr={["8", "12", "20", "24"]}
        py='16'
        position={["absolute", "absolute", "relative"]}
        bottom={["0", "0", "auto"]} //bototm of hero on reveal
      >
        <Heading variant='sectionHeading'>{props.heading}</Heading>
        <Box pb='8'>{props.children}</Box>

        <Link
          mt='4'
          variant='LightOutline'
          to={props.linkto}
          w={["100%", "auto", "auto"]}
          textAlign='center'>
          {props.linktext}
        </Link>
      </Flex>
    </Flex>
  );
}
