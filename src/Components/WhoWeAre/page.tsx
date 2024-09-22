import React from "react";

const page = () => {
  return (
    <div className="w-full bg-body text-white h-530 p-40">
      <div className="flex flex-row gap-40 ">
        <div className="w-1/2 grid grid-cols-1">
          <div className="font-black text-3xl pb-7">WHO ARE WE</div>
          <div className="text-slate-500">
            SHS is a water treatment company Established in the year 1998.
          </div>
        </div>
        <div className="w-1/2  grid grid-col-2 place-items-center">
          <p className="cursor-pointer text-transper hover:text-white font-black">
            VISSION
          </p>
          <p className="cursor-pointer text-transper hover:text-white font-black">
            MISSION
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
