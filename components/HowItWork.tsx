import { HOW_IT_WORKS } from '@/constants'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const HowItWork = () => {
  return (
    <div className='container mx-auto my-10 border-b pb-10'>
        <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">{HOW_IT_WORKS.title}</h2>
        <p className='max-w-4xl my-10 text-neutral-800 text-center mx-auto'>{HOW_IT_WORKS.content}</p>
        <div className="work relative h-[540px] rounded-xl">
            <div className="absolute left-0 top-0 h-full overflow-y-hidden p-10 md:p-20">
                {HOW_IT_WORKS.steps.map((step, index)=>(
                    <div key={index}>
                        <div className="flex items-center">
                        <CircleCheckBig className='mr-4 text-green-400'/>
                        <h6 className='font-medium uppercase text-neutral-200'>{step.title}</h6>
                        </div>
                        <p className='my-2 max-w-80 p-2 text-white'>{step.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HowItWork