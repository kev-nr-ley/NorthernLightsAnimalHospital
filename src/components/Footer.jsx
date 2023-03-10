import React from "react";
import Logo from "@components/Logo";
import Hours from "@components/footer/Hours";
import Contact from "@components/footer/Contact";
import Location from "@components/footer/Location";
import SiteNavigation from "@components/footer/SiteNavigation";
import { Flex } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      w='100vw'
      maxW='100%'
      justifyContent='space-evenly'
      py='8'
      px='5vw'
      gap='2'
      alignItems={"flex-start"}
      {...props}>
      <Logo w='320px' />
      <Hours gap='2' w='320px' />
      <Contact gap='2' w='320px' />
      <Location gap='2' w='320px' />
      <SiteNavigation gap='1' w='320px' />
    </Flex>
  );
}
