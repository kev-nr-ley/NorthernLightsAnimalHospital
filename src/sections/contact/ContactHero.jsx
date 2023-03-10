import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import ContactUs from "@navigation/footer/Contact";
import Hours from "@navigation/footer/Hours";
import Location from "@navigation/footer/Location";
import SectionFlexContainer from "@components/SectionFlexContainer";
import { useTheme } from "@chakra-ui/react";
export default function ContactHero(props) {
  const { colors } = useTheme();

  return (
    <Flex
      header='Get In Touch'
      w='fit-content'
      h='fit-content'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent={"center"}
      pl='15vw'
      pr='5vw'
      py='5vh'
      gap='5vw'
      {...props}>
      <Heading variant='sectionHeading'>Get In Touch.</Heading>
      <ContactUs />
      <Hours />
      <Location />
    </Flex>
  );
}
