import React from "react";
import Hero from "@sections/about/Hero";
import Meet from "@sections/about/Meet";
import Bouncy from "@sections/about/Bouncy";
import Testimonials from "@sections/about/Testimonials";
import { Box } from "@chakra-ui/react";
import { Parallax } from "react-parallax";
import Page from "@components/Page";
export default function About(props) {
  return (
    <Page position='relative' {...props}>
      <Parallax
        bgImage={"/images/about-1.png"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <Hero />
      </Parallax>

      <Meet />

      <Parallax
        bgImage={"/images/about-2.png"}
        strength={300}
        bgImageStyle={{ width: "100vw", height: "100vh", objectFit: "cover" }}>
        <Testimonials />
      </Parallax>

      <Bouncy />
    </Page>
  );
}