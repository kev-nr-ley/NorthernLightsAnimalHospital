import { Flex, Box, Heading, Text, Image, Grid, Link } from "@chakra-ui/react";
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
export default function Services(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      bg='background'
      // color='light'
      h='100%'
      {...props}>
      <Flex flexDirection={"column"} position='relative'>
        <Box minW='300px'>
          <Heading
            variant='SectionHeading'
            fontSize={["28px", "28px,", "36px"]}>
            Our Services
          </Heading>
        </Box>

        <Flex
          mt='8'
          flexDirection={["column", "column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems='flex-start'
          position='relative'
          gap='8'
          h='100%'
          >
          <ImageHeaderTextBlock
            src='/images/clipboard.png'
            heading='Spaying and Neutering'
            text='The Original Spay Clinic has been providing affordable priced spays and neuters for dogs and cats throughout the Edmonton and surrounding areas for over 35 years. Our ongoing mission is, and always has been, to provide the community with professional and affordable spaying and neutering service, using only the latest technology.'>
            <Link variant='DarkOutline'>Learn More Now</Link>
          </ImageHeaderTextBlock>

          <ImageHeaderTextBlock
            src='/images/dogbrush.png'
            heading='Dental Care'
            text='The most effective way to clean your pet’s teeth and remove all dental disease that may have accumulated is through a professional cleaning. Here at The Spay Clinic we utilize state of the art dental imaging equipment and ultrasonic dental tools to help enhance our capabilities during your pet’s dental procedure. We are pleased offer free pre-dental consultations for you and your pet.'>
            <Link variant='DarkOutline'>Learn More Now</Link>
          </ImageHeaderTextBlock>

          <ImageHeaderTextBlock
            src='/images/dogcat.png'
            heading='Other Services'
            text='At The Original Spay Clinic we offer a variety of services to care for your pet, including annual checkups, vaccinations, general surgeries, and dewclaw removal.'>
            <Link variant='DarkOutline'>Learn More Now</Link>
          </ImageHeaderTextBlock>
        </Flex>
      </Flex>
    </Box>
  );
}
