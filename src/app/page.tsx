import Navbar from "@/Components/Navbar/page";
import AnimationVideo from "@/Components/AnimationVideo/page";
import WhoWeAre from "@/Components/WhoWeAre/page";
import Scroller from "@/Components/Scroller/page";
import GetInTouch from "@/Components/GetInTouch/page";
import WhatWeDo from "@/Components/WhatWeDo/page";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <div className="w-[100%] min-h-screen flex flex-col items-center justify-center">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full">
          <AnimationVideo />
        </div>
        <div className="w-full">
          <WhoWeAre />
        </div>
        <div className="w-full">
          <Scroller />
        </div>
        <div className="w-full">
          <WhatWeDo />
        </div>
        <div className="w-full">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
