import React from "react";

import { Parallax, ParallaxLayer } from "react-parallax";
export default function BackgroundParallax(props) {
  return (
    <div>
      <Parallax
        bgImage='/images/about-2.png'
        strength={500}
        {...props}></Parallax>
        <h2>HELLOOOO</h2>
    </div>
  );
}
