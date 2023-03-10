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
        bgImage={"/images/contact-1.png"}
        strength={300}
        bgImageStyle={{
          objectFit: "cover",
          h: "100vh",
        }}>
        <ContactHero bg='primary' color='light' />
        <ContactForm bg='yellow' color='dark' />
      </Parallax>
    </Page>
  );
}
