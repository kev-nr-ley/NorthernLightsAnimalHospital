import React from "react";
import ContactHero from "@sections/contact/ContactHero";
import ContactForm from "@sections/contact/ContactForm";
import { Parallax } from "react-parallax";
import Page from "@components/Page";
import { useTheme } from "@chakra-ui/react";
export default function Contact(props) {
  const { colors } = useTheme();
  return (
    <Page {...props}>
      <Parallax
        bgImage={"/images/about-1.webp"}
        strength={300}
        bgImageStyle={{
          objectFit: "cover",
          h: "90vh",
          zIndex: "3",
          width: "100%",
        }}>
        <ContactHero  h='80vh' color='light' zIndex='3' />
      </Parallax>

      <ContactForm
        bg={["background", "background", "white", "white"]}
        color='dark'
      />
    </Page>
  );
}
