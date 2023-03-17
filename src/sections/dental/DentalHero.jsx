import { Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

import HeroContainer from "@components/HeroContainer";
export default function DentalHero(props) {
  const { colors } = useTheme();

  return (
    <HeroContainer
      heading='Dental Care For Pets'
      linktext='Book A Free Consult '
      linkto='/contact'
      {...props}>
      <Text>
        The most effective way to clean your pet’s teeth and remove all dental
        disease that may have accumulated is through a professional cleaning.
        Here at The Spay Clinic we utilize state of the art dental imaging
        equipment and ultrasonic dental tools to help enhance our capabilities
        during your pet’s dental procedure. We are pleased offer FREE pre-dental
        consultations for you and your pet.
      </Text>
    </HeroContainer>
  );
}
