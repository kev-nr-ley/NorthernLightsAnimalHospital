import React from "react";
import HomeHero from "@sections/home/HomeHero";
import Services from "@sections/home/Services";
import About from "@sections/home/About";
import Visit from "@sections/home/Visit";
import { Parallax } from "react-parallax";
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
          height: "100vh",
          objectFit: "cover",
        }}>
        <HomeHero h='100vh' />
      </Parallax>

      <Services bg='background' color='dark' />
      <About bg='light' color='dark'/>
      <Visit bg='primary' color='light' />
    </Page>
  );
}
