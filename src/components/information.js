import React from "react";
import Image from "../images/business-man-image.jpeg";
import "../styles/information.css";
import About from "./about";
import Buttons from "./buttons";
import Footer from "./footer";
import Interests from "./interests";
import Personal from "./personal";

export default function Information() {
  return (
    <div className="info">
      <div className="image-container">
        <img src={Image} alt="Profile-pic" />
      </div>
      <Personal />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
