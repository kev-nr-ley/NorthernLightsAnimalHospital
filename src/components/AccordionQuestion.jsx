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
    <AccordionItem  mt='1'
     border='2px solid black' 
     h='fit-content'
   {...props}>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading variant='bodyHeading'>{props.question}</Heading>
        </Box>
        <AccordionIcon fontSize={"2rem"} />
      </AccordionButton>
      <AccordionPanel>
        {props.answer ? props.answer : props.children}
      </AccordionPanel>
    </AccordionItem>
  );
}
