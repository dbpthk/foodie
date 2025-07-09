// src/components/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#FE9E0D] text-white rounded-full hover:bg-white hover:text-[#FE9E0D] border-2 border-[#FE9E0D] transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
