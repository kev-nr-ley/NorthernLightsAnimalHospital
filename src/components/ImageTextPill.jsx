import { Flex, Heading, Image } from "@chakra-ui/react";

export default function Considerations(props) {
  return (
    <Flex
      flexDirection='column'
      alignItems={["flex-start", "flex-start"]}
      borderRadius='60px'
      overflow='hidden'
      position='relative'
      h='fit-content'
      py={["5vw", "4vw", "3vw", "2vw"]}
      px={["5vw", "4vw", "3vw", "2vw"]}
      boxShadow='0px 4px 13px rgba(0,0,0,0.25)'
      {...props}>
      <Heading variant='bodyHeading'>{props.title}</Heading>

      <Flex
        flexDirection={["column", "column", "column", "row"]}
        alignItems={"center"}>
        <Image
          src={props.image}
          w={["200px", "200px", "300px"]}
          h='100%'
          borderRadius='60px'
          objectFit={"cover"}
          float={["none", "right"]}
          px={["0", "4"]}
        />
        {props.children}
      </Flex>
    </Flex>
  );
}
