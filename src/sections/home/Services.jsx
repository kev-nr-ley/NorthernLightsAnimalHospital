import { Text } from "@chakra-ui/react";

import SectionFlexContainer from "@components/SectionFlexContainer";
import ImageHeaderTextBlock from "@components/ImageHeaderTextBlock";
export default function Services(props) {
  return (
    <SectionFlexContainer header='Our services' {...props}>
      <ImageHeaderTextBlock
        src='/images/clipboard.png'
        heading='Spaying and Neutering'
        linkText='Learn More'
        linkTo='/spay'
        linkVariant='DarkOutline'>
        <Text>
          The Original Spay Clinic has been providing affordable priced spays
          and neuters for dogs and cats throughout the Edmonton and surrounding
          areas for over 35 years. Our ongoing mission is, and always has been,
          to provide the community with professional and affordable spayig and
          neutering service, using only the latest technology.'
        </Text>
      </ImageHeaderTextBlock>

      <ImageHeaderTextBlock
        src='/images/dogbrush.png'
        heading='Dental Care'
        linkText='Learn More'
        linkTo='/dental'
        linkVariant='DarkOutline'>
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
        src='/images/dogcat.png'
        heading='Other Services'
        linkText='Learn More'
        linkTo='/health'
        linkVariant='DarkOutline'>
        <Text>
          At The Original Spay Clinic we offer a variety of services to care for
          your pet, including annual checkups, vaccinations, general surgeries,
          and dewclaw removal.
        </Text>
      </ImageHeaderTextBlock>
    </SectionFlexContainer>
  );
}
