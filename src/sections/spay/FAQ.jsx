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
import { FAQ } from "@assets/data/FAQ";

export default function Faq(props) {
  const { colors } = useTheme();

  const renderFaq = () => {
    return FAQ.map((item, index) => {
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
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      bg='background'
      {...props}>
      <Flex flexDirection={"column"} position='relative'>
        <Heading variant='SectionHeading' fontSize={["28px", "28px,", "36px"]}>
          FAQS
        </Heading>

        <Flex
          mt='8'
          flexDirection={["column-reverse", "column-reverse", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems={["center", "center", "flex-start"]}
          gap='2vh'
          position='relative'>
          <Accordion allowToggle w='100%'  display='flex' flexDirection='column' px='2' gap='2'>{renderFaq()}</Accordion>

          <Image w={["100vw", "100vw", "800px"]} src='/images/spay-1.png' />
        </Flex>
      </Flex>
    </Box>
  );
}
