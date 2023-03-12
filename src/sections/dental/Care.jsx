import { Flex, Heading, Text } from "@chakra-ui/react";

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
        heading='Brushing'
        src='/images/hq/toothbrush.webp'
        bg='light'
        color='dark'
        // fullwidth
      >
        <Text>
          You can start brushing your animal’s teeth at anytime but beginning
          this at a younger age usually makes it easier to make it a regular
          habit between you and your animal. Getting used to brushing may take
          several attempts.
        </Text>
        <Text>
          It is best to start gradually by using just your finger and
          appropriate animal enzymatic tooth paste before moving right to a
          toothbrush. Never use human toothpaste as fluoride just like in
          humans, is not good for them if swallowed. There are many different
          types of animal toothbrushes available but even simply a child size
          super soft bristle toothbrush is sufficient.
        </Text>
        <Text>
          When brushing your pet’s teeth do so gently and mainly focus on the
          outside of the teeth as well as getting right to the back of the
          mouth. Always give your animal lots of praise and treats for each
          gradual step as it helps reinforce teeth brushing as a positive
          experience which will allow it to continue in the future.
        </Text>
      </ImageTextPill>

      <ImageTextPill
        heading='Dental Formluated Diets'
        src='/images/hq/pet-food-bowl-color.webp'
        color='dark'
        bg='light'>
        <Text>
          Dental formulated diet are also available through your local
          veterinarian clinic. Dental diet work on two different principles. The
          first being the kibble are usually constructed in such a way that when
          your pet bites into them the help mechanically brush their teeth. On
          top of helping mechanically brush the teeth the dental diets will also
          contain enzyme to help decrease and prevent plaque and tartar build
          up.
        </Text>
      </ImageTextPill>
      <ImageTextPill
        heading='Dental Treats'
        src='/images/hq/dog-toothbrush-color.webp'
        color='dark'
        bg='light'>
        <Text>
          There are several dental treats available, so trying one or two to see
          what your pet likes is beneficial. Read the labels of the dental
          treats carefully as some contain enzymes to help decrease and prevent
          plaque and tartar build up. Some dental treats will even have a stamp
          of approval from the Veterinary Oral Health Council (VOHC), this means
          these treats meet strict VOHC testing guidelines for controlling
          plaque and tartar.
        </Text>

        <Text>
          Always be careful giving antlers to your dogs, not only can they cause
          serious intestinal issues but they can also cause unwanted fractures
          of your dog’s teeth which can lead tooth infections and possible
          extractions.
        </Text>
      </ImageTextPill>
    </Flex>
  );
}
