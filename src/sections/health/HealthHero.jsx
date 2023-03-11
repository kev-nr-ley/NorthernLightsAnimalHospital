import React from "react";

import { Text } from "@chakra-ui/react";
import HeroContainer from "@components/HeroContainer";
export default function Hero(props) {
  return (
    <HeroContainer
      heading='Health Exams & Vaccinations'
      linktext='Make an Appointment'
      linkto='/'
      {...props}>
      <Text>
        Taking your new pet to a veterinarian when you first get them is highly
        recommended to start them with a clean bill of health. At this
        appointment, your veterinarian can conduct a full physical exam and help
        you set up a vaccination protocol based on your pet’s lifestyle.
      </Text>
    </HeroContainer>
  );
}
