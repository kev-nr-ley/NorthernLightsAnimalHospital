import userTestimonials from "@assets/data/userTestimonials";
import UserTestimonial from "@components/UserTestimonial";
import SectionFlexContainer from "@components/SectionFlexContainer";

export default function Testimonials(props) {
  const renderTestimonials = () => {
    return userTestimonials.map((testimonial, index) => (
      <UserTestimonial
        key={index}
        rating={testimonial.rating}
        review={testimonial.review}
        name={testimonial.name}
        maxW='360px'
        textAlign='center'
        minW='280px'
        px={["0", "0", "2", "4"]}
        my={["2", "2", "4", "8"]}
      />
    ));
  };

  return (
    <SectionFlexContainer
      headertext='What our clients say about us'
      // linktext='Read More Testimonials'
      // linkto='/contact'
      bg='primaryOpacity95'
      color='light'
      // h='100%'
      {...props}>
      {renderTestimonials()}
    </SectionFlexContainer>
  );
}
