import { Box, Text } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import StaffCard from "@components/StaffCard";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Meet(props) {
  const { colors } = useTheme();

  const staff = [
    {
      name: "Dr. Tom Goulding",
      title: "dr",
      image: "/images/tom.webp",
      description: [
        "Introducing Dr. Tom Goulding, a Canadian veterinarian with over 10 years of experience in small animal care. He graduated with honors from the University of British Columbia and has expertise in surgery, internal medicine, preventive care, and animal behavior. ",
        "Dr. Goulding is dedicated to providing personalized and comprehensive care to all patients, with a focus on ensuring their health and happiness.",
      ],
    },
    {
      name: "Dr. Amelia Pollschuk",
      title: "dr",
      image: "/images/amelia.webp",
      description: [
        "Meet Dr. Amelia Polischuk, a skilled veterinarian with over a decade of experience in providing exceptional care to animals. Dr. Polischuk received her veterinary degree from the University of Toronto and has developed expertise in a wide range of specialties, including surgery, internal medicine, and preventive care.",
      ],
    },

    {
      name: "Dr. Samantha Wood",
      title: "dr",
      image: "/images/samantha.webp",
      description: [
        "Introducing Dr. Samantha Wood, a compassionate and experienced veterinarian with a passion for providing top-quality care to animals. Dr. Wood received her veterinary degree from the University of Guelph and has been practicing for over a decade.",
        "She has expertise in a wide range of veterinary specialties, including surgery, dentistry, and emergency medicine.",
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
      <StaffCard w='80vw' image={"/images/tom.webp"} name={"Dr. Tom Goulding"}>
        Introducing Dr. Tom Goulding, a Canadian veterinarian with over 10 years
        of experience in small animal care. He graduated with honors from the
        University of British Columbia and has expertise in surgery, internal
        medicine, preventive care, and animal behavior.
        <br />
        Dr. Goulding is dedicated to providing personalized and comprehensive
        care to all patients, with a focus on ensuring their health and
        happiness.
      </StaffCard>

      <StaffCard image={"/images/amelia.webp"} name={"Dr. Amelia Polischuk"}>
        Meet Dr. Amelia Polischuk, a skilled veterinarian with over a decade of
        experience in providing exceptional care to animals. Dr. Polischuk
        received her veterinary degree from the University of Toronto and has
        developed expertise in a wide range of specialties, including surgery,
        internal medicine, and preventive care.
      </StaffCard>

      <StaffCard image={"/images/samantha.webp"} name={"Dr. Samantha Wood"}>
        Introducing Dr. Samantha Wood, a compassionate and experienced
        veterinarian with a passion for providing top-quality care to animals.
        Dr. Wood received her veterinary degree from the University of Guelph
        and has been practicing for over a decade. She has expertise in a wide
        range of veterinary specialties, including surgery, dentistry, and
        emergency medicine.
      </StaffCard>
    </SectionFlexContainer>
  );
}
