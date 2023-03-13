import React from "react";
import HealthHero from "@sections/health/HealthHero";
import Care from "@sections/health/Care";
import Parasite from "@sections/health/Parasite";

import Page from "@components/Page";
import { Parallax } from "react-parallax";
import { useTheme } from "@chakra-ui/react";

export default function Health(props) {
  const { colors } = useTheme();
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/hq/health-1.webp"}
        strength={300}
        bgImageStyle={{ width: "100%", height: "90vh", objectFit: "cover" }}>
        <HealthHero h='80vh' />
      </Parallax>

      <Care bg='background' color='dark' />
      <Parasite bg='primary' color='light' />
    </Page>
  );
}
