import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
export default function AccordionQuestion(props) {
  return (
    <AccordionItem border='1px solid black' bg='transparent' {...props}>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading variant='bodyHeading'>{props.question}</Heading>
        </Box>
        <AccordionIcon fontSize={"2rem"} />
      </AccordionButton>
      <AccordionPanel pb={4}>{props.answer}</AccordionPanel>
    </AccordionItem>
  );
}
