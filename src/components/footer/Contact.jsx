import React from "react";
import { Box, Text,  Flex } from "@chakra-ui/react";
import {
  PhoneIcon,
} from "@chakra-ui/icons";
import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
export default function Contact(props) {
  return (
    <Flex {...props}>
      <PhoneIcon fontSize='1.5rem' />
      <Box>
        <Text variant='bold'>Contact</Text>
        <Text>Phone: 780-426-4221</Text>
        <Text>Fax: 780-428-5721</Text>

        <Flex gap='2' my='2' fontSize='32px'>
          <InstagramLink />
          <FacebookLink />
        </Flex>
      </Box>
    </Flex>
  );
}
