import React from "react";
import Logo from "@components/Logo";
import Hours from "@navigation/footer/Hours";
import Contact from "@navigation/footer/Contact";
import Location from "@navigation/footer/Location";
import SiteNavigation from "@navigation/footer/SiteNavigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SectionFlexContainer from "@components/SectionFlexContainer";
import { Grid, SimpleGrid, GridItem } from "@chakra-ui/react";
import ChakraImage from "@components/ChakraImage";
export default function Footer(props) {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
      alignItems='top'
      justifyItems='top'
      gap='5vw'
      color='dark'
      zIndex='4'
      py='8'
      px='5vw'
      position='relative'
      {...props}>
      {/* <ChakraImage
      alignSelf='center'
        // minW='200px'
        w='200px'
        h='auto'
        src='/images/Logo.webp'
        objectFit='cover'
      /> */}

      <ScrollToTopButton
        position='fixed'
        zIndex='99'
        bottom='4rem'
        right='2rem'
        w='4rem'
        h='4rem'
        fontSize='2rem'
      

        // transform='translateX(-50%)'
      />

      <Hours icondisplay='true' headerdisplay='true' maxW='16rem' />
      <Contact icondisplay='true' headerdisplay='true' maxW='16rem' />
      <Location icondisplay='true' headerdisplay='true' maxW='16rem' />
      <SiteNavigation headerdisplay='true' />
    </Grid>
  );
}
