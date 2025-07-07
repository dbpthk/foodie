import { navbarList, assets } from "./../assets/assets";
const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-md z-50">
      <div className="flex items-center justify-between px-10 py-8">
        <img className="h-8" src={assets.logo} alt="" />

        <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-base font-medium">
          {navbarList.map((nav, index) => (
            <li className="cursor-pointer hover:font-bold" key={index}>
              {nav}
            </li>
          ))}
        </ul>
        <img className="h-6 md:h-8" src={assets.cart} alt="" />
        <div className="flex items-center h-12 rounded-full cursor-pointer w-fit px-6 bg-white hover:font-bold">
          Booking Now
        </div>
      </div>
    </div>
  );
};

export default Navbar;
