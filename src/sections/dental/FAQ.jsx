import { Image, Accordion } from "@chakra-ui/react";
import AccordionQuestion from "@components/AccordionQuestion";
import { dentalFAQ } from "@assets/data/dentalFAQ";
import SectionFlexContainer from "@components/SectionFlexContainer";

export default function Faq(props) {
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
      headertext='Frequently Asked Questions'
      fliphorizontal='true'
      flexWrap='wrap'
      alignheader='flex-start'
      {...props}>
      <Image
        w={["100vw", "100vw", "440px", "600px"]}
        src='/images/hq/dental-faq.webp'
        borderRadius='30px'
      />

      <Accordion
        allowToggle
        w='100%'
        minW={["300px", "400px", "440px", "600px"]}
        maxW='600px'
        display='flex'
        flexDirection='column'
        gap='2'>
        {renderFaq()}
      </Accordion>
    </SectionFlexContainer>
  );
}
