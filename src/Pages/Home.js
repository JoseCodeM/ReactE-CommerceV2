import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import "./Styling/Home.css";

function Home() {
  return (
    <>
      <div className="txt">
        <h1>Welcome to Jose's Nursery!</h1>
      </div>
      <div className="logo">
        <img src="/Images/TogemonUpgraded.png" alt="logo" />
        <h1>We strive to bring you the best quality succulents!</h1>
      </div>
      <div>
        <ImageSlider slides={SliderData} />
      </div>
    </>
  );
}

export default Home;
