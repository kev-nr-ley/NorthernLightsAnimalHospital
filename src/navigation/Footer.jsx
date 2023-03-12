import React from "react";
import Logo from "@components/Logo";
import Hours from "@navigation/footer/Hours";
import Contact from "@navigation/footer/Contact";
import Location from "@navigation/footer/Location";
import SiteNavigation from "@navigation/footer/SiteNavigation";
import SectionFlexContainer from "@components/SectionFlexContainer";

export default function Footer(props) {
  return (
    <SectionFlexContainer  zIndex='2' {...props}>
      <Logo />
      <Hours />
      <Contact />
      <Location />
      <SiteNavigation />
    </SectionFlexContainer>
  );
}
