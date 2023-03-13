import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
export default function ScrollToTopButton(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, [pathname]);

  return (
    <Button
      bg='#ffffff50'
      w='8rem'
      h='2rem'
      color='#22222290'
      _hover={{
        bg: "#ffffff",
        color: "#222222",
      }}
      borderRadius='0.5rem'
      onClick={() => window.scrollTo(0, 0, "smooth")}
      {...props}>
      <ArrowUpIcon />
    </Button>
  );
}
