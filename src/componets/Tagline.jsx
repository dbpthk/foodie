import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faFireAlt,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Tagline = () => {
  const taglines = [
    {
      text: "Our chefs handle all the peeling, chopping, and prepping — so you get fresh, ready-to-cook meals.",
      icon: faUtensils,
    },
    {
      text: "We do the prep. You do the cooking. Fresh, fast, and fuss-free.",
      icon: faFireAlt,
    },
    {
      text: "Peeling, chopping, marinating? Done. Just cook and enjoy.",
      icon: faCheckCircle,
    },
    {
      text: "Skip the prep, not the freshness. We deliver ingredients ready to cook.",
      icon: faTruck,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-medium">Why People Love Us</h2>
      <ul className="flex flex-col gap-3 text-sm ">
        {taglines.map((tag, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon
              icon={tag.icon}
              className="text-[#FE9E0D] text-lg px-3 "
            />
            <span>{tag.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tagline;
