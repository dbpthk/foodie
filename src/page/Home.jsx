import React from "react";
import { assets } from "../assets/assets";
import Heading from "./../componets/Heading.jsx";
import Tagline from "../componets/Tagline.jsx";

const Home = () => {
  return (
    <div className="w-full md:w-[80vw] pb-20 px-12">
      <img
        className="absolute -z-10 -top-50 -right-70 object-cover"
        src={assets.home_banner_background}
        alt="background"
      />
      <div className="flex flex-col gap-10 md:flex-row mt-10 items-center justify-around ">
        <div className="w-[400px] md:w-[600px] h-auto">
          <Heading
            heading="Your Favourite Food Delivered Hot & Fresh"
            text="Healthy switcher chefs do all the prep work, like 
peeding, chopping & marinating, so you can cook
a fresh food."
            buttonT="Order Now"
          />
        </div>
        <div className="min-w-[400px] max-w-[600px] lg:w-[900px]">
          <img src={assets.home_banner_image} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <Tagline />
      </div>
    </div>
  );
};

export default Home;
