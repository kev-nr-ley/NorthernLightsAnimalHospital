import React from "react";
import Logo from "@components/Logo";
import Hours from "@navigation/footer/Hours";
import Contact from "@navigation/footer/Contact";
import Location from "@navigation/footer/Location";
import SiteNavigation from "@navigation/footer/SiteNavigation";
import { Flex } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      w='100vw'
      maxW='100%'
      justifyContent='space-evenly'
      py='8'
      px='4'
      gap='2'
      alignItems={"flex-start"}
      {...props}>
      <Logo w='300px' />
      <Hours gap='2' w='300px' />
      <Contact gap='2' w='300px' />
      <Location gap='2' w='300px' />
      <SiteNavigation gap='1' w='300px' />
    </Flex>
  );
}
