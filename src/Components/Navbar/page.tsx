"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-headerYellow fixed top-0 shadow-md z-50 h-[10vh]">
      <div className="flex flex-row justify-between p-4">
        <div className="ml-20">
          <img src="uniq-space-logo.svg" alt="logo" width="200px" />
        </div>
        <div className="hidden lg:inline-flex font-black text-bluegrey cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pr-20 mt-3 ">
          <ul className="hover:text-darkblue hover:cursor-pointer">
            <Link href="#home">HOME</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer">
            <Link href="#who-we-are">ABOUT US</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer">
            <Link href="#what-we-do">PRODUCTS</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer">
            <Link href="#contact-us">CONTACT US</Link>
          </ul>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden text-bluegrey bg-headerYellow font-black p-4">
          <ul className="py-2 hover:text-darkblue">HOME</ul>
          <ul className="py-2 hover:text-darkblue">ABOUT US</ul>
          <ul className="py-2 hover:text-darkblue">PRODUCTS</ul>
          <ul className="py-2 hover:text-darkblue">CONTACT US</ul>
        </div>
      )}
    </header>
  );
};

export default Page;
