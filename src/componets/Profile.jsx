import { reviews } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//rating stars
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`full-${i}`}
        icon={solidStar}
        className="text-yellow-500"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon
        key="half"
        icon={faStarHalfAlt}
        className="text-yellow-500"
      />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${stars.length}`}
        icon={regularStar}
        className="text-yellow-500"
      />
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

const Properties = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 m-auto ">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div>
            <div
              className=" bg-white h-[400px] text-black rounded-xl mb-5"
              key={index}
            >
              <div className="h-30 rounded-t-xl bg-[#fe9e0d] flex justify-center items-center">
                <img
                  className="w-24 h-24 mx-auto rounded-full overflow-hidden object-cover"
                  src={review.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-5 ">
                <p className="text-xs md:text-[14px]">{review.text}</p>
                <StarRating rating={5} />
                <p className="text-lg font-bold">{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Properties;
