import { Text, Flex } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
import SectionFlexContainer from "@components/SectionFlexContainer";
import ChakraLink from "@components/ChakraLink";
import { DownloadIcon } from "@chakra-ui/icons";
export default function AfterAppointment(props) {
  return (
    <SectionFlexContainer
    id='SpayAfterAppointment'
      headertext='After Your Appointment'
      alignheader='flex-start'
      {...props}>
      <ImageHeaderTextBlock
        headercircle='1'
        headerbg='dark'
        headercolor='light'
        headertext='Before the Procedure'>
        <Text>
          Our staff will be happy to discuss the following information with you
          at the time of booking and will remind you once more with a
          confirmation call about two days prior to your scheduled surgery date.
          <br /> <br />
          Once you book an appointment for your pet to be spayed or neutered it
          is important to remember the fasting instructions the night before to
          prepare your animal for the next day. No food should be fed to your
          animal after 6:00PM the night before as well as no water should be
          given to your animal after midnight the night before unless directed
          otherwise. These are to prevent potential anesthetic complications
          during your animal’s routine procedure.
        </Text>
      </ImageHeaderTextBlock>
      <ImageHeaderTextBlock
        headercircle='2'
        headerbg='dark'
        headercolor='light'
        headertext='Day of the Procedure'>
        <Text>
          Your pet will have a “day stay” at the clinic and must be dropped off
          at The Spay Clinic between 7:00AM – 8:00AM. For your pet’s comfort and
          well-being, please encourage them to go to the bathroom prior to
          bringing them into The Spay Clinic the day of their surgery.
          <br /> <br />
          As all elective surgeries are “day surgeries”, there is no reason for
          your pet to have an over-night hospitalization with us here at The
          Spay Clinic. When your animal is ready to go home it is important to
          keep them safe and comfortable the first few days after their surgery
          as patients are usually very eager to see their owners and return
          home.
        </Text>

        <Text>
          Dogs are discharged between 4:00PM – 5:00PM Monday through Friday and
          cats are discharged between 5:00PM – 6:00PM Monday through Friday.
        </Text>
      </ImageHeaderTextBlock>



      <ImageHeaderTextBlock
        headercircle='3'
        headerbg='dark'
        headercolor='light'
        headertext='After the Procedure'>
        <Text mb='2rem'>
          Our staff will discuss the post-operative care and management that
          your pet will require following their elective surgery. You will also
          be provided a document outlining what was discussed for your reference
          at home. For your convenience, these forms are also available here for
          download.
        </Text>

        <ChakraLink
          to='/public/files/spay-care.pdf'
          target='_blank'
          variant='DarkOutline'
          isExternal>
          Post-Op Care
          <DownloadIcon ml='0.5rem' fontSize='1rem' />
        </ChakraLink>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
