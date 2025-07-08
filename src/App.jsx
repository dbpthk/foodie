import "./index.css";
import Navbar from "./componets/Navbar";
import { assets } from "./assets/assets";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Testimonials from "./page/Testimonials.jsx";
import Bookings from "./page/Booking.jsx";
import Cart from "./page/Cart.jsx";

function App() {
  return (
    <>
      <div className="relative h-screen overflow-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Bookings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
