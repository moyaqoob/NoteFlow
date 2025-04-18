import React from 'react'
import type { TestimonialProps } from './TestimonialsList'
import {motion} from "motion/react"
import Star from '@/components/icons/Star';
import Image from 'next/image';

interface TestimonialItemProps{
    test:TestimonialProps
}

const TestimonialItem = ({ test }: TestimonialItemProps) => {
    const {rating} = test;

    const validRating = Math.max(0,Math.min(5,test.rating??0))
    return (
        <motion.li
        className="bg-primary-1300 rounded-2xl px-8 py-10 shadow-lg"
        initial={{ opacity: 0, y: 50 }} // Fade in from below with opacity
        whileInView={{ opacity: 1, y: 0 }} // Transition to full opacity and position
        viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the item is in view
        transition={{
          duration: 0.6, // Smooth animation duration
          ease: "easeOut", // Easing for smooth start and end
        }}>
        <div className="flex gap-x-1 pb-8">
        {Array.from({ length: test.rating ?? 0 }).map((_, i) => (
          <Star alt="Star Rating Icon" className="fill-primary-100" key={i} />
        ))}
        {Array.from({ length: 5 - validRating }).map((_, i) => (
          <Star alt="Star Rating Icon" key={i} className={""}  />
        ))}
      </div>
        <p className='text-primary-50 '>{test.description}</p>
        <div className='flex flex-row items-center gap-x-5 pt-10'>
            <Image src={test.src} alt='Potrait Headshot' className='h-18  w-18 rounded-full' />
            <div className='flex flex-col gap-2 text-primary-50'>
                <p className='text-primary-600'>{test.name}</p>
                <p>{test.title}</p>
            </div>
        </div>
      </motion.li>
    );
  }
export default TestimonialItem