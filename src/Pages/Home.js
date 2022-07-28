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

      {/* <div className="grid-container">
        <div className="aboutUs grid-item1">
          <img src="Images/2.png" alt="aboutus" />
        </div>

        <div className="bio grid-item2">
          <p>
          Family owned online wholesale/retail nursery that's based in Richmond
          VA, we are dedicated to growing a wide variety of cacti and succulents
          and are constantly adding, developing and creating more products. We
          offer the best quality plants at the best prices possible. After all,
          we've been in the business for years!
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Home;
