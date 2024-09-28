"use client";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const images = [
    { src: "i-1.png" },
    { src: "i-2.jpg" },
    { src: "i-3.png" },
    { src: "i-4.png" },
    { src: "i-5.jpg" },
    { src: "i-6.jpg" },
    { src: "i-7.jpg" },
    { src: "i-8.jpg" },
    { src: "i-9.png" },
    { src: "i-10.jpg" },
    { src: "i-11.jpg" },
    { src: "i-12.jpg" },
    { src: "i-13.jpg" },
    { src: "i-14.jpg" },
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
    <div className="ml-20 mr-20 h-[200px] p-[20px]">
      <div className="logos max-w-full overflow-hidden " ref={logosRef}>
        <div className="logos-slide flex gap-4 object-fill animate-infinite_scroll">
          {images.map((logo, index) => {
            return (
              <div className="flex items-center  shrink-0" key={index}>
                <img src={logo.src} alt="logo" className="w-auto h-20" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
