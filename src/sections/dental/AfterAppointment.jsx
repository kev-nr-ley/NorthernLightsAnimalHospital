import { Text, Accordion, Link } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
import AccordionQuestion from "@components/AccordionQuestion";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function AfterAppointment(props) {
  return (
    <SectionFlexContainer headertext='After Your Appointment' {...props}>
      <ImageHeaderTextBlock
        headercircle='1'
        headercolor='light'
        headerbg='dark'
        headertext='Before the procedure'>
        <Text>
          Our staff will be happy to discuss the following information with you
          at the time of booking and will remind you once more with a
          confirmation call about two days prior to your scheduled surgery date.
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
        headercolor='light'
        headerbg='dark'
        headertext='Day of the procedure'>
        <Text>
          Your pet will have a “day stay” at the clinic and must be dropped off
          at The Spay Clinic between 7:00AM – 8:00AM. For your pet’s comfort and
          well-being, please encourage them to go to the bathroom prior to
          bringing them into The Spay Clinic the day of their surgery. Dogs are
          discharged between 4:00PM – 5:00PM Monday through Friday and cats are
          discharged between 5:00PM – 6:00PM Monday through Friday.
        </Text>
      </ImageHeaderTextBlock>
      <ImageHeaderTextBlock
        headercircle='3'
        headercolor='light'
        headerbg='dark'
        headertext='After the procedure'>
        <Text>
          Our staff will discuss the post-operative care and management that
          your pet will require following their dental procedure. You will also
          be provided a document outlining what was discussed for your reference
          at home. For your convenience, this form is also available here for
          download.
        </Text>
        <Link variant='DarkOutline'>Download Post-Op Care Form</Link>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
