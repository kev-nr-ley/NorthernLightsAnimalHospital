import React from "react";
import { Flex } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import PageRoutes from "@navigation/PageRoutes";

import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";

export default function DesktopNav(props) {
  const routes = [
    { path: "/", name: "Home", element: <Home /> },
    { path: "/About", name: "About", element: <About /> },
    { path: "/Spay", name: "Spay", element: <Spay /> },
    { path: "/Dental", name: "Dental", element: <Dental /> },
    { path: "/Health", name: "Health", element: <Health /> },
    { path: "/Contact", name: "Contact", element: <Contact /> },
  ];

  return (
    <Flex {...props}>
      <Flex gap='12' px='8'>
        {routes.map((route, index) => (
          <ChakraLink
            key={index}
            variant='bigNavLink'
            to={route.path}
            name={route.name}
          />
        ))}
      </Flex>
    </Flex>
  );
}
