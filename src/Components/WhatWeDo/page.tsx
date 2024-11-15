import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div
        className="h-[100vh] bg-neutral-50 sm:p-[2vh] md:p-[5vh] xl:p-[10vh] 2xl:p-[10vh]  mt-[-10vh] flex justify-center items-center"
        id="what-we-do"
      >
        <div className="w-full  bg-yellow-400 h-[500px] xxs:h-[650px] xxs:grid-cols-1 xs:h-[650px] grid md:grid-cols-2 xl:grid-cols-2 xs:grid-cols-1 justify-center pt-20 xxs:pt-10">
          <div className="xs:h-[200px]">
            <div className="pl-20 text-4xl xxs:text-2xl font-bold">
              What We Do
            </div>
            <div className="text-sm w-full sm:text-base md:text-lg lg:text-xl xs:p-[30px] md:p-20 lg:p-20 xl:pt-[120px] flex items-center">
              {" "}
              SHS provides turn-key water treatment solutions for various
              industrial and commercial applications. Our solutions include:
              <br />
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center text-2xl xxs:text-xl font-bold ">
              Our Applications
            </div>
            <div className="flex justify-center items-center xs:pt-[10px] md:pt-[70px] lg:pt-[70px] xl:pt-[70px] xxs:text-sm">
              <div className="grid grid-cols-2 gap-4 ">
                {[
                  "RO",
                  "UF",
                  "UV",
                  "Pre-Fil",
                  "STP",
                  "DM/DI",
                  "MB",
                  "EDI",
                  "PDS",
                  "Softner",
                ].map((item) => (
                  <ul key={item} className="hover:text-bluegrey cursor-pointer">
                    {item}
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex mt-20 xxs:mt-1 xs:mt-5 md:mt-[50px] lg:mt-[50px] xl:mt-[50px] justify-center">
              <Link
                href="/work"
                className="hover:text-bluegrey cursor-pointer underline font-bold"
              >
                What We Do (Our Images)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
