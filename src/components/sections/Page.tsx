import React, { type ReactNode } from 'react'

export interface PageProps{
    children:ReactNode
}

const Page = ({children}:PageProps) => {
  return (
    <div className=''>
        {children}
    
    </div>
  )
}

export default Page