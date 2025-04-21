import type { ReactNode } from "react";
import Hero from "./Hero";

interface HeaderProps{
  children:ReactNode
}
function Header({children}:HeaderProps){
  
  return (
    <div className="bg-gradient-to-bottom py-10">
        {children}
    </div>
  );
};


export default Header;
