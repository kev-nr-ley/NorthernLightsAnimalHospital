import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import StaffCard from "@components/StaffCard";
import { staff } from "@assets/data/staff";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Meet(props) {
  const { colors } = useTheme();

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
        top='4vh'
      />
      <StaffCard
        image={staff[2].image}
        name={staff[2].name}
        description={staff[2].description}
        top='-2vh'
      />
    </SectionFlexContainer>
  );
}
