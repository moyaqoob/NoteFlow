import React from 'react'
import { footerCols } from '@/utils/content'
import Image from 'next/image'
import Noteflow from "@/public/assets/Logo.svg"

const Footer = () => {
  return (
    <footer className='bg-gradient-to-bottom'>
    <div className='flex flex-col lg:flex-row max-w-[90rem] m-auto justify-between 
    px-4 sm:px-8 lg:px-24 py-16 lg:py-32 lg:gap-0'>
    <div className='lg:w-1/4 flex flex-col '>
        <Image src={Noteflow} alt='find' className='w-16' />
        <p className='text-primary-50'>NoteFlow</p>
    </div>
    <div className='grid grid-cols-[repeat(4,max-content)] gap-x-24 sm:pt-8'>
        {footerCols.map((col) => (
        <div key={col.id}>
            <p className='text-primary-50 mb-6 font-semibold text-2xl/loose'>
            {col.category}
            </p>
            <ul className='flex flex-col gap-2 lg:gap-4'>
            {col.links.map((link, index) => (
                <li key={`${col.id}-${index}`} className='font-light text-sm sm:text-base'>
                <a href="#" className='text-primary-50'>
                    {link}
                </a>
                </li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    </div>
    </footer>
  )
}

export default Footer