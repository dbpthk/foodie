import Heading from "../componets/Heading";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Properties from "../componets/Properties";

const About = () => {
  return (
    <div className="max-w-full">
      <div className="flex flex-col gap-10 md:flex-row mt-10 items-center justify-around px-12">
        <div className="sm:w-[300px] md:w-[800px] lg:w-[900px]">
          <img src={assets.about_background_image} alt="about background" />
        </div>
        <div className="w-[400px] md:w-[600px] h-auto">
          <Heading
            heading="Food Is An Important Part Of A Balanced Diet"
            text="At Foodie, we celebrate bold flavors and fresh ingredients. From street snacks to gourmet dishes, our passion is sharing delicious recipes, cooking tips, and food stories that inspire every bite. Taste the world, one plate at a time."
            buttonT="Learn More"
            linkT="Watch Video "
            icon={
              <FontAwesomeIcon
                icon={faVideo}
                className="text-neutral-900 text-xl"
              />
            }
          />
        </div>
      </div>
      <div className="absolute -bottom-90 -left-30 -z-10 object-cover ">
        <img
          src={assets.about_background}
          aria-hidden="true"
          width={200}
          alt="about background"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[400px]">
          <Heading
            heading="How It Works"
            text="Choose your favorite meals, place your order in minutes, and enjoy fast, fresh delivery to your doorstep. Simple steps to delicious food — no stress, just great taste!"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col lg:flex-row gap-10">
          <Properties
            image={assets.pick_meals_image}
            heading="Pick Meals"
            text="Browse our chef-crafted menu and pick your favorite meals. Choose what you love — fresh, tasty, and ready to go."
          />
          <Properties
            image={assets.choose_image}
            heading="Choose How Often"
            text="Select how often you want your meals — daily, weekly, or just once. You're in control of your meal schedule."
          />
          <Properties
            image={assets.delivery_image}
            heading="Fast Deliveries"
            text="We cook and deliver quickly to your door. Hot, fresh meals arrive fast — so you enjoy without waiting or hassle."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
