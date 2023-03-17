import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ScrollToTopButton({ ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(window.pageYOffset);
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      border={isVisible && "2px solid #000"}
      borderRadius='50%'
      bg='transparent'
      opacity={"0.3"}
      _hover={{ opacity: "1" }}
      {...props}>
      <ArrowUpIcon
        color={isVisible ? "black" : "transparent"}
      />
    </Button>
  );
}
