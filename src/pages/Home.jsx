import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default Home