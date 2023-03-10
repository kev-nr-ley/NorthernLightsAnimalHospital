import { Flex, Box, Heading, Text, Image, Grid } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import StaffCard from "@components/StaffCard";
import { staff } from "@assets/data/staff";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
export default function BeforeAppointment(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      // bg='primary'
      // color='light'
      h='100%'
      {...props}>
      <Flex flexDirection={"column"} position='relative'>
        <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
          Before booking your appointment
        </Heading>

        <Flex
          mt='8'
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={["center", "center", "space-evenly"]}
          alignItems={["center", "center", "center"]}
          position='relative'
          gap='5vw'
          h='100%'>
          <ImageHeaderTextBlock
            src='/images/heart-outline.svg'
            heading='Health'
            text='Please notify the staff at The Spay Clinic during admission of any new or ongoing concerns that you may have about your pet’s health. All patients must be in good physical health and any animals over the age of 5 years of age are required to complete pre-anesthetic bloodwork to check their systemic health.'
          />

          <ImageHeaderTextBlock
            src='/images/syringe-outline.svg'
            heading='Vaccinations'
            text='Although vaccinations are not mandatory for their day stay, we here at The Spay Clinic highly recommend that your pet’s vaccination status be current prior to surgery. If the vaccination status is not current the staff at The Spay Clinic are more than welcome to assist you to make sure the proper vaccinations are given to your pet on the day of surgery. '
          />
        </Flex>
      </Flex>
    </Box>
  );
}
