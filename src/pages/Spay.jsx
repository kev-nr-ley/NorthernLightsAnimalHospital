import React from "react";
import SpayHero from "@sections/spay/SpayHero";
import Faq from "@sections/spay/FAQ";
import BeforeAppointment from "@sections/spay/BeforeAppointment";
import AfterAppointment from "@sections/spay/AfterAppointment";
import { Parallax } from "react-parallax";
import Page from "@components/Page";
export default function Spay(props) {
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/hq/spay-hero-bg.webp"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "90vh", objectFit: "cover" }}>
        <SpayHero h='80vh' />
      </Parallax>

      <Faq bg='background' color='dark' />
      <BeforeAppointment bg='primary' color='light' />
      <AfterAppointment bg='light' color='dark' />
    </Page>
  );
}
