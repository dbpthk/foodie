const Heading = ({ heading, subheading, text, buttonT, linkT, icon }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl  font-sans font-medium">{heading}</h1>
      {subheading && (
        <p className="text-lg text-[#FE9E0D] font-light pt-2">{subheading}</p>
      )}
      <p className="pt-3 text-neutral-900 mt-2">{text}</p>
      <div className=" mt-8 flex flex-row items-center gap-15">
        <div>
          {buttonT && (
            <button className=" px-5 h-12 m:h-15 bg-[#FE9E0D] rounded-full text-white text-s md:text-l hover:text-[#FE9E0D] tracking-wider hover:bg-white hover:border-2 hover:border-[#FE9E0D] cursor-pointer">
              {buttonT}
            </button>
          )}
        </div>

        <div>
          {linkT && icon ? (
            <button className="flex gap-3 justify-center items-center border-l border-b border-t border-[#fe9e0d] px-2 h-12 cursor-pointer hover:bg-[#fe9e0d] hover:text-white">
              <div>{linkT}</div>
              <div>{icon}</div>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Heading;
