import Heading from "../componets/Heading";
import Profile from "./../componets/Profile.jsx";

const Testimonials = () => {
  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-center">
        <Heading
          heading="What they are Saying"
          subheading="Real Stories. Real People."
          text="Here is what our happy customers have to say about their
              experience with us."
        />
      </div>

      <div className="h-[500px]">
        <Profile />
      </div>
    </div>
  );
};

export default Testimonials;
