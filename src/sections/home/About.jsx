import { Flex, Box, Heading, Text, Link, Image, Grid } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function About(props) {
  const { colors } = useTheme();

  const staff = [
    {
      name: "Dr. Charles West",
      title: "dr",
      image: "/images/charles-west.png",
    },
    {
      name: "Dr. Amanda McMillan",
      title: "dr",
      image: "/images/amanda-mcmillan.png",
    },

    {
      name: "Dr. Ellen Lagore",
      title: "dr",
      image: "/images/ellen-lagore.png",
    },
  ];

  function renderStaff(staff) {
    return staff.map((member, index) => (
      <Box
        maxW='320px'
        objectFit='contain'
        key={index}
        border='1px solid #E2E8F0'
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        borderRadius='30px'
        padding='24px'
        bg={colors.light}>
        <Image w='100%' src={member.image} />
        <Heading variant='bodyHeading' mt='2'>
          {member.name}
        </Heading>
      </Box>
    ));
  }
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
      header={greeting()}
      subText='We are a group of highly trained, experienced animal lovers who are devoted to giving our patients the best care possible.'
      {...props}
      linkText='Meet Our Team'
      linkTo='/about'
      linkVariant='DarkOutline'>
      {renderStaff(staff)}
    </SectionFlexContainer>
  );
}
