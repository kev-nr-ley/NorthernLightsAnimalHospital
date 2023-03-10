import { Text, Accordion } from "@chakra-ui/react";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
import SectionFlexContainer from "@components/SectionFlexContainer";

import AccordionQuestion from "@components/AccordionQuestion";
export default function AfterAppointment(props) {
  return (
    <SectionFlexContainer header='After Your Appointment' {...props}>
      <ImageHeaderTextBlock
        headerText='1'
        headerBg='dark'
        headerColor='light'
        heading='Before'>
        <Text>
          Our staff will be happy to discuss the following information with you
          at the time of booking and will remind you once more with a
          confirmation call about two days prior to your scheduled surgery date.
        </Text>

        <Text>
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
        headerText='2'
        headerBg='dark'
        headerColor='light'
        heading='Day of Surgery'>
        <Text>
          Your pet will have a “day stay” at the clinic and must be dropped off
          at The Spay Clinic between 7:00AM – 8:00AM. For your pet’s comfort and
          well-being, please encourage them to go to the bathroom prior to
          bringing them into The Spay Clinic the day of their surgery.
        </Text>
        <Text>
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
        headerText='3'
        headerBg='dark'
        headerColor='light'
        heading='Aftercare'>
        <Text>
          Our staff will discuss the post-operative care and management that
          your pet will require following their elective surgery. You will also
          be provided a document outlining what was discussed for your reference
          at home. For your convenience, these forms are also available here for
          download.
        </Text>

        <Accordion allowToggle w='100%'>
          <AccordionQuestion
            question='Dogs Post-op Care'
            answer='Dogs deserve to be treated like the family members they are. That’s why we offer a variety of services to help keep your dog healthy and happy. From routine checkups to emergency care, we’re here to help your dog live a long, healthy life.'
            fontSize='16px'
            mt='4'
          />

          <AccordionQuestion
            question='Cats Post-op Care'
            answer='Cats are to be properly feared, and not merely tolerated. They are not our friends or our equals. They are our superiors. They are the aristocracy. They are the ruling class. They are the bourgeoisie. They are the 1%.'
            fontSize='16px'
            mt='4'
          />
        </Accordion>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
