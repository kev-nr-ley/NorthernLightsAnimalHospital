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
import AccordionQuestion from "@components/AccordionQuestion";
export default function AfterAppointment(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      h='100%'
      {...props}>
      <Flex flexDirection={"column"} position='relative'>
        <Box minW='300px'>
          <Heading
            variant='SectionHeading'
            fontSize={["28px", "28px,", "36px"]}>
            After booking your appointment
          </Heading>
        </Box>

        <Flex
          mt='8'
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems={["center", "center", "flex-start"]}
          position='relative'
          gap='8'
          h='100%'>
          <ImageHeaderTextBlock
            bigText='1'
            heading='Before'
            text='Our staff will be happy to discuss the following information with you at the time of booking and will remind you once more with a confirmation call about two days prior to your scheduled surgery date. Once you book an appointment for your pet to be spayed or neutered it is important to remember the fasting instructions the night before to prepare your animal for the next day. No food should be fed to your animal after 6:00PM the night before as well as no water should be given to your animal after midnight the night before unless directed otherwise. These are to prevent potential anesthetic complications during your animal’s routine procedure. '
          />

          <ImageHeaderTextBlock
            bigText='2'
            heading='Day of Procedure'
            text='Your pet will have a “day stay” at the clinic and must be dropped off at The Spay Clinic between 7:00AM – 8:00AM. For your pet’s comfort and well-being, please encourage them to go to the bathroom prior to bringing them into The Spay Clinic the day of their surgery. Dogs are discharged between 4:00PM – 5:00PM Monday through Friday and cats are discharged between 5:00PM – 6:00PM Monday through Friday. '
          />

          <ImageHeaderTextBlock
            bigText='3'
            heading='Aftercare'
            text='Our staff will discuss the post-operative care and management that your pet will require following their dental procedure. You will also be provided a document outlining what was discussed for your reference at home. For your convenience, this form is also available here for download. '>
            <Accordion allowToggle w='100%'>
              <AccordionQuestion
                question='Dogs Post-op Care'
                answer='Dogs deserve to be treated like the family members they are. That’s why we offer a variety of services to help keep your dog healthy and happy. From routine checkups to emergency care, we’re here to help your dog live a long, healthy life.'
                fontSize='16px'
                mt='4'
              />

              <AccordionQuestion
                question='Dental Post-op Care'
                answer='Cats are to be properly feared, and not merely tolerated. They are not our friends or our equals. They are our superiors. They are the aristocracy. They are the ruling class. They are the bourgeoisie. They are the 1%.'
                fontSize='16px'
                mt='4'
              />
            </Accordion>
          </ImageHeaderTextBlock>
        </Flex>
      </Flex>
    </Box>
  );
}
