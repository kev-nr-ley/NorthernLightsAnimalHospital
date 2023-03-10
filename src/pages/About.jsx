import React from "react";
import AboutHero from "@sections/about/AboutHero";
import Meet from "@sections/about/Meet";
import Bouncy from "@sections/about/Bouncy";
import Testimonials from "@sections/about/Testimonials";
import { Parallax } from "react-parallax";
import Page from "@components/Page";

export default function About(props) {
  return (
    <Page position='relative' {...props}>
      <Parallax
        bgImage={"/images/about-1.png"}
        strength={300}
        bgImageStyle={{ width: "100vw", height: "90vh", objectFit: "cover" }}>
        <AboutHero h='80vh'/>
      </Parallax>

      <Meet bg='background' color='dark' />
      <Testimonials bg='primary' color='light' />

      {/* <Bouncy /> */}
    </Page>
  );
}
