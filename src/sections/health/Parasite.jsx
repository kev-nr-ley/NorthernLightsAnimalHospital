import { Box, Text } from "@chakra-ui/react";

import SectionFlexContainer from "@components/SectionFlexContainer";
import { useTheme } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
export default function Parasite(props) {
  return (
    <SectionFlexContainer
      headertext='Parasite Protection'
      linktext='Contact Us'
      linkto='/contact'
      bg='primary'
      color='light'
      {...props}>
      <ImageHeaderTextBlock
        src='/images/hq/leech-bw.webp'
        headertext='Deworming'
        imagewidth='140px'
        imageheight='140px'
        alignItems='left'>
        <Text>
          Parasites are organisms that feed on or within animals. Fleas, ticks
          and lice are the most well known offenders, but there are many other
          parasites that you may be unaware of. The harm parasites can cause
          range from minimal irritation to potential fatality if left untreated.
          No matter how careful you are, your pet is still at risk of
          contracting unwanted parasites.
          <br /> <br />
          The first step of parasite prevention is to appropriately deworm your
          puppies and kittens in early life, this is because young animals can
          acquire parasites from their mother before birth or even through her
          milk.
        </Text>
      </ImageHeaderTextBlock>

      <ImageHeaderTextBlock
        src='/images/hq/dog-vaccine-bw.webp'
        headertext='External'
        imagewidth='140px'
        imageheight='140px'
        alignItems='left'>
        <Box>
          <Text mb='1rem'>
            Recognizing external parasites is not always as easy as visualizing
            the parasite. Sometimes they are too small to be catch of glimpse
            of, this is when your animal can give you clues that sometimes just
            isn’t right. Clinical signs may include:
          </Text>

          <ul>
            <li> Constant itching, chewing and licking</li>
            <li> Patchy hair loss </li>
            <li>Irritated skin or scabbing</li>
            <li>Constant scratching of their ears or head shaking</li>
          </ul>
        </Box>
      </ImageHeaderTextBlock>

      <ImageHeaderTextBlock
        src='/images/hq/germs-bw.webp'
        headertext='Internal'
        imagewidth='140px'
        imageheight='140px'
        alignItems='left'>
        <Box>
          <Text mb='1rem'>
            Unfortunately, internal parasites can only be noticed in two ways,
            either through clinical signs or by seeing your animal’s feces
            having unwanted wiggling guests within. Clinical signs may include:
          </Text>
          <ul>
            <li>A pot-bellied appearance</li>
            <li>Vomiting, diarrhea or rapid weight loss </li>
            <li>Lethargy and loss of appetite</li>
          </ul>
        </Box>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
