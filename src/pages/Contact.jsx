import React from "react";
import Hero from "@sections/contact/Hero";
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
        }}>
        <Hero bg='primary' color='light' />
        <ContactForm  bg='yellow' color='dark' />
      </Parallax>
    </Page>
  );
}
