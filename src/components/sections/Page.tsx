import React, { type ReactNode } from 'react'

interface PageProps{
    children:ReactNode
}

const Page = ({children}:PageProps) => {
  return (
    <div className='bg-gradient-to-b from-primary-1500 to-primary-1300'>
        {children}
    
    </div>
  )
}

export default Page