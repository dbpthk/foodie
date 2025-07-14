import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [btn, setBtn] = useState("Send Message");
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtn("Message Sent");
    setClicked(true);
    setForm({ email: "", message: "" }); // Clear form
  };

  return (
    <div className="flex justify-center items-center max-w-full pb-20 px-5">
      <div>
        <div className="flex flex-col gap-10 mt-10 items-center justify-around px-4 md:px-12 min-w-[400px] w-full md:w-[700px]">
          <h1 className="text-2xl md:text-3xl font-medium">Contact Us</h1>
          <p className="text-sm md:text-base text-center text-gray-700">
            If you have any questions or comments, feel free to reach out. We’ll
            respond as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            ></textarea>
            <button
              type="submit"
              className={`text-white py-2 px-5 rounded hover:bg-amber-600 cursor-pointer transition ${
                clicked ? "bg-green-900" : "bg-amber-500"
              }`}
            >
              {btn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
