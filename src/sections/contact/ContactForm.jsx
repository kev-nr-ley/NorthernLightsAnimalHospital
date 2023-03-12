import { Text, Input, Textarea, Button, Flex, Box } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import SectionFlexContainer from "@components/SectionFlexContainer";
import FormInputContainer from "@components/FormInputContainer";
export default function ContactForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <SectionFlexContainer
      headertext='Request an appointment'
      color='dark'
      zIndex='2'
      position='relative'
      subtext='Please complete the following form to request an appointment. Please also note that availability will vary depending on your request. Your appointment will be confirmed by phone by a member of our staff.'
      {...props}>
      {/* <Box
        bg='red'
        w='100vw'
        h='100vw'
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        borderRadius='100%'
        zIndex='-5'
        // boxShadow='0 8px 8px 4px rgba(0,0,0,1)'
        
        ></Box> */}

      <Flex
        as='form'
        flexDirection={"column"}
        w='100%'
        maxW='600px'
        zIndex='2'
        onSubmit={handleSubmit}>
        <FormInputContainer
          label='Name'
          placeholder='Jane Doe'
          inputtype='text'
          isRequired={true}
          inputbg='light'
        />

        <FormInputContainer
          label="Pet's Name"
          placeholder='Tofu'
          inputtype='text'
          isRequired={true}
          inputbg='light'
        />

        <FormInputContainer
          label='Phone Number'
          placeholder='780 123 4567'
          inputtype='tel'
          isRequired={true}
          inputbg='light'
        />

        <FormInputContainer
          label='Email Address'
          placeholder='pet@vetclinic.ca'
          inputtype='email'
          isRequired={true}
          inputbg='light'
        />

        <FormInputContainer
          label='Nature of Visit'
          placeholder='Please describe the nature of your visit.'
          inputtype='textarea'
          isRequired={true}
          inputbg='light'
        />

        <Button
          variant='primary'
          alignSelf={"flex-end"}
          mt='4'
          w='fit-content'
          bg='dark'
          color='light'
          size='lg'
          onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </SectionFlexContainer>
  );
}
