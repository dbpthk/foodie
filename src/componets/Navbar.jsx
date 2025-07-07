import { navbarList, assets } from "./../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-md z-50">
      <div className="flex items-center justify-between px-10 py-8">
        <img className="h-8" src={assets.logo} alt="" />
        <div className="hidden">
          <ul className=" md:flex flex-col md:flex-row gap-6 md:gap-12 text-base font-medium">
            {navbarList.map((nav, index) => (
              <li key={index}>
                <Link
                  to={`/${nav.toLowerCase()}`}
                  className="cursor-pointer hover:underline transition duration-500"
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
          <img className="h-6 md:h-8" src={assets.cart} alt="" />
          <div className="flex items-center h-12 rounded-full cursor-pointer w-fit px-6 bg-white hover:text-[#fe850d]">
            Booking Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
