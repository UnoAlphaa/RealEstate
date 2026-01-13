import { HOW_IT_WORKS } from "@/constants"
import { CircleCheckBig } from "lucide-react"
import AnimateOnScroll from './ui/AnimateOnScroll'

const HowItWork = () => {
  return (
    <div className="container mx-auto my-10 pb-10 border-b">
        <AnimateOnScroll>
          <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">{HOW_IT_WORKS.title}</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="max-w-4xl text-neutral-800 my-10 text-center mx-auto">{HOW_IT_WORKS.content}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="work h-[580px] rounded-xl relative">
              <div className="absolute top-2 pl-20 my-10 py-3">
                {HOW_IT_WORKS.steps.map((step, index)=>(
                    <div key={index}>
                        <div className="flex items-center gap-4 py-2">
                            <CircleCheckBig className="text-green-400"/>
                            <h6 className="font-medium uppercase text-neutral-200">{step.title}</h6>
                        </div>
                        <p className="my-2 text-white max-w-80 p-2">{step.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </AnimateOnScroll>
    </div>
  )
}

export default HowItWork