const Heading = ({ heading, text, buttonT }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl  font-sans font-medium tracking-wide leading-10 md:leading-13">
        {heading}
      </h1>
      <p className="pt-3 text-neutral-500 mt-2">{text}</p>
      <button className="mt-5 px-5 h-12 bg-[#FE9E0D] rounded-full text-white md:text-xl hover:text-[#FE9E0D] tracking-wider hover:bg-white hover:border-2 hover:border-[#FE9E0D] cursor-pointer">
        {buttonT}
      </button>
    </div>
  );
};

export default Heading;
