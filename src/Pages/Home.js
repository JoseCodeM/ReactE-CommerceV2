import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import "./Styling/Home.css";

function Home() {
  return (
    <>
      <div className="logo">
        {/* <h1>Welcome to Jose's Nursery!</h1> */}
        <img src="/Images/TogemonUpgraded.png" alt="logo" />
      </div>

      <div>
        <ImageSlider slides={SliderData} />
      </div>

      <div className="grid-container">
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
      </div>
    </>
  );
}

export default Home;
