import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-50 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_68%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[700px]"></div>
        <div className="hero-ring size-[900px]"></div>
        <div className="hero-ring size-[1100px]"></div>
        <div className="hero-ring size-[1300px]"></div>
        <HeroOrbit
          size={550}
          rotation={0}
          shouldOrbit={true}
          orbitDuration="60s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          orbitDuration="65s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-30}
          shouldOrbit={true}
          orbitDuration="70s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <StarIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          orbitDuration="75s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <SparkleIcon className="size-5 opacity-20" />
        </HeroOrbit>
        <HeroOrbit
          size={658}
          rotation={-30}
          shouldOrbit={true}
          orbitDuration="78s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <SparkleIcon className="size-6 text-emerald-300/20 " />
        </HeroOrbit>{" "}
        <HeroOrbit
          size={530}
          rotation={165}
          shouldOrbit={true}
          orbitDuration="79s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={560}
          rotation={25}
          shouldOrbit={true}
          orbitDuration="83s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <SparkleIcon className="size-5 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person sitting with laptop"
          />
          <div className="gap-2 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg">
            <div className="relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
            </div>
            <div className="text-lg font-medium">
              Available For New Projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto ">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional user experiences
          </h1>
          <p className="mt-4 text-center text-white/60 capitalize md:text-lg">
            i specialise in transforming design into functional,high-perfomant
            web applications, lets discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex gap-2 items-center border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown classname="size-6" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white text-gray-900 bg-white h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
