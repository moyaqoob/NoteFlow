import React, { type ReactNode } from 'react'

interface PageProps{
    children:ReactNode
}

function Modal({children}:PageProps) {
  return (
    <div>{children}</div>
  )
}

export default Modal