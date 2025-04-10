import type { ReactNode } from "react";
import Hero from "./Hero";

interface HeaderProps{
  children:ReactNode
}
function Header({children}:HeaderProps){
  
  return (
    <div className="bg-gradient-to-b py-10 max-xl:py-8 max-lg:pb-24 max-md:pt-6 max-md:pb-24">
        {children}
     
    </div>
  );
};


export default Header;
