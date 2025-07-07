import "./index.css";
import Navbar from "./componets/Navbar";
import { assets } from "./assets/assets";

function App() {
  return (
    <>
      <div className="relative z-0 h-screen overflow-hidden">
        <img
          className="absolute -top-30 -right-70 object-cover"
          src={assets.home_banner_background}
          alt="background"
        />
        <Navbar />
      </div>
    </>
  );
}

export default App;
