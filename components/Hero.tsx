"use client"
import { HERO } from "@/constants"
import SearchForm from "./SearchForm"
import AnimateOnScroll from './ui/AnimateOnScroll'

const Hero = () => {
  return (
    <div className="hero flex min-h-screen justify-center items-center">
        <div className="flex max-w-4xl flex-col items-center gap-6 pb-10">
            <div className="space-y-4">
              <AnimateOnScroll>
                <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold">
                  {HERO.title}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-white text-center text-sm md:text-base lg:text-lg max-w-md mx-auto w-full">
                  {HERO.description}
                </p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={400}>
              <SearchForm/>
            </AnimateOnScroll>
        </div>
    </div>
  )
}

export default Hero