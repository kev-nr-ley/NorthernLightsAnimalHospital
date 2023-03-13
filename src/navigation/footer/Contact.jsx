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
      <Text>
        <Text as='span' variant='bold'>Phone:</Text> 867-745-8623</Text>
      
      <Text>
        <Text as='span' variant='bold'>Fax:</Text> 867-747-8225</Text>
      {/* <Flex fontSize='32px' mt='2' gap='4'> */}
      {/* <InstagramLink /> */}
      {/* <FacebookLink /> */}
      {/* </Flex>
       */}
    </InfotainmentSystem>
  );
}
