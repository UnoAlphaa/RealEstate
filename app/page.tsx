import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWork from '@/components/HowItWork'
import Featured from '@/components/Featured'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HowItWork/>
      <Featured/>
      <Services/>
      <AboutUs/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

export default page