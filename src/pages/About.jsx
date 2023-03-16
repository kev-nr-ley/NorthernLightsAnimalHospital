import React from "react";
import AboutHero from "@sections/about/AboutHero";
import Meet from "@sections/about/Meet";
import Bouncy from "@sections/about/Bouncy";
import {Box} from "@chakra-ui/react";
import Testimonials from "@sections/about/Testimonials";
import { Parallax } from "react-parallax";
import Page from "@components/Page";

export default function About(props) {
  return (
    <Page position='relative' {...props}>
      <Parallax
        bgImage={"/images/hq/about-1.webp"}
        strength={300}
        bgImageStyle={{ width: "100vw", height: "90vh", objectFit: "cover" }}
        >

        <AboutHero h='80vh'/>
      </Parallax>

      <Meet bg='background' color='dark' />
      <Testimonials bg='primary' color='light' />

    </Page>
  );
}
