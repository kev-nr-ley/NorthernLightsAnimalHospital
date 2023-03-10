import { Flex, Heading, Image, Box } from "@chakra-ui/react";

export default function ImageTextPill(props) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={["center", "center"]}
      flexDirection='row'
      h='100%'
      margin='12'
      borderRadius='50px'
      w='80vw'
      px='12'
      py='4'
      position='relative'
      boxShadow='0px 4px 13px 0px #00000025'
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
