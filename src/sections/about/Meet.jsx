import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import StaffCard from "@components/StaffCard";
import { staff } from "@assets/data/staff";
export default function Meet(props) {
  const { colors } = useTheme();

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='relative'
      p={["5vw 5vw", "5vw 5vw", "5vw 10vw", "5vw 15vw"]}
      minW='320px'
      bg='background'
      {...props}>
      <Flex flexDirection={"column"} position='relative'>
        <Box minW='300px'>
          <Heading
            variant='SectionHeading'
            fontSize={["28px", "28px,", "36px"]}>
            Meet your care team.
            <Text as='span' color={colors.primary} ml='4' fontSize='48px'>
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
          justifyContent={["center", "center", "space-between"]}
          alignItems='flex-start'
          gap='2vh'
          position='relative'>
            
          <StaffCard
            image={staff[0].image}
            name={staff[0].name}
            description={staff[0].description}
          />

          <StaffCard
            image={staff[1].image}
            name={staff[1].name}
            description={staff[1].description}
            top='4vh'
          />

          <StaffCard
            image={staff[2].image}
            name={staff[2].name}
            description={staff[2].description}
            top='-2vh'
          />
        </Flex>
      </Flex>
    </Box>
  );
}
