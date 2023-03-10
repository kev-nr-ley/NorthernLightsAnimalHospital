import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AccordionQuestion from "@components/AccordionQuestion";
import { useTheme } from "@chakra-ui/react";
import { dentalFAQ } from "@assets/data/dentalFAQ";
import SectionFlexContainer from "@components/SectionFlexContainer";

export default function Faq(props) {
  const { colors } = useTheme();

  const renderFaq = () => {
    return dentalFAQ.map((item, index) => {
      return (
        <AccordionQuestion
          key={index}
          question={item.question}
          answer={item.answer}
        />
      );
    });
  };

  return (
    <SectionFlexContainer
      header='Frequently Asked Questions'
      flipHorizontal
      {...props}>
      <Image w={["100vw", "100vw", "800px"]} src='/images/spay-1.png' />
      <Accordion
        allowToggle
        w='100%'
        display='flex'
        flexDirection='column'
        px='2'
        gap='2'
        maxW='600px'>
        {renderFaq()}
      </Accordion>
    </SectionFlexContainer>
  );
}
