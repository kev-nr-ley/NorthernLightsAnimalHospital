import { Image, Accordion } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import AccordionQuestion from "@components/AccordionQuestion";
import { FAQ } from "@assets/data/FAQ";
import SectionFlexContainer from "../../components/SectionFlexContainer";
export default function Faq(props) {
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
    <SectionFlexContainer
      headertext='Frequently Asked Questions'
      fliphorizontal='true'
      {...props}>
      <Image w={["100vw", "100vw", "800px"]} src='/images/spay-1.png' />

      <Accordion
        allowToggle
        w='100%'
        maxW='800px'
        display='flex'
        flexDirection='column'
        gap='2'>
        {renderFaq()}
      </Accordion>
    </SectionFlexContainer>
  );
}
