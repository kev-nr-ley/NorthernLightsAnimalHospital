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
      <Flex justifyContent={"space-between"}>
        <span>
          <strong>Phone: </strong>
        </span>
        <span>867-745-8623</span>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <span>
          {" "}
          <strong>Fax: </strong>
        </span>
        <span>867-747-8225</span>
      </Flex>
    </InfotainmentSystem>
  );
}
