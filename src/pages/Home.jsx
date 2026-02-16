import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import About from '../components/home/About'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Process />
    </>
  )
}

export default Home