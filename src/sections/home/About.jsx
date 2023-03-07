import { Flex, Box, Heading, Text, Link, Image, Grid } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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
      <Box maxW='320px' bjectFit='contain' key={index}
      
        border='1px solid #E2E8F0'
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        borderRadius='30px'
        padding='24px'
        bg={colors.background}
      >
        <Image w='100%' src={member.image} />
        <Heading variant='bodyHeading' mt='2'
        
        >
          {member.name}
        </Heading>
      </Box>
    ));
  }

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      // bg={colors.background}
      bg='white'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      {...props}>

        {/* bg oval */}
      {/* <Box
        position='absolute'
        top='50%'
        left='0'
        transform={"translateY(-50%)"}
        w='95%'
        h='90%'
        bg='red'
        borderTopRightRadius='9999'
        borderBottomRightRadius='9999'
        opacity='0.1'
        zIndex='1'>
        oh hello
      </Box> */}



      <Flex flexDirection={"column"} position='relative'>
        <Box minW='300px'>
          <Heading
            variant='SectionHeading'
            fontSize={["28px", "28px,", "36px"]}>
            Meet your care team.
            <Text as='span' color={colors.primary} fontSize='48px'>
              ❤
            </Text>
          </Heading>

          <Text>
            We are a group of highly trained, experienced animal lovers who are
            devoted to giving our patients the best care possible.
          </Text>
        </Box>

        <Flex
          mt='8'
          flexWrap='wrap'
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems='center'
          gap='5vh'>
          {renderStaff(staff)}
        </Flex>

        <Link
          variant='DarkOutline'
          justifySelf={"flex-start"}
          alignSelf={["flex-start", "flex-start", "flex-end"]}
          mt='5vh'>
          Learn More <ArrowForwardIcon fontSize='32px' />
        </Link>
      </Flex>
    </Box>
  );
}
