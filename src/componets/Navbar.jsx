import { navbarList, assets } from "./../assets/assets";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  const handleNavClick = (nav) => {
    setActiveNav(nav); // set active nav item
  };

  return (
    <>
      <MobileMenu />
      <div className="z-50 sticky top-0 shadow-md bg-white">
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
                  className={`cursor-pointer hover:underline transition duration-500 ${
                    activeNav === nav ? "font-bold text-orange-500" : ""
                  }`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"/cart"}>
            <img
              onClick={() => handleNavClick("Cart")}
              className={`hidden md:relative md:flex h-6 md:h-8 cursor-pointer ${
                activeNav === "Cart" ? "ba" : ""
              } `}
              src={assets.cart}
              alt=""
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs px-1 rounded-full">
              3
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
