"use client"
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [menubar, setMenuBar] = useState(false);
  const toggleBar = ()=> {
    setMenuBar((prev)=>!prev);
  }
  return (
    <nav className='fixed top-2 z-50 w-screen px-4'>
        <div className='container flex justify-between items-center bg-black rounded-lg py-3 px-4'>
          <div className='flex flex-shrink-0 items-center justify-between cursor pointer'>
                <Image className='mr-2'
                src="/logo.png"
                width={60}
                height={30}
                alt='logo'
                />
                <span className='text-white leading-tight text-sm'>RealEs</span>
          </div>
          <div className="hidden md:flex">
            <ul className='flex items-center gap-4'>
                {NAV_LINKS.map((item, index)=>(
                  <li key={index}>
                    <Link href={item.url} className='text-sm text-white hover:text-neutral-500'>
                        {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button className='bg-black text-white cursor-pointer' variant={'outline'}>Sign In</Button>
            <Button className='text-black cursor-pointer' variant={'outline'}>Sign Up</Button>
          </div>
              <div className='flex-col justify-end text-white md:flex lg:hidden'>
                <button onClick={toggleBar}>
                    {menubar ? <X/> : <Menu/>}
                </button>
              </div>
        </div>
        {menubar && (
          <div className="bg-black md:hidden rounded-md">
            <ul className='flex flex-col items-center '>
            {NAV_LINKS.map((item, index)=>(
              <li key={index} className='py-5'>
                  <Link href={item.url} className='text-sm text-white hover:text-neutral-500'>
                      {item.title}
                  </Link>
              </li>
            ))}
            </ul>
            <div className='flex items-center text-center pb-8 justify-center'>
            <Button className='bg-black mr-2 text-white cursor-pointer' variant={'outline'}>Sign In</Button>
            <Button className='text-black cursor-pointer' variant={'outline'}>Sign Up</Button>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar