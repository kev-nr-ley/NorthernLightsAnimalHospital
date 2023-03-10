import userTestimonials from "@assets/data/userTestimonials";
import UserTestimonial from "@components/UserTestimonial";
import SectionFlexContainer from "@components/SectionFlexContainer";
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
        maxW='360px'
        minW='280px'
      />
    ));
  };

  return (
    <SectionFlexContainer
      header='What our clients say about us'
      linkText='Read More Testimonials'
      linkTo='/testimonials'
      bg='primaryOpacity95'
      color='light'
      // h='100%'
      {...props}>
      {renderTestimonials()}
    </SectionFlexContainer>
  );
}
