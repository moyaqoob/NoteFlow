import { navigationLinks } from "@/utils/content";
import Logo from "@/public/assets/Logo.svg"
import Image from "next/image";

function Navigation() {
    
  return (
    <nav className="text-primary-50 flex m-auto items-center max-w-[90rem] justify-between px-24 text-lg/8 ">
      <a href="#" className="flex items-center gap-x-3 primary-glow">
        <Image src={Logo} alt="Logo"/>
        <p className="text-xl font-bold tracking-tight ">NoteFlow</p>
      </a>

      <ul className="flex gap-2 lg:visible">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.link}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-x-3">
        <button className="border-primary-50 rounded-full transition-properties border-2 hover:bg-primary-50 hover:text-black bg-inherit cursor-pointer box-border
        px-8 py-3.5 font-normal">Login</button>
        <button className="border-primary-500 rounded-full bg-primary-500 
        font-normal hover:bg-primary-50 text-primary-1300 
         px-8 py-3.5 transition-properties primary-glow-hover text-lg/8 hover:primary-glow">Get Started</button>
      </div>
    </nav>
  );
}

export default Navigation;
