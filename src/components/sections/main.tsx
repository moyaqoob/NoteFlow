import React, { type ReactNode } from "react";

interface PageProps{
    children:ReactNode
}


function main({children}:PageProps){
    return <div>{children}</div>
}


export default main