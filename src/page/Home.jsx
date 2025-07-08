import React from "react";
import { assets } from "../assets/assets";
import Heading from "./../componets/Heading.jsx";

const Home = () => {
  return (
    <div className="w-[90vw]">
      <div className="flex flex-col gap-10 md:flex-row mt-10 items-center justify-around px-12">
        <div className="w-[400px] md:w-[600px] h-auto">
          <Heading
            heading="Your Favourite Food Delivered Hot & Fresh"
            text="Healthy switcher chefs do all the prep work, like 
peeding, chopping & marinating, so you can cook
a fresh food."
            buttonT="Order Now"
          />
        </div>
        <div className="min-w-[400px] md:w-[700px] lg:w-[900px]">
          <img
            className="w-[400px] md:w-[700px]"
            src={assets.home_banner_image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
