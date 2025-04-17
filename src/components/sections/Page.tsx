import React, { type ReactNode } from 'react'

interface PageProps{
    children:ReactNode
}

const Page = ({children}:PageProps) => {
  return (
    <div className='bg-gradient-to-bottom'>
        {children}
    
    </div>
  )
}

export default Page