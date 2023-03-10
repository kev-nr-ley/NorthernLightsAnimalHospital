import React from "react";
import Hero from "@sections/spay/Hero";
import Faq from "@sections/spay/FAQ";
import BeforeAppointment from "@sections/spay/BeforeAppointment";
import AfterAppointment from "@sections/spay/AfterAppointment";
import { Parallax } from "react-parallax";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Page from "@components/Page";
export default function Spay(props) {
  const { colors } = useTheme();
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/spay-hero-bg.png"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <Hero />
      </Parallax>

      <Faq />
      <BeforeAppointment bg='primary' color='light' />
      <AfterAppointment bg='light' color='dark' />
    </Page>
  );
}
