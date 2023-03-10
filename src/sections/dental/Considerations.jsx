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
import ImageCenteredCard from "@components/ImageCenteredCard";
import AccordionQuestion from "@components/AccordionQuestion";
export default function Considerations(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      h='100%'
      bg='background'
      {...props}>
      <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
        Other considerations for professional dental cleaning
      </Heading>

      <Flex
        mt='8'
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["center", "center", "flex-start"]}
        position='relative'
        gap='8'
        h='100%'>
        <ImageCenteredCard
          src='/images/tooth-outline.svg'
          heading='Extractions'
          text='Dental extractions may also be discussed with you if certain teeth are noted to be in an undesirable condition. Extractions are practiced regularly by most veterinarians and owners should not be concerned if your pet has an issue that requires a tooth or teeth to be pulled. Tooth extractions do not cause a great deal of discomfort for your pet, in fact in most cases, they will feel and function much better once the source of pain has been taken out.'
          imageWidth='80px'
          imageHeight='80px'
        />
        <ImageCenteredCard
          src='/images/pill-outline.svg'
          heading='Antibiotics'
          text='During your consultation, pre-procedural antibiotics will be discussed with you. Most animals are recommended to be placed on antibiotics a few days prior to as well as following the dental procedure to help control any infection that may be present within your pet’s mouth.'
          imageWidth='80px'
          imageHeight='80px'
        />
        <ImageCenteredCard
          src='/images/bowl-outline.svg'
          heading='Fasting'
          text='Once you book an appointment for your pet to have a dental procedure performed it is important to remember the fasting instructions the night before to prepare your animal for the next day. No food should be fed to your animal after 6:00PM the night before as well as no water should be given to your animal after midnight the night before unless directed otherwise. These are to prevent potential anesthetic complications during your animal’s routine procedure.'
          imageWidth='80px'
          imageHeight='80px'
        />
      </Flex>
    </Box>
  );
}
