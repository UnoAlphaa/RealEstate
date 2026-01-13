"use client"

import Image from "next/image"
import {useState} from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = ()=> {
    setMenuOpen(prev => !prev);
  }
  return (
    <nav className="fixed top-2 z-50 px-4 w-screen">
      <div className=" container bg-black flex items-center justify-between py-3 px-4 rounded">
        <div className="flex items-center flex-shrink-0 cursor-pointer">
          <Image 
          src="/logo.png"
          alt="logo"
          width={60}
          height={30}
          className="mr-2"
          />
          <p className="text-white text-sm sm:hidden">Real-es</p>
        </div>

        <div className="md:hidden justify-end">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
             {menuOpen ? <X / > : <Menu/>}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link,index)=>(
              <li key={index}>
                <Link href={link.url} className="text-white hover:text-gray-400">
                {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-5">
          <Button variant="outline" className="cursor-pointer">Sign In</Button>
          <Button className="cursor-pointer hover:bg-white hover:text-black">Sign Up</Button>
        </div>

       
      </div>
      {menuOpen && (
        <div className="bg-black rounded-sm">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((link,index)=>(
              <li key={index} className="py-5">
                <Link href={link.url} className="text-white hover:text-gray-400">
                {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center justify-center mt-5 pb-10">
            <Button variant="outline" className="cursor-pointer">Sign In</Button>
            <Button className="cursor-pointer hover:bg-white hover:text-black">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar