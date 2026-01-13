"use client"
import { TESTIMONIALS } from "@/constants"
import Image from "next/image"
import AnimateOnScroll from './ui/AnimateOnScroll'

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 pb-10 border-b">
        <AnimateOnScroll>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-8">
            What Our Clients Say
          </h2>
        </AnimateOnScroll>
        <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial, index)=>(
                <AnimateOnScroll 
                  key={index} 
                  delay={index * 200}
                  className="p-6 border rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:bg-gray-50"
                >
                    <div className="flex items-center">
                        <div className="transition-transform duration-300 hover:scale-110">
                          <Image 
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-neutral-400 mr-4"
                          />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">{testimonial.name}</h4>
                            <span className="text-sm text-neutral-400">{testimonial.instagram}</span>
                        </div>
                    </div>
                    <p className="mt-4 text-neutral-600">{testimonial.feedback}</p>
                    <p className="mt-4 text-sm text-neutral-400">{testimonial.city_country}</p>
                </AnimateOnScroll>
            ))}
        </div>
    </div>
  )
}

export default Testimonials