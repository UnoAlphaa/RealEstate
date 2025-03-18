import { SERVICES_TEXT } from '@/constants'
import Image from 'next/image'


const Services = () => {
  return (
    <div className='mx-auto container my-8 border-b pb-10'>
        <h2 className='text-center mb-20 text-3xl sm:text-4xl lg:text-5xl'>Services</h2>
        <div className="flex flex-wrap">
            <div className="w-full text-center lg:w-1/2">
                <div className="p-6 w-full mx-auto border max-w-lg">
                    <Image
                    className='rounded-xl object-cover'
                    src="/service.jpeg"
                    width={600}
                    height={600}
                    alt='services'
                    />
                </div>
            </div>
            <div className="w-full text-center lg:w-1/2 p-6">
                <h2 className='mt-10 text-5xl lg:text-7xl'>We are
                     <span className='lg:block'>  Availiable in </span> 
                     <span className='font-bold'> 40+ Countries!</span>
                </h2>
                <p className='max-w-xl text-center w-full mx-auto py-6 text-lg tracking-tighter lg:pr-20'>{SERVICES_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default Services