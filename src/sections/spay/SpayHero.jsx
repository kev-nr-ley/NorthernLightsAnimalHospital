import { Text } from "@chakra-ui/react";

import HeroContainer from "@components/HeroContainer";
export default function SpayHero(props) {
  return (
    <HeroContainer
    id='SpayHero'
      heading='Spaying and neutering your pets '
      linktext='Make an Appointment'
      linkto='/'
      {...props}>
      <Text>
        Northern Lights Animal Hospital has been providing affordable priced spays and
        neuters for dogs and cats throughout the Edmonton and surrounding areas
        for over 35 years. Our ongoing mission is, and always has been, to
        provide the community with professional and affordable spaying and
        neutering service, using only the latest technology.
      </Text>
    </HeroContainer>
  );
}
