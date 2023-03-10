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
export default function Parasite(props) {
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
          Parasite Protection
        </Heading>

        <Flex
          mt='8'
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={["center", "center", "space-evenly"]}
          alignItems={["center", "center", "center"]}
          position='relative'
          gap='5vw'
          h='100%'>
          <ImageHeaderTextBlock src='/images/deworming.svg' heading='Deworming'>
            <Text>
              Parasites are organisms that feed on or within animals. Fleas,
              ticks and lice are the most well known offenders, but there are
              many other parasites that you may be unaware of. The harm
              parasites can cause range from minimal irritation to potential
              fatality if left untreated. No matter how careful you are, your
              pet is still at risk of contracting unwanted parasites.
            </Text>
            <Text>
              The first step of parasite prevention is to appropriately deworm
              your puppies and kittens in early life, this is because young
              animals can acquire parasites from their mother before birth or
              even through her milk.
            </Text>
          </ImageHeaderTextBlock>

          <ImageHeaderTextBlock
            src='/images/external-parasite.svg'
            heading='External Parasites'>
            <Text>
              Recognizing external parasites is not always as easy as
              visualizing the parasite. Sometimes they are too small to be catch
              of glimpse of, this is when your animal can give you clues that
              sometimes just isn’t right. Clinical signs may include:
              <ul>
                <li> Constant itching, chewing and licking</li>
                <li> Patchy hair loss </li>
                <li>Irritated skin or scabbing</li>
                <li>Constant scratching of their ears or head shaking</li>
              </ul>
            </Text>
          </ImageHeaderTextBlock>

          <ImageHeaderTextBlock
            src='/images/internal-parasite.svg'
            heading='Internal Parasites'>
            <Text>
              Unfortunately, internal parasites can only be noticed in two ways,
              either through clinical signs or by seeing your animal’s feces
              having unwanted wiggling guests within. Clinical signs may
              include:
              <ul>
                <li>A pot-bellied appearance</li>
                <li>Vomiting, diarrhea or rapid weight loss </li>
                <li>Lethargy and loss of appetite</li>
              </ul>
            </Text>
          </ImageHeaderTextBlock>
        </Flex>
        <Link variant='LightOutline' alignSelf='flex-start'>
          Contact Us
        </Link>
      </Flex>
    </Box>
  );
}
