"use client"
import React from 'react'
import { testimonials as test } from '@/utils/content'
import CaretUp from '@/components/icons/CaretUp'
import TestimonialList from './TestimonialsList'


const Testimonial = () => {
    const [extended,setExtended]  = React.useState(false)
  return (
    <div className='bg-gradient-to-top pt-10 '>
       <div className='m-auto flex max-w-[90rem] flex-col items-center px-24 py-32'>
        <div className='flex items-center flex-col max-w-[51.5rem]'>
            <p className='text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8 '>
                Testimonials
            </p>

            <h1 className='font-bold text-primary-100 text-6xl/tight text-center'>What our AI-powered notetakers have to say</h1>

            <p className='font-light  text-primary-100 px-2 text-xl/10 mr-1 max-w-2xl text-center'>Noteflow has helped 1000's supercharge their productivity 
                With cutting edge AI note taking tool
            </p>
        </div>

       <div className='mb-20 grid grid-cols-3  gap-x-6 pt-10'>
          <TestimonialList testimonials={test.slice(0, extended ? 5 : 2)} />
          <TestimonialList testimonials={test.slice(6, extended ? 11 : 8)} />
          <TestimonialList testimonials={test.slice(10, extended ? 15 : 12)} />
       </div>

       <button
          className="bg-inherit border text-primary-50 group border-primary-50 transition-all font-semibold hover:bg-primary-50 hover:text-primary-1400 px-8 py-3.5 text-lg/8 max-xl:px-7 max-xl:py-3 rounded-full flex items-center gap-2"
          onClick={() => setExtended((curr)=>!curr)}>
          {extended ? "Show less" : "Show more"}

          <CaretUp
            className={`stroke-primary-50 transition-transform duration-300 group-hover:stroke-primary-1300 ${
              extended ? "rotate-0" : "rotate-180"}`} alt={"Arrow up Image"} activeQuestion={"snfk"}/>
       </button>

        </div>
    </div>
  )
}

export default Testimonial