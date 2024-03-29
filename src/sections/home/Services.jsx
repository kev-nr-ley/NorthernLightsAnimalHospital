import { Text } from "@chakra-ui/react";

import SectionFlexContainer from "@components/SectionFlexContainer";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
export default function Services(props) {
  return (
    <SectionFlexContainer headertext='Our services' {...props}>
      <ImageHeaderTextBlock
        src='/images/hq/clipboard-color.webp'
        headertext='Spaying and Neutering'
        linktext='Learn More'
        linkto='/spay'
        linkvariant='DarkOutline'
        alignItems='left'>
        <Text>
          Northern Lights Animal Hospital has been providing affordable priced
          spays and neuters for dogs and cats throughout the Edmonton and
          surrounding areas for over 35 years. Our ongoing mission is, and
          always has been, to provide the community with professional and
          affordable spayig and neutering service, using only the latest
          technology.'
        </Text>
      </ImageHeaderTextBlock>

      <ImageHeaderTextBlock
        src='/images/hq/dog-toothbrush-color.webp'
        headertext='Dental Care'
        linktext='Learn More'
        linkto='/dental'
        linkvariant='DarkOutline'
        alignItems='left'>
        <Text>
          The most effective way to clean your pet’s teeth and remove all dental
          disease that may have accumulated is through a professional cleaning.
          Here at The Spay Clinic we utilize state of the art dental imaging
          equipment and ultrasonic dental tools to help enhance our capabilities
          during your pet’s dental procedure. We are pleased offer free
          pre-dental consultations for you and your pet.
        </Text>
      </ImageHeaderTextBlock>

      <ImageHeaderTextBlock
        src='/images/hq/pets.webp'
        headertext='Other Services'
        linktext='Learn More'
        linkto='/health'
        linkvariant='DarkOutline'
        alignItems='left'>
        <Text>
          At Northern Lights Animal Hospital we offer a variety of services to
          care for your pet, including annual checkups, vaccinations, general
          surgeries, and dewclaw removal.
        </Text>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
