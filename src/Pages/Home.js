import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import "./Styling/Home.css";
import HomeLogo from "../components/HomeLogo"
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
      <HomeLogo />
      <ImageSlider slides={SliderData} />
      <AboutUs />
    </>
  );
}

export default Home;
