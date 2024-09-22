"use client";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const images = [
    { src: "i-1.png", text: "Free Qoute" },
    { src: "i-2.png", text: "Designing" },
    { src: "i-3.png", text: "Site Measurement" },
    { src: "i-4.png", text: "Budget Planning" },
    { src: "i-5.png", text: "Design Concept" },
    { src: "i-6.png", text: "Project Management" },
    { src: "i-7.png", text: "Wall Designs & Painting" },
    { src: "i-8.png", text: " Electrical & Plumbing Work" },
    { src: "i-9.png", text: " On-Site Carpentry" },
    { src: "i-10.png", text: " Soft Furnishing" },
  ];
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logos = logosRef.current;

    const animateLogos = () => {
      if (!logos) return;
      const innerlogos = logos.querySelector(".logos-slide");
      if (!innerlogos) return;
      if (innerlogos.getAttribute("data-cloned") === "true") return;
      const innerlogosChildren = Array.from(innerlogos.children);
      innerlogosChildren.forEach((item) => {
        const extendedLogos = item.cloneNode(true) as HTMLElement;
        innerlogos.appendChild(extendedLogos);
        console.log("entered");
      });
      innerlogos.setAttribute("data-cloned", "true");
    };

    animateLogos(); // Start the animation
  }, []);

  return (
    <div className="images m-2 p-3 ">
      <div className="logos max-w-full overflow-hidden " ref={logosRef}>
        <div className="logos-slide flex gap-4 animate-infinite_scroll">
          {images.map((logo, index) => {
            return (
              <div className="flex items-center gap-2 shrink-0" key={index}>
                <img src={logo.src} alt="logo" className="w-auto h-20" />
                <p>{logo.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
