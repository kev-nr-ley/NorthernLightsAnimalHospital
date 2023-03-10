import React from "react";
import Hero from "@sections/dental/Hero";
import FAQ from "@sections/dental/FAQ";
import BeforeAppointment from "@sections/dental/BeforeAppointment";
import AfterAppointment from "@sections/dental/AfterAppointment";
import Considerations from "@sections/dental/Considerations";
import Care from "@sections/dental/Care";
import { Parallax } from "react-parallax";
import Page from "@components/Page";
import { useTheme } from "@chakra-ui/react";

export default function Dental(props) {
  const { colors } = useTheme();
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/dental-1.png"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <Hero />
      </Parallax>

      <FAQ />
      <BeforeAppointment bg='primary' color='light' />
      <Considerations />
      <AfterAppointment bg='light' color='dark' />
      <Care bg='primary' color='dark' />

    </Page>
  );
}
