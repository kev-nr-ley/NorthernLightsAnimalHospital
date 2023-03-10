import { Text, Input, Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
import SectionFlexContainer from "@components/SectionFlexContainer";
export default function ContactForm(props) {
  return (
    <SectionFlexContainer header='Request an appointment' {...props}>
      <form>
        <FormControl isRequired>
          <Text as={FormLabel} variant='bold'>
            Name
          </Text>
          <Input placeholder='Larry' />
        </FormControl>

        <FormControl isRequired>
          <Text as={FormLabel} variant='bold'>
            Pet's Name
          </Text>
          <Input placeholder='Tofu' />
        </FormControl>

        <FormControl isRequired>
          <Text as={FormLabel} variant='bold'>
            Phone Number
          </Text>
          <Input type='num' />
          <FormHelperText>We'll only call for good stuff</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <Text as={FormLabel} variant='bold'>
            Email Address
          </Text>
          <Input type='email' bg='white' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <Text as={FormLabel} variant='bold'>
            Nature of Visit
          </Text>

          <Textarea placeholder='First name' />
        </FormControl>

        <Button variant='primary' size='lg'>
          Submit
        </Button>
      </form>
    </SectionFlexContainer>
  );
}
