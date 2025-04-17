import React, { type ReactNode } from "react";

interface PageProps{
    children:ReactNode
}

export const Main=({children}: PageProps )=>{
    return(
    <div className="">
        {children}
    </div>)
}


