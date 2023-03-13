import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import InfotainmentSystem from "@components/InfotainmentSystem";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
export default function Location(props) {
  return (
    <InfotainmentSystem
      headertext='Visit'
      icon={<HiOutlineLocationMarker />}
      {...props}>
      23 Metropolit Lane <br /> Whitehorse, YT Y2T 0X9, Canada
      {props.showlink ? (
        <Link as={Box} my='2' variant='solid'>
          Open Maps
        </Link>
      ) : null}
    </InfotainmentSystem>
  );
}
