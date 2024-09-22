import Navbar from "@/Components/Navbar/page";
import AnimationVideo from "@/Components/AnimationVideo/page";
import WhoWeAre from "@/Components/WhoWeAre/page";
import Scroller from "@/Components/Scroller/page";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimationVideo />
      <WhoWeAre />
      <Scroller />
    </>
  );
}
