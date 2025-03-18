import { TESTIMONIALS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='container pb-10 my-20 border-b  '>
        <div className="mb-8">
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center'>What our Clients Said</h2>
        </div>
        <div className="flex flex-wrap">
            {TESTIMONIALS.map((testimonial, index)=>(
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-6">
                    <div className="roundex-xl p-4 border">
                    <div className="flex items-center">
                        <Image 
                        className='rounded-full border-4 border-neutral-400 mr-4'
                        src={testimonial.image}
                        width={80}
                        height={80}
                        alt={testimonial.name}
                        />

                        <div>
                            <h4 className='w-full'>{testimonial.name}</h4>
                            <span className='text-sm'>{testimonial.instagram}</span>
                        </div>
                    </div>
                    <p className='p-4'>{testimonial.feedback}</p>
                    <p className='text-sm text-neutral-400'>{testimonial.city_country}</p>
                   
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials