import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div
        id="what-we-do"
        className="h-[100vh] bg-neutral-50 p-[20vh] mt-[-10vh]"
      >
        <div className="h-[500px] bg-yellow-400">
          <div className="flex justify-between">
            <div className="font-bold pl-10 pt-10 text-4xl">WHAT WE DO</div>
            <div className="font-bold pr-[195px] pt-20 text-2xl">
              Our Applications
            </div>
          </div>

          <div className="grid grid-cols-2 items-center p-10">
            <div className="">
              SHS provides turn-key water treatment solutions Our Applications
              For various industrial and commercial applications.
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
              -------------------------------------------------------------
            </div>
            <div className="grid grid-cols-2 gap-5 justify-items-center font-black ">
              <ul className="hover:text-bluegrey cursor-pointer">RO</ul>
              <ul className="hover:text-bluegrey cursor-pointer">UF</ul>
              <ul className="hover:text-bluegrey cursor-pointer">UV</ul>
              <ul className="hover:text-bluegrey cursor-pointer">Pre-Fil</ul>
              <ul className="hover:text-bluegrey cursor-pointer">STP</ul>
              <ul className="hover:text-bluegrey cursor-pointer">DM/DI</ul>
              <ul className="hover:text-bluegrey cursor-pointer">MB</ul>
              <ul className="hover:text-bluegrey cursor-pointer">EDI</ul>
              <ul className="hover:text-bluegrey cursor-pointer">PDS</ul>
              <ul className="hover:text-bluegrey cursor-pointer">Softner</ul>
            </div>
          </div>
          <div className="grid justify-items-end mr-[190px] mt-5 ">
            <Link
              href="/work"
              className="hover:text-bluegrey cursor-pointer underline font-bold"
            >
              What We Do (Our Images)
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
