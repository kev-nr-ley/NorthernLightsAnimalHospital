import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import InfotainmentSystem from "@components/InfotainmentSystem";
import { HiClock, HiOutlineClock } from "react-icons/hi";
export default function Hours(props) {
  return (
    <InfotainmentSystem headertext='Hours' icon={<HiOutlineClock />} {...props}>
      <Flex justifyContent={"space-between"}>
        <span>
          {" "}
          <strong> Mon- Fri:</strong>
        </span>
        <span>8:00am - 5:00pm</span>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <span>
          {" "}
          <strong>Saturday:</strong>
        </span>
        <span>9:00am - 1:00pm</span>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <span>
          {" "}
          <strong> Sunday:</strong>
        </span>
        <span>Closed</span>
      </Flex>
    </InfotainmentSystem>
  );
}
