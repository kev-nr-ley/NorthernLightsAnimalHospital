import { Text } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function Considerations(props) {
  return (
    <SectionFlexContainer headertext='Considerations' {...props}>
      <ImageHeaderTextBlock
        src='/images/hq/tooth.webp'
        alignimage='center'
        alignheader='center'
        imagewidth='77px'
        imageheight='77px'
        justifyContent='flex-start'
        headertext='Extractions'
        bg='white'
        // h={["auto", "auto", "auto", "740px"]}
        h='auto'
        w={["100%", "100%", "100%", "300px"]}
        maxW='400px'
        borderRadius='30px'
        px={["8", "8", "4"]}
        py='12'
        textAlign='center'
        boxShadow='0px 4px 13px 0px rgba(0,0,0,0.25)'>
        <Text>
          Dental extractions may also be discussed with you if certain teeth are
          noted to be in an undesirable condition. Extractions are practiced
          regularly by most veterinarians and owners should not be concerned if
          your pet has an issue that requires a tooth or teeth to be pulled.
          Tooth extractions do not cause a great deal of discomfort for your
          pet, in fact in most cases, they will feel and function much better
          once the source of pain has been taken out.
        </Text>
      </ImageHeaderTextBlock>
      <ImageHeaderTextBlock
        src='/images/hq/pill-bw.webp'
        alignimage='center'
        alignheader='center'
        justifyContent='flex-start'
        headertext='Antibiotics'
        imagewidth='77px'
        imageheight='77px'
        bg='white'
          // h={["auto", "auto", "auto", "740px"]}
          h='auto'
        w={["100%", "100%", "100%", "300px"]}
        maxW='400px'
        borderRadius='30px'
        px={["8", "8", "4"]}
        py='12'
        textAlign='center'
        boxShadow='0px 4px 13px 0px rgba(0,0,0,0.25)'>
        <Text>
          During your consultation, pre-procedural antibiotics will be discussed
          with you. Most animals are recommended to be placed on antibiotics a
          few days prior to as well as following the dental procedure to help
          control any infection that may be present within your pet’s mouth.
        </Text>
      </ImageHeaderTextBlock>
      <ImageHeaderTextBlock
        src='/images/hq/db1.png'
        alignimage='center'
        alignheader='center'
        justifyContent='flex-start'
        headertext='Fasting'
        imagewidth='131px'
        imageheight='77px'
        bg='white'
           // h={["auto", "auto", "auto", "740px"]}
           h='auto'
        w={["100%", "100%", "100%", "300px"]}
        maxW='400px'
        borderRadius='30px'
        px={["8", "8", "4"]}
        py='12'
        textAlign='center'
        boxShadow='0px 4px 13px 0px rgba(0,0,0,0.25)'>
        <Text>
          Once you book an appointment for your pet to have a dental procedure
          performed it is important to remember the fasting instructions the
          night before to prepare your animal for the next day. No food should
          be fed to your animal after 6:00PM the night before as well as no
          water should be given to your animal after midnight the night before
          unless directed otherwise. These are to prevent potential anesthetic
          complications during your animal’s routine procedure.
        </Text>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
