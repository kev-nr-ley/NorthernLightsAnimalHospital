import { Flex, Heading, Image, Box } from "@chakra-ui/react";

export default function Considerations(props) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={["center", "center"]}
      flexDirection='row'
      h='100%'
      margin='12'
      borderRadius='50px'
      w='80vw'
      px='2vw'
      py='5vh'
      position='relative'
      {...props}>
      {/* Section heading */}

      <Box>
        <Heading
          mt='6'
          w='100%'
          borderBottomColor={props.color}
          variant='bodyHeading'>
          {props.heading}
        </Heading>
        {props.src ? (
          <Image
            src={props.src}
            w={["200px"]}
            h={["200px"]}
            mx='4'
            my='2'
            borderRadius='16px'
            alignSelf='flex-start'
            overflow='visible'
            objectFit='contain'
            float='right'
          />
        ) : null}
        {props.children}
      </Box>

      {/* {props.linkText ? (
        <Link mt='4' to={props.linkTo} variant={props.linkVariant}>
          {props.linkText}
        </Link>
      ) : null} */}
    </Flex>
  );
}
