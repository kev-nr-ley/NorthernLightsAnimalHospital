import { Text } from "@chakra-ui/react";
import HeroContainer from "@components/HeroContainer";
export default function HomeHero(props) {
  return (
    <HeroContainer
      heading='Welcome to The Original Spay Clinic.'
      linktext='Video Introduction'
      linkto='/'
      {...props}>
      <Text>
        Here at The Original Spay Clinic, we are dedicated to providing the
        highest level of veterinary medicine along with friendly, compassionate
        service. We believe in treating every patient as if they were our own
        pet, and give them the same loving attention and care.
      </Text>
    </HeroContainer>
  );
}
