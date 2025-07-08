const Properties = ({ image, heading, text }) => {
  return (
    <div className="flex bg-white gap-10 rounded-2xl p-5">
      <div className="flex flex-col gap-5 justify-center items-center w-[240px] ">
        <div className="w-[100px]">
          <img src={image} alt="" />
        </div>
        <div className="text-2xl text-center">{heading}</div>
        <div className="text-s text-center">{text}</div>
      </div>
    </div>
  );
};

export default Properties;
