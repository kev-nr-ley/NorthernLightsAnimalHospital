import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { BellIcon, PhoneIcon } from "@chakra-ui/icons";

import InfotainmentSystem from "@components/InfotainmentSystem";
import FacebookLink from "@components/FacebookLink";
import InstagramLink from "@components/InstagramLink";
export default function Contact(props) {
  return (
    <InfotainmentSystem  headertext='Contact' icon={<BellIcon />} {...props}>
      <Text as='span' variant='bold'>
        Phone:
      </Text>
      780-426-4221 <br />
      <Text as='span' variant='bold'>
        Fax:{" "}
      </Text>
      780-428-5721
      {/* <Flex fontSize='32px' mt='2' gap='4'> */}
      {/* <InstagramLink /> */}
      {/* <FacebookLink /> */}
      {/* </Flex>
       */}
    </InfotainmentSystem>
  );
}
