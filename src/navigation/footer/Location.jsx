import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import InfotainmentSystem from "@components/InfotainmentSystem";
import { HiLocationMarker } from "react-icons/hi";
export default function Location(props) {
  return (
    <InfotainmentSystem headertext='The Original Spay Clinic' icon={<HiLocationMarker  />} {...props}>
      10575 111 St NW <br />
      Edmonton, Alberta T5H 3E8
      {props.showlink ? (
        <Link as={Box} my='2' variant='solid'>
          Open Maps
        </Link>
      ) : null}
    </InfotainmentSystem>
  );
}
