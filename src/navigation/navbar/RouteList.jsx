import React from "react";
import Home from "@pages/Home";
import About from "@pages/About";
import Spay from "@pages/Spay";
import Dental from "@pages/Dental";
import Health from "@pages/Health";
import Contact from "@pages/Contact";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/spay", element: <Spay /> },
  { path: "/dental", element: <Dental /> },
  { path: "/health", element: <Health /> },
  { path: "/contact", element: <Contact /> },
  
];

export default function RouteList() {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </>
  );
}



