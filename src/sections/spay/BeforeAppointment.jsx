import { Flex, Box, Heading, Text, Image, Grid } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function BeforeAppointment(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      header='Before booking your appointment'
      linkText='Book Now'
      linkTo='/contact'
      {...props}
      >

      <Flex
        mt='8'
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems='flex-start'
        position='relative'
        gap='8'
        h='100%'>
        <ImageHeaderTextBlock
          src='/images/clipboard.png'
          heading='Health'
          text='Please notify the staff at The Spay Clinic during admission of any new or ongoing concerns that you may have about your pet’s health. All patients must be in good physical health and any animals over the age of 5 years of age are required to complete pre-anesthetic bloodwork to check their systemic health.'
        />

        <ImageHeaderTextBlock
          src='/images/vaccination.png'
          heading='Vaccinations'
          text='Although vaccinations are not mandatory for their day stay, we here at The Spay Clinic highly recommend that your pet’s vaccination status be current prior to surgery. If the vaccination status is not current the staff at The Spay Clinic are more than welcome to assist you to make sure the proper vaccinations are given to your pet on the day of surgery. '
        />

        <ImageHeaderTextBlock
          src='/images/dogtracking.png'
          heading='Identification'
          text='Forms of identification are important to consider during this elective procedure as there is always a possibility of your pet becoming lost. With the right identification, you can increase your chances of becoming reunited with your animal. We provide two optional types of identification: microchip and tattoo.'
        />
      </Flex>
    </SectionFlexContainer>
  );
}
