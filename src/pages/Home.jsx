import React, { useState } from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import ContactPopup from '../components/ContactPopup'

const Home = () => {
  // 1. State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 2. Function to open the popup
  const openContactPopup = () => {
    setIsPopupOpen(true);
  };

  // 3. Function to close the popup
  const closeContactPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* 4. Pass the open function to Hero and other components as needed */}
      <Hero onStartProject={openContactPopup} />
      <About onStartProject={openContactPopup} />
      <Services onStartProject={openContactPopup} />
      <Process onStartProject={openContactPopup} />
      <Contact />

      {/* 5. The Popup Component itself */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={closeContactPopup}
      />
    </>
  )
}

export default Home