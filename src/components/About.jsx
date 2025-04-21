import React from "react";
import image from "../assets/image.jpg"; // Make sure this path matches your image file location

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building web apps and solving problems with code.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
