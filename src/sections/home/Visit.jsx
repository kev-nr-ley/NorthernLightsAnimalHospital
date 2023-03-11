import { Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import ChakraImage from "@components/ChakraImage";
import Hours from "@navigation/footer/Hours";
import Contact from "@navigation/footer/Contact";
import Location from "@navigation/footer/Location";

import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Visit(props) {
  return (
    <SectionFlexContainer
      // headertext='Schedule a visit'

      {...props}>
      <Flex
        flexDirection='column'
        justifyContent={"center"}
        alignItems='center'
        gap='2'>
        <Heading variant='sectionHeading'> Schedule a visit.</Heading>

        <Location />
        <Hours />
        <Contact />

        <ChakraLink
          to='/contact'
          variant='DarkOutline'
          alignSelf='flex-start'
          mt='8'
          linktext='Request An Appointment'
        />
      </Flex>

      <Box>
        <Link to='https://goo.gl/maps/pxunArNe2swWTJs46' target='_blank'>
          <ChakraImage
            src='/images/map.webp'
            w='100%'
            h='100%'
            minW='320px'
            minH='320px'
            maxH='500px'
            maxW='500px'
          />
        </Link>
      </Box>
      
    </SectionFlexContainer>
  );
}
