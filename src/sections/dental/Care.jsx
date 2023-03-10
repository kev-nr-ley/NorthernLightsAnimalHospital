import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";
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
import ImageCenteredCard from "@components/ImageCenteredCard";
import AccordionQuestion from "@components/AccordionQuestion";
import ImageTextPill from "@components/ImageTextPill";
export default function Considerations(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={"column"}
      w='100vw'
      position='relative'
      overflow={"hidden"}
      h='100%'
      justifyContent={"center"}
      alignItems={"center"}
      bg='background'
      gap='5vh'
      px='15vw'
      py='10vh'
      {...props}>
      <ImageTextPill title='Brushing' image='/images/toothbrush.png'>
        <Text mt='4'>
          You can start brushing your animal’s teeth at anytime but beginning
          this at a younger age usually makes it easier to make it a regular
          habit between you and your animal. Getting used to brushing may take
          several attempts.
        </Text>
        <Text mt='4'>
          It is best to start gradually by using just your finger and
          appropriate animal enzymatic tooth paste before moving right to a
          toothbrush. Never use human toothpaste as fluoride just like in
          humans, is not good for them if swallowed. There are many different
          types of animal toothbrushes available but even simply a child size
          super soft bristle toothbrush is sufficient.
        </Text>
        <Text mt='4'>
          When brushing your pet’s teeth do so gently and mainly focus on the
          outside of the teeth as well as getting right to the back of the
          mouth. Always give your animal lots of praise and treats for each
          gradual step as it helps reinforce teeth brushing as a positive
          experience which will allow it to continue in the future.
        </Text>
      </ImageTextPill>

      <ImageTextPill
        title='Dental Formluated Diets'
        image='/images/realdogbowl.png'>
        <Text mt='4'>
          Dental formulated diet are also available through your local
          veterinarian clinic. Dental diet work on two different principles. The
          first being the kibble are usually constructed in such a way that when
          your pet bites into them the help mechanically brush their teeth. On
          top of helping mechanically brush the teeth the dental diets will also
          contain enzyme to help decrease and prevent plaque and tartar build
          up.
        </Text>

        <Text mt='4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla,
          in quasi molestias ab debitis? Sint deleniti reprehenderit ratione
          laborum ut aspernatur inventore nemo, quaerat perferendis cupiditate,
          sapiente hic explicabo expedita provident temporibus sequi repudiandae
          quis quisquam? Quis nulla sapiente dolor, impedit non sit nemo
          architecto veritatis quos numquam excepturi?
        </Text>
      </ImageTextPill>
      <ImageTextPill title='Dental Treats' image='/images/dogbone.png'>
        <Text mt='4'>
          There are several dental treats available, so trying one or two to see
          what your pet likes is beneficial. Read the labels of the dental
          treats carefully as some contain enzymes to help decrease and prevent
          plaque and tartar build up. Some dental treats will even have a stamp
          of approval from the Veterinary Oral Health Council (VOHC), this means
          these treats meet strict VOHC testing guidelines for controlling
          plaque and tartar.
        </Text>

        <Text mt='4'>
          Always be careful giving antlers to your dogs, not only can they cause
          serious intestinal issues but they can also cause unwanted fractures
          of your dog’s teeth which can lead tooth infections and possible
          extractions.
        </Text>
      </ImageTextPill>

      {/*  */}
    </Flex>
  );
}
