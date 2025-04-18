import React from 'react'
import { footerCols } from '@/utils/content'
import Image from 'next/image'
import Noteflow from "@/public/assets/Logo.svg"

const Footer = () => {
  return (
    <footer className='bg-gradient-to-bottom'>

     <div className='flex max-w-[90rem] m-auto justify-between px-24 py-32'>
        <div className=''>
            <Image src={Noteflow} alt='find' />
            <p className='text-primary-50 '>NoteFlow</p>
        </div>
        <div className='grid grid-cols-[repeat(4,max-content)] gap-x-24 sm:pt-8'>
            {footerCols.map((col)=>(
                <div key={col.id}>
                    <p className='text-primary-50 mb-6 font-semibold text-2xl/loose '>
                        {col.category}
                    </p>

                    <ul className='flex flex-col gap-y-4'>
                        {col.links.map((link,_)=>(
                            <li className='font-light '>
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