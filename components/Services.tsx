"use client"
import { SERVICES_TEXT } from "@/constants"
import Image from "next/image"
import AnimateOnScroll from './ui/AnimateOnScroll'

const Services = () => {
  return (
    <div className="container mx-auto my-10 pb-10 border-b border-neutral-200">
        <AnimateOnScroll>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-20">Services</h2>
        </AnimateOnScroll>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2">
            <div className="p-6">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/service.jpeg"
                      alt="services"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover transition-transform duration-700 group-hover:rotate-[360deg]"
                    />
                </div>
            </div>
            <AnimateOnScroll delay={200}>
              <div className="p-4">
                  <h2 className='mt-2 text-5xl lg:text-7xl text-center'>We are
                       <span className='lg:block'>  Availiable in </span> 
                       <span className='font-bold'> 40+ Countries!</span>
                  </h2>
                  <p className="text-lg tracking-tighter text-center">{SERVICES_TEXT}</p>
              </div>
            </AnimateOnScroll>
        </div>
    </div>
  )
}

export default Services