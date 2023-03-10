import React from "react";
import Hero from "@sections/home/Hero";
import Services from "@sections/home/Services";
import About from "@sections/home/About";
import Visit from "@sections/home/Visit";
import { Parallax } from "react-parallax";
import { Box } from "@chakra-ui/react";
import Page from "@components/Page";
export default function Home(props) {
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/hero-bg.png"}
        strength={300}
        bgImageStyle={{
          width: "100vw",
          maxW: "100%",
          height: "100%",
          objectFit: "cover",
        }}>
        <Hero />
      </Parallax>

      <Services />
      <About />
      <Visit />
    </Page>
  );
}
