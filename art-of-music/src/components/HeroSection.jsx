import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
function HeroSection() {
  return (
    <div
      className="bg-black h-auto md:h-[40rem] w-full 
    rounded-md flex flex-col items-center
    justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
      <div className="p-4 relative z-10 w-full text-center ">
        <h1
          className="mt-20 md:mt-0 text-4xl
         md:text-7xl font-bold bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master The Art of Music
        </h1>

        <p
          className="mt-4 text-sm md:text-xl max-w-xl md:max-w-3xl mx-auto bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Discover the path to becoming a skilled musician through our
          comprehensive courses. Whether you're a beginner or looking to refine
          your craft, we offer expert guidance, practical lessons, and
          inspirational content to help you master rhythm, melody, and harmony.
          Unleash your potential and take your musical journey to the next
          level.
        </p>
        <div
          className="mt-4 bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          <Link href={"/courses"}>


            <button className="bg-slate-700 text-white px-4 py-3 rounded-lg shadow-inner shadow-slate-50 hover:shadow-none ">
              <p>Explore Courses</p>
            </button>


          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
