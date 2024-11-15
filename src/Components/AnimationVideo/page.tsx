import React from "react";

const page = () => {
  return (
    <div id="home" className=" w-full pt-[10vh] mt-[-10vh]">
      <div className="relative w-full h-[100vh]">
        <img
          src="water.gif"
          alt="logo"
          className="w-full absolute z-0 h-full"
        />
        <div className="flex items-center justify-center absolute inset-0 z-10 text-white text-center font-black text-3xl ">
          Water Services from SHS with the Quote
        </div>
      </div>
    </div>
  );
};

export default page;
