import React from 'react'
import { logos } from '@/utils/content'
import Image from 'next/image'
const logo = () => {
  return (
    <div className='text-primary-50'>
        <h1>Organization powered by <span className="font-bold">NoteFlow</span></h1>
        {logos.slice(0, 4).map((logo) => (
            <li key={logo.id}>
                <Image src={logo.src} alt={logo.alt} />
            </li>
        ))}
        {logos.slice(0,4).map((logo)=>{
            return(
                <li key={logo.id}>
                    <Image src={logo.src} alt={logo.alt} />
                </li>
            )
        })}

    </div>
  )
}

export default logo