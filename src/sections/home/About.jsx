import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ChakraImage from "@components/ChakraImage";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function About(props) {
  const { colors } = useTheme();

  const staff = [
    {
      name: "Dr. Charles West",
      title: "dr",
      image: "/images/tom.webp",
    },
    {
      name: "Dr. Amanda McMillan",
      title: "dr",
      image: "/images/amelia.webp",
    },

    {
      name: "Dr. Ellen Lagore",
      title: "dr",
      image: "/images/samantha.webp",
    },
  ];

  function renderStaff(staff) {
    return staff.map((member, index) => (
      <Box
        maxW='320px'
        objectFit='contain'
        key={index}
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        borderRadius='30px'
        px='1.5rem'
        py='1.5rem'
        bg={colors.light}>
        <ChakraImage
          src={member.image}
          alt={member.name}
          w='200px'
          h='200px'
          
          objectFit='cover'
        />

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
      headertext={greeting()}
      subtext='We are a group of highly trained, experienced animal lovers who are devoted to giving our patients the best care possible.'
      alignheader='left'
  
      linktext='Meet Our Team'
      linkto='/about'
      linkvariant='DarkOutline'
      flexWrap='wrap'
      {...props}>
      {renderStaff(staff)}
    </SectionFlexContainer>
  );
}
