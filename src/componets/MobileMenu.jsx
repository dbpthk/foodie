import { useState } from "react";
import { Link } from "react-router-dom";
import { assets, navbarList } from "./../assets/assets";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (nav) => {
    setActiveNav(nav); // set active nav item
    closeMenu(); // close the mobile menu
  };

  return (
    <>
      {/* Menu Icon */}
      <div
        onClick={openMenu}
        className={`md:hidden fixed top-6 right-10 z-60 ${isOpen && "hidden"}`}
      >
        <img
          className="h-10 cursor-pointer"
          src={assets.mobile_menu}
          alt="Open menu"
        />
      </div>

      {/* Overlay menu */}
      {isOpen && (
        <div className="fixed  inset-0 bg-white z-60 flex flex-col items-center justify-center gap-6 px-6 py-12">
          {/* Close Icon */}
          <div onClick={closeMenu} className="absolute top-6 right-10">
            <img
              className="h-10 cursor-pointer"
              src={assets.close_icon}
              alt="Close menu"
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            {navbarList.map((nav, index) => (
              <li key={index}>
                <Link
                  to={`/${
                    nav.toLowerCase() === "home" ? "" : nav.toLowerCase()
                  }`}
                  // passing actual nav
                  onClick={() => handleNavClick(nav)}
                  className={activeNav === nav ? "active" : ""}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>

          {/* Extra Buttons */}
          <Link
            to="/cart"
            className={`cursor-pointer font-medium ${
              activeNav === "Cart" ? "active" : ""
            } `}
            onClick={() => handleNavClick("Cart")}
          >
            Cart
          </Link>
          <Link
            to="/booking"
            className={`cursor-pointer font-medium ${
              activeNav === "Book Now" ? "active" : ""
            } `}
            onClick={() => handleNavClick("Book Now")}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
