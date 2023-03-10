import { Flex, Box, Heading, Center, Link } from "@chakra-ui/react";
import userTestimonials from "@assets/data/userTestimonials";
import UserTestimonial from "@components/UserTestimonial";
import { useTheme } from "@chakra-ui/react";
export default function Testimonials(props) {
  const { colors } = useTheme();

  const renderTestimonials = () => {
    return userTestimonials.map((testimonial) => (
      <UserTestimonial
        key={testimonial.id}
        rating={testimonial.rating}
        review={testimonial.review}
        name={testimonial.name}
        w={["100%", "100%", "300px", "400px"]}
      />
    ));
  };

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      gap='5vw'
      w='100vw'
      minW='300px'
      maxW='100%'
      h='100%'
      py='15vh'
      alignItems='center'
      position='relative'
      bg={colors.primaryOpacity95}
      color={colors.light}
      // p={["5vw 5vw", "5vw 5vw", "5vw 5vw", "5vw 5vw"]}
      justifyContent={"center"}
      {...props}>
      <Box position='relative'>
        <Heading variant='SectionHeading'>
          What our clients say about us
        </Heading>

        <Flex justifyContent={"center"} gap='5vw' py='5vh'>
          {renderTestimonials()}
        </Flex>
        <Link variant='LightOutFline' position='absolute' right='0'>
          Read More Testimonials
        </Link>
      </Box>
    </Flex>
  );
}
