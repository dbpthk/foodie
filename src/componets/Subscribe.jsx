import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubs = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div>
      <div className="w-full flex justify-center items-center py-10">
        <form
          onSubmit={handleSubs}
          className="flex flex-col md:flex-row gap-4 items-center bg-white py-4 px-8 rounded shadow-md"
        >
          <label htmlFor="email" className="text-gray-700 font-medium">
            Fresh deals straight to your inbox!
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-300 px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
