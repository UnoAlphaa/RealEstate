import AboutUs from "@/components/AboutUs"
import Featured from "@/components/Featured"
import Hero from "@/components/Hero"
import HowItWork from "@/components/HowItWork"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HowItWork/>
      <Featured/>
      <Services/>
      <AboutUs/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home