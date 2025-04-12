import React from 'react'
import Image from 'next/image'
import { reviews } from '@/utils/content'

const Reviews = () => {
  return (
    <div className='flex items-center justify-start decoration-none px-24 '>
        {reviews.map((review)=>(
            <li key={review.id} className='-mr-4 last:mr-0 list-none'>
                <Image 
                src={review.src} 
                alt={review.alt}
                className='rounded-full w-14 '
                />
            </li>
        ))}
        <p className='text-primary-50 text-lg md:text-md pl-5'>Trusted by <span className='text-primary-500 font-semibold'>12,435+ </span>productivity junkies</p>
    </div>
  )
}

export default Reviews