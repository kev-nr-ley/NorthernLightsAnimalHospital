import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

import InfotainmentSystem from "@components/InfotainmentSystem";
import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
import { HiOutlinePhone, HiPhone, HiPhoneIncoming } from "react-icons/hi";
export default function Contact(props) {
  return (
    <InfotainmentSystem
      headertext='Contact'
      icon={<HiOutlinePhone />}
      {...props}>
      <Text as='span' variant='bold' mr='1rem'>
        Phone:
      </Text>
      867-745-8623
      <br />
      <Text as='span' variant='bold' mr='1rem'>
        Fax:
      </Text>
      867-747-8225
      {/* <Flex fontSize='32px' mt='2' gap='4'> */}
      {/* <InstagramLink /> */}
      {/* <FacebookLink /> */}
      {/* </Flex>
       */}
    </InfotainmentSystem>
  );
}
