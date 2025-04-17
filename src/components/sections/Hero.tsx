import React from 'react'
import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import HeroGraphic from "@/public/assets/graphics/HeroGraphic.webp"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='m-auto grid max-w-[90rem]  grid-cols-[5fr_fr] items-center px-24 py-42 gap-x-18 '>
        <div>
            <h1 className='text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tight md:text-5xl min-sm:text-3xl'>AI-Powered Notes. Organize and Summarize in Seconds.</h1>
            <p className='text-primary-100 text-xl/loose font-light'>Let AI organize & summarize your notes, <br/>
                saving your time and productivity
            </p>
            <button className="flex border rounded-full items-center bg-primary-500
             border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-all
              ease-in-out primary-glow-hover group cursor-pointer gap-x-3 px-8 py-3.5 top-3 relative">
                <p className="text-lg/8">Get Started</p>
                
                <div className=" w-5">
                    {/* Line that grows on hover */}
                    <ArrowRightLine 
                    alt="Arrow right line"
                    className="stroke-primary-1300 inline -mr-3 opacity-0 w-0 transition-properties  group-hover:w-3 group-hover:opacity-100"
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

        <div className='relative'>
            <div className='bg-primary-1300 absolute  left-0 right-0 top-0 bottom-0 rounded-full '>
                <Image src={HeroGraphic}
                alt="Hero graphic note summarizer functionality"
                className='relative max-h-[30rem] justify-self-end '
                />
            </div>
        </div>
    </div>
  )
}

export default Hero