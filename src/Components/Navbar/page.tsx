"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="w-[100vw] bg-headerYellow fixed top-0 shadow-md z-50 h-[10vh]">
      <div className="flex flex-row justify-between pt-4 px-4">
        <div className="w-[200px] 2xl:w-[300px]">
          <img src="uniq-space-logo.svg" alt="logo" className="w-full" />
        </div>
        <div className="hidden lg:inline-flex font-black text-bluegrey cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pr-20 mt-3 2xl:mt-7">
          <ul className="hover:text-darkblue hover:cursor-pointer 2xl:text-[25px]">
            <Link href="#home">HOME</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer 2xl:text-[25px]">
            <Link href="#who-we-are">ABOUT US</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer 2xl:text-[25px]">
            <Link href="#what-we-do">PRODUCTS</Link>
          </ul>
          <ul className="hover:text-darkblue hover:cursor-pointer 2xl:text-[25px]">
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
          <ul className="py-2 hover:text-darkblue" onClick={closeMenu}>
            <Link href="#home">HOME</Link>
          </ul>
          <ul className="py-2 hover:text-darkblue" onClick={closeMenu}>
            <Link href="#who-we-are">ABOUT US</Link>
          </ul>
          <ul className="py-2 hover:text-darkblue" onClick={closeMenu}>
            <Link href="#what-we-do">PRODUCTS</Link>
          </ul>
          <ul className="py-2 hover:text-darkblue" onClick={closeMenu}>
            <Link href="#contact-us">CONTACT US</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Page;
