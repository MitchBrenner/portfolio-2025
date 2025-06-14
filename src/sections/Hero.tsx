import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48">
      <div className="container">
        {/* Image Container */}
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="w-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full" />
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        {/* Title Container */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          {/* Description */}
          <p className="mt-4 text-center text-white/60">
            I am a passionate front-end developer with a focus on creating
            intuitive and engaging user interfaces. My expertise lies in
            transforming design concepts into functional, responsive, and
            accessible web applications.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="">👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
