import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import InfotainmentSystem from "@components/InfotainmentSystem";
import { HiClock, HiOutlineClock } from "react-icons/hi";
export default function Hours(props) {
  return (
    <InfotainmentSystem headertext='Hours' icon={<HiOutlineClock />} {...props}>
      Monday - Friday: 8:00am - 5:00pm <br />
      Saturday: 9:00am - 1:00pm <br />
    </InfotainmentSystem>
  );
}
