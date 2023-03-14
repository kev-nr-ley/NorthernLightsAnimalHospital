import {
  Flex,
  Text,
  Link,
  VStack,
  Accordion,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import AccordionQuestion from "@components/AccordionQuestion";
import ImageTextPill from "@components/ImageTextPill";
export default function Considerations(props) {
  return (
    <Flex
      //use same props as in SectionFlexContainer
      flexDirection='column'
      alignItems={["flex-start"]}
      justifyContent='center'
      w='100vw'
      minW='320px'
      maxW='100%'
      position='relative'
      gap='12'
      px={["8", "12", "15vw", "15vw"]} //affects section heading
      py={["16", "20", "20", "20"]}
      {...props}>
      {/* <Heading variant='sectionHeading'>Considerations</Heading> */}
      <ImageTextPill
        bg='light'
        color='dark'
        heading='Annual Health Exams'
        src='/images/hq/pet-family-color.webp'>
        <Text>
          During your pet’s first physical exam your veterinarian will discuss
          strategies with you to help keep your animal as healthy as possible
          and up to date on vaccinations. The importance of routine annual
          physical exams should not be overlooked. This physical exam is not
          only valuable for the animal; it is also helpful for owners. Problems
          can be discovered during the physical exam even in healthy looking
          animals. Your veterinarian can then make recommendations for treatment
          options and any preventive health care procedures for the future.
        </Text>
      </ImageTextPill>

      <ImageTextPill
        bg='light'
        color='dark'
        heading='Vaccinations'
        src='/images/hq/vaccine.webp'>
        <Text>
          Younger pets are at a much higher risk for certain diseases, therefore
          following your advised vaccination protocol is of the utmost
          importance. Kittens and puppies will need several vaccination series
          to be fully vaccinated. Be sure to follow all your veterinarian’s
          recommendations and make sure to schedule an appointment with your
          veterinarian soon after acquiring your new pet. Pets are susceptible
          to viral and bacterial diseases at any age but some common diseases
          can be prevented by using vaccinations.
        </Text>

        <Accordion
          allowToggle
          w={["300px", "100%", "100%", "600px"]}
          display='flex'
          flexDirection='column'
          my='2'
          gap='2'>
          <AccordionQuestion
            // borderRadius='60px'
            question='Vaccinations for Dogs'>
            <Text listStylePosition={"inside"}>
              Certain vaccine protocols may be recommended depending on your
              dog’s type of lifestyle; factors that will be considered is
              whether your dog frequents dog parks, groomers, day cares or
              kenneling facilities. It is essential to remember your puppy
              should start receiving vaccinations as young as 8 weeks old, your
              veterinarian can help you develop the proper protocol for your
              animal. The following vaccines (DA2PP and Rabies) are considered
              core and are always recommended to be kept up to date:
            </Text>

            <UnorderedList>
              <ListItem mt='1rem'>Distemper virus</ListItem>
              <ListItem>Adenovirus</ListItem>
              <ListItem>Parainfluenza</ListItem>
              <ListItem>Parvovirus</ListItem>
              <ListItem>Rabies</ListItem>
              The following vaccines listed below are optional and should be
              discussed with your veterinarian based on your dog’s routine:
              <ListItem>Coronavirus</ListItem>
              <ListItem>Bordetella (Kennel Cough)</ListItem>
            </UnorderedList>

            {/* 
            <Link
              variant='DarkOutline'
              position='absolute'
              bottom='2'
              right='12'>
              Book an Appointment
            </Link> */}
          </AccordionQuestion>

          <AccordionQuestion
            // borderRadius='60px'
            question='Vaccinations for Cats'
            listStylePosition={"inside"}>
            <Text>
              Vaccination protocols for your cat can change dramatically
              depending on their style of living. Aspects of your cat’s
              lifestyle that will be considered is whether they are strictly an
              indoor cat compared to a free-roaming outdoor cat. It is essential
              to remember your kitten should start receiving vaccinations as
              young as 8 weeks old, your veterinarian can help you develop the
              proper protocol for your animal. The following vaccines are
              considered core and are always recommended to be kept up to date:
            </Text>

            <UnorderedList>
              <ListItem mt='1rem'> Feline Viral Rhinotracheitis</ListItem>
              <ListItem>Calicivirus</ListItem>
              <ListItem>Panleukopenia</ListItem>
              <ListItem>Rabies</ListItem>
              The following vaccine is optional but always recommended for cats
              that freely roam outdoors or in are in homes where new cats are
              often brought in:
              <ListItem>Feline Leukemia</ListItem>
            </UnorderedList>
            {/* <Link
              variant='DarkOutline'
              position='absolute'
              bottom='2'
              right='2'>
              Book an Appointment
            </Link> */}
          </AccordionQuestion>
        </Accordion>
      </ImageTextPill>
    </Flex>
  );
}
