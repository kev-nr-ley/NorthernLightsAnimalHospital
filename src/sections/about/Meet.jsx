import { Box, Text } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import StaffCard from "@components/StaffCard";
// import { staff } from "@assets/data/staff";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Meet(props) {
  const { colors } = useTheme();

  const staff = [
    {
      name: "Dr. Charles West",
      title: "dr",
      image: "/images/charles-west.webp",
      description: [
        "Dr. West is the owner of the Spay Clinic and the Senior Clinician among two other doctors. He graduated with distinction from the Western College of Veterinary Medicine at the University of Saskatchewan in 1981 and his professional interests include surger and reproductive medicine. He is actively involved with local pet rescue groups and was a participant of the PAL (Prevent Another Litter) Program in 2011, which was a joint program with the ABVMA and the Edmonton Humane Society.",
        "His personal interests include travel and spending time with his furry family of 3 dogs and 2 cats. ",
      ],
    },
    {
      name: "Dr. Amanda McMillan",
      title: "dr",
      image: "/images/amanda-mcmillan.webp",
      description: [
        "Dr. Amanda McMillan was born and raised in Winnipeg, Manitoba. She first started working as a Veterinary Assistant in a small animal practice back in 2010 while completing her Bachelor of Science at The University of Winnipeg.",
        "Once graduating undergrad, she ventured abroad to receive her Doctorate of Veterinary Medicine from the AVMA accredited St. George’s University in Grenada, West Indies. She received diverse experiences with all types of animals including exotics and she was able to complete her final clinical year of Veterinary Medicine at The Western College of Veterinary Medicine. As a recent graduate and Edmonton resident, she is continuing her veterinary career with us here at The Spay Clinic. ",
        "Dr. Amanda McMillan is excited to meet you and all your furry family members, she is committed to your animal’s health and well-being.",
      ],
    },

    {
      name: "Dr. Ellen Lagore",
      title: "dr",
      image: "/images/ellen-lagore.webp",
      description: [
        "Dr. Ellen Lagore is the newest member of the team, and she has loved animals for as long as she can remember. Her favourite book growing up was “Which Dog For Me?”, an in-depth guidebook to dog breeds. Sadly her parents never actually let her have a dog, but that never stopped her from dreaming!",
        "Before finding her passion for veterinary medicine, Ellen earned a degree in Photography from Alberta University of the Arts. Since then she has traveled for school and training to the Caribbean, Saskatchewan, Ecuador, and Nicaragua. She earned her DVM in 2019 from St. Matthew’s University, Cayman Islands.",
        "Since becoming a member of the team, Ellen has moved to downtown Edmonton with her two precious rescue chihuahuas, Sprinkles, and Beans, and she is so excited to meet you and your animals!",
      ],
    },
  ];

  const greeting = () => {
    return (
      <Box>
        Meet your care team.
        <Text as='span' color={colors.primary} ml='4' fontSize='48px'>
          ❤
        </Text>
      </Box>
    );
  };

  return (
    <SectionFlexContainer
      headertext={greeting()}
      alignheader='flex-start'
      {...props}>
      <StaffCard
        image={staff[0].image}
        name={staff[0].name}
        description={staff[0].description}
      />
      <StaffCard
        image={staff[1].image}
        name={staff[1].name}
        description={staff[1].description}
        top={['0', '0', '8vh']}
      />
      <StaffCard
        image={staff[2].image}
        name={staff[2].name}
        description={staff[2].description}
        top={['0', '0', '-4vh']}
      />
    </SectionFlexContainer>
  );
}
