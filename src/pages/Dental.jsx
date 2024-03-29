import React from "react";
import DentalHero from "@sections/dental/DentalHero";
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
        bgImage={"/images/hq/dental-1.webp"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "90vh", objectFit: "cover" }}>
        <DentalHero h='80vh' />
      </Parallax>

      <FAQ bg='background' color='dark' />
      <BeforeAppointment bg='primary' color='light' />
      <Considerations bg='background' color='dark' />
      <AfterAppointment bg='light' color='dark' />
      <Care bg='primary' color='light' />

    </Page>
  );
}
