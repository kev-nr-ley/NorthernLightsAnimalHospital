import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Visit(props) {
  return (
    <SectionFlexContainer
      headertext='Schedule a visit'
      linktext='Request An Appointment'
      linkto='/contact'
      {...props}>
      <Flex flexDirection='column' justifyContent={"center"}>
        <Heading variant='bodyHeading'>The Original Spay Clinic</Heading>
        <Text>
          10575 111 St. NW <br />
          Edmonton, Alberta <br />
          T5H 3E8
        </Text>

        <Heading>Phone</Heading>
        <Text>780-426-4221</Text>
        <Heading>Hours</Heading>
        <Text>
          Monday-Friday: 7am-6pm <br />
          Closed weekends
        </Text>
      </Flex>

      <Box>
        <Image
          src='/images/map.png'
          w='100%'
          h='100%'
          minW='320px'
          minH='320px'
          maxH='500px'
          maxW='500px'
        />
      </Box>
    </SectionFlexContainer>
  );
}
