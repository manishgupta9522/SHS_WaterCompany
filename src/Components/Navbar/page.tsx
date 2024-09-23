"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-header Yellow sticky top-0 bg-white shadow-md z-50">
      <div className="flex flex-row justify-between p-4">
        <div className="ml-20">
          <img src="uniq-space-logo.svg" alt="logo" width="200px" />
        </div>
        <div className="hidden lg:inline-flex font-black text-bluegrey cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pr-20 mt-3 ">
          <ul className="hover:text-darkblue hover:cursor-pointer">HOME</ul>
          <ul className="hover:text-darkblue hover:cursor-pointer">ABOUT US</ul>
          <ul className="hover:text-darkblue hover:cursor-pointer">PRODUCTS</ul>
          <ul
            className="hover:text-darkblue hover:cursor-pointer"
            onClick={scrollToContact}
          >
            CONTACT US
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
