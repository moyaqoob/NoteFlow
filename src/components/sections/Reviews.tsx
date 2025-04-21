import React from 'react'
import Image from 'next/image'
import { reviews } from '@/utils/content'

const Reviews = () => {
  return (
    <div className='flex items-center flex-wrap max-w-[90rem] justify-start decoration-none px-24 max-xl:gap-x-3 max-xl:pb-10'>
       <ul className='flex'>
        {reviews.map((review)=>(
          <li key={review.id} className='-mr-4 last:mr-0 list-none '>
                <Image 
                src={review.src} 
                alt={review.alt}
                className='rounded-full w-14 border-primary-100 h-12 max-xl:h-10 '
                />
            </li>
        ))}
        </ul>
        <p className='text-primary-50 text-lg md:text-md pl-5'>
          Trusted by <span className='text-primary-500 font-semibold'>12,435+ </span>productivity junkies</p>
    </div>
  )
}

export default Reviews