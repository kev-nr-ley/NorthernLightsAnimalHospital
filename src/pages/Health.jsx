import React from "react";
import Hero from "@sections/health/Hero";
import Care from "@sections/health/Care";
import Parasite from "@sections/health/Parasite";

import Page from "@components/Page";
import { Parallax } from "react-parallax";
import { useTheme } from "@chakra-ui/react";

export default function Health(props) {
  const { colors } = useTheme();
  return (
    <Page {...props}>
        poop pop 

        <h1>helloo</h1>
        
      <Parallax
        bgImage={"/images/health-1.png"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <Hero />
      </Parallax>

      <FAQ />
      <Parasite bg='primary' color='light' />
      {/* <Considerations /> */}
      <Care bg='primary' color='dark' />
    </Page>
  );
}
