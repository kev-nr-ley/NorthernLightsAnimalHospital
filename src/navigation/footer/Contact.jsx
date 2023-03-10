import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
export default function Contact(props) {
  return (
    <Flex w='100%' gap='8' {...props}>
      <PhoneIcon fontSize='2rem' />
      <Box>
        <Text variant='bold'>Contact </Text>
        <Text>
          Phone: 780-426-4221 <br /> 
          Fax: 780-428-5721
        </Text>
        <Flex gap='1' fontSize='32px'>
          <InstagramLink />
          <FacebookLink />
        </Flex>
      </Box>
    </Flex>
  );
}
