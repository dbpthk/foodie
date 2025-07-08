import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-white min-h-[150px] py-5 flex flex-col justify-center items-center gap-5 text-xs">
      <div>
        <div className="w-full px-10 flex flex-col sm:flex-row justify-center item-center gap-10">
          <div className="flex flex-col">
            <div>
              <img className="h-6" src={assets.logo} alt="" />
            </div>
            <div className="mt-5 flex gap-4 text-2xl text-gray-600">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="hover:text-blue-400"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-blue-600"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="hover:text-red-600"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="hover:text-blue-500"
                />
              </a>
            </div>
          </div>
          <div>
            <p>Quality</p>
            <p>Help</p>
            <p>Share</p>
            <p>Careers</p>
            <p>Work</p>
            <p>Testimonials</p>
          </div>
          <div>
            <p>244-5333-7782</p>
            <p>hello@foodie.com</p>
            <p>press@foodie.com</p>
            <p>contact@foodie.com</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div>
        <p> © {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
