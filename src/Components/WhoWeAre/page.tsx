import React from "react";

const page = () => {
  return (
    <div className="w-full bg-body text-white h-[520px] ">
      <div className="flex flex-row justify-between">
        <div className="w-1/2 p-40">
          <div className="text-6xl font-black">WHO ARE WE</div>
          <div className="text-slate-500 pt-7 pl-5">
            SHS is a water treatment company Established in the year 1998. SHS
            is a water treatment company Established in the year 1998.SHS is a
            water treatment company Established in the year 1998.
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 place-items-center  p-40">
          <p className=" text-3xl text-base font-black text-transper cursor-pointer tracking-wider hover:text-white">
            VISSION
          </p>
          <p className="p-6 text-3xl text-base font-black text-transper cursor-pointer tracking-wider hover:text-white">
            MISSION
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
