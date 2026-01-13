import { ABOUT_US_TEXT } from '@/constants'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='container mx-auto pb-10 my-20 border-b'>
        <div className="mb-8 px-4">
            <h2 className='text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-center'>About Us</h2>
            <p className='tracking-tighter text-center py-6 text-md  lg:text-lg lg:pr-20 max-w-4xl mx-auto w-full'>{ABOUT_US_TEXT}</p>
        </div>
        <div className="flex flex-wrap text-center">
            <div className="w-full border-neutral-700 lg:border-r p-6 lg:w-1/2">
                <p className='bg-gradient-to-r from bg-purple-400 via-pink-500 to-purple-800 bg-clip-text
                text-5xl text-transparent lg:text-7xl
                '>10000+</p>
                <p className='my-8 font-medium'>Clients from 2020</p>
            </div>
            <div className="w-full border-neutral-700 p-6 lg:w-1/2">
                <p className='bg-gradient-to-r from bg-green-400 to-green-800 bg-clip-text
                text-5xl text-transparent lg:text-7xl
                '>3000+</p>
                <p className="my-8 font-medium">Properties sold</p>
            </div>

            

        </div>
    </div>
  )
}

export default AboutUs