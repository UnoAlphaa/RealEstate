"use client"
import { FEATURED_PROPERTIES } from '@/constants'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import AnimateOnScroll from './ui/AnimateOnScroll'

const Featured = () => {
  return (
    <div className='container mx-auto py-10 pb-10 border-b border-neutral-200'>
        <AnimateOnScroll>
          <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl mb-8'>
            Featured Properties
          </h2>
        </AnimateOnScroll>
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {FEATURED_PROPERTIES.map((property,index)=>(
                <AnimateOnScroll 
                  key={index} 
                  delay={index * 100}
                  className="p-6 hover:scale-105 hover:shadow-lg"
                >
                    <div className="mb-4 overflow-hidden rounded-lg">
                        <Image 
                          src={property.image}
                          alt={property.name}
                          width={300}
                          height={300}
                          className='rounded-lg object-cover transition-transform duration-300 hover:scale-110'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h3 className="text-lg font-medium">{property.name}</h3>
                        <p className='text-sm text-neutral-500'>${property.price}</p>
                        <div className="flex gap-2 items-center">
                                <StarIcon className='w-4 h-4 fill-amber-300 text-yellow-500' />
                                <p className='text-sm text-neutral-500'>{property.rating}</p>
                                <span className='text-sm'>({property.reviews} reviews)</span>
                        </div>
                    </div>
                </AnimateOnScroll>
            ))}
        </div>
    </div>
  )
}

export default Featured