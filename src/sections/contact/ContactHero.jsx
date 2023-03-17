import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import HeroContainer from "../../components/HeroContainer";
import ContactUs from "@navigation/footer/Contact";
import Hours from "@navigation/footer/Hours";
import Location from "@navigation/footer/Location";
import SectionFlexContainer from "../../components/SectionFlexContainer";
import { useTheme } from "@chakra-ui/react";
export default function ContactHero(props) {
  const { colors } = useTheme();

  return (
    <HeroContainer
      // linkto='/contact'
      // linktext='Contact Us'
      // w='100px'
      minH='500px'
      w={["100vw", "100vw", "50vw", "50vw"]}
      justifychildren='center'
      alignchildren={["flex-start", "flex-start", "flex-end", "flex-end"]}
      {...props}>
      <Heading variant='sectionHeading' mb='4'>
        Get in touch
      </Heading>
      <ContactUs icondisplay={true} headerdisplay='true' h='fit-content' />
      <Hours icondisplay={true} headerdisplay='true' h='fit-content' />
      <Location icondisplay={true} headerdisplay='true' />
    </HeroContainer>
  );
}
