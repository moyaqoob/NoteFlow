import React from 'react'
import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import HeroGraphic from "@/public/assets/graphics/HeroGraphic.webp"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] max-xl:grid-cols-2 items-center px-24 py-42 gap-x-18 
    max-xl:gap-x-12 max-xl:px-16 max-xl:py-38">
      {/* Left Column */}
      <div>
        <h1 className="text-primary-50 mb-6 text-6xl font-semibold tracking-tight max-xl:mb-4 max-xl:text-5xl/16 ">
          AI-Powered Notes. Organize and Summarize in Seconds.
        </h1>
        <p className="text-primary-100 text-xl font-light leading-relaxed">
          Let AI organize & summarize your notes, <br />
          saving your time and productivity
        </p>
        <button
          className="flex border rounded-full items-center bg-primary-500
          border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-all
          ease-in-out primary-glow-hover group cursor-pointer gap-x-3 px-8 py-3.5 mt-6
          max-xl:gap-x-2.5 max-xl:px-5 max-xl:py-3 ">
          <p className="text-lg/8 max-xl:text-base/loose">Get Started</p>

          <div className="w-5 max-xl:w-4">
            {/* Line that grows on hover */}
            <ArrowRightLine
              alt="Arrow right line"
              className="stroke-primary-1300 inline -mr-3 opacity-0 w-0 transition-all group-hover:w-3 group-hover:opacity-100"
              width={2.5}
            />

            {/* Arrow Icon */}
            <ArrowRight
              alt="Arrow right Icon"
              className="stroke-primary-1500 relative w-5 inline"
              width={2}
            />
          </div>
        </button>
      </div>

      {/* Right Column */}
      <div className="relative flex justify-center">
        <Image
          src={HeroGraphic}
          alt="Hero graphic note summarizer functionality"
          className="relative max-h-[30rem] object-contain"
        />
      </div>
    </div>
  );
};


export default Hero