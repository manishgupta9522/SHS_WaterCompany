import React from "react";

const page = () => {
  return (
    <div
      id="contact-us"
      className="w-[100%] bg-slate-50 rounded pt-[10vh] mt-[-10vh] "
    >
      <div className="grid justify-items-center  mr-auto ml-auto pt-[30px]">
        <div className="header lg:text-5xl font-bold text-text ssm:text-3xl">
          GET IN TOUCH
        </div>
      </div>
      <div className="m-[40px] rounded bg-slate-50 xl:h-[600px] ssm:h-[820px] sm:h-[850px] md:h-[850px] shadow-2xl  ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:p-20 gap-20 ssm:p-10">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded xl:text-lg ssm:text-xs"
            placeholder="Enter your Name*"
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded xl:text-lg ssm:text-xs"
            placeholder="Enter your Email*"
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded xl:text-lg ssm:text-xs"
            placeholder="Enter your Phone No*"
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded xl:text-lg ssm:text-xs"
            placeholder="Enter your Subject*"
          />
        </div>
        <div className="grid xl:pl-20 xl:pr-20 xl:p-0 ssm:p-10">
          <textarea
            className="w-full h-32 p-4 xl:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ssm:text-xs"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div className="flex justify-center mt-10 ">
          <button className="text-button bg-bgbutton xl:font-bold py-3 px-10 rounded ssm:text-sm">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
