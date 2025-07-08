import { navbarList, assets } from "./../assets/assets";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <MobileMenu />
      <div className=" sticky top-0 shadow-md bg-white">
        <div className="flex items-center justify-between  px:6 md:px-10 py-8">
          <Link to="/">
            <img
              className=" h-8 pl-10 md:h-8 md:flex cursor-pointer"
              src={assets.logo}
              alt=""
            />
          </Link>
          <ul className="hidden md:flex md:flex-row md:gap-8 lg:gap-12 text-base font-medium">
            {navbarList.map((nav, index) => (
              <li key={index}>
                <Link
                  to={`/${
                    nav.toLowerCase() === "home" ? "" : nav.toLowerCase()
                  }`}
                  className="cursor-pointer hover:underline transition duration-500"
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
          <img className="hidden md:flex h-6 md:h-8" src={assets.cart} alt="" />
          <div className="hidden md:flex items-center h-12 rounded-full cursor-pointer px-4 bg-white hover:text-[#fe850d]">
            Booking Now
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
