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
    <Flex
      w='100vw'
      maxW='100%'
      position='relative'
      flexDirection={"column"}
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      bg='background'
      {...props}>
      <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
        FAQs
      </Heading>

      <Flex
        mt='8'
        flexDirection={["column", "column", "column", "row-reverse"]}
        justifyContent={["center", "center", "center", "space-between"]}
        alignItems={["center", "center", "flex-start"]}
        gap='2vh'
        position='relative'>
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
      </Flex>
    </Flex>
  );
}
