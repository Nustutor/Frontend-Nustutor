import Categories from '@/components/category'
import Course from '@/components/courses'
import Footer from '@/components/footer'
import Hero from '@/components/hero_home'
import HeroNavbar from '@/components/navbar/heroNav'
import React from 'react'

export default function Home() {
    return (
      <div className="flex flex-col justify-start bg-white">  
    <HeroNavbar/>
    <Hero/>
    <Categories/>
    <Course/>
    <Footer/>
      </div>
    )
    }