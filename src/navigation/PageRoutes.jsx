import React from "react";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";
import {Route, Routes} from "react-router-dom";

const routes = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/About", name: "About", element: <About /> },
  { path: "/Spay", name: "Spay", element: <Spay /> },
  { path: "/Dental", name: "Dental", element: <Dental /> },
  { path: "/Health", name: "Health", element: <Health /> },
  { path: "/Contact", name: "Contact", element: <Contact /> },
];

export default function PageRoutes(props) {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          console.log(route),
        <Route key={index} path={route.path} element={route.element} isMobile={props.isMobile} />
        ))}

      </Routes>
    </>
  );
}
