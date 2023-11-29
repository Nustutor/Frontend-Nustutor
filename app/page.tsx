import Course from '@/components/courses'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import SignupHook from '@/components/hook'
import Interface from '@/components/interface'
import Navbar from '@/components/navbar'
import Team from '@/components/team'
import Testimonial from '@/components/testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-start bg-white">    
      <Navbar/>
      <Hero/>
      <Interface/>
      <Testimonial/>
      <Course/>
      <Team/>
      <SignupHook/>
      <Footer/>
      </div>
  )
}
